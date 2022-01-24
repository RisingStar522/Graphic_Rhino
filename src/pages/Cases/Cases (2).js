import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/cases.jpg";
import Masonry from "../../components/Masonry/Masonry";
import Images from "./Images";
import { Helmet } from "react-helmet";

const title = "Ons werk";
const text =
  "We kunnen het nu eenmaal niet ontkennen, wij zijn trots op wat we maken. Terecht? Daar kan je helemaal zelf over oordelen, scrol gerust eens door onze projecten!";

function Cases() {
  const myRef = useRef(null);
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Onze klanten en projecten? Daar zijn we trots op! - Graphic Rhino"
        />

        <meta
          name="description"
          content="We zijn nu eenmaal trots op ons werk, scrol gerust eens door onze projecten en laat je inspireren door onze ideeën!"
        />

        <meta
          property="article:author"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta
          property="article:publisher"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta property="og:url" content="https://graphicrhino.be/cases" />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Onze klanten en projecten? Daar zijn we trots op! - Graphic Rhino"
        />

        <meta
          property="og:description"
          content="We zijn nu eenmaal trots op ons werk, scrol gerust eens door onze projecten en laat je inspireren door onze ideeën!"
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
      <main className="cases" ref={myRef}>
        <div className="container">
          <Masonry images={Images} />
        </div>
      </main>
    </>
  );
}

export default Cases;
