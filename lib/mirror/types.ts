export interface Landmark {
  x: number;
  y: number;
  z: number;
}

export type LandmarkMap = Record<number, Landmark>;

export type Blendshapes = Record<string, number>;

export type ZoneIntensity = "calm" | "mild" | "moderate";

export interface ZoneReading {
  key: string;
  name: string;
  reading: string;
  intensity: ZoneIntensity;
  practiceSuggestion: { label: string; path: string } | null;
  introspectionQuestion: string | null;
}

export interface CharacterAlternative {
  key: string;
  title: string;
  confidence: number;
}

export interface CharacterResult {
  key: string;
  title: string;
  subtitle?: string;
  shortText?: string;
  observedText?: string;
  gift?: string;
  shadow?: string;
  innerNeed?: string;
  eqydoPath?: string;
  faceSignals?: string[];
  recommendedPractices?: string[];
  introspectionQuestion?: string;
  transformationDirection?: string;
  confidence: number;
  source?: "structural" | "expression";
  alternatives?: CharacterAlternative[];
  practiceSuggestion?: { label: string; path: string } | null;
  dominantExpressionZone?: string | null;
}

export interface FaceShapeReading {
  title: string;
  text: string;
}

export interface FaceRatios {
  faceAspectRatio: number;
  foreheadRatio: number;
  jawWidthRatio: number;
  cheekWidthRatio: number;
  mouthWidthRatio: number;
  eyeDistanceRatio: number;
  foreheadProportion: number;
  facialSymmetryScore: number;
}

export interface MirrorAnalysisResult {
  overallTitle: string;
  overallText: string;
  introspectionQuestion: string;
  zones: ZoneReading[];
  suggestedMood: number;
  suggestedEnergyLevel: number;
  faceShape: string | null;
  faceShapeReading: FaceShapeReading | null;
  structuralCharacter: CharacterResult | null;
  expressionProfile: CharacterResult | null;
  expressiveNuance: CharacterResult | null;
  predominantCharacter: CharacterResult | null;
  synthesisText: string | null;
}

export interface MirrorCapture {
  blendshapes: Blendshapes;
  landmarks: LandmarkMap | null;
  captureQuality: {
    quality: "good" | "warning";
    hints: string[];
    faceSizeCategory: string;
    faceCenterCategory: string;
    headTiltCategory: string;
    deviceType: string;
  } | null;
}

export interface Character {
  key: string;
  title: string;
  subtitle: string;
  shortText: string;
  observedText: string;
  gift: string;
  shadow: string;
  innerNeed: string;
  eqydoPath: string;
  faceSignals: string[];
  recommendedPractices: string[];
  introspectionQuestion: string;
  transformationDirection: string;
}

export interface Direction {
  key: string;
  title: string;
  shortText: string;
  recommendedPractice: string;
  practiceText: string;
  introspectionQuestion: string;
}

export interface AlignedRecommendation {
  title: string;
  text: string;
  recommendedPractice: string | null;
  practiceText: string | null;
  introspectionQuestion: string | null;
}
