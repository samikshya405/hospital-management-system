import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {

    const dispatch = useDispatch()
    const {user} = useSelector(state=>state.user)

    //get user
    const getUser=async()=>{
        try {
            
        } catch (error) {
            console.log(error);
        }

    }
 if(localStorage.getItem("refreshJWT")){
    return children

 }else{
    return <Navigate to ='/login' />
 }
}

export default ProtectedRoutes