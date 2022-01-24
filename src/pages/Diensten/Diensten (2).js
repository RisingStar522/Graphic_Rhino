import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/diensten.jpg";
import Ser1 from "../../images/service-1.png";
import Ser2 from "../../images/service-2.png";
import Ser3 from "../../images/service-3.png";
import Ser4 from "../../images/service-4.png";
import Ser5 from "../../images/service-5.png";
import Ser6 from "../../images/service-6.png";
import Ser7 from "../../images/service-7.png";
import Ser8 from "../../images/service-8.png";
import Ser9 from "../../images/service-9.png";
import Ser10 from "../../images/service-10.png";
import Ser11 from "../../images/service-11.png";
import Ser12 from "../../images/service-12.png";
import Service from "../../components/Service/Service";
import { Helmet } from "react-helmet";

const title = "Wat wij bieden";
const text =
  "Offline? Online? Wij regelen met plezier beide voor jou! Hieronder vind je een overzicht van onze diensten terug. Hebben we je al helemaal overtuigd? Aarzel dan niet en neem contact op met ons!";

function Diensten() {
  const myRef = useRef(null);
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Een full service reclamebureau op afstand of bij jou op kantoor! - Graphic Rhino"
        />

        <meta
          name="description"
          content="Offline? Online? Wij regelen met plezier beide voor jou! Bij Graphic Rhino kan je terecht voor sterk grafisch ontwerp voor zowel drukwerk, sociale media tot websites en animaties."
        />

        <meta
          property="article:author"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta
          property="article:publisher"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta property="og:url" content="https://graphicrhino.be/diensten" />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Een full service reclamebureau op afstand of bij jou op kantoor! - Graphic Rhino"
        />

        <meta
          property="og:description"
          content="Offline? Online? Wij regelen met plezier beide voor jou! Bij Graphic Rhino kan je terecht voor sterk grafisch ontwerp voor zowel drukwerk, sociale media tot websites en animaties."
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
      <main className="diensten" ref={myRef}>
        <section className="services">
          <div className="container">
            <Service
              image={Ser1}
              name="Animaties"
              desc="Van een simpele logo animatie tot een heuse reclamevideo. Wij doen dat!"
            />
            <Service
              image={Ser2}
              name="Belettering"
              desc="Belettering. Ramen, voertuigen. Andere suggesties? Laat het weten, wij kunnen dat!"
            />
            <Service
              image={Ser3}
              name="Binnen & buiten reclame"
              desc="Van reclameborden voor buiten tot winkelinrichting"
            />
            <Service
              image={Ser4}
              name="Drukwerk"
              desc="Flyers, affiches, werfborden,... Wij regelen het allemaal!"
            />
            <Service
              image={Ser5}
              name="Evenementen"
              desc="Ja, ook het drukwerk van je evenement kunnen wij voorzien!"
            />
            <Service
              image={Ser6}
              name="Fotografie & video"
              desc="Productfotografie, how to videos…"
            />
            <Service
              image={Ser7}
              name="Grafisch ontwerp"
              desc="Branding, brochures, catalogi, you name it. Wij gaan ermee aan de slag!"
            />
            <Service
              image={Ser8}
              name="Textiel"
              desc="Van werkkledij tot promotiemateriaal. Van petje tot tote bag. Alles om er op en top piekfijn uit te zien geheel in lijn met jouw branding."
            />
            <Service
              image={Ser9}
              name="Online marketing"
              desc="Online campagnes? Die hebben voor ons geen geheimen!"
            />
            <Service
              image={Ser10}
              name="Promotie"
              desc="Drukwerk of campagnes nodig als promotie? We’ve got you covered!"
            />
            <Service
              image={Ser11}
              name="Verpakkingen"
              desc="Jouw product in een opvallende verpakking? Het kan!"
            />
            <Service
              image={Ser12}
              name="Websites"
              desc="Van een simpele one page bedrijfswebsite tot een top webshop. Laat van je horen, wij helpen je verder."
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Diensten;
