
let initState = [];

export const answerOfUserReducer =  (state = initState, action) => {
    
  let newState = action.data;
  switch (action.type) {
    case "setAnswerOfUser":
      return newState;
    
    default:
      return state;
  }
}