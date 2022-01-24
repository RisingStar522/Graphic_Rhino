import React from "react";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player/lazy";
import Header from "../../components/Header/Header";
import HeadImg from "../../images/dj-johnson-tgoO5H81nrU-unsplash.jpg";

function Buitenreclame() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Tips en inspiratie rond buitenreclame - Graphic Rhino"
        />

        <meta
          name="description"
          content="Wat is buitenreclame en waarom zou je ervoor kiezen? Dat lees je allemaal in onze blog erover!"
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
          content="https://graphicrhino.be/blog/buitenreclame"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Tips en inspiratie rond buitenreclame - Graphic Rhino"
        />

        <meta
          property="og:description"
          content="Wat is buitenreclame en waarom zou je ervoor kiezen? Dat lees je allemaal in onze blog erover!"
        />
      </Helmet>
      <Header image={HeadImg} title="Buitenreclame" />
      <div className="blg">
        <div className="container blg__container">
          <h2 className="blg__title">Buitenreclame</h2>
          <p>
            Buitenreclame is reclame dat consumenten bereikt als ze onderweg
            zijn, ze zien het overal waar ze ook naartoe gaan, bv billboard,
            bushalte, reclamebord, winkelkarren, voetbalveld, reclamevoertuigen
            etc. Buitenreclame is ook niet altijd geprint, er is ook digitale
            buitenreclame. Hierbij wordt vaak gebruik gemaakt van digitale
            billboards. Bij digitale billboards worden er vaak verschillende
            advertenties weer gegeven die na elkaar afgespeeld worden, hierbij
            blijft elke advertentie 6 tot 8 seconden zichtbaar.
          </p>
          <p>
            Het belangrijkste voordeel van buitenreclame is dat je het niet
            zomaar kan afzetten, het is altijd en overal zichtbaar. Op tv kan je
            een andere zender kiezen of doorspoelen, bij de radio kan je ook een
            andere zender kiezen of je eigen muziek afspelen, maar buitenreclame
            kan je niet gaan doorspoelen. Dit is vast de enige plaats waar
            consumenten de reclame niet kunnen gaan controleren. Mensen
            spenderen ook het grootste deel van hun tijd buiten, mensen zijn
            vaak onderweg naar of van het werk of ze gaan sporten, dus waarom
            zou je hier geen gebruik van maken?
          </p>
          <p>
            De belangrijkste vorm van buitenreclame voor lokale winkels en
            kleine bedrijven is nog altijd een reclamebord aan hun eigen gevel.
            Vergeet niet van ook hier je huisstijl en je merkboodschap duidelijk
            weer te geven!
          </p>
          <p>
            Heb je nog enkele cijfers nodig om overtuigd te zijn van
            buitenreclame? 71% van de mensen die een billboard zien onthouden de
            advertentie er van, 31% bezoekt het bedrijf tijdens de week waarin
            ze de billboard advertentie gezien hebben, 24% bezoekt het bedrijf
            op dezelfde dag als waarin ze de billboard advertentie gezien
            hebben.
          </p>
          <p>
            Ook bij buitenreclame kan je gericht je doelgroep bereiken. Data
            rond verkeerspatronen kan ervoor zorgen dat je een nog grotere groep
            mensen bereikt en demografische gegevens van de locatie kunnen
            garanderen dat je de juiste groep mensen bereikt.
          </p>
          <p>
            De meest effectieve vormen van buitenreclame zijn billboards, zowel
            geprint als digitaal, soms kan je ze zelfs terugvinden op een bus of
            tram! Een nieuwe vorm van billboards hebben zelf geïntegreerde
            interactiviteit door VR of AR, bv.
          </p>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=5TZmQPdhpak"
            width="100%"
            height="100%"
            controls
            className="blg__media"
          />
          <p>
            Andere vormen van buitenreclame POS displays die je vaak aan de
            kassa ziet, reclame in een bus of tram. Maar ook de reclame die je
            ziet hangen aan de etalage van een winkel met kortingen is heel
            effectief!
          </p>
        </div>
      </div>
    </>
  );
}

export default Buitenreclame;
