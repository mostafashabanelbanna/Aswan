import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/home-page/home-component";
import Error from "./components/errorPage";
import ProjectDetails from "./components/home-page/government-projects/project-details-component";
import NewsDetails from "./components/home-page/news/news-details";
import Main_navbar from "./main-navbar";
import TouristHome from "./components/tourist-home/tourist-home-page";
import EServices from "./components/home-page/citizen-services/sevices-pages/E-Services";
import news_list from "./components/home-page/news/news_list";
import FilterNews from "./components/home-page/news/filter-news";
import EServiceDirectories from "./components/home-page/citizen-services/sevices-pages/E-Services-Directory";
import Directorates from "./components/home-page/citizen-services/sevices-pages/Directorates-Services";
import EmergencyNumbers from "./components/home-page/citizen-services/sevices-pages/Emergency-Numbers";
import Advertisements from "./components/home-page/citizen-services/sevices-pages/Advertisements";
import HayaKarimaDetails from "./components/home-page/good-life/haya-karima-details";
import ExConservatives from "./components/Governer/ex-conservatives";
import TechnologyCenterServices from "./components/home-page/citizen-services/sevices-pages/Technology-Center-Services";
import CitiesNavbar from "./components/cities-navbar";
import Leaders from "./components/Governer/leaders";
import DocumentLibrary from "./components/document-library-page/document-library";
import appointment from "./components/appointment";
import Tribe from "./components/home-page/local-leaders/local-leaders-pages/tribe";
import Parliament from "./components/home-page/local-leaders/local-leaders-pages/parliament";
import Senate from "./components/home-page/local-leaders/local-leaders-pages/senate";
import documentLibraryDetails from "./components/document-library-page/document-library-details";
const AppRouting = () => {
  return (
    <BrowserRouter>
      <Main_navbar />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/home" component={HomeComponent} />
        <Route exact path="/projectDetails/:id" component={ProjectDetails} />
        <Route exact path="/newsdetails/:id" component={NewsDetails} />
        <Route exact path="/eservices" component={EServices} />
        <Route
          exact
          path="/eservicesdirectories"
          component={EServiceDirectories}
        />
        <Route exact path="/directorates" component={Directorates} />
        <Route exact path="/emergencynumbers" component={EmergencyNumbers} />
        <Route exact path="/advertisements" component={Advertisements} />
        <Route
          exact
          path="/techcenterservices"
          component={TechnologyCenterServices}
        />
        <Route exact path="/tourist" component={TouristHome} />
        <Route exact path="/newslist" component={news_list} />
        <Route exact path="/filternews/:info" component={FilterNews} />
        <Route exact path="/exconservatives" component={ExConservatives} />
        <Route exact path="/cities" component={CitiesNavbar} />
        <Route exact path="/tribe" component={Tribe} />
        <Route exact path="/parliament" component={Parliament} />
        <Route exact path="/senate" component={Senate} />
        <Route
          exact
          path="/HayaKarimaDetails/:id"
          component={HayaKarimaDetails}
        />
        <Route exact path="/appointment" component={appointment}></Route>
        <Route
          exact
          path="/document-library/:type"
          component={DocumentLibrary}
        ></Route>
        <Route
          exact
          path="/document-library-details/:id"
          component={documentLibraryDetails}
        />
        <Route exact path="/leaders" component={Leaders}></Route>
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouting;
