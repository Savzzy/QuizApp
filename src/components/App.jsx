import React from 'react';
import Welcome from './Welcome/Welcome';
import {BrowserRouter , Route} from 'react-router-dom';
import Quiz from './Quiz/Quiz';

class App extends React.Component{
    render(){
        return (
            <div>
            <BrowserRouter>
            <Route path='/' exact component={Welcome}/>
            <Route path='/:difficulty' component={Quiz}/>
            </BrowserRouter> 
            </div>
        )
    }
}

export default App;