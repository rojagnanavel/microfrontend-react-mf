import React, { Suspense } from 'react';
import { UserProvider } from "./context/UserContext";

const RemoteButton = React.lazy(() => import("remote_app/RemoteButton"));

const App = () => {
    const handleClick=()=>{
        alert("click event from host");
    }
    return (
    
    <UserProvider>
            <h1>Host App</h1>
            <Suspense fallback={<div>Loading Remote...</div>}>
            
            <RemoteButton label="click from host" onClick={handleClick} />
            </Suspense>
    </UserProvider>
    
    )
};

export default App;
