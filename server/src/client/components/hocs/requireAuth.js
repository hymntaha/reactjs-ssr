import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ChildComponent)=>{
  class RequireAuth extends Component{
    render(){
      return <div></div>;
    }
  }

  connect()(RequireAuth);
};
