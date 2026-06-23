import type { CharacterResult, Direction, AlignedRecommendation } from "./types";

const COMBINATION_INSIGHTS: Record<string, { title: string; insight: string; practiceFocus: string; question: string }> = {
  "interiorizatul|expresie": { title: "Profunzimea caută formă", insight: "Oglinda observă o energie care simte adânc și arată selectiv. Direcția expresiei poate deschide o cale prin care trăirea interioară primește formă, pas cu pas, fără grabă.", practiceFocus: "Rostirea unui singur cuvânt simțit, urmată de respirație în piept.", question: "Ce parte din tine poate primi formă printr-un gest simplu?" },
  "interiorizatul|incredere": { title: "Intimitatea caută sol", insight: "Oglinda observă o lume interioară bogată și selectivă. Încrederea nu cere expansiune, ci adâncime — un sol interior care susține profunzimea fără ca aceasta să se piardă.", practiceFocus: "Simțirea spatelui, a coloanei și a contactului cu solul.", question: "Unde în corp există deja o stabilitate pe care o poți simți?" },
  "interiorizatul|prezenta": { title: "Adâncimea se întoarce în clipă", insight: "Oglinda observă o energie orientată spre interior. Prezența o poate ancora: nu în afară, ci în corp — în respirație, în senzație, în ceea ce este deja viu acum.", practiceFocus: "Cinci respirații lente cu atenție deplină la senzațiile fizice directe.", question: "Ce simți în corp chiar în această clipă, înainte ca mintea să adauge ceva?" },
  "strategul|calm": { title: "Direcția caută relaxare", insight: "Oglinda observă o energie care așază pașii înainte. Calmului îi revine rolul de a aduce spațiu între gând și acțiune, astfel încât strategia să rămână vie, nu încordată.", practiceFocus: "Respirație lentă și relaxarea frunții înainte de orice decizie.", question: "Unde poate apărea un spațiu de liniște înaintea următorului pas?" },
  "strategul|echilibru": { title: "Claritatea caută centrul", insight: "Oglinda observă o minte care construiește structuri și anticipează. Echilibrul poate aduce un ritm mai egal între planificare și prezență — între control și încredere în ceea ce vine de la sine.", practiceFocus: "Respirație alternativă înainte de o decizie importantă.", question: "Ce s-ar schimba dacă ai permite neprevăzutului să colaboreze cu planul tău?" },
  "strategul|libertate": { title: "Structura eliberează", insight: "Oglinda observă o energie care construiește drumuri. Libertatea nu dezorganizează strategia — o poate aerisi, lăsând spațiu pentru ceea ce nu putea fi planificat.", practiceFocus: "Zece minute de mers fără destinație sau plan prestabilit.", question: "Ce apare când mintea ta strategică face un pas înapoi și lasă lucrurile să curgă?" },
  "conducatorul|echilibru": { title: "Forța caută centrul", insight: "Oglinda observă o energie care conduce firesc. Echilibrul poate aduce o linie de mijloc între decizie și ascultare — forța rămâne prezentă, dar lasă mai mult spațiu și pentru ceilalți.", practiceFocus: "Respirație alternativă înainte de o alegere importantă.", question: "Unde dai prea mult sau prea puțin și ce ar aduce mai multă grație?" },
  "conducatorul|calm": { title: "Conducerea respiră", insight: "Oglinda observă o prezență care ține direcția cu hotărâre. Calmul poate transforma hotărârea în putere mai profundă — nu mai puțin clară, ci mai puțin tensionată.", practiceFocus: "Respirație 4-7-8 și relaxarea conștientă a maxilarului.", question: "Ce se deschide când conduci din calm, nu din tensiune?" },
  "conducatorul|iubire": { title: "Puterea se deschide spre blândețe", insight: "Oglinda observă o energie care știe să ghideze și să decidă. Iubirea poate transforma această forță într-o prezență care susține nu doar eficient, ci și cu căldură.", practiceFocus: "Mână pe piept, respirație lentă și intenția de a conduce cu căldură.", question: "Cum se simte să conduci cu blândețe, fără să pierzi direcția?" },
  "luptatorul|iubire": { title: "Forța se întoarce spre blândețe", insight: "Oglinda observă o energie capabilă să treacă prin greutate. Alegerea iubirii poate transforma impactul în apropiere, iar curajul în protecție caldă.", practiceFocus: "O mână pe piept, expirație lungă și observarea zonei inimii.", question: "Cum se simte forța ta când este atinsă de blândețe?" },
  "luptatorul|calm": { title: "Forța se relaxează", insight: "Oglinda observă o energie în gardă, pregătită pentru dificultate. Calmul nu slăbește forța — o poate elibera de tensiunea inutilă, lăsând curajul să fie prezent fără efort.", practiceFocus: "Expirație lungă și conștientizarea relaxării maxilarului și a umerilor.", question: "Ce forță poți păstra când corpul nu mai trebuie să lupte?" },
  "luptatorul|disciplina": { title: "Forța primește ritm", insight: "Oglinda observă o energie de impact și rezistență. Disciplina poate transforma această forță dintr-o reacție la dificultate într-o practică zilnică — mai puțin luptă, mai multă intenție.", practiceFocus: "Un micro-ritual zilnic care onorează forța fără să o consume.", question: "Ce disciplină ar susține forța ta, în loc să o epuizeze?" },
  "senzitivul|incredere": { title: "Sensibilitatea caută stabilitate", insight: "Oglinda observă o receptivitate fină. Încrederea poate deveni solul interior care permite sensibilității să rămână deschisă și clară.", practiceFocus: "Simțirea coloanei, a tălpilor și a contactului cu solul.", question: "Ce sprijin poți simți în corp chiar acum?" },
  "senzitivul|echilibru": { title: "Receptivitatea caută centrul", insight: "Oglinda observă o energie care simte atmosfera și nuanțele. Echilibrul poate aduce o linie de mijloc între absorbție și delimitare — sensibilitatea rămâne, dar granița devine mai clară.", practiceFocus: "Respirație alternativă și simțirea pielii ca graniță naturală.", question: "Ce simți că vine din tine și ce vine din exterior, în acest moment?" },
  "senzitivul|prezenta": { title: "Simțirea se întoarce acasă", insight: "Oglinda observă o energie care percepe subtil. Prezența o poate ancora direct în corp — în simțuri, în respirație, în contactul cu spațiul fizic.", practiceFocus: "Scanare senzorială 5-4-3-2-1 cu atenție specială la simțul tactil.", question: "Care senzație fizică poți simți cel mai clar chiar acum?" },
  "cautatorul|prezenta": { title: "Drumul se întoarce în corp", insight: "Oglinda observă o energie care caută sens în mișcare. Prezența poate fi descoperirea că drumul nu începe undeva departe — ci în respirația de acum, în tălpile care ating solul.", practiceFocus: "Mers conștient, cu atenție la contactul tălpilor cu solul.", question: "Ce descoperi când te oprești și simți că ești deja undeva?" },
  "cautatorul|disciplina": { title: "Căutarea primește formă", insight: "Oglinda observă o energie vie, orientată spre orizonturi. Disciplina poate transforma această căutare dintr-o mișcare dispersată într-o direcție susținută, cu pași reali.", practiceFocus: "Un ritual mic și constant care susține o intenție de-a lungul unei săptămâni.", question: "Ce căutare merită un ritual zilnic, nu doar un impuls?" },
  "creatorul|disciplina": { title: "Expresia primește structură", insight: "Oglinda observă o energie care caută să dea formă trăirii. Disciplina poate transforma inspirația din fulgur în flacără constantă — nu mai puțin vie, ci mai susținută.", practiceFocus: "Un micro-ritual de creație zilnic — oricât de mic, oricât de simplu.", question: "Ce formă ar căpăta expresia ta dacă i-ai acorda 10 minute zilnic?" },
  "protectorul|echilibru": { title: "Grija include și sinele", insight: "Oglinda observă o energie care ține spațiu pentru ceilalți cu devotament. Echilibrul poate aduce și atenție spre propriile nevoi — grija care circulă în ambele sensuri devine mai durabilă.", practiceFocus: "Respirație alternativă și o întrebare simplă: de ce am eu nevoie acum?", question: "Ce ai oferi unui prieten care face tot ceea ce faci tu pentru ceilalți?" },
  "ingrijitorul|echilibru": { title: "Dăruirea caută un centru", insight: "Oglinda observă o prezență caldă, disponibilă și apropiată. Echilibrul poate aduce un moment în care grija se întoarce și spre sine — nu ca egoism, ci ca sursă pentru tot ce se oferă.", practiceFocus: "Respirație alternativă și observarea propriilor nevoi înainte de ale celorlalți.", question: "Ce nevoie proprie ai putea onora astăzi, fără a explica cuiva?" },
};

