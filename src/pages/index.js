import React from 'react';
import MainImg from "../assets/images/loader.gif";
import { Route, Redirect,Link } from "react-router-dom";





class index extends React.Component{
     
    render(){
        return(
            <div>
                 <img className="indeximg" src={MainImg} alt="none"></img>
            <Link to ="/Home" className="linkApi"> Click here to see the magic </Link>
            </div>
        )
            
    }
}



export default index;