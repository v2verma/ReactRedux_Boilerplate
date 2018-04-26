import React from 'react';
import UserList from '../containers/user_list';
import UserDetails from '../containers/user_details';

const App = () => {
  return(
  <div>
    <h3>UserName Lists : </h3>
    <UserList />
    <hr />
    <h3>User Details : </h3>
    <UserDetails />
  </div>
  )
}

export default App;