import React from 'react';
import { NavLink } from 'react-router-dom';

const Person = (props) => {
  return(
    <div>
      <NavLink to = {`${'/dialogs/'}${props.id}`}>
        {props.name}
      </NavLink>
    </div>
  );
}
  export default Person