import React from "react";
import Header from "../../components/Header/Header";
import HeadImg from "../../images/jon-tyson-t2cp_cWMo3o-unsplash.jpg";
import Img1 from "../../images/motion-graphics-london.gif";
import Img2 from "../../images/Holla app.gif";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";

function Motion() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Motion graphics en animatie video’s uitgelegd - Graphic Rhino"
        />

        <meta
          name="description"
          content="Wat zijn motion graphics en waarom zou je ze gebruiken? Lees er alles over in onze blog en bekijk wat voorbeelden ter inspiratie!"
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
          content="https://graphicrhino.be/blog/motion-animatie"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Motion graphics en animatie video’s uitgelegd - Graphic Rhino"
        />

        <meta
          property="og:description"
          content="Wat zijn motion graphics en waarom zou je ze gebruiken? Lees er alles over in onze blog en bekijk wat voorbeelden ter inspiratie!"
        />
      </Helmet>
      <Header image={HeadImg} title="Motion/animatie" />
      <div className="blg">
        <div className="container blg__container">
          <h2 className="blg__title">Motion/animatie</h2>
          <p>
            Motion graphics, je vast beter bekend als animatievideo, is een
            grafisch ontwerp dat gecombineerd wordt met de kracht van animatie.
            Zo kan je leven geven aan je logo of een nog betere explainer video
            gaan maken. In dit soort video’s wordt er vaak gebruikt gemaakt van
            2D animatie, 3D gerenderde video, audio, voiceover of
            geluidseffecten en in sommige gevallen wordt er zelfs 360° video,
            virtual reality (VR) of augmented reality (AR) bij gebruikt.
          </p>
          <p>
            Maar wat maakt een animatievideo nu zo speciaal? Het is een mix van
            wat je doet voor de kijker, maar het helpt ook bij het vertellen van
            je merkverhaal. Animatievideo’s houden niet alleen de aandacht van
            je kijker vast, maar ze kunnen ook bepaalde gevoelens uitlokken door
            bv een passend muziekje of een krachtige voiceover, maar ook wat je
            toont heeft hier een grote impact op. Je hebt veel meer controle
            over je animatievideo dan dat je hebt bij het produceren van een
            video. Bij het produceren van een video hang je veel meer af van de
            acteurs, de set, het weer etc. Bij animatievideo’s heb je alleen
            maar een storyboard nodig.
          </p>
          <p>
            Maar dat is niet het enige voordeel van motion graphics, ze kunnen
            ook helpen om informatie simpeler voor te stellen zodat de kijker
            het makkelijker kan begrijpen. Sommige dingen zijn nu eenmaal
            eenvoudiger als je ze kan bekijken in een video, dan dat je de
            uitleg leest. Met visual storytelling kan je bijvoorbeeld makkelijk
            uitleggen hoe een product werkt of hoe het precies in elkaar zit of
            misschien wil je net data gaan weergeven op een duidelijke manier.
            Met motion graphics kan het allemaal.
          </p>
          <p>
            Het grote voordeel van (animatie)video’s is dat het een passieve
            beleving is. Wist je dat consumenten ongeveer 6u per week naar video
            kijken op sociale media? Dat is echt geen verrassing, weet je nog
            hoe blij je was als een leerkracht een video afspeelde tijdens de
            les? Dat maakt het begrijpen en opnemen van informatie niet alleen
            makkelijker, maar je hoeft ook niets te doen. Het enige wat je moet
            doen is op play drukken en de video bekijken en met de automatisch
            afspelende functies bij sommige social media platformen heb je zelfs
            de play knop al helemaal niet meer nodig.
          </p>
          <p>
            Nog een voordeel van video is dat je het makkelijk kan hergebruiken
            om de levensduur van je campagne langer te maken. Je kan
            bijvoorbeeld de video opdelen in verschillende delen om zo enkel een
            specifiek deel naar een van je doelgroepen te sturen of je plaatst
            dat specifieke deel maar op 1 van je social media platformen.
            Misschien past net dat ene deel van je video in je presentatie, maar
            de rest niet of duurt het geheel te lang.
          </p>
          <p>
            Animatievideo’s duren gemiddeld tussen de 30 seconden en 3 minuten,
            dit zorgt ervoor dat je impact meteen gebeurd. Zelfs als iemand maar
            10 seconden naar een video kijkt kan je al meer merkherkenbaarheid
            krijgen en kan het een kijker al aanzetten tot kopen. Door audio en
            beeld te combineren, maken bewegende beelden optimaal gebruik van de
            informatieverwerkingsmogelijkheden van mensen, zodat u meer kunt
            zeggen met minder inhoud. Wat je dus normaal in een lang artikel zou
            schrijven kan je weergeven in een korte video. Zo zijn motion
            graphics niet alleen handig, maar ze besparen je (potentiële)klant
            ook een hoop tijd.
          </p>
          <figure className="blg__media">
            <img src={Img1} alt="" className="gif" />
            <figcaption>
              <a
                target="_blank"
                href="https://www.columnfivemedia.com/6-cutting-edge-motion-graphic-examples"
                rel="noopener noreferrer"
              >
                Motion graphics set shapes and letters in motion. Design via
                Abigail Kim
              </a>
            </figcaption>
          </figure>
          <figure className="blg__media">
            <img src={Img2} alt="" className="gif" />
            <figcaption>Motion graphics app design by Kid Mindfreak</figcaption>
          </figure>
          <figure className="blg__media">
            <ReactPlayer
              url="https://vimeo.com/46892221"
              controls
              className="blg__video"
            />
            <figcaption>“Powering Agriculture” by USAID</figcaption>
          </figure>
          <figure className="blg__media">
            <ReactPlayer
              url="https://vimeo.com/75924498"
              controls
              className="blg__video"
            />
            <figcaption>
              “Explainer Video on Explainer Videos” by Column Five
            </figcaption>
          </figure>
          <figure className="blg__media">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=cDnDPjbLYDY"
              controls
              className="blg__video"
            />
            <figcaption>“No Food Wasted” by NBC Universal</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}

export default Motion;
