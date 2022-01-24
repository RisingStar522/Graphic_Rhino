import React from "react";
import Footer from "./components/Footer/Footer";
import "./styles/App.scss";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Diensten from "./pages/Diensten/Diensten";
import Cases from "./pages/Cases/Cases";
import Blog from "./pages/Blog/Blog";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Graveyard from "./pages/Graveyard/Graveyard";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./ScrollToTop";
// import Cookie from "./components/Cookie/Cookie";
import { CookiesProvider } from "react-cookie";
import LHS from "./pages/LFS/LHS";
import Debaveye from "./pages/Debaveye/Debaveye";
import HHJ from "./pages/HHJ/HHJ";
import Keurslager from "./pages/Keurslager/Keurslager";
import Ebo from "./pages/Ebo/Ebo";
import Cafetaria from "./pages/Cafetaria/Cafetaria";
import Pitta from "./pages/Pitta/Pitta";
import Malamute from "./pages/Malamute/Malamute";
import Eeckhout from "./pages/Eeckhout/Eeckhout";
import Slagerij from "./pages/Slagerij/Slagerij";
import Magazine from "./pages/Magazine/Magazine";
import Black from "./pages/Black/Black";
import Het from "./pages/Het/Het";
import Buitenreclame from "./pages/Buitenreclame/Buitenreclame";
import Kracht from "./pages/Kracht/Kracht";
import Motion from "./pages/Motion/Motion";
import Verpakkingen from "./pages/Verpakkingen/Verpakkingen";
import Waarom from "./pages/Waarom/Waarom";
import Belangrijk from "./pages/Belangrijk/Belangrijk";
import Sterk from "./pages/Sterk/Sterk";
import Google from "./pages/Google/Google";
import Edgard from "./pages/Edgard/Edgard";
import Motors from "./pages/Motors/Motors";
import Privacy from "./pages/Privacy/Privacy";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure({ position: "top-center" });

function App() {
  return (
    <CookiesProvider>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Menu />
          {/* <Cookie /> */}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/over-ons" component={About} />
            <Route path="/diensten" component={Diensten} />
            <Route path="/cases" exact component={Cases} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/graveyard" exact component={Graveyard} />
            <Route path="/contact" component={Contact} />
            <Route path="/cases/little-handmade-stories" component={LHS} />
            <Route path="/cases/de-baveye-interieur" component={Debaveye} />
            <Route path="/cases/happy-handmade-jewels" component={HHJ} />
            <Route path="/cases/keurslager-crul" component={Keurslager} />
            <Route path="/cases/energie-bouw-ovaere" component={Ebo} />
            <Route path="/cases/cafetaria-michelsberg" component={Cafetaria} />
            <Route path="/cases/pitta-melita" component={Pitta} />
            <Route path="/cases/malamute-matters" component={Malamute} />
            <Route path="/cases/eeckhout-woodline" component={Eeckhout} />
            <Route path="/cases/slagerij-cannaert" component={Slagerij} />
            <Route path="/cases/magazine-crossmedia" component={Magazine} />
            <Route path="/cases/black" component={Black} />
            <Route path="/cases/het-lijsternest" component={Het} />
            <Route path="/blog/buitenreclame" component={Buitenreclame} />
            <Route path="/blog/kracht-van-papier" component={Kracht} />
            <Route path="/blog/motion-animatie" component={Motion} />
            <Route path="/blog/verpakkingen" component={Verpakkingen} />
            <Route path="/blog/waarom-video" component={Waarom} />
            <Route
              path="/blog/belang-consistente-huisstijl"
              component={Belangrijk}
            />
            <Route path="/blog/sterk-logo" component={Sterk} />
            <Route path="/blog/google-mijn-bedrijf" component={Google} />
            <Route path="/graveyard/edgard-cooper" component={Edgard} />
            <Route path="/graveyard/mig-motors" component={Motors} />
            <Route path="/privacy" component={Privacy} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;
