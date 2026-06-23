import { CHARACTERS } from "./catalog";
import type {
  Blendshapes,
  LandmarkMap,
  ZoneReading,
  CharacterResult,
  CharacterAlternative,
  FaceRatios,
  MirrorAnalysisResult,
} from "./types";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function avg(bs: Blendshapes, ...keys: string[]): number {
  const values = keys.map((k) => bs[k] ?? 0);
  return values.reduce((a, b) => a + b, 0) / values.length;
}

// ─── Zone definitions ─────────────────────────────────────────────────────────

const ZONE_ACTIVE_DESCRIPTIONS: Record<string, string> = {
  frunte: "o urmă fină de concentrare sau căutare a minții",
  ochi: "o atenție orientată puternic spre exterior sau interior",
  maxilar: "o urmă fină de control, reținere sau pregătire interioară",
  buze: "o emoție care caută expresie sau formă",
};

const ZONE_GENITIVE: Record<string, string> = {
  frunte: "frunții",
  ochi: "ochilor",
  maxilar: "maxilarului",
  buze: "buzelor",
};

interface ZoneConfig {
  key: string;
  name: string;
  interpret(bs: Blendshapes): Omit<ZoneReading, "key" | "name">;
}

const ZONES_CONFIG: ZoneConfig[] = [
  {
    key: "frunte",
    name: "Frunte",
    interpret(bs) {
      const tension = avg(bs, "browDownLeft", "browDownRight");
      const raise = bs.browInnerUp ?? 0;
      if (tension > 0.4) {
        return {
          reading:
            "Fruntea pare ușor activă, ca și cum mintea ține o direcție sau caută să clarifice ceva. Poți observa dacă există o presiune subtilă în această zonă.",
          intensity: "moderate",
          practiceSuggestion: { label: "Observarea frunții", path: "/breath" },
          introspectionQuestion: "Ce direcție caută mintea să clarifice în acest moment?",
        };
      }
      if (raise > 0.35) {
        return {
          reading:
            "Sprâncenele par ușor ridicate — aceasta poate sugera curiozitate, surpriză sau o deschidere față de ceva nou.",
          intensity: "mild",
          practiceSuggestion: { label: "Respirație lentă", path: "/breath" },
          introspectionQuestion: "Ce anume îți captează atenția sau te surprinde chiar acum?",
        };
      }
      return {
        reading:
          "Fruntea pare așezată. Zona gândirii se arată calmă, ca un spațiu în care claritatea poate respira.",
        intensity: "calm",
        practiceSuggestion: null,
        introspectionQuestion: null,
      };
    },
  },
  {
    key: "ochi",
    name: "Ochi",
    interpret(bs) {
      const squint = avg(bs, "eyeSquintLeft", "eyeSquintRight");
      const wide = avg(bs, "eyeWideLeft", "eyeWideRight");
      if (squint > 0.45) {
        return {
          reading:
            "Zona ochilor pare activă. Aceasta poate sugera vigilență, căutare sau o atenție orientată puternic spre exterior.",
          intensity: "moderate",
          practiceSuggestion: { label: "Privire blândă", path: "/meditation" },
          introspectionQuestion: "Ce cauți să vezi sau să înțelegi chiar acum?",
        };
      }
      if (wide > 0.45) {
        return {
          reading:
            "Ochii par larg deschiși — poate sugera o stare de alertă, uimire sau receptivitate față de ceea ce se întâmplă.",
          intensity: "mild",
          practiceSuggestion: { label: "Meditație de prezență", path: "/meditation" },
          introspectionQuestion: "Ce te ține prezent și deschis în acest moment?",
        };
      }
      return {
        reading: "Privirea pare calmă și odihnită. Ochii pot reflecta o atenție stabilă, prezentă, fără grabă.",
        intensity: "calm",
        practiceSuggestion: null,
        introspectionQuestion: null,
      };
    },
  },
  {
    key: "maxilar",
    name: "Maxilar",
    interpret(bs) {
      const jawOpen = bs.jawOpen ?? 0;
      const mouthClose = bs.mouthClose ?? 0;
      if (mouthClose > 0.6 && jawOpen < 0.15) {
        return {
          reading:
            "Zona maxilarului pare ușor activă. Aceasta poate sugera control, reținere sau o forță interioară ținută în formă.",
          intensity: "moderate",
          practiceSuggestion: { label: "Relaxarea maxilarului", path: "/breath" },
          introspectionQuestion: "Ce anume simți că ții în tine în acest moment?",
        };
      }
      if (jawOpen > 0.3) {
        return {
          reading:
            "Maxilarul pare așezat. Această zonă poate reflecta o disponibilitate mai mare de a lăsa lucrurile să curgă.",
          intensity: "calm",
          practiceSuggestion: null,
          introspectionQuestion: null,
        };
      }
      return {
        reading:
          "Zona maxilarului pare ușor activă. Poți observa dacă există o urmă fină de reținere sau pregătire interioară.",
        intensity: "mild",
        practiceSuggestion: { label: "Respirație de destindere", path: "/breath" },
        introspectionQuestion: "Există ceva ce aștepți sau te pregătești să faci?",
      };
    },
  },
  {
    key: "buze",
    name: "Buze",
    interpret(bs) {
      const smile = avg(bs, "mouthSmileLeft", "mouthSmileRight");
      const frown = avg(bs, "mouthFrownLeft", "mouthFrownRight");
      if (smile > 0.3) {
        return {
          reading:
            "Buzele par așezate, cu o deschidere subtilă în expresie. Poți observa dacă există un impuls de comunicare, apropiere sau destindere.",
          intensity: "calm",
          practiceSuggestion: null,
          introspectionQuestion: null,
        };
      }
      if (frown > 0.3) {
        return {
          reading:
            "Zona buzelor pare activă. Aceasta poate sugera o emoție ținută aproape de suprafață sau un cuvânt care caută formă.",
          intensity: "moderate",
          practiceSuggestion: { label: "Tăcere conștientă", path: "/journal" },
          introspectionQuestion: "Ce expresie sau cuvânt se pregătește să apară?",
        };
      }
      return {
        reading:
          "Expresia buzelor pare neutră și așezată. Comunicarea interioară pare păstrată într-un spațiu calm.",
        intensity: "calm",
        practiceSuggestion: null,
        introspectionQuestion: null,
      };
    },
  },
];

