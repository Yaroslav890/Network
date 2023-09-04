import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/immage/user.png"


let Users = (props) =>{

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];

        for ( let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
    
    return <div>
    <div>
        {pages.map(p => {
               return <span className = {props.currentPage === p && s.selectedPage}
               onClick = {(e)=>{props.onPageChanged(p)}}>{p}</span>
            })
        }
    </div>
{
    props.users.map(u => <div key = {u.id}>
        <div>
            <img className = {s.image} src = {u.photos.small != null ? u.photos.small: userPhoto}></img>
        </div>
        <div className={s.info}>
            <div>
                {u.followed ? <button onClick = {() => {props.unfollow(u.id)}}>Unfollow</button>
                : <button onClick = {() => {props.follow(u.id)}} >Follow</button>}
            </div>
            <div className={s.name}>{u.name}</div>
            <div>{u.status}</div>
            <div>{u.location.city}</div>
            <div>{u.location.country}</div>
        </div>    
    </div>
)}
</div>
}

export default Users;