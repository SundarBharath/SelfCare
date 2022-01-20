
import React,{useState,useEffect} from 'react'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Survey from './components/Survey';
import AboutPage from "./pages/AboutPage/AboutPage";
import PosesPage from "./pages/PosesPage/PosesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import { getYogaPoses } from "./Services/api";
import './App.css'

export default function App() {
    const [yogaData, setYogaData] = useState({
        sanskrit_name: "",
        english_name: "",
        img_url: "",
      });
    
      async function getAppData() {
        const data = await getYogaPoses();
        setYogaData({
          results: data,
        });
      }
    
      useEffect(() => {
        getAppData();
      }, []);
    return (

        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    {/* <Route path="/survey" component={ Survey } /> */}
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route exact path="/about" render={(props) => <AboutPage />} />

<Route
  exact
  path="/poses"
  render={(props) => <PosesPage yogaPoses={yogaData} />}
/>

<Route exact path="/contact" render={(props) => <ContactPage />} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

// const Footer = () => {
//     return (
//         <p className="text-center" style={ FooterStyle }>design and coded by sundaram and team  </p>
//     )
// }

// const FooterStyle = {
//     background: "#222",
//     fontSize: ".8rem",
//     color: "#fff",
//     position: "absolute",
//     bottom: 0,
//     padding: "1rem",
//     margin: 0,
//     width: "100%",
//     opacity: ".5"
// }