export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  summary: string;
  signalType?: string;
  signalLabel?: string;
  content: ArticleSection[];
}

export interface ArticleSection {
  type: "intro" | "heading" | "body" | "quote" | "signal-box" | "list" | "conclusion";
  text?: string;
  items?: string[];
  label?: string;
  author?: string;
}

const articles: Article[] = [
  {
    slug: "limbajul-pedepsei-nevoia-de-ordine-morala",
    title: "Limbajul pedepsei: nevoia de ordine morală în discursul public",
    subtitle: "De ce cerem răspuns înainte de înțelegere — o analiză a semnalelor latente din corpusul de opinie publică",
    category: "Semnale comportamentale",
    categoryColor: "cobalt",
    date: "15 iunie 2026",
    readTime: "8 min",
    summary:
      "Analiza corpusului de discurs public identifică un semnal recurent: limbajul pedepsei. Dincolo de cererea explicită de sancțiune, semnalul revelează o nevoie latentă de ordine morală funcțională — un pattern comportamental cu implicații semnificative pentru comunicarea instituțională și editorială.",
    signalType: "punishment_language",
    signalLabel: "Limbaj punitiv",
    content: [
      {
        type: "intro",
        text:
          "Când analizăm corpusul de opinie publică din ultimele luni, un pattern apare cu o regularitate care depășește coincidența: limbajul pedepsei. Nu vorbim de cereri izolate de sancțiune, ci de un semnal comportamental sistemic — o structură de limbaj care indică, mai profund decât pare la suprafață, o nevoie urgentă de restabilire a ordinii morale.",
      },
      {
        type: "heading",
        text: "Ce este semnalul",
      },
      {
        type: "body",
        text:
          "Semnalul punishment_language apare atunci când discursul public nu mai cere explicații sau context, ci răspuns imediat — penalizare, demitere, consecință. Formulele sunt recognoscibile: «să plătească», «trebuie dat afară», «să fie trași la răspundere», «nu mai avem răbdare». Frecvența și intensitatea acestui tip de limbaj nu spune ceva despre vinovăția cuiva anume. Spune ceva despre starea psihologică a comunității care îl produce.",
      },
      {
        type: "signal-box",
        label: "Semnal detectat",
        text:
          "Interes latent: restabilirea ordinii morale. Nevoie umană fundamentală: dreptate, consecințe concrete, coerență morală. Tip dominant: punishment_language. Intensitate: ridicată, recurentă, persistentă pe orizonturi de timp de 3+ luni.",
      },
      {
        type: "heading",
        text: "Structura psihologică din spate",
      },
      {
        type: "body",
        text:
          "Cercetarea comportamentală arată că limbajul punitiv apare ca răspuns la o ruptură percepută în contractul social: actul nepedepsit, consecința amânată la nesfârșit, vinovăția care se evaporă. Nu este în primul rând o cerere de cruzime — este o cerere de coerență. Oamenii nu cer, în profunzime, pedeapsă; cer să existe o legătură între acțiuni și consecințe. Cer să știe că sistemul funcționează.",
      },
      {
        type: "quote",
        text:
          "Semnalul punitiv nu este o cerere de cruzime. Este o cerere de coerență. Oamenii cer să știe că sistemul are memorie.",
        author: "Analiza ICSCB, corpus Q2 2026",
      },
      {
        type: "heading",
        text: "Ce amplifică semnalul",
      },
      {
        type: "list",
        items: [
          "Percepția că sancțiunile nu ajung la persoanele cu statut ridicat — «legea se aplică altfel»",
          "Cazuri vizibile cu deznodământ ambiguu sau deloc — dosarele care se pierd în proceduri",
          "Comunicarea instituțională care explică fără a concluziona — răspunsuri care nu răspund",
          "Ciclurile repetate de scandal fără consecință măsurabilă — memoria publicului păstrează pattern-ul",
          "Sentimentul de impotență civică — «oricum nu se schimbă nimic»",
        ],
      },
      {
        type: "heading",
        text: "Implicații editoriale și de comunicare",
      },
      {
        type: "body",
        text:
          "Un brief editorial care operează pe acest semnal fără să îl gestioneze corect riscă două greșeli simetrice: inflamarea inutilă (alimentând indignarea fără context sistemic) sau liniștirea goală (explicând «procesele complexe» fără a onora nevoia reală). Calea corectă trece prin nivelul de interes uman, nu prin nivelul actorului specific. Conținutul util în acest context nu este «cine trebuie sancționat», ci «cum arată un sistem care permite consecința reală».",
      },
      {
        type: "body",
        text:
          "Concret: un articol care descrie mecanismele de control, independența instituțiilor, presiunea civică organizată și instrumentele reale de responsabilizare va rezona mai profund și mai durabil decât un articol care numește vinovați. Nu pentru că evită conflictul, ci pentru că adresează nevoia reală — nu spectacolul nevoii.",
      },
      {
        type: "heading",
        text: "Ce înseamnă abstracția nivelului corect",
      },
      {
        type: "body",
        text:
          "Analiza CDB Quality Gate pe acest semnal produce un abstraction_layer care specifică: «Brief operează la nivel corect: sisteme de responsabilizare și condiții de consecință, nu actori individuali sau cereri de pedepsire. Interes uman general: ordine morală funcțională prin mecanisme verificabile.» Aceasta nu este un filtru politic — este un filtru comportamental. Diferența contează: nu excludem actorii politici din conținut; excludem din cadrul editorial cererea de pedepsire ca scop în sine.",
      },
      {
        type: "conclusion",
        text:
          "Semnalul punishment_language este unul dintre cele mai bogate din corpusul ICSCB — nu pentru că revelează agresivitate, ci pentru că revelează o nevoie de ordine morală profundă, sistemică, persistentă. Orice comunicare care înțelege această structură și operează la nivelul potrivit are șansa să creeze mai mult decât conținut: poate crea claritate acolo unde publicul simte, în prezent, doar opacitate.",
      },
    ],
  },
  {
    slug: "structura-chipului-ca-oglinda",
    title: "Structura chipului ca oglindă: metodologia observației comportamentale faciale",
    subtitle: "Cum citim caracterul prin geometria feței — arhitectura unui instrument de auto-cunoaștere",
    category: "Metodologie",
    categoryColor: "indigo",
    date: "8 iunie 2026",
    readTime: "6 min",
    summary:
      "Oglinda Comportamentală ICSCB utilizează analiza structurii faciale ca instrument de auto-cunoaștere — nu ca diagnostic, nu ca predicție, ci ca oglindă care oferă puncte de pornire pentru practica personală. Înțelegem cum funcționează metodologia în spate.",
    content: [
      {
        type: "intro",
        text:
          "Chipul uman este unul dintre cele mai complexe instrumente de comunicare nonverbală pe care natura le-a construit. Mii de ani de interpretare culturală, intuiție socială și, mai recent, neuroștiință și biometrie aplicată ne spun același lucru: fața spune ceva dincolo de cuvinte. Întrebarea nu este dacă — ci cum să citim fără să exagerăm, fără să diagnosticăm, fără să reducem omul la o configurație de trăsături.",
      },
      {
        type: "heading",
        text: "Distincția fundamentală: observație vs. diagnostic",
      },
      {
        type: "body",
        text:
          "Instrumentul Oglinda Comportamentală nu face diagnoze și nu produce certitudini. Face observații — și le oferă ca puncte de pornire, nu ca concluzie finală. Diferența este mai mult decât semantică. Un diagnostic spune «ești X». O observație spune «structura chipului tău poate sugera o tendință spre X — explorează dacă rezonează». Prima închide conversația. A doua o deschide.",
      },
      {
        type: "heading",
        text: "Cele două straturi ale analizei",
      },
      {
        type: "body",
        text:
          "Motorul de analiză operează pe două straturi distincte. Primul strat — structural — derivă din geometria facială măsurată prin 22 de puncte de reper anatomice (landmark-uri): distanța interocular, raportul înălțime/lățime al feței, proporția frunții, lățimea maxilarului față de pomeți. Aceste raporturi sunt relativ stabile în timp și reflectă tendințe structurale.",
      },
      {
        type: "body",
        text:
          "Al doilea strat — expresiv — derivă din blendshape-urile faciale: 52 de parametri care codifică mișcarea musculară instantanee. Sprâncenele coborâte, zâmbetul subtil, apertura ochilor, tensiunea maxilarului. Acest strat este volatil — se schimbă din minut în minut și reflectă starea de moment, nu caracterul de durată.",
      },
      {
        type: "quote",
        text:
          "Structura spune cine ai tendința să fii. Expresia spune cine ești în momentul acesta.",
        author: "Logica de analiză Oglinda Comportamentală",
      },
      {
        type: "heading",
        text: "Cele 12 arhetipuri comportamentale",
      },
      {
        type: "body",
        text:
          "Modelul operează cu 12 arhetipuri de caracter — nu categorii fixe, ci tendințe energetice, fiecare cu un dar specific, o umbră posibilă și o cale de practică. De la Observator (atenție fină, risc de distanțare) la Luptător (forță, risc de tensiune permanentă), de la Creator (expresivitate, risc de dispersie) la Senzitiv (receptivitate, risc de absorbție emoțională) — fiecare arhetip descrie o constelație de tendințe, nu o esență fixă.",
      },
      {
        type: "list",
        items: [
          "Observatorul — atenție fină, claritate, distanță ca risc",
          "Conducătorul — direcție, voință, control ca risc",
          "Protectorul — grijă, stabilitate, uitarea de sine ca risc",
          "Căutătorul — curiozitate, sens, fugă ca risc",
          "Creatorul — expresie, sensibilitate, dispersie ca risc",
          "Luptătorul — forță, rezistență, tensiune permanentă ca risc",
          "Diplomatul — tact, armonie, evitare ca risc",
          "Interiorizatul — profunzime, intuiție, izolare ca risc",
          "Vizionarul — sinteză, inspirație, desprindere de concret ca risc",
          "Îngrijitorul — blândețe, compasiune, uitarea de sine ca risc",
          "Strategul — claritate practică, anticipare, control ca risc",
          "Senzitivul — receptivitate, empatie, absorbție ca risc",
        ],
      },
      {
        type: "heading",
        text: "Practica ca finalitate, nu cunoașterea",
      },
      {
        type: "body",
        text:
          "Oglinda nu este un test de personalitate. Nu produce un scor care se arhivează. Produce un punct de pornire pentru o practică — o respirație, o observare corporală, o întrebare de contemplat. Finalitatea nu este «acum știu cine sunt», ci «acum am un loc de unde să încep azi». Aceasta este filosofia din spate: observația ca instrument al prezenței, nu al cunoașterii abstracte de sine.",
      },
      {
        type: "conclusion",
        text:
          "Metodologia Oglinzii Comportamentale este construită pe un principiu simplu: cu cât suntem mai atenți la ce spune chipul, cu atât mai rapid găsim poarta de intrare în practica de prezență. Nu știința face instrumentul util — ci intenția cu care îl folosim.",
      },
    ],
  },
];

export const ARTICLES: Record<string, Article> = Object.fromEntries(
  articles.map((a) => [a.slug, a])
);
export const ARTICLE_LIST = articles;

export function getArticleBySlug(slug: string): Article | null {
  return ARTICLES[slug] ?? null;
}
