import React, { useEffect } from 'react';
import {useUser} from "host_app/UserContext";

const RemoteButton = ({label="click me", onClick}) => {
    const {user, setUser} = useUser();
    console.log('context', user);
    useEffect(() => {
        setUser("Roja from remote");
    },[])
  return (
    <>
    <h1>{user}</h1>
    <button onClick={onClick} label={label} style={{ padding: '10px' }}>Remote Button from Remote App</button>
    </>
  )
};

export default RemoteButton;
