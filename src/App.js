import React, {Component} from "react";
import Header from './Components/Header';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import ImageContextProvider from './Context/ImageContext';
import Item from "./Components/Item";
import Search from "./Components/Search";
import NotFoundPage from "./Components/NotFoundPage";

class App extends Component {
  handleSubmit = (e, history, searchInput)=>{
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  }
  render() {
    return(
      <ImageContextProvider>
      <HashRouter basename="snap">
         <div className="container">
           <Route render={(props)=> {
            return <Header history={props.history} handleSubmit={this.handleSubmit} />
           }} />
           <Switch>
             <Route path="/" exact render={()=> <Redirect to="/mountain" /> } />
             <Route path="/mountain" exact render={()=> <Item searchTerm="mountain" />} />
             <Route path="/nature" exact render={()=> <Item searchTerm="nature" />} />
             <Route path="/search/:searchInput" exact render={(props)=> <Search searchTerm={props.match.params.searchInput} />} />
             <Route path="notfound" component={NotFoundPage} />
           </Switch>
         </div>
      </HashRouter>
    </ImageContextProvider>
    )
  }

}

export default App;
