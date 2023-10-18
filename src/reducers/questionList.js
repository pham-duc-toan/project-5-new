
let initState = [];

export const questionList =  (state = initState, action) => {
    
  let newState = action.data;
  switch (action.type) {
    case "setQuestionList":
      return newState;
    
    default:
      return state;
  }
}