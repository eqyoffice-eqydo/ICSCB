import type { Character } from "./types";

const _catalog: Character[] = [
  {
    key: "observatorul",
    title: "Observatorul",
    subtitle: "Cel care vede detaliile fine",
    shortText:
      "Observatorul poate exprima o atenție fină, orientată spre detalii, semnale și mișcări subtile.",
    observedText:
      "Expresia poate aduce în față o minte care privește înainte de a reacționa — atentă la detalii, la semnale fine și la ceea ce se petrece sub suprafață. Se poate observa o tendință de claritate și discernământ în felul în care chipul se prezintă lumii.",
    gift:
      "Darul lui apare în felul în care poate păstra claritatea acolo unde alții trec grăbiți — vede ce scapă, simte ce nu se spune și înțelege înainte de a întreba.",
    shadow:
      "Când această energie se strânge, observarea poate deveni distanță și viața ajunge să fie privită mai mult decât trăită.",
    innerNeed:
      "În profunzime, caută claritate, siguranță interioară și timp suficient pentru a înțelege ce se petrece în jur.",
    eqydoPath:
      "Pentru Observator, practica Eqydo înseamnă întoarcerea de la analiză la senzație. Observarea respirației și a senzațiilor directe îl ajută să rămână prezent fără să transforme totul în gând.",
    faceSignals: ["frunte mai activă", "privire concentrată", "ochi atenți", "expresie reținută", "simetrie relativ bună"],
    recommendedPractices: ["Respirație în aria nazală", "Observarea senzațiilor", "Privire blândă"],
    introspectionQuestion: "Ce observi atât de mult încât uiți să trăiești?",
    transformationDirection: "Drumul se deschide când analiza lasă loc senzației directe.",
  },
  {
    key: "conducatorul",
    title: "Conducătorul",
    subtitle: "Cel care ține direcția",
    shortText:
      "Conducătorul poate exprima direcție, voință și capacitatea de a susține o formă clară în lume.",
    observedText:
      "Expresia poate aduce în față o energie de asumare — o forță care nu ezită să indice direcția și să ducă lucrurile până la capăt. Se poate observa o orientare spre decizie și o prezență care susține fără să ceară validare.",
    gift:
      "Darul lui apare în capacitatea de a ține drumul atunci când ceilalți se îndoiesc — o forță care nu impune, ci susține, și o hotărâre pe care ceilalți o simt ca stabilitate.",
    shadow:
      "Când această energie se strânge, direcția poate deveni control, iar hotărârea — presiune asupra celorlalți și a propriei persoane.",
    innerNeed:
      "În profunzime, caută ordine, respect și un spațiu în care deciziile lui să fie auzite, nu puse la îndoială.",
    eqydoPath:
      "Practica îl invită să relaxeze controlul și să cultive ascultarea. Forța devine mai profundă atunci când maxilarul se relaxează și respirația conduce înaintea voinței.",
    faceSignals: ["maxilar bine conturat", "bărbie stabilă", "privire directă", "sprâncene ferme", "proporție inferioară puternică"],
    recommendedPractices: ["Relaxarea maxilarului", "Tăcere conștientă", "Ascultare înainte de acțiune"],
    introspectionQuestion: "Unde poți conduce fără să strângi?",
    transformationDirection: "Forța sa devine mai profundă când controlul lasă loc conducerii conștiente.",
  },
  {
    key: "protectorul",
    title: "Protectorul",
    subtitle: "Cel care ține spațiul pentru ceilalți",
    shortText:
      "Protectorul poate exprima grijă, responsabilitate și o atenție constantă față de nevoile celor din jur.",
    observedText:
      "Se poate observa în expresie o prezență care simte ceea ce ceilalți au nevoie înainte de a cere — o grijă discretă care ține spațiul fără să ocupe centrul. Chipul poate sugera o stabilitate dobândită prin responsabilitate asumată.",
    gift:
      "Darul lui apare în felul în care creează siguranță fără să ceară nimic în schimb — o loialitate discretă și o stabilitate pe care ceilalți o simt fără să o explice.",
    shadow:
      "Când această energie se strânge, grija pentru ceilalți poate acoperi grija pentru sine și protecția poate deveni povară.",
    innerNeed:
      "În profunzime, caută și el siguranță, apartenența și o recunoaștere simplă a efortului care nu se vede mereu.",
    eqydoPath:
      "Practica îl invită să întoarcă atenția spre propriul corp înainte de a susține lumea. Respirația în piept și observarea umerilor pot aduce echilibru între grijă și prezența de sine.",
    faceSignals: ["obraji plini sau activi", "maxilar stabil", "privire caldă", "gură neutră", "expresie de responsabilitate"],
    recommendedPractices: ["Respirație în piept", "Observarea umerilor", "Limite blânde"],
    introspectionQuestion: "Pe cine protejezi atât de mult încât uiți să te mai simți pe tine?",
    transformationDirection: "Calea lui se deschide când grija pentru ceilalți include și grija pentru sine.",
  },
  {
    key: "cautatorul",
    title: "Căutătorul",
    subtitle: "Cel care merge după sens",
    shortText:
      "Căutătorul poate exprima curiozitate, mișcare interioară și o nevoie vie de sens.",
    observedText:
      "Expresia poate sugera un om aflat în mișcare interioară — cineva căruia întrebarea îi spune mai mult decât răspunsul și pentru care drumul însuși poate fi sensul. Se poate observa o deschidere și o privire mereu orientată puțin mai departe.",
    gift:
      "Darul lui apare în curajul de a ieși din forme vechi și de a ține vie întrebarea. Poate deschide spații pe care alții nu le văd și poate arăta că există mai mult dincolo de ceea ce este deja știut.",
    shadow:
      "Când această energie se strânge, căutarea poate deveni fugă — de prezent, de răspuns, de locul unde drumul cere să te oprești.",
    innerNeed:
      "În profunzime, caută libertate, sens și suficient spațiu pentru a explora fără să fie grăbit.",
    eqydoPath:
      "Practica îl invită spre ancorare. Mersul conștient, simțirea tălpilor și respirația lentă îl ajută să descopere că drumul începe în corp.",
    faceSignals: ["față alungită", "ochi activi", "privire vie", "frunte activă", "expresie mobilă"],
    recommendedPractices: ["Mers conștient", "Ancorare în tălpi", "Respirație lentă"],
    introspectionQuestion: "Ce cauți în afară și poate fi simțit acum în tine?",
    transformationDirection: "Drumul se deschide când neliniștea se transformă în direcție conștientă.",
  },
  {
    key: "creatorul",
    title: "Creatorul",
    subtitle: "Cel care dă formă trăirii",
    shortText:
      "Creatorul poate exprima sensibilitate, expresie și capacitatea de a transforma o trăire în formă.",
    observedText:
      "Expresia poate aduce în față o sensibilitate vie — o energie care caută să devină cuvânt, gest, mișcare sau frumusețe. Ca și cum trăirea nu se simte completă până nu capătă o formă care să o facă vizibilă.",
    gift:
      "Darul lui apare în felul în care transformă o trăire în ceva vizibil — inspirație vie, sensibilitate care creează legătură și capacitatea de a aduce frumusețe acolo unde alții văd obișnuit.",
    shadow:
      "Când această energie se strânge, expresia poate căuta confirmare și sensibilitatea poate cere validare continuă. Intensitatea creatoare poate deveni dispersie.",
    innerNeed:
      "În profunzime, caută să fie văzut — nu ca imagine, ci ca prezență — și să simtă că ceea ce creează contează.",
    eqydoPath:
      "Practica îl invită spre tăcere creativă. Observarea mâinilor, respirația în abdomen și oprirea impulsului de a demonstra pot transforma inspirația în prezență.",
    faceSignals: ["gură expresivă", "pomeți activi", "asimetrie subtilă", "ochi vii", "expresie mobilă"],
    recommendedPractices: ["Tăcere creativă", "Observarea mâinilor", "Respirație în abdomen"],
    introspectionQuestion: "Ce vrea să se exprime prin tine?",
    transformationDirection: "Drumul se deschide când expresia nu mai caută confirmare, ci devine prezență.",
  },
  {
    key: "luptatorul",
    title: "Luptătorul",
    subtitle: "Cel care trece prin greutate",
    shortText:
      "Luptătorul poate exprima forță, rezistență și pregătire pentru acțiune.",
    observedText:
      "Se poate observa o energie de impact — o forță care se activează natural în fața greutății și care știe să ducă lucrurile până la capăt atunci când alții cedează. Chipul poate sugera o prezență care nu se ferește de dificultate.",
    gift:
      "Darul lui apare în momente dificile: curaj care nu calculează, determinare care nu cedează, o rezistență pe care ceilalți se sprijină fără să realizeze.",
    shadow:
      "Când această energie se strânge, forța poate deveni tensiune și corpul rămâne în gardă chiar și când viața nu mai cere luptă.",
    innerNeed:
      "În profunzime, caută respect, spațiu de acțiune și recunoașterea forței pe care o poartă — care uneori nu este văzută de cei din jur.",
    eqydoPath:
      "Practica îl invită să transforme tensiunea în prezență. Expirația lungă, mișcarea lentă și relaxarea maxilarului îl ajută să păstreze forța fără luptă.",
    faceSignals: ["maxilar lat", "sprâncene ferme", "bărbie puternică", "privire intensă", "proporție inferioară activă"],
    recommendedPractices: ["Expirație lungă", "Mișcare lentă", "Relaxarea maxilarului"],
    introspectionQuestion: "Ce forță poți păstra fără să lupți?",
    transformationDirection: "Forța sa devine mai profundă când reacția cedează locul prezenței conștiente.",
  },
  {
    key: "diplomatul",
    title: "Diplomatul",
    subtitle: "Cel care creează punți",
    shortText:
      "Diplomatul poate exprima tact, adaptare și o atenție naturală la felul în care oamenii se simt în prezența lui.",
    observedText:
      "Expresia poate sugera o prezență care simte relațiile și reglează tonul fără efort aparent. Se poate observa o atenție la armonie — la felul în care cuvintele cad și la ceea ce poate crea sau rupe o legătură.",
    gift:
      "Darul lui apare în felul în care poate calma o tensiune sau crea legătură acolo unde aceasta lipsea — tact, eleganță relațională și o adaptare care nu sacrifică autenticitatea.",
    shadow:
      "Când această energie se strânge, adaptarea poate deveni evitare și propria direcție se pierde în grija de a menține armonia celorlalți.",
    innerNeed:
      "În profunzime, caută acceptare și relații în care poate fi și el auzit — nu doar ascultătorul care face loc celorlalți.",
    eqydoPath:
      "Practica îl invită să se întoarcă la axul propriu. Simțirea coloanei și rostirea unei intenții clare pot păstra armonia fără să sacrifice propria direcție.",
    faceSignals: ["proporții echilibrate", "gură armonioasă", "privire blândă", "simetrie bună", "expresie socială deschisă"],
    recommendedPractices: ["Simțirea coloanei", "Tăcere înainte de răspuns", "Rostirea unei intenții clare"],
    introspectionQuestion: "Ce alegi tu, dincolo de armonia celorlalți?",
    transformationDirection: "Calea sa se deschide când adaptarea vine din ax interior, nu din teama de dezacord.",
  },
  {
    key: "interiorizatul",
    title: "Interiorizatul",
    subtitle: "Cel care trăiește profund înăuntru",
    shortText:
      "Interiorizatul poate exprima profunzime, retragere și o viață interioară bogată.",
    observedText:
      "Expresia poate aduce în față o prezență care simte adânc și arată selectiv — o lume interioară amplă, în care trăirile au nevoie de spațiu înainte de a deveni cuvânt.",
    gift:
      "Darul lui apare în capacitatea de a sta cu ceea ce este subtil — o intuiție fină, o profunzime care nu se grăbește și o prezență care poate ține liniștea fără să o rupă.",
    shadow:
      "Când această energie se strânge, profunzimea poate deveni izolare și trăirile pot rămâne înăuntru mai mult decât e sănătos.",
    innerNeed:
      "În profunzime, caută siguranță și spațiu interior — o prezență care nu grăbește deschiderea și nu cere să fie explicat ceea ce simte.",
    eqydoPath:
      "Practica îl invită spre exprimarea simplă. Scanarea corporală și rostirea unui singur cuvânt simțit pot transforma retragerea în contact autentic.",
    faceSignals: ["privire adâncă", "față alungită sau fină", "gură reținută", "expresie calmă", "ochi concentrați"],
    recommendedPractices: ["Scanare corporală", "Respirație în piept", "Un cuvânt simțit"],
    introspectionQuestion: "Ce parte din tine așteaptă să fie văzută?",
    transformationDirection: "Calea lui se deschide când lumea interioară bogată găsește o formă de exprimare simplă.",
  },
  {
    key: "vizionarul",
    title: "Vizionarul",
    subtitle: "Cel care vede direcții mari",
    shortText:
      "Vizionarul poate exprima orientare spre sens, capacitate de sinteză și o privire care vede dincolo de moment.",
    observedText:
      "Se poate observa o privire orientată dincolo de imediat — o energie care construiește sens, caută conexiuni și simte direcții înainte ca ele să devină vizibile pentru ceilalți.",
    gift:
      "Darul lui apare în capacitatea de a vedea întreg când alții văd fragmente — viziune, inspirație și o sinteză care deschide drumuri acolo unde părea că nu există.",
    shadow:
      "Când această energia se strânge, viziunea poate deveni desprindere de concret și nerăbdare față de pașii mici pe care tot ea îi cere.",
    innerNeed:
      "În profunzime, caută sens, libertate mentală și un orizont suficient de larg pentru ideile pe care le poartă.",
    eqydoPath:
      "Practica îl invită să coboare viziunea în corp. Simțirea tălpilor, observarea palmelor și alegerea unui singur pas concret susțin viziunea prin prezență.",
    faceSignals: ["frunte înaltă", "ochi deschiși", "față alungită", "privire orientată", "expresie luminoasă"],
    recommendedPractices: ["Ancorare în tălpi", "Observarea palmelor", "Alegerea unui pas simplu"],
    introspectionQuestion: "Ce pas concret susține viziunea ta?",
    transformationDirection: "Viziunea sa devine completă când găsește un pas concret în care să se întrupeze.",
  },
  {
    key: "ingrijitorul",
    title: "Îngrijitorul",
    subtitle: "Cel care hrănește viața din jur",
    shortText:
      "Îngrijitorul poate exprima blândețe, apropiere și disponibilitatea de a susține viața.",
    observedText:
      "Expresia poate aduce în față o căldură discretă — o prezență care creează siguranță fără să ocupe spațiu și care știe să susțină fără să condiționeze.",
    gift:
      "Darul lui apare în răbdarea cu care însoțește pe ceilalți — compasiune fără judecată, căldură care creează spațiu sigur și o prezență care poate vindeca prin simplul fapt că este.",
    shadow:
      "Când această energie se strânge, grija poate deveni uitare de sine și, treptat, nevoia de a fi necesar pentru ceilalți.",
    innerNeed:
      "În profunzime, caută relații în care dăruirea circulă în ambele sensuri — apropiere adevărată și o recunoaștere care nu trebuie cerută.",
    eqydoPath:
      "Practica îl invită să hrănească mai întâi propria prezență. Respirația în abdomen și limitele blânde ajută grija să rămână vie fără epuizare.",
    faceSignals: ["obraji plini", "expresie caldă", "gură moale", "ochi blânzi", "față rotundă sau echilibrată"],
    recommendedPractices: ["Respirație în abdomen", "Limite blânde", "Observarea inimii"],
    introspectionQuestion: "Cum poți oferi fără să te pierzi?",
    transformationDirection: "Dăruirea lui devine durabilă când hrănește mai întâi propria prezență.",
  },
  {
    key: "strategul",
    title: "Strategul",
    subtitle: "Cel care vede pașii înainte",
    shortText:
      "Strategul poate exprima claritate practică, anticipare și orientare spre structură.",
    observedText:
      "Se poate observa o claritate calculată — o minte atentă la consecințe, care vede pașii următori înainte ca ceilalți să se fi decis pentru primul.",
    gift:
      "Darul lui apare în felul în care poate organiza complexul în ceva clar și acționabil — discernământ practic, eficiență și capacitatea de a vedea pașii înainte.",
    shadow:
      "Când această energie se strânge, strategia poate deveni control subtil și calculul excesiv poate lăsa mai puțin spațiu pentru spontaneitate și relație.",
    innerNeed:
      "În profunzime, caută claritate, un context în care lucrurile se pot organiza și încredere că efortul depus va da rezultate.",
    eqydoPath:
      "Practica îl invită să relaxeze impulsul de a controla. Respirația lentă, relaxarea frunții și observarea nevoii de a anticipa pot deschide spațiu pentru spontaneitate.",
    faceSignals: ["frunte activă", "simetrie bună", "privire analitică", "sprâncene concentrate", "expresie calculată"],
    recommendedPractices: ["Respirație lentă", "Relaxarea frunții", "Observarea impulsului de control"],
    introspectionQuestion: "Ce se întâmplă când lași viața să mute prima piesă?",
    transformationDirection: "Strategia sa devine vie când calculul lasă loc și neprevăzutului.",
  },
  {
    key: "senzitivul",
    title: "Senzitivul",
    subtitle: "Cel care simte atmosfera",
    shortText:
      "Senzitivul poate exprima receptivitate, percepție fină și sensibilitate la nuanțele din jur.",
    observedText:
      "Expresia poate aduce în față o receptivitate fină — o sensibilitate care simte atmosfera, emoțiile și schimbările subtile ale mediului înainte ca mintea să le numească.",
    gift:
      "Darul lui apare în felul în care poate simți ceea ce este subtil — o empatie vie, o intuiție care lucrează în tăcere și o percepție fină care vede nuanțele invizibile.",
    shadow:
      "Când această energie se strânge, receptivitatea poate deveni absorbție emoțională și granița dintre ce este propriu și ce vine din mediu poate deveni neclară.",
    innerNeed:
      "În profunzime, caută delimitare, liniște și un spațiu curat în care sensibilitatea sa să se poată reaseza.",
    eqydoPath:
      "Practica îl invită spre delimitare corporală. Simțirea pielii, respirația în tălpi și observarea contactului cu solul pot transforma sensibilitatea în claritate.",
    faceSignals: ["ochi larg deschiși", "sprânceană interioară activă", "maxilar fin", "pomeți subtili", "expresie receptivă"],
    recommendedPractices: ["Delimitare corporală", "Simțirea pielii", "Respirație în tălpi"],
    introspectionQuestion: "Ce este al tău și ce doar trece prin tine?",
    transformationDirection: "Sensibilitatea sa devine resursă când delimitarea îi oferă un ax clar.",
  },
];

export const CHARACTERS: Record<string, Character> = Object.fromEntries(
  _catalog.map((c) => [c.key, c])
);

export const CHARACTER_LIST = _catalog;
export const CHARACTER_KEYS = _catalog.map((c) => c.key);

export function getCharacterByKey(key: string): Character | null {
  return CHARACTERS[key] ?? null;
}
