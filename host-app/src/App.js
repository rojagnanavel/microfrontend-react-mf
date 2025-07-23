import React, { Suspense } from 'react';
import User from "./User";
import { UserProvider } from "remote_app/UserContext";

const RemoteButton = React.lazy(() => import("remote_app/RemoteButton"));

const App = () => {
    const handleClick=()=>{
        alert("click event from host");
    }
    return (
    <UserProvider>
            <h1>Host App</h1>
            <User />
            <Suspense fallback={<div>Loading Remote...</div>}>
            <RemoteButton label="click from host" onClick={handleClick} />
            </Suspense>
    </UserProvider>
    )
};

export default App;
