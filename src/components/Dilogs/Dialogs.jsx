import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message';
import Person from './Person';

const Dialogs = (props) =>  {   
  let dialogsElement = props.chat.dialogs.map(d => <Person name = {d.name} id = {d.id}/>)
  let messageElement = props.chat.messages.map(m => <Message message = {m.message} />)

  let Add = () =>{ 
    props.addMessage();
  }
  let onPostChange = (e) => {
    let body = e.target.value;
    props.updateMessage(body);
  }
    return (
      <div className ={s.dialogs}>
        <div >
          {dialogsElement}
        </div>
        <div>
          {messageElement}
          <textarea onChange={onPostChange} value = {props.chat.messages.newPostText}/>
          <button onClick={Add}>message</button>  
        </div>
      </div>
    );
  }
export default Dialogs