import React from 'react';
import ReactDOM from 'react-dom';
import Facebook from "./Facebook.js";
import Post from"./Post.js";
import {Route, Link,Switch} from 'react-router-dom';


class App extends React.Component{

    render(){
        return(
            <div>
                <Facebook />
                <Post />

            </div>
            
        )
    }

}
export default App;
