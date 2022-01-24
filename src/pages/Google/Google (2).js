import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import HeadImg from "../../images/markus-winkler-afW1hht0NSs-unsplash.jpg";
import Img1 from "../../images/Schermafbeelding 2020-10-27 om 22.23.40.jpg";
import Img2 from "../../images/Schermafbeelding 2020-10-27 om 22.24.07.jpg";

function Google() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Wat is Google Mijn Bedrijf? - Graphic Rhino"
        />

        <meta
          name="description"
          content="Wat is Google Mijn Bedrijf en hoe zorgt het ervoor dat je beter vindbaar bent online? Lees er hier meer over!"
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
          content="https://graphicrhino.be/blog/google-mijn-bedrijf"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Wat is Google Mijn Bedrijf? - Graphic Rhino"
        />

        <meta
          property="og:description"
          content="Wat is Google Mijn Bedrijf en hoe zorgt het ervoor dat je beter vindbaar bent online? Lees er hier meer over!"
        />
      </Helmet>
      <Header image={HeadImg} title="Google Mijn Bedrijf" />
      <div className="blg">
        <div className="container blg__container">
          <h2 className="blg__title">Google Mijn Bedrijf</h2>
          <p>
            Google Mijn Bedrijf geeft je de mogelijkheid om je bedrijf op hun
            platform te plaatsen met de correcte informatie. Google maar eens
            ‘Graphic Rhino’, dan zie je op je rechterkant van je scherm hoe
            Google Mijn Bedrijf je zaak weergeef.
          </p>
          <img className="blg__media" src={Img1} alt="" />
          <img className="blg__media" src={Img2} alt="" />
          <p>
            Op deze manier zien mensen niet alleen waar je bedrijf zich bevindt,
            maar ook wat de openingsuren zijn, je telefoonnummer, je website
            etc. Klanten kunnen zelfs een recensie achterlaten die andere
            (potentiële) klanten dan kunnen lezen. Het beste van al? Google Mijn
            Bedrijf is helemaal gratis! Je hoeft alleen maar een account aan te
            maken voor Google en zo kan je jezelf ook verbinden met consumenten
            op andere Google platformen.
          </p>
          <p>
            Eens je Google Mijn Bedrijf opgezet is kan je ook de prestaties zien
            zoals hoeveel weergaven je hebt zowel in zoekresultaten als in
            Google Maps, maar je kan ook zien hoeveel mensen je gegoogeld
            hebben, hoeveel er doorklikken naar je website etc.
          </p>
          <p>
            Wat kan je nu allemaal doen met Google Mijn Bedrijf? Je kan de
            online informatie van je bedrijf up to date houden, je kan
            communiceren met je klanten door foto’s van je bedrijf of producten
            te plaatsen en je kan reviews verzamelen van je klanten of er op
            reageren. Je kan ook nieuwe klanten werven door de online weergave
            van je bedrijf te verbeteren, klanten naar je website te verwijzen
            en wanneer je klaar bent kan je ook kiezen voor locatie gebaseerde
            advertenties door de slimme campagnes in Google Ads te gebruiken,
            hierdoor kan je een nog grotere doelgroep bereiken.
          </p>
          <p>
            Let op dit is wel enkel van toepassing op bedrijven die een fysieke
            winkel hebben of een bedrijf met een servicegebied, dit is niet van
            toepassing bij bedrijven die uitsluitend online actief zijn. Indien
            je enkel online actief bent, dan kan je wel nog steeds aan de slag
            met de slimme campagnes.
          </p>
          <p>Volg deze stappen om je aan te melden bij Google Mijn Bedrijf:</p>
          <ol className="blg__list">
            <li>
              Log in bij &nbsp;
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://business.google.com/?skipLandingPage=true&gmbsrc=ww-ww-et-gs-z-gmb-v-z-h~bhc-core-umybb"
              >
                Google Mijn Bedrijf
              </a>
            </li>
            <li>
              Log in via je Google account of maak een account en klik op
              volgende.
            </li>
            <li>
              Geef nu het adres van je bedrijf of keten in. Je kan ook gevraagd
              worden om een marketing te plaatsen op de correcte locatie op de
              kaart. Indien je bedrijf in een servicegebied werkt en geen
              fysieke locatie heeft kan je ook het gebied vermelden.
            </li>
            <li>
              Kies of je je bedrijfslocatie wilt weergeven op Google Maps{" "}
              <ol className="blg__list">
                <li>
                  Indien je services aan klanten verleent op je bedrijfsadres
                  geef je het bedrijfsadres op en klik op volgende. Indien je
                  ook services aan klanten verleent buiten je bedrijfsadres kan
                  je eveneens je servicegebieden vermelden.
                </li>
                <li>
                  Indien je geen services verleent aan klanten op je
                  bedrijfsadres, geef je je bedrijfsadres op en klik onderaan op
                  ‘ik lever producten en services aan mijn klanten’ en klik
                  volgende, vermeldt hier je servicegebieden en klik op
                  volgende.
                </li>
              </ol>
            </li>
            <li>
              Zoek en selecteer je bedrijfscategorie, je kan ook een meer
              specifieke categorie kiezen indien van toepassing en klik volgende
            </li>
            <li>
              Geef je telefoonnummer en/of de website van je bedrijf op en klik
              op voltooien. Je hebt ook de mogelijkheid om een gratis website
              aan te maken op basis van je informatie. We raden je aan voor elke
              locatie een afzonderlijk telefoonnummer of specifieke winkelpagina
              op te geven in plaats van 1 centraal callcenter.
            </li>
            <li>
              Selecteer een verificatieoptie, indien je dit later wilt doen klik
              je op ‘later verifiëren’
            </li>
          </ol>
          <p>
            Je moet ook bevestigen of je bedrijfsinformatie correct is. Het is
            belangrijk eens dit geverifieerd is dat je profiel klaar is om live
            te gaan zodat klanten je kunnen terugvinden op deze manier. Onjuiste
            informatie kan je ook altijd nog bewerken of bv later je
            openingsuren wijzigen.
          </p>
        </div>
      </div>
    </>
  );
}

export default Google;
