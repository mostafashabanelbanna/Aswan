import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeComponent from './Components/home-component'
import News  from './Components/newsScreen'
import Error  from './Components/errorPage'
import Video from './Components/videoScreen'
import NewsList from './Components/news_list'
import Complaints from './Components/complaints-screen'
import Contact from './Components/contact_us'
import Footer from './Components/footer'
import Navbar from './Components/navbar'

const AppRouting = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/home" component={HomeComponent} />
                <Route path='/video' exact>
                    <Video />
                </Route>
                <Route path='/newslist' >
                    <NewsList />
                </Route>
                <Route path='/navbar' >
                    <Navbar />
                </Route>
                <Route path='/footer' >
                    <Footer />
                </Route>
                <Route path='/contact' >
                    <Contact />
                </Route>
                <Route path='/complaints' >
                    <Complaints />
                </Route>
                <Route path='/news' >
                    <News />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouting;