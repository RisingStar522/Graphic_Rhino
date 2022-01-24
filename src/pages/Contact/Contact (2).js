import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/contact.jpg";
import { MapContainer as LeaftletMap, TileLayer, Marker } from "react-leaflet";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const coords = { lat: 50.7553, lng: 3.42865 };

const title = "Contacteer ons";
const text =
  "Hebben we je helemaal kunnen overtuigen om met ons in zee te gaan? Heb je vragen die dringend een antwoord zoeken? Contacteer ons gerust, we houden van een goed verhaal en leuke babbel.";

const Contact = () => {
  // Progress Button
  const contactBtn = useRef(null);

  function submitLoad() {
    contactBtn.current.classList.add("onclick");
  }

  function submitSuccess(response) {
    toast.success(response);
    contactBtn.current.classList.remove("onclick");
    contactBtn.current.classList.add("correct");
    reset();
  }

  function submitError(error) {
    toast.error(error.response.data);
    contactBtn.current.classList.remove("onclick");
    contactBtn.current.classList.add("incorrect");
  }

  function submitClear() {
    contactBtn.current.classList.remove("correct");
    contactBtn.current.classList.remove("incorrect");
    setIsSending(false);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const [isSending, setIsSending] = useState(false);

  const myRef = useRef(null);

  const onSubmit = async (data) => {
    submitLoad();
    setIsSending(true);

    try {
      const response = (
        await axios.post(`${process.env.REACT_APP_API_URL}/contact`, data)
      ).data;

      setTimeout(() => submitSuccess(response), 100);
    } catch (error) {
      setTimeout(() => {
        submitError(error);
      }, 100);
    } finally {
      setTimeout(submitClear, 1100);
    }
  };

  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Contacteer ons voor een vrijblijvende offerte & een kop thee - Graphic Rhino"
        />

        <meta
          name="description"
          content="Contacteer ons voor al je vragen. Wij zorgen voor de antwoorden bij een lekkere kop thee. We zijn vlot bereikbaar en je kan voor de deur parkeren."
        />

        <meta
          property="article:author"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta
          property="article:publisher"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta property="og:url" content="https://graphicrhino.be/contact" />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Contacteer ons voor een vrijblijvende offerte & een kop thee - Graphic Rhino"
        />

        <meta
          property="og:description"
          content="Contacteer ons voor al je vragen. Wij zorgen voor de antwoorden bij een lekkere kop thee. We zijn vlot bereikbaar en je kan voor de deur parkeren."
        />
      </Helmet>
      <Header image={Background} title={title} text={text} scrollTo={myRef} />
      <main className="contact" ref={myRef}>
        <section className="information">
          <LeaftletMap center={coords} zoom={17}>
            <TileLayer
              attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
              url="https://api.mapbox.com/styles/v1/ahmedm31/ckoxvicrw1sce17s6mp4b3juq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWhtZWRtMzEiLCJhIjoiY2tubTd4Y2szMG8wMzJ2bnl0dTBnb3h3eSJ9.QXoYOl3Cy0O3XFsEJ5SUcQ"
            />
            <Marker position={coords} />
          </LeaftletMap>
          <div className="contact__content">
            <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form__group form__group--name">
                <label className="form__label" htmlFor="name">
                  Naam
                </label>
                <input
                  className="form__input"
                  required
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", {
                    required: "Gelieve het verplichte veld in te vullen",
                  })}
                />
                {errors.name && (
                  <p className="form__error">{errors.name.message}</p>
                )}
              </div>
              <div className="form__group form__group--email">
                <label className="form__label" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="form__input"
                  required
                  type="email"
                  id="email"
                  name="email"
                  {...register("email", {
                    required: "Gelieve het verplichte veld in te vullen",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Ongeldig e-mailadres!",
                    },
                  })}
                />
                {errors.email && (
                  <p className="form__error">{errors.email.message}</p>
                )}
              </div>
              <div className="form__group form__group--phone">
                <label className="form__label" htmlFor="phone">
                  Telefoonnummer -{" "}
                  <span style={{ color: "gray" }}>Optioneel</span>
                </label>
                <input
                  className="form__input"
                  type="tel"
                  pattern="\d+"
                  id="phone"
                  name="phone"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="form__error">{errors.phone.message}</p>
                )}
              </div>
              <div className="form__group form__group--message">
                <label className="form__label" htmlFor="message">
                  Bericht
                </label>
                <textarea
                  className="form__input"
                  required
                  type="text"
                  id="message"
                  name="message"
                  {...register("message", {
                    required: "Gelieve het verplichte veld in te vullen",
                  })}
                />
                {errors.message && (
                  <p className="form__error">{errors.message.message}</p>
                )}
              </div>
              <div className="btn-container">
                <button
                  disabled={isSending}
                  className="contact-btn"
                  type="submit"
                  ref={contactBtn}
                ></button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