function computeOverall(zones: ZoneReading[]): { overallTitle: string; overallText: string } {
  const moderate = zones.filter((z) => z.intensity === "moderate");
  const mild = zones.filter((z) => z.intensity === "mild");

  if (moderate.length === 0 && mild.length === 0) {
    return {
      overallTitle: "Prezență așezată",
      overallText:
        "Chipul tău reflectă o stare de liniște și prezență. Poți folosi acest moment ca pe un punct de pornire pentru practica ta.",
    };
  }
  if (moderate.length === 0 && mild.length === 1) {
    const z = mild[0];
    const desc = ZONE_ACTIVE_DESCRIPTIONS[z.key] || "o activare subtilă";
    return {
      overallTitle: "Prezență așezată",
      overallText: `Chipul tău exprimă o stare generală așezată, cu o activare subtilă în zona ${ZONE_GENITIVE[z.key] || z.name.toLowerCase()}. Aceasta poate sugera ${desc}.`,
    };
  }
  if (moderate.length === 1 && mild.length <= 1) {
    const z = moderate[0];
    const desc = ZONE_ACTIVE_DESCRIPTIONS[z.key] || "o activare vizibilă";
    return {
      overallTitle: "Prezență ușor activă",
      overallText: `Chipul tău exprimă o stare generală relativ calmă, cu o activare mai pronunțată în zona ${ZONE_GENITIVE[z.key] || z.name.toLowerCase()}. Aceasta poate sugera ${desc}.`,
    };
  }
  if (moderate.length >= 2) {
    return {
      overallTitle: "Expresie intensă",
      overallText:
        "Mai multe zone ale feței par active în același timp. Aceasta poate reflecta o stare de concentrare intensă, emoție complexă sau tensiune pe care o porți.",
    };
  }
  return {
    overallTitle: "Expresie activă",
    overallText:
      "Chipul tău reflectă o stare de activare moderată. Poți observa cu blândețe ce zone se activează și ce te invită să explorezi.",
  };
}

