import React from "react";
import { useCookies } from "react-cookie";
import Button from "../Button/Button";

function Cookie() {
  const [cookies, setCookie] = useCookies(["accept"]);
  return (
    <div
      className="cookie"
      style={cookies.accept === "true" ? { display: "none" } : null}
    >
      <div className="container">
        <div className="cookie__title">Cookies & privacy</div>
        <div className="cookie__info">
          We gebruiken cookies om uw ervaring te personaliseren. Door deze
          website te blijven bezoeken, gaat u akkoord met ons gebruik van
          cookies.
        </div>
        <Button
          btnText="akkoord"
          click={() => {
            setCookie("accept", "true", {
              path: "/",
              sameSite: "none",
              secure: true,
            });
            console.log(cookies.name);
          }}
        />
      </div>
    </div>
  );
}

export default Cookie;
