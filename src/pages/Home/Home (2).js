import React, { useRef, useEffect } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/home.jpg";
import Quote from "../../components/Quote/Quote";
import Ser1 from "../../images/service-7.png";
import Ser2 from "../../images/service-4.png";
import Ser3 from "../../images/service-1.png";
import Ser4 from "../../images/service-9.png";
import Service from "../../components/Service/Service";
import Explore from "../../components/Explore/Explore";
import TextBlock from "../../components/TextBlock/TextBlock";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";
import LogoCard from "../../components/LogoCard/LogoCard";
import Button from "../../components/Button/Button";

import Client1 from "../../images/client-1.png";
import Client2 from "../../images/client-2.svg";
import Client3 from "../../images/client-3.jpg";
import Client4 from "../../images/client-4.jpg";
import Client5 from "../../images/client-5.png";
import Client6 from "../../images/client-6.png";
import Client7 from "../../images/client-7.jpg";
import Client8 from "../../images/client-8.png";
import cases from "../../pages/Cases/Images";
import blogs from "../../pages/Blog/Images";
import { Helmet } from "react-helmet";

const title = "TAKE DESIGN BY IT’S HORNS";
const text =
  "Net als een stevige neushoorn leveren wij sterk grafisch werk! Wij gaan voor het niet alledaagse en bieden een grote variatie aan mogelijkheden.";
const content1 = (
  <>
    <p>
      Honderden euro's aanrekenen voor een verkennend gesprek of tal van
      meetings om je project te bespreken? Daar zijn wij alvast geen fan van!
      Wij ontwerpen graag voor je, zonder al te veel extra nodeloos gepalaver.
    </p>
    <br />
    <p>
      Wist je ook al dat klanten bij ons boven alles staan? Wij houden het graag
      persoonlijk, dat kei formele mailtje? Laat dat maar snel achterwege!{" "}
    </p>
    <br />
    <p>
      Als communicatiebureau ligt onze focus niet alleen op het maken van
      ontwerpen, maar ook op het geven van advies. Wij delen namelijk graag onze
      kennis met jou zodat jij en je bedrijf hier ook uit kunnen leren!{" "}
    </p>
    <br />
    <p>
      Wij zijn alvast benieuwd naar wie jij bent, dus spring gerust eens binnen!
    </p>
  </>
);
const reveal = 4;
let count;

var caseArr = [];
var blogArr = [];

while (caseArr.length < 2) {
  let r = Math.floor(Math.random() * cases.length);
  if (caseArr.indexOf(r) === -1) caseArr.push(r);
}

while (blogArr.length < 2) {
  let r = Math.floor(Math.random() * blogs.length);
  if (blogArr.indexOf(r) === -1) blogArr.push(r);
}

