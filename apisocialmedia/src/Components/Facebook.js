import React from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";
import Post from "./Post.js";
import Likes from "./Likes.js";
import Group from "./Group.js";
import Album from "./Album.js";
import style from "./app.module.css";
import {Route, Link,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron,Container } from 'reactstrap';


export default class Facebook extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      hometown:"",
      friends:"",
      picture: "",
      birthday:"",
      likes:[],
      posts:[],
      groups:[],
      albums:[]
    };

  }
 

  responseFacebook = response => {
     console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      hometown:response.hometown.name,
      friends:response.friends.summary.total_count,
      birthday:response.birthday,
      picture: response.picture.data.url,
      likes:response.likes.data,
      posts:response.posts.data,
      groups:response.groups.data,
      albums:response.albums.data


    });
    
  };

  componentClicked = () => console.log("clicked");
  

  render() {
    let FbContent;

    if (this.state.isLoggedIn) {
      FbContent = (
        <div>
          <img src={this.state.picture} alt={this.state.name} />
          <h2> {this.state.name}</h2>
          <p>{this.state.email}</p>
          
         
          <p className={style.navbar}><Link to='/'></Link>
          <Link to='/posts'><span className={style.colorwhite}>Posts</span></Link>
          <Link to='/likes'><span className={style.colorwhite}>Likes</span></Link>
          <Link to='/group'><span className={style.colorwhite}>Groups</span></Link>
          <Link to='/albums'><span className={style.colorwhite}>Album</span></Link>
          
          </p>
         	
        </div>
      );
    } else {
      FbContent = (
        
        <FacebookLogin
                          appId="881217192277202"
                          cookie={true}
                          xfbml={true}
                          version='4.0'
                          autoLoad={false}
                          fields="name,email,picture,hometown,friends,birthday,likes,posts{full_picture,icon,name,created_time,description,message},groups,albums{picture}"
                          scope="public_profile,email,user_friends"
                          callback={this.responseFacebook.bind(this)}
                          disableMobileRedirect={true}
                          
                        />
      );
    }

    return (
      <React.Fragment>
        <Jumbotron fluid className="text-center">
          <Container className={style.hed}>
             <h5 className="p-3"><Route path = "/" exact component = {Welcome} /></h5>
             <div className="m-3">{FbContent}</div>
             <div >
             <Route path = '/posts' render = {props => <Post posts={this.state.posts} {...props}/>} />
             <Route path = '/likes' render = {props => <Likes likes={this.state.likes} {...props}/>} />
             <Route path = "/group" render = {props => <Group groups={this.state.groups} {...props}/>} />
             <Route path = "/albums" render = {props => <Album albums={this.state.albums} {...props}/>} />
             </div>
            
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}


const Welcome = () =>{
  return <div>Welcome to Your Page</div>
}