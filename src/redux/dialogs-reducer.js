// const ADD_POST = 'ADD-POST';
// const UPDATE_POST = 'UPDATE-POST';

let initialState = {
        dialogs : [
        {name : "Dmitriy", id : "1"},
         {name : "Maria", id : "2"},
         {name : "Sasha", id : "3"},
         {name : "Victor", id : "4"},
       ],
        messages : [
            {newPostText: ""}
        ]   
}
const dialodsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD-POST':{
            let newMassage = {message : state.messages.newPostText }
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMassage);
            stateCopy.messages.newPostText = '';
            return stateCopy;
        }
        case 'UPDATE-POST':
            let stateCopy = {...state}
            stateCopy.messages.newPostText = action.newText;
            return stateCopy;
        default: 
            return state;
    }
}
export const addMessageActionCreator = () =>{
     return {type: "ADD-POST"}  
  }
  export const updatePostActionCreator = (text) =>{
    return{
      type: "UPDATE-POST", 
      newText: text}
  }

export default dialodsReducer;