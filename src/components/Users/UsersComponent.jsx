import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/immage/user.png"
import axios from 'axios'
import Users from './Users.jsx';

class UsersComponents extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    render(){
        
        return <Users totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        onPageChanged = {this.props.onPageChanged}
        users = {this.props.users}
        unfollow = {this.props.unfollow}
        follow = {this.props.follow}
        /> 
        
    }
}

export default UsersComponents;