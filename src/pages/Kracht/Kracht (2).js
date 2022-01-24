import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import HeadImg from "../../images/blogpost3.jpg";
import Img1 from "../../images/TabelVergelijkingCoatings.jpg";
import Img2 from "../../images/TabelVergelijkingGewichten.jpg";

function Kracht() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Offline marketing en papier in detail bekeken - Graphic Rhino"
        />

        <meta
          name="description"
          content="Waarom zou je nog voor offline marketing kiezen en hoe zorg je ervoor dat jouw drukwerk opvalt en past bij je branding? Dat lees je hier!"
        />

        <meta
          property="article:author"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta
          property="article:publisher"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta
          property="og:url"
          content="https://graphicrhino.be/blog/kracht-van-papier"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Offline marketing en papier in detail bekeken - Graphic Rhino"
        />

        <meta
          property="og:description"
          content="Waarom zou je nog voor offline marketing kiezen en hoe zorg je ervoor dat jouw drukwerk opvalt en past bij je branding? Dat lees je hier!"
        />
      </Helmet>
      <Header image={HeadImg} title="DE KRACHT VAN PAPIER" />
      <div className="blg">
        <div className="container blg__container">
          <p>
            Inzetten op online marketing is een absolute must, maar offline
            marketing mag je niet vergeten in je marketing strategie! Digitale
            reclame heeft uiteraard ook zijn voordelen zoals een groter bereik,
            en een makkelijkere opvolging. Kreeg je onlangs een catalogus in je
            brievenbus.
          </p>
          <p>
            Dan heb je deze zeker eens doorbladerd, ook al had je geen directe
            aankoopplannen. Online ga je dit veel minder snel doen. Die
            zoveelste nieuwsbrief of advertentie? Daar heeft toch niemand nog
            zin in. Laat staan eindeloos door een online catalogus scrollen.
            Papier is tastbaar en met opvallende designs en speciale
            druktechnieken kan je heel snel de zintuigen prikkelen van
            potentiële klanten!
          </p>
          <p>Waarom werkt papier? Daar zijn verschillende redenen voor:</p>
          <ul className="blg__list">
            <li>
              Papier zorgt voor meer aandacht. Je kan wel je e-mail sorteren en
              de meeste reclame vliegt automatisch in de spam map, maar veel
              mensen houden zich niet bezig met deze map. Brieven opruimen
              daarentegen doen we wel, wat we niet nodig hebben vliegt in de
              papiermand. Daardoor passeert alles eens aan onze ogen en geven we
              het even aandacht, hoe kort ook. Bij de zoveelste nieuwsbrief die
              ongeopend in onze mailbox staat doen we dit niet.
            </li>
            <li>
              Een geprinte tekst is duidelijker en geeft je een overzicht. Kan
              jij fouten halen uit een brief op een scherm of toch liever op
              papier? Papier geeft onze ogen meer rust en maakt het makkelijker
              om te lezen. Op een scherm gaat dit een stuk moeizamer.
            </li>
            <li>
              Reclame op papier kan je ook makkelijk personaliseren met de naam
              van je klant op de envelop, handgeschreven op een apart formaat of
              met een postzegel. Mensen hebben het sowieso in hun handen en het
              kan hen triggeren om het te openen. Maar bij de zoveelste
              nieuwsbrief in de mailbox gaat men deze niet meer openen of je
              hier nu persoonlijk aangeschreven wordt of niet.
            </li>
            <li>
              Belangrijk is voelen, elke papiersoort voelt anders aan en elke
              brief, reclamefolder of wat dan ook heeft een andere afwerking.
            </li>
            <li>
              Veel van de beperkingen online, heb je offline niet! Je maakt je
              reclame zo groot en opvallend als je maar wilt!
            </li>
          </ul>
          <p>
            Hieronder gaan we je kennis van papier even bijschaven, maar
            uiteraard is papier niet het enige offline drukwerk waar je mee kan
            opvallen! Denk ook maar aan banners, kleding, vlaggen,
            autobestickering, relatiegeschenken en ga maar door.
          </p>
          <p>
            Bij offline marketing heb je zodanig veel keuze en je kan et zo gek
            nog niet bedenken.
          </p>
          <p>
            Voor deze blogpost houden we het even bij papier, maar wees gerust
            later volgt er nog meer over de vele andere offline marketing
            mogelijkheden!
          </p>
          <h2 className="blg__title">Papiersoorten</h2>
          <p>
            Er zijn eindeloos veel papiersoorten, de grootste reden hiervoor is
            dat elke drukker andere leveranciers gebruikt die het papier elk op
            hun manier verwerken en elke drukker geeft een andere naam aan hun
            papiersoorten.
          </p>
          <p>
            Het belangrijkste is het verschil tussen gestreken en ongestreken
            papier. Papier begint altijd ongestreken (uncoated), dit is
            makkelijker beschrijfbaar en voelt iets ruwer aan. Denk maar aan het
            papier dat je thuis voor je printer gebruikt. Het absorbeert ook
            meer inkt waardoor de kleuren minder fel overkomen.
          </p>
          <p>
            Gebruik je liever ecologische papiersoorten onthoud dan dat je
            kleuren hier minder fel gaan zijn, deze papiersoorten zijn vaak
            uncoated. Gestreken papier (coated) is iets gladder en kan zowel mat
            als glanzend zijn. Hierdoor wordt de inkt minder geabsorbeerd en
            krijg je fellere kleuren. Een goed voorbeeld hiervan zijn flyers en
            affiches.
          </p>
          <p>Wist je dat je ook op gekleurd papier kan drukken?</p>
          <p>
            Sommige drukkers hebben zelfs graspapier en stropapier, ideaal voor
            al je duurzame communicatie! Andere milieuvriendelijke papiersoorten
            zijn gerecycleerd papier en kraftpapier. Krafpapier is vaak bruin,
            maar soms kan je ook kiezen voor een grijze variant.
          </p>
          <p>
            Twijfel je over de papiersoort die je best kiest? Aarzel dan niet om
            contact op te nemen! Wij hebben verschillende sampleboxen ter
            beschikking die je kunnen helpen bij je beslissing, want papier dat
            moet je nu eenmaal kunnen voelen.
          </p>
          <img
            src={Img1}
            alt=""
            className="blg__media"
            style={{ width: "50%" }}
          />
          <h2 className="blg__title">Papiergewichten</h2>
          <p>
            Nu je al wat meer weet over papiersoorten vertel ik je graag wat
            meer over de verschillende grammages. Elke papiersoort heeft
            namelijk zijn gewichten waar je uit kan kiezen.
          </p>
          <p>
            De verschillende gewichten ook grammages genoemd hebben allemaal hun
            voor- en nadelen. Het is dus belangrijk om op voorhand te bepalen
            wat het doel van je drukwerk is.
          </p>
          <p>
            Een lichtere papiersoort is namelijk moeilijker om recto verso te
            bedrukken want het is licht doorschijnend. Bij zwaardere
            papiersoorten is dit dan weer geen enkel probleem, maar, deze zijn
            dan wel moeilijker te vouwen in vergelijking met lichtere
            papiersoorten.
          </p>
          <p>
            De grammage of dikte van het papier bepaalt enerzijds de stevigheid
            van het papier, en anderzijds heeft het een impact op hoe je
            drukwerk ervaren wordt als men het aanraakt. Het gewicht van papier
            wordt uitgedrukt in gram per vierkante meter. Krantenpapier weegt
            ongeveer 50gr/m2, kopieerpapier is doorgaans 80gr/m2, een postkaart
            260gr/m2. Gramgewicht zegt in principe niets over de dikte! Zo kan
            een luxe papiersoort van 260gr, dikker zijn dan een standaard
            papiersoort van 350gr. In onderstaande tabel vind je enkele
            richtlijnen voor de grammages. Mocht je hier nog vragen over hebben
            of voel je toch liever even aan het papier? Vraag het ons dan even
            en we halen met plezier een van onze vele sampleboxen boven!
          </p>
          <img src={Img2} alt="" className="gewichten blg__media" />
          <h2 className="blg__title">Afwerkingen</h2>
          <p>
            De verschillende soorten afwerkingen zijn er niet alleen om je
            drukwerk een luxe en professionele uitstraling te geven, het
            beschermt je drukwerk ook tegen beschadigingen. De belangrijkste
            afwerkingen vind je hieronder.
          </p>
          <ul className="blg__list">
            <li>
              Dispersielak is een dunne beschermlak over je drukwerk. Deze matte
              of glanzende laag is het meest voordelige middel om je ontwerp te
              beschermen, omdat deze techniek door de drukpers zelf wordt
              uitgevoerd.
            </li>
            <li>
              Laminaat is een glanzende of matte folie die over je drukwerk
              geplaatst wordt. Deze beschermlaag blijft intact wanneer je het
              drukwerk vouwt en is hierdoor uitermate geschikt voor flyers of
              folders. Laminaat is de sterkste en meest gebruikte
              afwerkingstechniek.
            </li>
            <li>
              UV-lak is een hoogglans laklaag. De gladde beschermlaag geeft een
              glossy uitstraling.
            </li>
            <li>
              SPOT UV-lak plaats je op een bepaald deel van het ontwerp,
              waardoor alleen deze delen een glanzende laag krijgen.
            </li>
            <li>
              Cold foil is een afwerkingsoptie die een zilverkleurige metallic
              uitstraling geeft. Deze techniek kan zowel op het hele drukvel
              worden aangebracht of op bepaalde delen van je ontwerp.
            </li>
            <li>
              Stansen laat je een stuk uit je ontwerp snijden. Dit kan in elke
              willekeurige vorm, maar met stansen kun je ook je gehele ontwerp
              in een bepaalde vorm laten snijden. Denk aan boeken met een
              speciale vorm in de kaft. Hierdoor valt je drukwerk nog meer op
              tussen het alledaagse papier.
            </li>
            <li>
              Boren spreekt voor zich, hiermee kan je je drukwerk voorzien van
              boorgaten bv. om het in een ringmap te steken of je laat gaten
              boren om een leuk effect te creëren.
            </li>
            <li>
              Rillen maakt een vouwlijn zodat je je drukwerk makkelijk kan
              plooien. Deze techniek lijkt op perforeren, maar de lijn is minder
              diep waardoor het papier niet scheurt.
            </li>
            <li>
              Perforeren zorgt voor een scheurlijn in je ontwerp, hierdoor kan
              je makkelijker een stuk van je ontwerp scheuren. Denk maar aan
              tickets voor een evenement.
            </li>
            <li>
              Rondhoeken zijn een leuk detail. Hierbij kan je kiezen voor 1 of
              meerdere hoeken die rond afgewerkt zijn.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Kracht;
