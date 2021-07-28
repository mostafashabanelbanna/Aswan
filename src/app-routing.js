import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeComponent from './Components/home-component'
import News  from './Components/newsScreen'
import Error  from './Components/errorPage'
import Video from './Components/videoScreen'

const AppRouting = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/home" component={HomeComponent} />
                <Route path='/video' exact>
                    <Video />
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