import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser,addData} from '../actions/index';

class UserList extends Component {

  renderListItems = () =>{
    return this.props.users.map((user) => {
      return(
        <li 
          key={user.id}
          onClick={() => this.props.selectUser(user)}>
          {user.name} 
        </li>
      )
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    // this.props.todo.push()
    console.log(this.props.todo, this.refs.title.value)
    var self = this;
    fetch('http://localhost:9001/task/create', { 
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          title: self.refs.title.value,
          description: self.refs.description.value
        })
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  }

  render(){
    return(
      <div>
        <ol>
          {this.renderListItems()}
        </ol>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Title" ref="title"/>
          <input type="text" placeholder="Description" ref="description"/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    users: state.users,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectUser: selectUser, addData: addData}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);