function computeMood(zones: ZoneReading[]): number {
  const tenseCount = zones.filter((z) => z.intensity === "moderate").length;
  if (tenseCount === 0) return 4;
  if (tenseCount === 1) return 3;
  if (tenseCount === 2) return 2;
  return 1;
}

function computeEnergy(bs: Blendshapes): number {
  const eyeOpen = avg(bs, "eyeWideLeft", "eyeWideRight");
  const browUp = bs.browInnerUp ?? 0;
  const signal = (eyeOpen + browUp) / 2;
  if (signal > 0.4) return 4;
  if (signal > 0.25) return 3;
  return 2;
}

function pickIntrospectionQuestion(zones: ZoneReading[]): string {
  const dominant =
    zones.find((z) => z.intensity === "moderate") ||
    zones.find((z) => z.intensity === "mild");
  return dominant?.introspectionQuestion ?? "Ce simți în corp când observi această stare de liniște?";
}

// ─── Face shape ───────────────────────────────────────────────────────────────

const FACE_SHAPE_READINGS: Record<string, { title: string; text: string }> = {
  oval: {
    title: "Oval",
    text: "Structura feței tale exprimă echilibru și fluiditate. Proporțiile ovoide sunt asociate cu o capacitate naturală de adaptare și deschidere.",
  },
  round: {
    title: "Rotund",
    text: "Structura feței tale exprimă căldură și accesibilitate. Liniile rotunde sunt asociate cu empatie, generozitate și o prezență primitoare.",
  },
  square: {
    title: "Pătrat",
    text: "Structura feței tale exprimă forță și determinare. Contururile ferme sunt asociate cu o voință puternică și o prezență stabilă.",
  },
  long: {
    title: "Alungit",
    text: "Structura feței tale exprimă rafinament și contemplație. Proporțiile alungite sunt asociate cu o gândire profundă și o sensibilitate aparte.",
  },
  heart: {
    title: "Inimă",
    text: "Structura feței tale exprimă deschidere și creativitate. Fruntea generoasă este asociată cu o imaginație vie și o intuiție subtilă.",
  },
  triangle: {
    title: "Triunghi",
    text: "Structura feței tale exprimă soliditate și enduranță. Baza largă este asociată cu o stabilitate interioară și o prezență ancorată.",
  },
  diamond: {
    title: "Diamant",
    text: "Structura feței tale exprimă caracter și distinctivitate. Pomeții proeminenți sunt asociați cu o personalitate vie și o prezență memorabilă.",
  },
  balanced: {
    title: "Armonios",
    text: "Structura feței tale exprimă armonie și proporție. Echilibrul formelor este asociat cu o natură diplomată și o capacitate de a integra perspective diverse.",
  },
};

function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

