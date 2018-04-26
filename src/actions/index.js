export const User_Selected = "User_Selected";

export const selectUser = (users) => {
  console.log("user selected : ", users.name);
  return {
    type: User_Selected,
    payload: users
  }
  
};