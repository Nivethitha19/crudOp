import React from "react";


import { NavLink } from "react-router-dom";
const Sidebar = ({children}) =>{
    
    const menuitem=[
        {
            path:"/",
            name:"Home",
            
        },
        {
            path:"/login",
            name:"Login",
           
        },
        {
            path:"/register",
            name:"Userlist",
           
        },
    ]
    return(
    
            <div className="container-fluid">
                <div className="sidebar">
                    
                    {
                    menuitem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" >
                                <div className="link-text">{item.name}</div>
                        </NavLink>

               ))
                 }
                </div>
                <main>{children}</main>
            </div>
            
        
    )
}

export default Sidebar;

