import React from 'react';  
import ReactDOM from 'react-dom';  
import MainStore from '../stores/main-store.js';
import * as MainAction from '../actions/main-action.js';
import config from '../config/config.js';
import Bar from '../components/chart/chart.jsx';
import Header from '../components/header/header.jsx';
import OurLeaders from './our-leaders.jsx';
import CrimeInStates from './crime-in-states.jsx';
import SideBar from '../components/sidebar/sidebar.jsx';


export default class Main extends React.Component {
  constructor(){
        super();
        this.state={
          displayInputValue : MainStore.getState().displayInputValue,
          data : MainStore.getState().data
        };
      }
      
  updateState(){
    this.setState({
      displayInputValue : MainStore.getState().displayInputValue,
      data : MainStore.getState().data
    })
  }
  componentWillMount(){
    //MainStore.on('change',this.updateState.bind(this))
  }
  componentDidMount(){
    //MainAction.makeAjaxRequest(config.vehecleWiseAccidents);
  }

  onChange(e){
    MainAction.updateValue(e.target.value);
  }
  render(){
    return(
      <div className="col-12">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <Header />
          <div className="main-container">
            <OurLeaders />
          </div>
        </div>
      </div>
    );
  }
}
