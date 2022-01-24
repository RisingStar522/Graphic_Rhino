import React from "react";
import Header from "../../components/Header/Header";
import Image from "../../images/portfolio6.jpg";
import Logo from "../../images/Het_Lijsternest_logo.png";
import Img2 from "../../images/Het_Lijsternest_vouwmap_1.jpg";
import Img3 from "../../images/Het_Lijsternest_vouwmap_2.jpg";
import Img4 from "../../images/Het_Lijsternest_vouwmap_3.jpg";
import Img5 from "../../images/Het_Lijsternest_vouwmap_4.jpg";
import Img6 from "../../images/Het_Lijsternest_informatiefiche.png";
import Img7 from "../../images/Het_Lijsternest_magazine_advertentie.jpg";
import Img8 from "../../images/Het_Lijsternest_flyer evenement.png";
import Img9 from "../../images/Het_Lijsternest_verpakking.jpg";
import ImageGallery from "react-image-gallery";
import { Helmet } from "react-helmet";

const images = [
  {
    original: Img3,
    thumbnail: Img3,
  },
  {
    original: Img4,
    thumbnail: Img4,
  },
  {
    original: Img5,
    thumbnail: Img5,
  },
];

function Het() {
  return (
    <>
      <Helmet>
        <meta name="title" content="Het Lijsternest, Ingooigem" />

        <meta
          name="description"
          content="Het Lijsternest werd in een nieuw jasje gestopt voor onze eindwerk opdracht, van branding tot promotiemateriaal en animatie. Hoe we dat aangepakt hebben? Dat lees je hier!"
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
          content="https://graphicrhino.be/cases/het-lijsternest"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta property="og:title" content="Het Lijsternest, Ingooigem" />

        <meta
          property="og:description"
          content="Het Lijsternest werd in een nieuw jasje gestopt voor onze eindwerk opdracht, van branding tot promotiemateriaal en animatie. Hoe we dat aangepakt hebben? Dat lees je hier!"
        />
      </Helmet>
      <Header image={Image} title="HET LIJSTERNEST, INGOOIGEM" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Logo} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">HET LIJSTERNEST, INGOOIGEM</div>
            <p>
              CHet Lijsternest is het huis van de Vlaamse schrijver Stijn
              Streuvels, pseudoniem voor Frank Lateur. Het huis werd opgericht
              in 1905. Streuvels leefde en werkte er tot aan zijn dood in 1969.
              Hier schreef hij meesterwerken zoals ‘De Vlaschaard’, ‘Het leven
              en de dood in de ast’, ‘Prutske’ en ‘De teleurgang van de
              Waterhoek’. Na de dood van zijn echtgenote heeft de Provincie
              West-Vlaanderen in 1977 het goed aangekocht en hersteld. De woning
              bleef integraal bewaard en werd als museum ingericht.
            </p>
            <p>
              Vanaf 28 maart 1980 werd het woonhuis opengesteld voor het brede
              publiek als een schrijversmuseum. Na een grondige renovatie kent
              het Lijsternest nu een dubbele functie: van april tot september
              wordt het Lijsternest opengesteld voor het brede publiek, van
              oktober tot maart fungeert het huis als een schrijversresidentie.
            </p>
            <p>
              Als opdracht voor mijn eindwerk moest ik een volledig nieuwe
              huisstijl ontwerpen voor Het Lijsternest. De eerste stap in de
              opdracht was het maken van een voorbereidend dossier. Hierin
              bespreek ik het museum en Stijn Streuvels. Erna heb ik de
              bestaande huisstijl en de doelgroep van het museum geanalyseerd.
              Als laatste stap heb ik de huisstijl van een concurrent bekeken,
              een planning gemaakt en een moodboard.
            </p>
          </div>
          <iframe
            title="het"
            src="https://indd.adobe.com/embed/78921c67-543d-4a9f-bb2b-e163360e677d?startpage=1&allowFullscreen=true"
            width="525px"
            height="371px"
            frameborder="0"
            allowfullscreen=""
            className="grid-full"
          ></iframe>
          <img src={Img2} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Na het voorbereidend dossier ben ik begonnen met het logo. Voor de
              rest van de huisstijl kon ik dan terugvallen naar de stijl van het
              logo. Ik heb gekozen voor een strakke, moderne stijl gecombineerd
              met een geometrische vogel.
            </p>
            <p>
              Na het logo ging ik aan de slag met de rest van de huisstijl.
              Hiervoor begon ik eerst aan een visitekaartje. Ik koos voor een
              originele voorkant met een geometrisch patroon als omranding.
              Hierna volgde de groetenkaart, het briefpapier, de factuur en de
              enveloppen. Later kwamen hier nog een vouwmap, brochures en
              dergelijke bij.
            </p>
            <p>
              Een huisstijl kan natuurlijk niet zonder huisstijlgids, dit was
              mijn volgende stap. Hierin heb ik het over de lettertypes die
              mogen gebruikt worden, welke kleuren wel en niet kunnen. Maar ik
              heb het ook over hoe je het logo wel en niet mag gebruiken en hoe
              de verschillende onderdelen van de huisstijl er moeten uitzien
            </p>
            <p>
              De vouwmap wou ik zo simpel mogelijk houden. Ik heb de kleuren van
              de huisstijl opnieuw gebruikt gecombineerd met veel wit om het
              geheel wat luchtiger te maken. Zo komt het logo ook beter uit.
            </p>
          </div>
          <div className="grid-full">
            <ImageGallery
              items={images}
              showBullets
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>
          <img src={Img6} className="case-img" alt="" />
          <div className="case-content">
            <p>
              Na de huisstijl volgde er een informatiebrochure. Het hoofddoel
              van deze brochure is om potentiële bezoekers te informeren en hen
              warm te maken voor het museum. Verder zie je ook de openingsuren
              en tarieven van het museum. De opmaak van deze brochure is ook
              weer zo strak en modern mogelijk. De informatiebrochure is gemaakt
              voor druk, maar er is ook een interactieve iPad versie
              beschikbaar.
            </p>
            <p>
              De volgende stap was een informatiefiche, op deze fiche zie je
              enkel de openingsuren en de tarieven. De stijl hiervan is opnieuw
              strak en modern. Ook hier leg ik de nadruk weer op het lichtblauw,
              dit zorgt voor een frisse tint en maakt het geheel ook niet te
              zwaar.
            </p>
          </div>
          <div className="grid-full">
            <iframe
              title="het2"
              src="https://indd.adobe.com/embed/36b8f6fc-4208-45af-8663-5baf8cfff4dc?startpage=1&allowFullscreen=true"
              width="525px"
              height="371px"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
          <img src={Img7} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Een van de laatste onderdelen van mijn eindwerk was het opmaken
              van advertenties. De eerste advertentie mocht in kleur, het is de
              bedoeling om deze in een magazine te plaatsen. De advertentie gaat
              over een evenement in het museum De tweede advertentie is in
              zwart-wit, want deze advertentie wordt in een krant geplaatst. Dit
              is eigenlijk minder een advertentie, het is meer een vacature om
              nieuwe medewerkers te vinden voor Het Lijsternest.
            </p>
          </div>
          <img src={Img8} className="case-img" alt="" />
          <div className="case-content">
            <p>
              Om het geheel af te sluiten heb ik nog wat reclame materiaal
              gemaakt voor het evenement in Het Lijsternest. Dit begon met een
              affiche en een flyer die qua stijl volledig samenhangt met de
              huisstijl. Bij een evenement horen ook tickets. Het inkomticket
              heeft een scheurstrook en barcode. Ook dit ontwerp heeft een
              strakke stijl.
            </p>
          </div>
          <div className="grid-full">
            <iframe
              title="het3"
              src="https://indd.adobe.com/embed/a9b35dc5-9471-41a4-9837-d19d5ac6aee7?startpage=1&allowFullscreen=true"
              width="525px"
              height="371px"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
          <img src={Img9} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Als extra heb ik nog een bord gemaakt om mensen in de juiste
              richting te sturen, dit leek me wel handig voor het evenement.
              Verder maakte ik nog een vlag, t-shirt, ideeënbus en een zakje
              voor hun museumshop. Ook dit is allemaal volledig in de huisstijl.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Het;