export function buildAlignedRecommendation({
  observedCharacter,
  feltCharacter,
  chosenDirection,
  expressiveNuance,
}: {
  observedCharacter: CharacterResult | null;
  feltCharacter: CharacterResult | null;
  chosenDirection: Direction | null;
  expressiveNuance: CharacterResult | null;
}): AlignedRecommendation {
  const observed = observedCharacter;
  const felt = feltCharacter;
  const direction = chosenDirection;
  const isDifferent = felt && observed && felt.key !== observed.key;

  const primaryKey =
    felt && direction ? `${felt.key}|${direction.key}` :
    observed && direction ? `${observed.key}|${direction.key}` : null;

  const secondaryKey =
    isDifferent && observed && direction ? `${observed.key}|${direction.key}` : null;

  const combo =
    (primaryKey && COMBINATION_INSIGHTS[primaryKey]) ||
    (secondaryKey && COMBINATION_INSIGHTS[secondaryKey]) ||
    null;

  const parts: string[] = [];

  if (combo) {
    parts.push(combo.insight);
  } else {
    if (observed) {
      parts.push(
        `Oglinda poate observa în chip o energie de ${observed.title.toLowerCase()}${observed.subtitle ? ` — ${observed.subtitle.toLowerCase()}` : ""}.`
      );
    }
    if (direction) {
      parts.push(
        `Alegând să cultivi ${direction.title.toLowerCase()}, se poate deschide un pod între ceea ce este observat și ceea ce alegi să trăiești mai deplin.`
      );
    }
    parts.push("Practica începe acolo unde chipul, simțirea și alegerea se întâlnesc.");
  }

  if (isDifferent && felt && observed) {
    parts.push(
      `Oglinda observă o energie de ${observed.title.toLowerCase()}, iar tu simți că te exprimi mai aproape de ${felt.title.toLowerCase()}. Aceasta poate fi chiar spațiul unde practica are cel mai mult sens.`
    );
  }

  const anchorKey = felt?.key ?? observed?.key;
  if (expressiveNuance && expressiveNuance.key !== anchorKey) {
    parts.push(
      `Expresia de acum adaugă o nuanță de ${expressiveNuance.title.toLowerCase()}, ca și cum momentul ar aduce în față o altă față a aceleiași energii.`
    );
  }

  const text = parts.join(" ");
  const title =
    combo?.title ??
    (direction ? `Spre ${direction.title}` :
     felt ? `Energia simțită: ${felt.title}` :
     "Recomandare aliniată");

  return {
    title,
    text,
    recommendedPractice:
      combo?.practiceFocus ??
      direction?.recommendedPractice ??
      felt?.recommendedPractices?.[0] ??
      observed?.recommendedPractices?.[0] ??
      null,
    practiceText:
      direction?.practiceText ??
      felt?.eqydoPath ??
      observed?.eqydoPath ??
      null,
    introspectionQuestion:
      combo?.question ??
      direction?.introspectionQuestion ??
      felt?.introspectionQuestion ??
      observed?.introspectionQuestion ??
      null,
  };
}
