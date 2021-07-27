import { BrowserRouter, Route, Switch} from 'react-router-dom'
import HomeComponent from './components/home-component'

const AppRouting = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeComponent}/>
                <Route exact path="/home" component={HomeComponent}/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouting;