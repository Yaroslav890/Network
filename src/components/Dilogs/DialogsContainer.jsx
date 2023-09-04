import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updatePostActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

  let mapStateToProps = (state) => {
    return {
        chat: state.chat
    }
  }
  let mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (text) => {dispatch(updatePostActionCreator(text))},
        addMessage: () => {dispatch(addMessageActionCreator())}
    }
  }
const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default SuperDialogsContainer