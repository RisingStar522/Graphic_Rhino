import React, { useRef, useEffect } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/about.jpg";
import TextBlock from "../../components/TextBlock/TextBlock";
import Img1 from "../../images/about-1.jpg";
import Img2 from "../../images/about-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const title = "LEREN WE ELKAAR WAT BETER KENNEN?";
const text =
  "Zelf ben ik helemaal geen fan van koffie, maar weet dat wij je heel graag ontvangen en praten over al je gekke ideeën en vragen. Je kan bij ons terecht via mail, chat, telefonisch, of uiteraard, face2face. En hé, ik maak graag een koffie voor je dan!";
const text1 = (
  <>
    <p>
      Wij zijn dan wel een reclamebureau, maar niet in de zin die jij verwacht!
      Wij gaan all the way voor jouw project en dat doen we niet alleen vanuit
      onze vertrouwde kantoorruimte, maar dat kan ook vanuit jouw eigen bedrijf.
    </p>
    <br />
    <p>
      Ja, je hoort het goed, je kan ons ook vanuit jouw eigen bedrijf laten
      werken. Op die manier hoeven we niet heen en weer te bellen of mailen maar
      kunnen we sneller ontwerpen aftoetsen en, ook niet onbelangrijk, zo leren
      we elkaar wat beter kennen.
    </p>
  </>
);
const text2 = (
  <>
    <p>
      Een neushoorn is grijs, maar moet daarom de volledige huisstijl grijs
      zijn? Zeker niet! Grijs past voor een neushoorn, maar een neushoorn
      gecombineerd met een gek kleur valt veel meer op.
    </p>
    <br />
    <p>
      Waarom zou je voor Graphic Rhino kiezen? Wel, bij Graphic Rhino kan je
      terecht voor strak design met een (serieuze) hoek af!{" "}
    </p>
    <br />
    <p>
      Net als een stevige neushoorn leveren wij sterk grafisch werk! Wij gaan
      voor het niet alledaagse en bieden een grote variatie aan mogelijkheden.
    </p>
  </>
);

const text3 = (
  <>
    <p>
      Wij focussen op tijdloze ijzersterke designs en we geven met plezier jouw
      ideeën vorm. Oh en daarnaast zijn we ook vrij flexibel, jouw project last
      minute opnemen in onze agenda? Dat is geen enkel probleem!{" "}
    </p>
    <br />
    <p>
      Klanten staan bij ons op nummer 1! Je kan bij ons altijd rekenen op een
      persoonlijke aanpak gecombineerd met een portie eerlijkheid en respect.
      Wij draaien niet rond de pot en zeggen rechtuit of je project haalbaar is
      en of het niet nog beter kan.
    </p>
    <br />
    <p>
      We helpen je graag! Maar dan ook echt graag hé! Daarom kan je bij ons niet
      alleen terecht voor een nieuw ontwerp. Bekijk ook eens onze andere
      vakgebieden waarin we je zeer graag verder adviseren.{" "}
    </p>
  </>
);

function About() {
  const myRef = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, anchorPlacement: "center-bottom" });
  }, []);
  return (
    <>
      <Helmet>
        <meta name="title" content="Over ons - Graphic Rhino" />

        <meta
          name="description"
          content="Net als een stevige neushoorn leveren wij sterk grafisch werk! Wij gaan voor het niet alledaagse en bieden een grote variatie aan mogelijkheden."
        />

        <meta
          property="article:author"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta
          property="article:publisher"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta property="og:url" content="https://graphicrhino.be/over-ons" />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta property="og:title" content="Over ons - Graphic Rhino" />

        <meta
          property="og:description"
          content="Net als een stevige neushoorn leveren wij sterk grafisch werk! Wij gaan voor het niet alledaagse en bieden een grote variatie aan mogelijkheden."
        />
      </Helmet>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="contacteer ons"
        link="/contact"
        scrollTo={myRef}
      />
      <main className="about" id="about" ref={myRef}>
        <div className="container">
          <TextBlock anim="fade-right" title="reclamebureau" content={text1} />
          <div className="about__img" data-aos="fade-right">
            <img src={Img1} alt="About" />
          </div>
          <TextBlock
            anim="fade-right"
            title="what's in a name"
            content={text2}
          />
          <div className="about__img" data-aos="fade-right">
            <img src={Img2} alt="About" />
          </div>
          <TextBlock anim="fade-right" title="onze focus" content={text3} />
        </div>
      </main>
    </>
  );
}

export default About;
