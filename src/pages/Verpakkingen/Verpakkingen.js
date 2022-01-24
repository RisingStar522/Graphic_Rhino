import React from "react";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import Header from "../../components/Header/Header";
import HeadImg from "../../images/boxed-water-is-better-7mr6Yx-8WLc-unsplash.jpg";

function Verpakkingen() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Wat zijn de voordelen van een verpakking met je logo? - Graphic Rhino"
        />

        <meta
          name="description"
          content="Wat zijn de voordelen van een verpakking met je logo of in stijl van je branding? Lees er alles over in onze blog en bekijk wat voorbeelden ter inspiratie!"
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
          content="https://graphicrhino.be/blog/verpakkingen"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Wat zijn de voordelen van een verpakking met je logo? - Graphic Rhino"
        />

        <meta
          property="og:description"
          content="Wat zijn de voordelen van een verpakking met je logo of in stijl van je branding? Lees er alles over in onze blog en bekijk wat voorbeelden ter inspiratie!"
        />
      </Helmet>
      <Header image={HeadImg} title="Verpakkingen" />
      <div className="blg">
        <div className="blg__container container">
          <h2 className="blg__title">Verpakkingen</h2>
          <p>
            Zou ik extra betalen voor een verpakking met mijn logo? Hoeft het
            echt in mijn huisstijl te passen? Het antwoord is ja!
          </p>
          <p>
            Je verpakking kan je zien als een verlengde van je merk en het
            verhoogt ook nog eens je herkenbaarheid. Een goede verpakking toont
            aan je klanten dat je hun ervaring waardeert. Extra aandacht
            besteden aan die laatste interactie bevordert de merkloyaliteit die
            je nodig hebt om klanten terug te laten keren naar jouw merk. Een
            klant hecht niet alleen waarde aan hun ervaring met een bedrijf,
            maar ook aan hun ervaring met hun producten.
          </p>
          <p>
            Wist je dat 56% van de Europese consumenten hun nieuwe producten
            ontdekt in de winkel? Een consument is meer geïnteresseerd in een
            verpakking die duidelijk je merk en zijn boodschap weergeeft, dan in
            een verpakking die dezelfde stijl heeft als alle andere
            verpakkingen. Overspoel je (potentiële) klant ook niet met
            informatie.{" "}
          </p>
          <p>
            Consumenten geven de voorkeur aan merken die zich niet alleen willen
            verbinden met de consument, maar hen ook een beleving kunnen
            bezorgen. Zo heeft Pizzahut een pizzadoos gemaakt die ook werkt als
            stereo systeem die je via bluetooth kan verbinden met je smartphone
            of laptop.
          </p>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=7H7RkIzNCJs"
            controls
            width="100%"
            height="100%"
            className="blg__media"
          />
          <p>
            Vergeet ook niet dat mensen tegenwoordig overspoeld worden op social
            media en in zoekmachines met advertenties van concurrenten. Kijk
            maar naar het virtueel schap van producten in de shop functie van
            Facebook, Instagram en Google. Je wilt ook op die plaatsen in het
            oog springen zodat je (potentiële) klant niet alleen in de winkel
            overtuigd wordt, maar ook online.
          </p>
          <p>
            Vooral voor e-commercebedrijven is sociale media al een centraal
            onderdeel van hun marketing, en ja ook hierbij kan je verpakking
            helpen! Kijk maar naar het virtueel schap van producten in de shop
            functie van Facebook, Instagram en Google, ook hier wil je de
            aandacht van je (potentiële) klant krijgen, net zoals je in een
            winkel wil. Omdat ze je producten alleen zien voordat ze ze kopen is
            het belangrijk dat je verpakking duidelijk je merk en de boodschap
            van je merk weergeeft alsook informatie over het product, maar zorg
            dat je de (potentiële) klant ook niet overspoeld met informatie!
          </p>
          <p>
            Maar looks zijn niet alles! Vergeet de functie van je verpakking
            niet, het belangrijkste is dat je product beschermd is! Stel dat je
            product beschadigd geleverd wordt bij je klant, dan doet het er niet
            meer toe hoe mooi je verpakking was. Begin bij de basics en eens
            deze goed zitten kan je denken aan de look & feel van je verpakking.
            Hetzelfde geld voor verpakkingen die moeilijk zijn om weg te gooien,
            niet recycleerbaar zijn of te complex zijn om uit elkaar te halen
            denk hierbij maar aan de vaak gebruikte blisterverpakkingen met
            harde plastic rond je product en daarrond nog eens karton.
          </p>
          <p>
            Je klant kan ook bepaalde waarden aan koppelen aan je verpakking bv
            Edgard & Cooper houdt van de natuur en ze tonen dit ook duidelijk in
            hun verpakkingen, deze zijn namelijk volledig biologisch afbreekbaar
            én door hun leuke ontwerpen springen ze altijd meteen in het oog. Zo
            zien klanten hun merk niet alleen als hondeneten, maar hebben ze ook
            het gevoel dat ze de wereld vooruit helpen door dierenvoeding te
            kopen van een merk die zich inzet voor de natuur. Het is goed om
            merkwaarden te hebben, maar als je ze ook nog eens duidelijk waar
            kan maken naar je klanten toe ga je ook een pak meer vertrouwen, en
            dus ook merkloyaliteit, creëren.
          </p>
          <p>
            Conclusie, je verpakking draagt niet alleen bij aan de bescherming
            van het product, maar het is ook een essentieel onderdeel van je
            merkverhaal en de prestaties van je merk. Merkverpakkingen zijn een
            effectieve en belangrijke marketingtool voor reclame, zowel online
            als offline, en worden ook gebruikt als een belangrijk medium voor
            merkloyaliteit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Verpakkingen;