function computeRatios(landmarks: LandmarkMap): FaceRatios {
  const lm = landmarks;

  function dist(a: number, b: number): number {
    const dx = (lm[a]?.x ?? 0) - (lm[b]?.x ?? 0);
    const dy = (lm[a]?.y ?? 0) - (lm[b]?.y ?? 0);
    return Math.sqrt(dx * dx + dy * dy);
  }

  const faceHeight = dist(10, 152);
  const faceWidth = dist(234, 454) || 0.001;
  const foreheadWidth = dist(21, 251);
  const jawWidth = dist(172, 397);
  const cheekWidth = dist(116, 345);
  const mouthWidth = dist(61, 291);
  const eyeDistance = dist(133, 362);
  const upperFaceHeight = dist(10, 6);
  const foreheadProportion = upperFaceHeight / (faceHeight || 0.001);

  const eyeYDiff = Math.abs((lm[33]?.y ?? 0) - (lm[263]?.y ?? 0)) / faceHeight;
  const browYDiff = Math.abs((lm[55]?.y ?? 0) - (lm[285]?.y ?? 0)) / faceHeight;
  const jawYDiff = Math.abs((lm[172]?.y ?? 0) - (lm[397]?.y ?? 0)) / faceHeight;
  const avgAsymmetry = (eyeYDiff + browYDiff + jawYDiff) / 3;
  const rawSymmetry = 1 - avgAsymmetry * 20;

  return {
    faceAspectRatio: clamp(faceHeight / faceWidth, 1.05, 1.75),
    foreheadRatio: clamp(foreheadWidth / faceWidth, 0.65, 1.1),
    jawWidthRatio: clamp(jawWidth / faceWidth, 0.55, 1.05),
    cheekWidthRatio: clamp(cheekWidth / faceWidth, 0.6, 1.05),
    mouthWidthRatio: clamp(mouthWidth / faceWidth, 0.28, 0.62),
    eyeDistanceRatio: clamp(eyeDistance / faceWidth, 0.18, 0.45),
    foreheadProportion: clamp(foreheadProportion, 0.18, 0.48),
    facialSymmetryScore: clamp(rawSymmetry, 0.3, 1.0),
  };
}