function Home() {
  const myRef = useRef(null);
  const isSM = useMediaQuery({ query: "(max-width: 47.99875em)" });
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, [isSM]);

  useEffect(() => {
    count = 4;
  }, []);
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Graphic Rhino - grafisch ontwerp en online marketing"
        />
        <meta
          name="description"
          content="Graphic Rhino is een full service reclamebureau in Outrijve waar je terecht kan voor strak design met een serieuze hoek af. Net als een stevige neushoorn leveren wij sterk grafisch werk! "
        />
        <meta
          name="keywords"
          content="grafisch ontwerp, grafisch vormgever, online marketing, offline marketing, reclamebureau, huisstijl, communicatie, drukwerk, reclamecampagne, outrijve, avelgem, zwevegem"
        />
        <meta property="og:url" content="https://graphicrhino.be/" />
        <meta property="og:site_name" content="Graphic Rhino" />
        <meta property="og:locale" content="nl_BE" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Graphic Rhino - grafisch ontwerp en online marketing"
        />
        <meta
          property="og:description"
          content="Graphic Rhino is een full service reclamebureau in Outrijve waar je terecht kan voor strak design met een serieuze hoek af. Net als een stevige neushoorn leveren wij sterk grafisch werk!"
        />
      </Helmet>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="over ons"
        link="/over-ons"
        scrollTo={myRef}
      />
      <main className="home" ref={myRef}>
        <section className="brand">
          <div data-aos="fade-right" className="container">
            <div className="brand__box">
              <div className="brand__title">ZOEK JE ONS?</div>
              <div className="brand__message">
                Op zoek naar een communicatiebureau dat jouw ideeën kan omzetten
                in een visueel meesterwerk? Nood aan een betaalbaar ontwerp, en
                liever nog gisteren dan vandaag? Dan ben je bij ons zeer zeker
                aan het juiste adres. Scrol en swipe gerust verder en leer ons
                beter kennen. Overtuigd? Laat van je horen, wij leren je zeer
                graag ook beter kennen!
              </div>
            </div>
          </div>
        </section>
        <section className="explores">
          <div
            className="container"
            {...(!isSM && { "data-aos": "fade-right" })}
          >
            <Explore
              num={1}
              title={cases[caseArr[0]].title}
              text={cases[caseArr[0]].desc}
              image={require("../../images/" + cases[caseArr[0]].url)}
              link={cases[caseArr[0]].linkTo}
              {...(isSM && { anim: "zoom-in" })}
            ></Explore>
            <Explore
              num={2}
              title={cases[caseArr[1]].title}
              text={cases[caseArr[1]].desc}
              image={require("../../images/" + cases[caseArr[1]].url)}
              link={cases[caseArr[1]].linkTo}
              {...(isSM && { anim: "zoom-in" })}
            ></Explore>
            <Explore
              num={3}
              title={blogs[blogArr[0]].title}
              text={blogs[blogArr[0]].desc}
              image={require("../../images/" + blogs[blogArr[0]].url)}
              link={blogs[blogArr[0]].linkTo}
              {...(isSM && { anim: "zoom-in" })}
            ></Explore>
            <Explore
              num={4}
              title={blogs[blogArr[1]].title}
              text={blogs[blogArr[1]].desc}
              image={require("../../images/" + blogs[blogArr[1]].url)}
              link={blogs[blogArr[1]].linkTo}
              {...(isSM && { anim: "zoom-in" })}
            ></Explore>
          </div>
        </section>
        <section className="textBlock">
          <div data-aos="fade-right" className="container">
            <TextBlock
              title="Betaalbare designs/waarom Graphic Rhino"
              content={content1}
            />
          </div>
        </section>
        <section className="services">
          <div className="container">
            <div data-aos="zoom-in" data-aos-duration={500}>
              <Service
                image={Ser1}
                name="Grafisch ontwerp"
                hover={true}
                desc="Branding, brochures, catalogi, you name it. Wij gaan ermee aan de slag!"
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={200}
            >
              <Service
                image={Ser2}
                name="Drukwerk"
                hover={true}
                desc="Flyers, affiches, werfborden,... Wij regelen het allemaal!"
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={400}
            >
              <Service
                image={Ser3}
                name="Animaties"
                hover={true}
                desc="Van een simpele logo animatie tot een heuse reclamevideo. Wij doen dat!"
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={600}
            >
              <Service
                image={Ser4}
                name="Online marketing"
                hover={true}
                desc="Online campagnes? Die hebben voor ons geen geheimen!"
              />
            </div>
          </div>
        </section>
        <section className="home-logo">
          <div className="container">
            <div className="home-logo__title heading-2">
              enkele van onze klanten
            </div>
            <div className="home-logo__content">
              <div data-aos="zoom-in" data-aos-duration={500}>
                <LogoCard
                  logo={Client1}
                  name="Barbecook"
                  desc="Belgische BBQ’s. Born from steel, raised by men!"
                  anim="zoom-in"
                />
              </div>
              <div data-aos="zoom-in" data-aos-duration={500}>
                <LogoCard
                  logo={Client2}
                  name="Edgard & Cooper"
                  desc="Gezond & natuurlijke honden- & kattenvoeding. Geef eten dat goed voelt!"
                  anim="zoom-in"
                />
              </div>
              <div data-aos="zoom-in" data-aos-duration={500}>
                <LogoCard
                  logo={Client3}
                  name="Happy Handmade Jewels"
                  desc="Unieke handgemaakte juwelen, van hobby tot winkel!"
                  anim="zoom-in"
                />
              </div>
              <div data-aos="zoom-in" data-aos-duration={500}>
                <LogoCard
                  logo={Client4}
                  name="Little Handmade Stories"
                  desc="Handmade with love! Uiteenlopende merken van handgemaakte spullen en cadeau artikelen."
                  anim="zoom-in"
                />
              </div>
              <LogoCard
                logo={Client5}
                name="Malamute Matters"
                desc="Honden VZW uit de UK, all dogs matter!"
              />
              <LogoCard
                logo={Client6}
                name="Plan International"
                desc="Waar gelijke kansen voor meisjes en respect voor kinderrechten mogelijk wordt!"
              />
              <LogoCard
                logo={Client7}
                name="Trail Nomad"
                desc="Place to be voor jouw offroad onderdelen en toebehoren!"
              />
              <LogoCard
                logo={Client8}
                name="VP Forever"
                desc="Hun missie is mensen verenigen en kennis delen om ontwikkeling op gang te brengen! "
              />
            </div>
            <Button
              btnText="laad meer"
              click={(e) => {
                const logoCards = document.querySelectorAll(".logo-card");
                const temp = count;
                for (let i = temp; i < temp + reveal; i++) {
                  if (i < logoCards.length) {
                    logoCards[i].style.display = "block";
                    logoCards[i].classList.add("logo-card__enter");
                    count += 1;
                  }
                }
                if (count >= logoCards.length - 1) {
                  e.target.style.display = "none";
                  count = 4;
                }
              }}
            />
          </div>
        </section>
        <section className="quotes">
          <div className="container">
            <h2 className="heading-2">Wat onze klanten zeggen</h2>
            <div data-aos="zoom-in" data-aos-duration={500}>
              <Quote name="JURGEN" text="Correcte opvolging en proper werk!" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={200}
            >
              <Quote name="JESSICA" text="Super tevreden over ons nieuw logo" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={400}
            >
              <Quote name="PHELINE" text="Goeie samenwerking!" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={600}
            >
              <Quote name="KOEN" text="Verbazingwekkend!" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
