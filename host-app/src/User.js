import React,{ useEffect } from 'react';
import {useUser} from "remote_app/UserContext";

const User = () => {
    const {user, setUser} = useUser();
    useEffect(() => {
        setUser("Roja from remote context");
    },[])
  return (
    <h1>{user}</h1>
  )
};

export default User;
