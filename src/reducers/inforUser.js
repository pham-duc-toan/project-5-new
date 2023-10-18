
let initState = [];

export const inforUser =  (state = initState, action) => {
    
  let newState = action.data;
  switch (action.type) {
    case "setInforUser":
      return newState;
    
    default:
      return state;
  }
}