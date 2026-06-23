import type { Direction } from "./types";

const _directions: Direction[] = [
  {
    key: "calm",
    title: "Calm",
    shortText: "Ritmul interior se așază. Respirația face loc, și corpul poate încetini.",
    recommendedPractice: "Respirație 4-7-8",
    practiceText:
      "Inspiră pe 4 timpi, reține pe 7, expiră lent pe 8. Repetă de 4 ori, lăsând fiecare expirație să dizolve tensiunea.",
    introspectionQuestion: "Ce anume poate fi lăsat să se așeze chiar acum?",
  },
  {
    key: "claritate",
    title: "Claritate",
    shortText:
      "Gândul se limpezește când i se face loc. Claritatea apare în tăcere, mai mult decât în efort.",
    recommendedPractice: "Observarea gândurilor",
    practiceText:
      "Stai nemișcat 5 minute și observă gândurile fără să le urmezi. Lasă-le să treacă ca nori. Notează un singur lucru care rămâne clar.",
    introspectionQuestion: "Ce devine vizibil atunci când taci suficient de mult?",
  },
  {
    key: "curaj",
    title: "Curaj",
    shortText: "Puterea de a face un pas înainte, chiar și cu tremur în voce.",
    recommendedPractice: "Expirație de eliberare",
    practiceText:
      "Inspiră adânc prin nas, strânge ușor pumnii, apoi expiră puternic prin gură, deschizând palmele. Repetă de 3 ori.",
    introspectionQuestion: "Care este pasul pe care îl amâni și corpul tău îl știe deja?",
  },
  {
    key: "expresie",
    title: "Expresie",
    shortText:
      "Trăirea caută formă — un gest, un cuvânt, o mișcare. Expresia se deschide când primește permisiunea.",
    recommendedPractice: "Mișcare expresivă liberă",
    practiceText:
      "Alege un spațiu privat. Timp de 5 minute, lasă corpul să se miște fără judecată — voce, gesturi, expresii.",
    introspectionQuestion: "Ce vrea să fie exprimat prin tine și nu a primit încă permisiunea?",
  },
  {
    key: "incredere",
    title: "Încredere",
    shortText:
      "Sprijinul se simte în corp înainte de a fi găsit în afară — în coloana vertebrală, în tălpi, în răsuflare.",
    recommendedPractice: "Ancorare în coloana vertebrală",
    practiceText:
      "Stai drept, simte contactul cu scaunul sau cu podeaua. Inspiră imaginând că o rădăcină crește din coloana ta spre pământ.",
    introspectionQuestion: "Unde în corpul tău există deja o sursă de siguranță?",
  },
  {
    key: "iubire",
    title: "Iubire",
    shortText: "Căldura care poate fi îndreptată spre sine înainte de a o oferi altora.",
    recommendedPractice: "Respirație în zona inimii",
    practiceText:
      "Pune o mână pe piept. Respiră lent, imaginând căldură care se extinde de la inimă spre tot corpul. Spune în gând: Sunt suficient așa cum sunt.",
    introspectionQuestion: "Cum ai vorbi cu tine dacă ai vorbi cu un prieten drag?",
  },
  {
    key: "disciplina",
    title: "Disciplină",
    shortText:
      "O structură vie, caldă și repetată cu blândețe — care susține și lasă să crești.",
    recommendedPractice: "Micro-ritual de dimineață",
    practiceText:
      "Alege o singură acțiune simplă pe care o vei face mâine dimineață, înainte de orice altceva. Mică și constantă.",
    introspectionQuestion: "Ce disciplină slujește libertatea ta, în loc să o limiteze?",
  },
  {
    key: "libertate",
    title: "Libertate",
    shortText:
      "Mișcarea care se dezleagă — în corp, în gând, în pas. Spațiul interior se deschide când îi dai voie.",
    recommendedPractice: "Mers conștient fără destinație",
    practiceText:
      "Ieși afară și mergi 10 minute fără destinație sau agendă. Simte tălpile, aerul, lumina. Lasă mintea să se dezlege.",
    introspectionQuestion: "Ce ar fi dacă ți-ai acorda permisiunea de a nu ști pentru un moment?",
  },
  {
    key: "prezenta",
    title: "Prezență",
    shortText:
      "Contactul direct cu ceea ce se petrece acum — în corp, în simțuri, în clipă.",
    recommendedPractice: "Scanare senzorială 5-4-3-2-1",
    practiceText:
      "Numește: 5 lucruri pe care le vezi, 4 pe care le simți pe piele, 3 sunete, 2 mirosuri, 1 gust. Fă-o lent, cu atenție deplină.",
    introspectionQuestion: "Ce se schimbă când ești complet aici, fără să adaugi nimic?",
  },
  {
    key: "echilibru",
    title: "Echilibru",
    shortText:
      "Măsura care integrează — între dăruire și primire, între efort și odihnă.",
    recommendedPractice: "Respirație alternativă",
    practiceText:
      "Închide nara dreaptă, inspiră pe stânga. Închide stânga, deschide dreapta, expiră. Inspiră pe dreapta. Schimbă. Repetă 5 cicluri.",
    introspectionQuestion: "Unde simți că dai prea mult sau prea puțin și ce ar aduce echilibru?",
  },
];

export const DIRECTIONS: Record<string, Direction> = Object.fromEntries(
  _directions.map((d) => [d.key, d])
);
export const DIRECTION_LIST = _directions;
export const DIRECTION_KEYS = _directions.map((d) => d.key);

export function getDirectionByKey(key: string): Direction | null {
  return DIRECTIONS[key] ?? null;
}
