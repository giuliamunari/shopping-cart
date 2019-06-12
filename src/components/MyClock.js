import React, { Component } from 'react';
import Clock from 'react-live-clock';
 
export default class MyClock extends Component {
    render() {
        return(
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'CET'} />
          )
    }
}