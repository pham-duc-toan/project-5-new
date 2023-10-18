
let initState = [];

export const topicList =  (state = initState, action) => {
    
  let newState = action.data;
  switch (action.type) {
    case "setTopicList":
      return newState;
    
    default:
      return state;
  }
}