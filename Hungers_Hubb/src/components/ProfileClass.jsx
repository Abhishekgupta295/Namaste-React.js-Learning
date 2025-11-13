import React from 'react';

class ProfileClass extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            name1 : "Ayush Gupta",
            location : "Delhi",
            image : "invalid image",
        }
     console.log("Child-Constructor" + this.props.name)
    } 

   async componentDidMount()
    {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);

        console.log("Child-ComponentDidMount" + this.props.name);
        // this.setState.name1 = json.name;
        // this.setState.location = json.location;
        // this.setState.image = json.avatar_url;
        this.setState({
            name1 : json.name,
            location : json.location,
            image : json.avatar_url,
        })
        
       
    }

    componentDidUpdate(){
    console.log("Updated State:", this.state);
    }
    componentWillUnmount(){
        console.log("Child-ComponentWillUnmount");
        
    }

    render(){
        console.log("Child-Render"+ this.props.name);
        
        return(
            <div>
                <h1>Profile Class Component</h1>
                <h2>My name is -=: {this.state.name1}</h2>
                <h2> Location : {this.state.location} </h2>
                <img src= {this.state.image} />
                <button
                    className='bg-blue-500 p-2 m-2 text-white rounded-lg'
                    onClick={ 
                                   ()=> { this.setState({
                                    count1 : 1,
                                    count2 : 2,
                                        })
                                   }
                            }
                 >
                    SetCount
                </button>
            </div>
            
        )
    }
}

export default ProfileClass;