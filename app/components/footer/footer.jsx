import React from 'react';
import ReactDOM from 'react-dom';

require('./footer.scss');

export default class Footer extends React.Component {
       render(){
        return(
            <footer className="footer">
                <div className="container-fluid">
                    <p className="text-muted">My India statistics</p>
                </div>
            </footer>
        );
    }
}