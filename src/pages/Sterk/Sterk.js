import React from "react";
import Header from "../../components/Header/Header";
import HeadImg from "../../images/worktable.jpg";
import Img1 from "../../images/Amazonlogo.jpg";
import Img2 from "../../images/cocacola.jpg";
import Img3 from "../../images/Fedexlogo.png";
import Img4 from "../../images/Beatslogo.png";
import { Helmet } from "react-helmet";

function Sterk() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Wat is het belang van een goed logo - Graphic Rhino"
        />

        <meta
          name="description"
          content="Waarom is een logo en een huisstijl belangrijk? Waar moet je allemaal rekening mee houden? Dat lees je in onze blogpost!"
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
          content="https://graphicrhino.be/blog/sterk-logo"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Wat is het belang van een goed logo - Graphic Rhino"
        />

        <meta
          property="og:description"
          content="Waarom is een logo en een huisstijl belangrijk? Waar moet je allemaal rekening mee houden? Dat lees je in onze blogpost!"
        />
      </Helmet>
      <Header image={HeadImg} title="HET BELANG VAN EEN GOED LOGO" />
      <div className="blg">
        <div className="container blg__container">
          <p>
            De branding, ook wel identiteit genoemd, van je bedrijf begint met
            een goed logo, maar dat is natuurlijk niet zo vanzelfsprekend als
            het klinkt. Een goed logo is simpel, herkenbaar, tijdloos,
            veelzijdig en relevant. Je voelt het al, er komt meer bij kijken dan
            je op het eerste zicht zou denken.
          </p>
          <h2 className="blg__title">Simpel</h2>
          <p>
            Een simpel ontwerp zorgt ervoor dat het logo sneller herkend wordt,
            veelzijdig is en belangrijkste van al, het logo blijft langer in het
            geheugen hangen. Een goed logo heeft een uniek kenmerk, maar dit mag
            niet te ver gaan.
          </p>
          <p>
            Enkele goede voorbeelden hiervan zijn het logo van Amazon en Fedex.
            de pijl in het logo van Amazon betekent dat er van ‘A’ tot ‘Z’
            online gewinkeld kan worden. De pijl stelt ook een glimlach voor. Al
            ooit opgemerkt dat er een pijl verstopt zit in het logo van Fedex?
            Je kan deze zien in de witruimte tussen E en X. Deze pijl staat voor
            de precisie en snelheid waarmee ze werken. Het logo van Beats by Dre
            ken je vast ook wel, maar is het je al opgevallen wat je hier in kan
            zien? Het logo lijkt simpel: gewoon een witte cirkel met een ‘b’
            erin. Maar de cirkel is meer dan alleen dat, namelijk een
            mensenhoofd. De ‘b’ moet de koptelefoon voorstellen.
          </p>
          <p>
            Zo zie je maar, een logo hoeft niet altijd moeilijk of vergezocht te
            zijn, een simpel logo kan evengoed.
          </p>
          <div className="blg__media">
            <img src={Img1} alt="" className="blg__logos" />
            <img src={Img3} alt="" className="blg__logos" />
            <img src={Img4} alt="" className="blg__logos" />
          </div>
          <h2 className="blg__title">Herkenbaar</h2>
          <p>
            Dit kenmerk ligt dicht bij het vorige, een simpel logo. Een
            doeltreffend logo is makkelijk te herkennen en ga je ook sneller
            onthouden. Probeer daarom ook zeker om je logo zo uniek mogelijk te
            maken. Zorg ervoor dat het voldoende opvalt in de massa.
          </p>
          <h2 className="blg__title">Tijdloos</h2>
          <p>
            Een doeltreffend logo moet niet alleen simpel en herkenbaar zijn,
            maar ook tijdloos. Je wil dat je bedrijf lang bestaat, maar liefst
            van al doe je dat ook met hetzelfde logo. Zorg er dus voor dat je
            logo niet alleen past in deze tijd en trends, maar dat het dat ook
            nog doet binnen 20 jaar.
          </p>
          <p>
            Een goed voorbeeld hiervan is het logo van Coca-Cola tegenover het
            logo van Pepsi. Pepsi heeft al veel verschillende logo’s gehad die
            duidelijk meegaan met de trends van de tijd, terwijl het logo van
            Coca-Cola nog altijd hetzelfde is sinds 1893.
          </p>
          <img
            src={Img2}
            alt=""
            className="blg__media"
            style={{ width: "70%" }}
          />
          <p>
            Vergeet ook niet, vaak veranderen van logo heeft ook veel nadelen.
            Om te beginnen is het vrij kostelijk om telkens een nieuw logo te
            laten ontwerpen. Verder heb je het risico dat je klanten je logo en
            dan ook je bedrijf niet meer gaan herkennen, om dit te voorkomen heb
            je de nodig reclame nodig, maar ook dit komt niet zonder
            prijskaartje.
          </p>
          <h2 className="blg__title">Veelzijdig</h2>
          <p>
            Een doeltreffend logo moet je overal kunnen gebruiken. Het ontwerp
            is best vectorieel, dit zorgt ervoor dat je het altijd kan vergroten
            zonder dat je kwaliteit verliest. Het logo moet ook zowel in een
            horizontaal als in een verticaal formaat gebruikt kunnen worden. Zo
            kan je het logo altijd plaatsen zowel op advertenties als op
            briefpapier, enveloppen etc., zonder dat je de boodschap achter je
            logo verliest. Stel jezelf ook enkele vragen bij het ontwerp van een
            logo:
          </p>
          <ul className="blg__list">
            <li>Kan mijn logo gebruikt worden in 1 kleur</li>
            <li>
              Is mijn logo nog leesbaar & herkenbaar als het zeer klein gedrukt
              is
            </li>
            <li>
              Verliest mijn logo geen kwaliteit als het op zeer groot formaat
              staat
            </li>
            <li>Kan mijn logo gedrukt worden op een donkere achtergrond</li>
          </ul>
          <p>
            Om een veelzijdig logo te creëren begin je best met een ontwerp in
            zwart-wit. Dit zorgt ervoor dat je de focus legt op het concept en
            de vorm. De kleuren volgen laten wel, dit is niet het belangrijkste
            punt bij een logo. Hou er ook rekening mee dat een logo in veel
            verschillende kleuren duurder uitkomt om te drukken dan een logo in
            2 kleuren, zeker op lange termijn.
          </p>
          <h2 className="blg__title">Relevant</h2>
          <p>
            Je logo moet relevant zijn voor je bedrijf en de sector waarin je je
            positioneert.
          </p>
          <p>
            Bv. Het logo voor een speeltuin is veel losser en kinderlijker dan
            het logo van een accountancy kantoor. Je logo hoeft ook niet per se
            weer te geven wat je bedrijf doet of verkoopt. Het logo van Maserati
            is ook geen auto, het logo van Samsung is ook geen gsm.
          </p>
          <p>
            Een logo is er om je bedrijf te identificeren en om er een merk rond
            te bouwen. Zorg ervoor dat je logo er professioneel uitziet. Je logo
            bepaalt het soort klanten dat je aantrekt, een logo dat er goedkoop
            uitziet gaat dan ook vaak niet de juiste klanten aantrekken.
          </p>
          <h2 className="blg__title">Prijskaartje</h2>
          <p>
            Een goed logo is zeker niet goedkoop, besteed er dus zeker de nodige
            tijd en budget aan. De eerste indruk die mensen krijgen van je
            bedrijf is namelijk via je logo. Het logo toont waar je voor staat,
            of je een groot of klein bedrijf bent, ook al is het niet zo, toch
            geeft het dit weer. Het is ook niet de bedoeling om elk jaar te
            veranderen van logo, integendeel zoals ik al eerder zei moet je logo
            vele jaren kunnen meegaan.
          </p>
          <p>
            Gebruik zeker ook geen stock beelden of illustraties voor je logo,
            zo houd je het origineel en uniek. Hetzelfde geldt voor online logo
            generators, deze zijn misschien goedkoop maar de kwaliteit laat ook
            vaak aan zijn wensen over
          </p>
          <h2 className="blg__title">Ontwerp Proces</h2>
          <p>
            Een logo komt niet in 1 2 3 tot stand. Hier gaat eerst een hoop
            research aan vooraf. De concurrenten worden grondig bekeken en ook
            hoe zij zichzelf profileren. Daarna wordt er gebrainstormd over het
            logo en volgen er wat grove schetsen. Vaak worden er een aantal
            verschillende opties uitgewerkt om te zien wat best past bij het
            bedrijf en de wensen van de klant. Als laatste stap wordt het
            gekozen logo verder uitgewerkt. Onderschat dus zeker niet het proces
            dat voorafgaat aan het ontwerpen van een logo. In research kruipt
            namelijk ook veel tijd en energie.
          </p>
          <p>
            Je logo is ook slechts de eerste stap. Hierop wordt later je
            volledige bedrijfsidentiteit op verder gebouwd. Zorg dus dat je logo
            zeker aan alle eisen voldoet en besteed er de nodige tijd aan.
            Vergeet ook nooit het verhaal dat achter je logo en bedrijf
            schuilgaat.
          </p>
          <p>
            Eens je een goed logo gekozen hebt kan je hier de juiste
            kleur(combinatie) voor kiezen. Vergeet hierbij zeker niet dat ook
            kleuren verschillende gevoelens kunnen opwekken. Elke kleur heeft
            namelijk zijn eigen gevoel en betekenis bv. Blauw wordt geassocieerd
            met rust en vrede, terwijl geel dan weer geluk en levensplezier
            opwekt. Indien je voor een kleurencombinatie gaat probeer dan ook
            enkele combinaties die niet alledaags zijn bv. Roze en donkerblauw.
            Hierdoor gaat je logo nog sneller in het oog springen.
          </p>
          <p>
            Nog enkele vragen die je jezelf kan stellen bij de keuze van je
            logo:
          </p>
          <ul className="blg__list">
            <li>Is het logo relevant voor ons bedrijf</li>
            <li>Is het logo geschikt voor de sector waarin we ons bevinden</li>
            <li>Is het logo simpel, niet te ingewikkeld</li>
            <li>Draagt het logo een duidelijke boodschap</li>
            <li>Is het logo leesbaar, herkenbaar en makkelijk te onthouden</li>
            <li>Is het logo binnen 10 jaar nog altijd even doeltreffend?</li>
            <li>
              Kan je het logo vergroten of verkleinen naar eender welk formaat
              zonder de boodschap te verliezen
            </li>
            <li>Kan je het logo zowel in kleur als in zwart-wit gebruiken?</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sterk;
