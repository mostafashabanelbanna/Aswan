import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeComponent from './components/home-component'
import Error  from './components/errorPage'
import ProjectDetails from './components/government-projects/project-details-component'

const AppRouting = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/home" component={HomeComponent} />
                <Route exact path='/projectDetails/:id' component={ProjectDetails}/>
                <Route path='*' component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouting;