import React from "react";


export default class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "saurabh",
            email: "saurabh@gmail.com",
        }
    }
    render() {
        return(
            <div>
               <h1>{this.state.name}</h1>
            </div>
        )
    }
}