import dialodsReducer from "./dialogs-reducer";

let store = {
  _state : {
      dialogs : [
        {name : "Dmitriy", id : "1"},
        {name : "Maria", id : "2"},
        {name : "Sasha", id : "3"},
        {name : "Victor", id : "4"},
      ],
      messages : [
        {newPostText: ""}
      ]
  },

  getState(){
    return this._state
  },
  _renderTree () {},
  subscribe (observer) {
    this._renderTree = observer;
  },

  dispatch(action){
    this._state.chat.messages = dialodsReducer(this._state.chat.messages, action)
    this._renderTree(this._state);
  }

}

export default store