function determineFaceShape(ratios: FaceRatios): string {
  const { faceAspectRatio: ar, foreheadRatio: fr, jawWidthRatio: jw, cheekWidthRatio: cw } = ratios;
  const scores: Record<string, number> = {
    oval: 0, round: 0, square: 0, long: 0, heart: 0, triangle: 0, diamond: 0, balanced: 0,
  };

  if (ar > 1.55) scores.long += 3; else if (ar > 1.45) scores.long += 1;
  if (ar < 1.15) scores.round += 3; else if (ar < 1.25) scores.round += 1;
  if (jw > 0.85 && ar < 1.4) scores.square += 3; else if (jw > 0.78 && ar < 1.45) scores.square += 1;
  if (fr > 0.9 && jw < 0.65) scores.heart += 3; else if (fr > 0.85 && jw < 0.72) scores.heart += 1;
  if (fr < 0.75 && jw > 0.82) scores.triangle += 3; else if (fr < 0.80 && jw > 0.78) scores.triangle += 1;
  if (cw > fr + 0.05 && cw > jw + 0.05) scores.diamond += 3; else if (cw > fr && cw > jw) scores.diamond += 1;
  if (ar >= 1.3 && ar <= 1.5 && fr > jw + 0.08) scores.oval += 3; else if (ar >= 1.2 && ar <= 1.55 && fr > jw) scores.oval += 1;
  const isBalanced = ar >= 1.2 && ar <= 1.45 && Math.abs(fr - jw) < 0.1 && cw >= 0.75 && cw <= 0.95;
  if (isBalanced) scores.balanced += 2;

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

// ─── Character scoring ────────────────────────────────────────────────────────

type ScoreMap = Record<string, number>;

function scoreStructuralCharacters(ratios: FaceRatios): ScoreMap {
  const { faceAspectRatio: ar, foreheadRatio: fr, jawWidthRatio: jw, cheekWidthRatio: cw,
    mouthWidthRatio: mw, eyeDistanceRatio: ed, facialSymmetryScore: sym, foreheadProportion: fp } = ratios;

  return {
    observatorul: sym * 3.5 + (ar > 1.25 && ar < 1.52 ? 1.5 : 0) + (sym < 0.55 ? -2 : sym < 0.65 ? -0.5 : 0),
    conducatorul: jw * 3.5 + (jw > 0.84 ? 2 : jw > 0.76 ? 1 : 0) + (ar < 1.32 ? 1.5 : ar > 1.52 ? -1.5 : 0) + (sym > 0.62 ? 0.5 : 0),
    protectorul: (jw > 0.80 ? 2.5 : jw > 0.72 ? 1.5 : 0) + (ar < 1.28 ? 2.5 : ar < 1.40 ? 1 : ar > 1.52 ? -2 : 0) + (cw > 0.87 ? 1.5 : cw > 0.80 ? 0.75 : 0) + (fr < 0.85 ? 0.5 : 0),
    cautatorul: (ar > 1.52 ? 4 : ar > 1.42 ? 2.5 : ar > 1.32 ? 1 : 0) + (jw < 0.72 ? 1.5 : jw > 0.86 ? -1.5 : 0),
    creatorul: (fr > cw + 0.05 ? 2.5 : fr > jw + 0.05 ? 1.5 : 0) + (fp > 0.36 ? 1 : 0) + (mw > 0.46 ? 1 : 0) + (cw > jw + 0.10 ? 1 : 0),
    luptatorul: (jw > 0.88 ? 5 : jw > 0.82 ? 3 : jw > 0.75 ? 1.5 : 0) + (ar < 1.38 ? 1 : 0) + (jw < 0.70 ? -2 : 0),
    diplomatul: sym * 3 + (Math.abs(fr - jw) < 0.08 ? 2.5 : Math.abs(fr - jw) < 0.14 ? 1 : -0.5) + (ar > 1.22 && ar < 1.52 ? 1 : 0) + (sym < 0.58 ? -2 : 0),
    interiorizatul: (ar > 1.42 ? 2.5 : ar > 1.32 ? 1.5 : 0) + (mw < 0.40 ? 2 : mw < 0.46 ? 0.5 : -0.5) + (jw < 0.76 ? 1 : jw > 0.86 ? -1 : 0),
    vizionarul: (fp > 0.40 ? 4 : fp > 0.35 ? 2.5 : fp > 0.30 ? 1 : 0) + (ed > 0.33 ? 1.5 : ed > 0.28 ? 0.5 : 0) + (fr > 0.90 ? 1 : 0) + (fp < 0.25 ? -2 : 0),
    ingrijitorul: (ar < 1.28 ? 3 : ar < 1.40 ? 1.5 : ar > 1.52 ? -1.5 : 0) + (cw > 0.87 ? 2 : cw > 0.80 ? 1 : 0) + (jw > 0.72 && jw < 0.88 ? 0.5 : 0),
    strategul: (fp > 0.38 ? 3 : fp > 0.32 ? 2 : fp > 0.27 ? 0.75 : 0) + (sym > 0.70 ? 2 : sym > 0.60 ? 1 : 0) + (ar > 1.28 && ar < 1.56 ? 1 : 0) + (jw > 0.90 ? -2 : 0),
    senzitivul: (jw < 0.68 ? 3.5 : jw < 0.74 ? 2 : jw < 0.80 ? 0.75 : jw > 0.86 ? -2 : 0) + (cw > 0.80 ? 1.5 : cw > 0.74 ? 0.75 : 0) + (ar < 1.38 ? 0.75 : 0),
  };
}

function scoreExpressionCharacters(bs: Blendshapes): ScoreMap {
  const smile = avg(bs, "mouthSmileLeft", "mouthSmileRight");
  const browDown = avg(bs, "browDownLeft", "browDownRight");
  const browUp = bs.browInnerUp ?? 0;
  const eyeSquint = avg(bs, "eyeSquintLeft", "eyeSquintRight");
  const eyeWide = avg(bs, "eyeWideLeft", "eyeWideRight");
  const jawOpen = bs.jawOpen ?? 0;
  const mouthClose = bs.mouthClose ?? 0;

  return {
    observatorul: eyeSquint > 0.15 ? 1 : 0,
    conducatorul: browDown > 0.2 ? 1 : 0,
    protectorul: mouthClose > 0.4 ? 1 : 0,
    cautatorul: (browUp > 0.25 ? 1.5 : browUp > 0.15 ? 0.75 : 0) + (eyeWide > 0.3 ? 1 : 0),
    creatorul: (smile > 0.2 ? 1 : 0) + (browUp > 0.15 ? 0.5 : 0),
    luptatorul: (browDown > 0.3 ? 1.5 : browDown > 0.15 ? 0.75 : 0) + (mouthClose > 0.5 ? 1 : 0),
    diplomatul: smile > 0.1 && smile < 0.4 ? 0.5 : 0,
    interiorizatul: (eyeSquint > 0.25 ? 1.5 : eyeSquint > 0.1 ? 0.75 : 0) + (jawOpen < 0.1 ? 1 : 0),
    vizionarul: (eyeWide > 0.25 ? 1.5 : eyeWide > 0.1 ? 0.5 : 0) + (browUp > 0.2 ? 1 : 0),
    ingrijitorul: (smile > 0.25 ? 2 : smile > 0.1 ? 1 : 0) + (jawOpen > 0.1 ? 0.5 : 0),
    strategul: (eyeSquint > 0.1 && eyeSquint < 0.35 ? 1.5 : 0) + (browDown > 0.1 && browDown < 0.35 ? 1 : 0),
    senzitivul: (eyeWide > 0.2 ? 2 : eyeWide > 0.1 ? 1 : 0) + (browUp > 0.2 ? 1.5 : browUp > 0.1 ? 0.75 : 0) + (smile > 0.08 && smile < 0.4 ? 0.5 : 0),
  };
}

function combineCharacterScores(structural: ScoreMap, expression: ScoreMap, sw = 0.8, ew = 0.2): ScoreMap {
  const keys = Object.keys(structural);
  const totalS = keys.reduce((s, k) => s + (structural[k] || 0), 0) || 1;
  const totalE = keys.reduce((s, k) => s + (expression[k] || 0), 0) || 1;
  const combined: ScoreMap = {};
  keys.forEach((k) => {
    combined[k] = ((structural[k] || 0) / totalS) * sw + ((expression[k] || 0) / totalE) * ew;
  });
  return combined;
}

function getTop3(scores: ScoreMap): CharacterAlternative[] {
  const total = Object.values(scores).reduce((s, v) => s + v, 0) || 1;
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key, score]) => ({
      key,
      title: CHARACTERS[key]?.title ?? key,
      confidence: Math.round((score / total) * 100),
    }));
}

