import React from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";
import Home from"./Home";
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
      albums:[],
      
    };

  }
   loggedOut=()=> {
     this.setState({
      isLoggedIn: false,
    })
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
      location:response.location.name,
     
      



    });
    
  };

  
  

  render() {
    let FbContent;

    if (this.state.isLoggedIn) {
      FbContent = (
        <div style={{  
          backgroundImage: "url(" + "https://images.unsplash.com/photo-1522115009140-a9ba91d92058?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          
          
        }} >
          <div>
          <div className="row ">
            <div className="col-md-4 col-md-offset-4 p-5 text-center ">
            <img src={this.state.picture} alt={this.state.name} className="img-fluid  rounded-circle p-5" style ={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"}}/>
            </div>
            <div className="col-md-4 text-left p-5 mt-3">
            <h2 className={style.textwhite}> {this.state.name}</h2>
          <p className="text-white"><i className="fa fa-envelope mr-1 text-white"></i>{this.state.email}</p>
          <p className={style.textwhite}><i className="fa fa-map-marker fa-2x mr-1"></i>{this.state.location}</p>
            </div>
          </div>
          
          
          </div> 

          <nav class="navbar navbar-expand-lg bg-dark navbar-light ">
          <Link class="navbar-brand" href="#">
          <img src="#" class="d-inline-block align-top bg-light" alt=""></img>
          </Link>
                           
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                   <span class="navbar-toggler-icon bg-secondary"></span>
                            </button>
                          
                            <div class="collapse navbar-collapse justify-content-center order-5" id="navbarSupportedContent">
                              <ul class="navbar-nav  ">
                              <li class="nav-item">
                                 <Link className="nav-link text-white active text-center" to='/exact'>Home</Link>
                               </li>
                               
                               <li class="nav-item">
                                   <Link className="nav-link text-white ml-3 text-center" to='/likes'>Likes</Link>
                                </li>
                                <li class="nav-item">
                                   <Link className="nav-link text-white ml-3 text-center " to='/posts'>Posts</Link>
                               </li>
                               <li class="nav-item">
                                  <Link className="nav-link text-white ml-3 text-center" to='/group'>Groups</Link>
                               </li>
                                   <li class="nav-item">
                                      <Link className="nav-link text-white ml-3 text-center" to='/albums'>Albums</Link>
                                   </li>
                              <li class="nav-item">
                                  <Link className="nav-link text-white ml-3" onClick={this.loggedOut} to='/logout'>Logout</Link>
                            </li>
                       </ul>
                 </div>
            </nav>
        	
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
                          fields="name,email,picture,location,friends,birthday,likes{about,created_time,description,name,picture},posts{full_picture,name,created_time,description,message},groups,albums{picture}"
                          scope="public_profile,email,user_friends"
                          callback={this.responseFacebook.bind(this)}
                          disableMobileRedirect={true}
                          
                        />
      );
    }

    return (
      <React.Fragment>
        <div className="jumbotron-fluid bg-white text-center ">
       
             <div>{FbContent}</div>
             </div>
             <div className="jumbotron-fluid bg-secondary text-center ">
          <div className="container ">
           <div >
           
            <Route path = '/posts' render = {props => <Post posts={this.state.posts} {...props}/>} />
             <Route path = '/likes' render = {props => <Likes likes={this.state.likes} {...props}/>} />
             <Route path = "/group" render = {props => <Group groups={this.state.groups} {...props}/>} />
             <Route path = "/albums" render = {props => <Album albums={this.state.albums} {...props}/>} />
             </div>
            
            </div>
          </div>
      </React.Fragment>
    );
  }
}


