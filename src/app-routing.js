import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeComponent from './components/home-page/home-component'
import Error  from './components/errorPage'
import ProjectDetails from './components/home-page/government-projects/project-details-component'
import NewsDetails from './components/home-page/news/news-details'
import Main_navbar from './main-navbar'
import TouristHome from './components/tourist-home/tourist-home-page'
import EServices from './components/sevices-page/E-Services'
import news_list from './components/home-page/news/news_list'
import FilterNews from './components/home-page/news/filter-news'
import EServiceDirectories from './components/sevices-page/E-Services-Directory'
import Directorates from './components/sevices-page/Directorates-Services'
import EmergencyNumbers from './components/sevices-page/Emergency-Numbers'
import Advertisements from './components/sevices-page/Advertisements'

const AppRouting = () => {
    return (
        <BrowserRouter>
            <Main_navbar/>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/home" component={HomeComponent} />
                <Route exact path='/projectDetails/:id' component={ProjectDetails}/>
                <Route exact path='/newsdetails/:id' component={NewsDetails}/>
                <Route exact path='/eservices' component={EServices}/>
                <Route exact path='/eservicesdirectories' component={EServiceDirectories}/>
                <Route exact path='/directorates' component={Directorates}/>
                <Route exact path='/emergencynumbers' component={EmergencyNumbers}/>
                <Route exact path='/advertisements' component={Advertisements}/>
                <Route exact path='/tourist' component={TouristHome}/>
                <Route exact path='/newslist' component={news_list}/>
                <Route exact path='/filternews/:info' component={FilterNews}/>
                <Route path='*' component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouting;