function buildSynthesisText(structChar: CharacterResult | null, exprProfile: CharacterResult | null): string | null {
  if (!structChar) return null;
  if (!exprProfile || structChar.key === exprProfile.key) {
    return structChar.observedText ?? null;
  }
  const nuance = exprProfile.subtitle?.toLowerCase() ?? exprProfile.title.toLowerCase();
  return (
    `Structura chipului poate sugera ${structChar.title}, iar expresia de acum adaugă o nuanță de ${exprProfile.title.toLowerCase()}. ` +
    `Citirea finală indică o energie de ${structChar.title.toLowerCase()} care se exprimă, în acest moment, cu o coloratură de ${nuance}.`
  );
}

function selectTopCharacter(scores: ScoreMap): CharacterResult | null {
  const entries = Object.entries(scores);
  const total = entries.reduce((s, [, v]) => s + v, 0);
  if (total === 0) return null;
  const [topKey, topScore] = entries.sort((a, b) => b[1] - a[1])[0];
  const confidence = Math.round((topScore / total) * 100);
  const char = CHARACTERS[topKey];
  if (!char) return { key: topKey, title: topKey, confidence };
  return {
    key: char.key,
    title: char.title,
    subtitle: char.subtitle,
    shortText: char.shortText,
    observedText: char.observedText,
    gift: char.gift,
    shadow: char.shadow,
    innerNeed: char.innerNeed,
    eqydoPath: char.eqydoPath,
    faceSignals: char.faceSignals,
    recommendedPractices: char.recommendedPractices,
    introspectionQuestion: char.introspectionQuestion,
    transformationDirection: char.transformationDirection,
    confidence,
    practiceSuggestion: char.recommendedPractices?.[0]
      ? { label: char.recommendedPractices[0], path: "/breath" }
      : null,
  };
}

// ─── Public API ───────────────────────────────────────────────────────────────

