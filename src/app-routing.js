import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/home-page/home-component";
import Error from "./components/errorPage";
import ProjectDetails from "./components/home-page/government-projects/project-details-component";
import ProjectsList from "./components/home-page/government-projects/government-projects-list-component";
import NewsDetails from "./components/home-page/news/news-details";
import Main_navbar from "./main-navbar";
import TouristHome from "./components/tourist-page/tourist-home-page";
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
import CitiesNavbar from "./components/government-cities/cities-navbar";
import Leaders from "./components/Governer/leaders";
import DocumentLibrary from "./components/document-library-page/document-library";
import Appointment from "./components/appointment/appointment";
import Tribe from "./components/home-page/local-leaders/local-leaders-pages/tribe";
import Parliament from "./components/home-page/local-leaders/local-leaders-pages/parliament";
import Senate from "./components/home-page/local-leaders/local-leaders-pages/senate";
import AdvertismentList from "./components/home-page/advertisment/advertisment-list";
import YouthEmp from "./components/home-page/advertisment/youth-employent";
import Career from "./components/home-page/advertisment/career";
import DocumentLibraryDetails from "./components/document-library-page/document-library-details";
import Footer from "./components/footer";
import VideosList from "./components/home-page/videos/video-list-component";
import VideoDetails from "./components/home-page/videos/video-details-component";
import PhotoDetails from "./components/home-page/photo-album/photo-details-component";
import PhotosList from "./components/home-page/photo-album/photos-list-component";
import FilterPhotos from "./components/home-page/photo-album/filter-photos";
import AdvertismentDetails from "./components/ads/adsDetails";
import FilterVideos from "./components/home-page/videos/filter-videos";
import InvestorHome from "./components/investor-page/investor-home-page";
import TouristAttractionDetails from "./components/touristAttraction/touristAttractionDetails";
import Ads from "./components/ads/ads";
import ServicesComponent from "./components/services-component";
import AppointmentDetails from "./components/appointment/appointment-details";
import AgendaList from "./components/agenda/list-agenda";
import AgendaDetails from "./components/agenda/agenda-details";
import investmentOpportunitiesList from "./components/investor-page/investment-opportunities/investment-opportunities-list";
import StaticContentHome from "./components/static-content/static-content-home";
import CityDetails from "./components/government-cities/city-details";
import OrgChartRender from "./components/orgChart/orgChartRender";
import Contact from "./components/home-page/contact_us";
import StockTicker from "./components/news-ticker";
import ScrollToTop from "./scroll";
import CareerDetails from "./components/home-page/advertisment/details/career-details";
import YouthDetails from "./components/home-page/advertisment/details/youth-details";
import NationalCouncil from "./components/home-page/local-leaders/local-leaders-pages/national-council";
import NationalCouncilDetails from "./components/home-page/local-leaders/local-leaders-pages/details/national-council-details";
import SocietyDetails from "./components/home-page/local-leaders/local-leaders-pages/details/society-details";
import Society from "./components/home-page/local-leaders/local-leaders-pages/society";
import DirectoratesHome from "./components/home-page/citizen-services/sevices-pages/Directorates-Services/directorates-services-home";
const AppRouting = () => {
  return (
    <BrowserRouter>
      <Main_navbar />
      <StockTicker />
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/home" component={HomeComponent} />
          <Route exact path="/projectDetails/:id" component={ProjectDetails} />
          <Route exact path="/projectslist" component={ProjectsList} />
          <Route exact path="/newsdetails/:id" component={NewsDetails} />
          <Route exact path="/eservices" component={EServices} />
          <Route exact path="/services/:typeid" component={ServicesComponent} />
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
          <Route exact path="/videoslist" component={VideosList} />
          <Route exact path="/videodetails/:id" component={VideoDetails} />
          <Route exact path="/photoslist" component={PhotosList} />
          <Route exact path="/photodetails/:id" component={PhotoDetails} />
          <Route exact path="/tourist" component={TouristHome} />
          <Route exact path="/investor" component={InvestorHome} />
          <Route
            exact
            path="/statichome/:id/:title/:code/:name"
            component={StaticContentHome}
          />
          <Route
            exact
            path="/directorates/:id/:name"
            component={DirectoratesHome}
          />
          <Route exact path="/newslist" component={news_list} />
          <Route exact path="/filternews/:info" component={FilterNews} />
          <Route exact path="/filterphotos/:info" component={FilterPhotos} />
          <Route exact path="/filtervideos/:info" component={FilterVideos} />
          <Route exact path="/exconservatives" component={ExConservatives} />
          <Route exact path="/cities" component={CitiesNavbar} />
          <Route exact path="/citydetails/:id" component={CityDetails} />
          <Route exact path="/tribe" component={Tribe} />
          <Route exact path="/nationalcouncil" component={NationalCouncil} />
          <Route
            exact
            path="/nationalcouncildetails/:id"
            component={NationalCouncilDetails}
          />
          <Route exact path="/society" component={Society} />
          <Route exact path="/societydetails/:id" component={SocietyDetails} />
          <Route exact path="/parliament" component={Parliament} />
          <Route exact path="/senate" component={Senate} />
          <Route
            exact
            path="/HayaKarimaDetails/:id"
            component={HayaKarimaDetails}
          />
          <Route exact path="/appointment" component={Appointment}></Route>
          <Route
            exact
            path="/appointmentdetails/:id"
            component={AppointmentDetails}
          />
          <Route
            exact
            path="/document-library/:type"
            component={DocumentLibrary}
          ></Route>
          <Route exact path="/ads/:id" component={AdvertismentList}></Route>
          <Route exact path="/youth" component={YouthEmp}></Route>
          <Route exact path="/career" component={Career}></Route>
          <Route
            exact
            path="/careerdetails/:id"
            component={CareerDetails}
          ></Route>
          <Route
            exact
            path="/youthdetails/:id"
            component={YouthDetails}
          ></Route>
          <Route
            exact
            path="/document-library-details/:id"
            component={DocumentLibraryDetails}
          />
          <Route
            exact
            path="/advertisment-details/:id"
            component={AdvertismentDetails}
          />
          <Route
            exact
            path="/tourist-attraction-details/:id"
            component={TouristAttractionDetails}
          />
          <Route exact path="/leaders" component={Leaders}></Route>
          <Route exact path="/eventlist" component={AgendaList} />
          <Route exact path="/eventdetails/:id" component={AgendaDetails} />
          <Route exact path="/filterevents/:info" component={AgendaList} />
          <Route
            exact
            path="/opportunitiesdetails/:id"
            component={AgendaList}
          />
          <Route
            exact
            path="/opportunitieslist"
            component={investmentOpportunitiesList}
          />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/org-chart" component={OrgChartRender} />
          <Route path="*" component={Error} />
        </Switch>
      </ScrollToTop>

      {/* <Ads /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouting;
