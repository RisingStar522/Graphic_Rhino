import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import HeadImg from "../../images/jakob-owens-CiUR8zISX60-unsplash.jpg";
import Info from "../../images/video-buyers-journey-infographic.jpg";

function Waarom() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Video en videoadvertenties van nabij bekeken - Graphic Rhino"
        />

        <meta
          name="description"
          content="Wat zijn de voordelen van videoadvertentie en welke soorten bestaan er allemaal? Lees er hier alles over!"
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
          content="https://graphicrhino.be/blog/waarom-video"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Video en videoadvertenties van nabij bekeken - Graphic Rhino"
        />

        <meta
          property="og:description"
          content="Wat zijn de voordelen van videoadvertentie en welke soorten bestaan er allemaal? Lees er hier alles over!"
        />
      </Helmet>
      <Header image={HeadImg} title="Waarom video" />
      <div className="blg">
        <div className="container blg__container">
          <h2 className="blg__title">Waarom video</h2>
          <p>
            Videoadvertenties worden steeds meer populair, maar werken ze echt?
            40% van de consumenten zegt dat video de kans vergroot dat ze een
            product gaan kopen via hun smartphone. Websitebezoekers hebben 64%
            meer kans om te kopen op een online winkelsite na het bekijken van
            een video. Bedrijven die video gebruiken, groeien 49% sneller dan
            degenen die dat niet doen. De cijfers spreken dus voor zich, maar
            waarom?
          </p>
          <p>
            Videoadvertenties zijn aantrekkelijker dan beeldadvertenties. De
            beweging van een video trekt altijd beter de aandacht van mensen dan
            een statisch beeld. De eerste taak van elke advertentie is om op te
            vallen, maar nog beter is als je advertentie hun aandacht ook even
            kan vasthouden. Hoe langer je de aandacht van potentiële klanten kan
            vasthouden, hoe groter de impact. Of je nu op zoek bent naar
            merkbekendheid, leads of verkoop, ze komen allemaal vaker voor als u
            de aandacht van potentiële klanten kan vasthouden.
          </p>
          <p>
            Video voelt ook persoonlijker aan, dan een statisch beeld, dit is
            dan weer positief in de relatie die je ophoudt tussen je merk en je
            klanten. Dit is ook de reden dat face 2 face videoadvertenties
            relatief goed werken voor servicegerichte bedrijven. Een klant gaat
            namelijk sneller met je willen samenwerken als ze het gevoel hebben
            dat ze je kennen én ze gaan hiervoor ook hogere prijzen willen
            betalen.
          </p>
          <p>
            Een andere manier voor het gebruiken van video is om je kennis weer
            te geven. Je kan op je website en je sociale media wel van de daken
            schreeuwen dat je een expert bent in je vakgebied, maar dat zorgt er
            niet voor dat mensen je gaan geloven. Het is makkelijk om je werk en
            je resultaten voor te stellen op je website of je sociale media,
            maar maak jij al video’s met advies voor je (potentiële) klanten?{" "}
          </p>
          <p>
            Video’s zijn ook een goede manier om klanten hun kennis over je
            product bij te schaven of om hun te tonen hoe ze je product best
            gebruiken of onderhouden. Stel nu je verkoopt buitenmeubelen, deze
            vragen uiteraard ook onderhoud, en ook al heb je hiervoor een
            assortiment producten, dat wil nog niet zeggen dat je klant ook weet
            hoe het moet of wat ze precies nodig hebben voor hun specifiek
            meubel. Je kan dit altijd weergeven in je handleiding, maar zeg nu
            zelf, wie houdt die handleiding bij en gaat daarin terugkijken?
            Mensen googlen alles tegenwoordig, maar zo kunnen ze wel
            terechtkomen op je how-to video’s rond onderhoud. Zo kan je niet
            alleen hun kennis bijschaven, maar ook nog eens extra producten
            verkopen!
          </p>
          <p>
            Je hebt dus verschillende soorten video, hieronder lijsten we ze nog
            even op:
          </p>
          <ul className="blg__list">
            <li>
              Explainers: deze geven uitleg rond je product en kunnen zowel
              helpen om een product samen te steken als om het onderhoud er van
              duidelijk uit te leggen
            </li>
            <li>
              Interviews: dit bevordert de conversatie tussen beide kanten
            </li>
            <li>
              Product reviews/demo video’s: je kan je brand ambassadors vragen
              om dit soort video’s te maken in ruil voor gratis producten. Het
              is ook een goede manier van adverteren en kan je kennis over je
              markt bijschaven.
            </li>
            <li>
              Live video: dit bevordert vooral het persoonlijk contact met je
              doelgroep en het werkt vrij goed op sociale media
            </li>
            <li>
              Videoadvertenties: deze zijn ideaal als teaser van een nieuw
              product om of je merkverhaal en boodschap kort voor te stellen
            </li>
          </ul>
          <p>
            Let wel op, je video’s hou je best kort om de aandacht van je
            potentiële klant vast te houden, met uitzondering van explainers.
            Voor Instagram blijf je best onder de 30 seconden, bij Twitter is
            dit 45 seconden en voor Facebook is dit 1 minuut. Bij Youtube hebben
            mensen vaak wat meer aandacht, hier kan je tot 2 minuten gaan.
          </p>
          <p>
            YouTube is vast het eerste platform waar je aan denkt bij video, en
            dat is niet zomaar. Wist je trouwens dat YouTube de werelds tweede
            grootste zoekmachine is en het is eigendom van de eerste, Google
            uiteraard. Het heeft een publiek van maar liefst 1,9 biljoen
            maandelijkse gebruikers. Ze bereiken zelfs meer 18 - 49 jarigen dan
            elk ander tv-kabelnetwerk (bron: Vidyard)
          </p>
          <p>
            Hieronder vind je nog een interessante infographic (bron: Vidyard)
          </p>
          <img src={Info} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </>
  );
}

export default Waarom;
