import React from 'react';

const Dashboard = () =>{
    const handelSignOut = () =>{
        window.localStorage.removeItem('JWT_Token');
        window.location.reload();
    }
    return(
        <div>
            <h1>Dashboard</h1>
            <button
            className="btn btn-danger"
            onClick={handelSignOut}
            >Sign Out</button>
        </div>
    )
}

export default Dashboard;