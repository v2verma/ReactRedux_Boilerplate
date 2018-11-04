export const User_Selected = "User_Selected";
export const ADD = "ADD";

export const selectUser = (users) => {
  console.log("user selected : ", users.name);
  return {
    type: User_Selected,
    payload: users
  }
  
};
export const addData = (data) => {
  console.log("Input Data : ", data);
  return {
    type: ADD,
    payload: data
  }
  
};