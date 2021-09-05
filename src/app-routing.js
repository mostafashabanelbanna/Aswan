import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeComponent from './components/home-component'
import Error  from './components/errorPage'
import ProjectDetails from './components/government-projects/project-details-component'
import NewsDetails from './components/news/news-details'
import Main_navbar from './main-navbar'
import TouristHome from './components/tourist-home/tourist-home-page'
import EServices from './components/sevices-page/E-Services'
import news_list from './components/news/news_list'
const AppRouting = () => {
    return (
        <BrowserRouter>
            <Main_navbar/>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/home" component={HomeComponent} />
                <Route exact path='/projectDetails/:id' component={ProjectDetails}/>
                <Route exact path='/newsdetails/:id' component={NewsDetails}></Route>
                <Route exact path='/eservices' component={EServices}></Route>
                <Route exact path='/tourist' component={TouristHome}></Route>
                <Route exact path='/newslist' component={news_list}></Route>
                <Route path='*' component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouting;
