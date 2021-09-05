import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/home-component";
import Error from "./components/errorPage";
import ProjectDetails from "./components/government-projects/project-details-component";
import NewsDetails from "./components/news-details";
import Main_navbar from "./main-navbar";
import TouristHome from "./components/tourist-home/tourist-home-page";
import Ads from "./components/ads/ads";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Main_navbar />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/home" component={HomeComponent} />
        <Route exact path="/projectDetails/:id" component={ProjectDetails} />
        <Route exact path="/newsdetails/:id" component={NewsDetails}></Route>
        <Route exact path="/tourist" component={TouristHome}></Route>
        <Route path="*" component={Error} />
      </Switch>
      <Ads />
    </BrowserRouter>
  );
};

export default AppRouting;
