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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';



export default class Facebook extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      friends:"",
      picture: "",
      location:"",
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
      friends:response.friends.summary.total_count,
      picture: response.picture.data.url,
      likes:response.likes.data,
      posts:response.posts.data,
      groups:response.groups.data,
      albums:response.albums.data,
      location:response.location.name



    });
    
  };

  componentClicked = () => console.log("clicked");
  

  render() {
    let FbContent;

    if (this.state.isLoggedIn) {
      FbContent = (
        <div>
          <div className=""></div>
          <img src={this.state.picture} alt={this.state.name} />
          <h2> {this.state.name}</h2>
          <p className="text-primary"><i className="fa fa-envelope mr-1 text-primary"></i>{this.state.email}</p>
          <p><i className="fa fa-map-marker fa-2x mr-1"></i>{this.state.location}</p>
          
         
          <h6 className={style.navbar}><Link to='/'><span className={style.colorwhite}>Home</span></Link>
          <Link to='/posts'><span className={style.colorwhite}>Posts</span></Link>
          <Link to='/likes'><span className={style.colorwhite}>Likes</span></Link>
          <Link to='/group'><span className={style.colorwhite}>Groups</span></Link>
          <Link to='/albums'><span className={style.colorwhite}>Album</span></Link>
          
          </h6>
         	
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
                          fields="name,email,picture,location,friends,birthday,likes{about,created_time,description,name,picture},posts{full_picture,name,created_time,description,message},groups{description,created_time,picture},albums{picture}"
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
  return <div><h4>Lets Flashback to your FB once More</h4></div>
}