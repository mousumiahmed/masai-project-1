import React from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends React.Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    hometown:"",
    friends:"",
    picture: "",
    birthday:"",
    likes:"",
    posts:""
  };

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
      likes:response.likes.data[0].name,
      posts:response.posts.data[5].message


    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div>
          <img src={this.state.picture} alt={this.state.name} />
          <h2> {this.state.name}</h2>
          <p>Email: {this.state.email}</p>
          <p>ID:{this.state.userID}</p>
          <p>{this.state.friends}</p>
          <p>{this.state.hometown}</p>
          <p>{this.state.birthday}</p>
          <p>{this.state.likes}</p>
          <p>{this.state.posts}</p>
        </div>
      );
    } else {
      fbContent = (
        
        <FacebookLogin
                          appId="881217192277202"
                          cookie={true}
                          xfbml={true}
                          version='2.8'
                          autoLoad={false}
                          fields="name,email,picture,hometown,friends,birthday,likes,posts"
                          scope="public_profile,email,user_friends"
                          callback={this.responseFacebook.bind(this)}
                          disableMobileRedirect={true}
                          
                        />
      );
    }

    return <div>{fbContent}</div>;
  }
}