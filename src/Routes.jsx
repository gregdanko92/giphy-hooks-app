import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage'

function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={HomePage}/>
        </Switch>
        
    )
}

export default Routes