export function analyzeMirrorSessionV2({
  blendshapes,
  landmarks,
}: {
  blendshapes: Blendshapes;
  landmarks: LandmarkMap | null;
}): MirrorAnalysisResult | null {
  if (!blendshapes || Object.keys(blendshapes).length === 0) return null;

  const zones: ZoneReading[] = ZONES_CONFIG.map((zConf) => ({
    key: zConf.key,
    name: zConf.name,
    ...zConf.interpret(blendshapes),
  }));

  const { overallTitle, overallText } = computeOverall(zones);

  const expressionScores = scoreExpressionCharacters(blendshapes);
  const expressionEntries = Object.entries(expressionScores).sort((a, b) => b[1] - a[1]);
  const totalExpression = expressionEntries.reduce((s, [, v]) => s + v, 0) || 1;
  const [topExpKey, topExpScore] = expressionEntries[0] ?? [];
  const topExpChar = topExpKey ? CHARACTERS[topExpKey] : null;
  const dominantExpressionZone =
    zones.find((z) => z.intensity === "moderate")?.key ??
    zones.find((z) => z.intensity === "mild")?.key ?? null;

  const expressionProfile: CharacterResult | null = topExpChar
    ? {
        key: topExpChar.key,
        title: topExpChar.title,
        subtitle: topExpChar.subtitle,
        observedText: topExpChar.observedText,
        confidence: Math.round(((topExpScore || 0) / totalExpression) * 100),
        dominantExpressionZone,
        alternatives: getTop3(expressionScores),
      }
    : null;

  let faceShape: string | null = null;
  let faceShapeReading = null;
  let structuralCharacter: CharacterResult | null = null;
  let expressiveNuance: CharacterResult | null = null;
  let predominantCharacter: CharacterResult | null = null;
  let synthesisText: string | null = null;

  if (landmarks && Object.keys(landmarks).length >= 20) {
    const ratios = computeRatios(landmarks);
    faceShape = determineFaceShape(ratios);
    faceShapeReading = FACE_SHAPE_READINGS[faceShape] ?? null;

    const structuralScores = scoreStructuralCharacters(ratios);
    const combinedScores = combineCharacterScores(structuralScores, expressionScores);

    const structuralEntries = Object.entries(structuralScores).sort((a, b) => b[1] - a[1]);
    const totalStructural = structuralEntries.reduce((s, [, v]) => s + (v > 0 ? v : 0), 0) || 1;
    const [topSKey, topSScore] = structuralEntries[0] ?? [];
    const topSNorm = Math.max(0, topSScore || 0) / totalStructural;
    const topSChar = topSKey ? CHARACTERS[topSKey] : null;

    structuralCharacter = topSChar
      ? {
          key: topSChar.key,
          title: topSChar.title,
          subtitle: topSChar.subtitle,
          observedText: topSChar.observedText,
          confidence: Math.round(topSNorm * 100),
          alternatives: getTop3(structuralScores),
        }
      : topSKey
      ? { key: topSKey, title: topSKey, confidence: Math.round(topSNorm * 100), alternatives: getTop3(structuralScores) }
      : null;

    const predominantResult = selectTopCharacter(structuralScores);
    predominantCharacter = predominantResult
      ? { ...predominantResult, source: "structural", alternatives: getTop3(combinedScores) }
      : null;

    expressiveNuance =
      expressionProfile && expressionProfile.key !== structuralCharacter?.key
        ? expressionProfile
        : null;

    synthesisText = buildSynthesisText(structuralCharacter, expressionProfile);
  } else {
    const topResult = selectTopCharacter(expressionScores);
    predominantCharacter = topResult
      ? { ...topResult, source: "expression", alternatives: getTop3(expressionScores) }
      : null;
    synthesisText = predominantCharacter?.observedText ?? null;
  }

  const introspectionQuestion =
    predominantCharacter?.introspectionQuestion ?? pickIntrospectionQuestion(zones);

  return {
    overallTitle,
    overallText,
    introspectionQuestion,
    zones,
    suggestedMood: computeMood(zones),
    suggestedEnergyLevel: computeEnergy(blendshapes),
    faceShape,
    faceShapeReading,
    structuralCharacter,
    expressionProfile,
    expressiveNuance,
    predominantCharacter,
    synthesisText,
  };
}
