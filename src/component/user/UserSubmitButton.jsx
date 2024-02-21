import React from 'react';
import UserStore from '../Store/UserStore';
import { NavLink } from 'react-router-dom';

function UserSubmitButton(props) {
    const {isFormSubmit} = UserStore()
    if(isFormSubmit===false){
        return  <NavLink className={props.className} onClick={props.onClick}>{props.text}</NavLink>
    }else{
        return  <NavLink className={props.className} onClick={props.onClick} disabled={true}> 
            <span className="loading loading-dots loading-lg"></span>
        </NavLink>
    }
}

export default UserSubmitButton;