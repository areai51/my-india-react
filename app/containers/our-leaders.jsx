import React from 'react';  
import ReactDOM from 'react-dom'; 
import DataList from '../components/data-list/data-list.jsx'; 
import OurLeaderStore from '../stores/our-leaders-store.js';
import * as MainAction from '../actions/main-action.js';
import config from '../config/config.js';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class OurLeaders extends React.Component{
    constructor(){
        super();
        this.state={
          rajyaSabhaAttendence : null,
          lokSabhaAttendence : null
        };
        this.updateState = this.updateState.bind(this);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    updateState(){
        this.setState({
            rajyaSabhaAttendence : OurLeaderStore.getState().rajyaSabhaAttendence ? OurLeaderStore.getState().rajyaSabhaAttendence.data : null,
            lokSabhaAttendence : OurLeaderStore.getState().lokSabhaAttendence ? OurLeaderStore.getState().lokSabhaAttendence.data : null
        })
    }

    componentDidMount(){
        this.getRajyaSabhaAttendance();
        this.getlokSabhaAttendence();
    }

    getRajyaSabhaAttendance(){
        const requestObj = {
            'url':config.rajyaSabhaAttendence,
            'actionType':'GET_RAJYA_SABHA_ATTENDENCE'
        }
        MainAction.makeAjaxRequest(requestObj);
    }

    getlokSabhaAttendence(){
        const requestObj = {
            'url':config.lokSabhaAttendence,
            'actionType':'GET_LOK_SABHA_ATTENDENCE'
        }
        MainAction.makeAjaxRequest(requestObj);
    }

    componentWillMount(){
        OurLeaderStore.on('change',this.updateState);
    }

    componentWillUnmount(){
        OurLeaderStore.removeListener('change',this.updateState);        
    }

    renderList(list,name){
        
        return list ? <DataList dataList = {list} name={name}/> : <div className="spinner"></div>;
    }

    render(){
        return(
            <div className="col-12">
                <h1>Our Leaders</h1>
                <div className="col-6">
                    {this.renderList(this.state.rajyaSabhaAttendence,'Rajya Sabha 15 - Attendence')}
                </div>
                <div className="col-6">
                    {this.renderList(this.state.lokSabhaAttendence,'Lok Sabha 15 - Attendence')}
                </div>
            </div>
            )
    }
}