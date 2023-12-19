import React, {Component} from "react";

class Welcome extends Component {
    
    
    render(){
        const {name, age, children} = this.props;
        return(
            <h1>Welcome {name}, votre age est {age}</h1>
        )
    }
};

export default Welcome;