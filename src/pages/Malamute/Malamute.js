import React from "react";
import Image from "../../images/portfolio3.jpg";
import Img1 from "../../images/malamute-1.png";
import Img2 from "../../images/malamute-2.png";
import Img3 from "../../images/malamute-3.png";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";

function Malamute() {
  return (
    <>
      <Helmet>
        <meta name="title" content="Malamute Matters, Groot-Brittannië" />

        <meta
          name="description"
          content="We doen ook vrijwilligerswerk, zo maken we alle ontwerpen voor Malamute Matters, van social media visuals tot brochures. Benieuwd wat we nog allemaal ontwerpen voor hen? Dat lees je hier!"
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
          content="https://graphicrhino.be/cases/malamute-matters"
        />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Malamute Matters, Groot-Brittannië"
        />

        <meta
          property="og:description"
          content="We doen ook vrijwilligerswerk, zo maken we alle ontwerpen voor Malamute Matters, van social media visuals tot brochures. Benieuwd wat we nog allemaal ontwerpen voor hen? Dat lees je hier!"
        />
      </Helmet>
      <Header image={Image} title="MALAMUTE MATTERS, GROOT-BRITTANNIË" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">MALAMUTE MATTERS, GROOT-BRITTANNIË</div>
            <p>
              Malamute Matters is een liefdadigheidsinstelling in
              Groot-Brittannië. Ze zamelen geld in voor honden en sturen dit
              naar verschillende goede doelen. Deze goede doelen zijn vaak
              asielen die een noodgeval binnenkrijgen en het geld niet hebben om
              de hond te helpen, soms zijn het ook asielen die problemen hebben
              met het betalen van hun vaste kosten. Ze steunen ook goede doelen
              die honden weghalen in Azië die bedoeld zijn om op te eten tijdens
              eetfestijnen. Ze zamelen vooral geld in via acties op hun Facebook
              pagina en verkoop via hun webshop.
            </p>
          </div>
          <img src={Img2} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Zelf werk ik als vrijwilliger voor Malamute Matters en design ik
              ook vaak voor hen. Een van de dingen die ik meermaals per jaar mag
              ontwerpen zijn de Rescue Tails, dit is een folder met een paar van
              de honden die ze geholpen hebben. Hierin kan je dan het verhaal
              lezen van de hond, hoe ze er aan toe waren, hoe ze gered werden en
              hoe het nu met ze is.
            </p>
          </div>
          <div className="grid-full">
            <iframe
              title="m1"
              src="https://indd.adobe.com/embed/8b449c27-bfba-4c3e-9534-497506fd3531?startpage=1&allowFullscreen=true"
              width="525px"
              height="371px"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="grid-full">
            <iframe
              title="m2"
              src="https://indd.adobe.com/embed/c52e8280-8fe9-4c11-a4ff-e9c030f8623c?startpage=1&allowFullscreen=true"
              width="525px"
              height="371px"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="grid-full">
            <iframe
              title="m3"
              src="https://indd.adobe.com/embed/e44cfc41-c2e2-4070-9be5-dd94c34986de?startpage=1&allowFullscreen=true"
              width="525px"
              height="371px"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
          <img src={Img3} className="case-img" alt="" />
          <div className="case-content">
            <p>
              Verder heb ik ook een formulier opgemaakt dat verstuurd wordt in
              combinatie met de ‘donation pack’ folder. Dit bevat alle
              informatie om potentiële sponsers te overtuigen om hen te helpen
              en toont ook zeer duidelijk wat we doen.
            </p>
            <p>
              Zoals ik al eerder verteld heb doen ze ook vaak competities op
              Facebook. Voor elke competitie of event wordt er een banner
              ontworpen om mensen hun aandacht te trekken. De banner bevat
              altijd informatie rond het event en in de Facebook post bij de
              banner wordt er ook altijd extra informatie gegeven.
            </p>
            <p>
              Malamute Matters Een van de laatste dingen die ik heb gemaakt voor
              Malamute Matters is een nieuwsbrief. Deze kan je enkel bekijken
              tegen betaling, als sponsoring voor hun organisatie. Je kan de
              nieuwsbrief ontvangen door £ 1 te betalen via PayPal aan
              paypal@malamutematters.co.uk
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Malamute;
