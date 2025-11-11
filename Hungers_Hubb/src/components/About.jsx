import React from "react";
import { Outlet } from "react-router-dom";

// const About = () => {
//     return(
//         <>
//             <div>About US Component!</div>
//             <Outlet/>
//         </>
//     )
// }

//Class based component

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent-constructor");
    }
    componentDidMount(){
        console.log("Parent-didMount");
    }
    render(){
        console.log("Parent-render");
        return(
            <div>
                 <div>About US Component!</div>
//               <Outlet/>
            </div>
        )
    }
}

export default About;