import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
  render(){
    if(!this.props.user){
      return(
        <div>Select User...</div>
      )
    }


    return (
      <div>
        <h4>NAME : {this.props.user.name}</h4> 
        <h5>AGE : {this.props.user.age}</h5>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state.activeUser)
  return {
          user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetails);