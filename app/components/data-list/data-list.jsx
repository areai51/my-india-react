import React from 'react';
import ReactDOM from 'react-dom';

require('./data-list.scss');

export default class DataList extends React.Component {

    returnIndividualList(list,i){
        const widthPercentage = isNaN(Math.round(list[8]/list[7]*100)) ? '0' : Math.round(list[8]/list[7]*100) ;
        const progressBar = {
            width : `${widthPercentage}%`
        };
        return(
            <ul key={i} className="data-row">
                <li className="data-column">{++i}</li>
                <li className="data-column">
                    <span className="member-name">{list[2]}</span>
                    <span className="member-state"><em>{list[6]}</em></span>
                </li>
                <li className="data-column">
                <div className="progress-bar horizontal">
                    <div className="progress-track">
                        <span className="progress-info">{`${widthPercentage}%`}</span>
                        <div className="progress-fill" style={progressBar} ></div>
                    </div>
                </div>
                </li>
            </ul>
        )
    }

    renderLists(dataList){
        return dataList.map((list,i) => this.returnIndividualList(list,i));
    }

    render(){
        return(
            <div className="data-list-wrapper">
                <h2>{this.props.name}</h2>
                <div className="data-list-container">
                    <div className="list">
                        {this.renderLists(this.props.dataList)}
                    </div>
                </div>
            </div>
        );
    }
}
