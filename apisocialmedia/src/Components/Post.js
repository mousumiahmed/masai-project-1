import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'reactstrap';



class Post extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
        console.log(this.props.posts);
        return(
            <div className = "container">
                <div className = "row">    
                {this.props.posts.map((value,index) => {
                   return (
                       <div key={index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
                           <div className="card" style= {{width: "13rem"}}>
                                 <img src={value.full_picture} style={{height:100,width:100}} className="card-img-top " alt={value.name}/>
                                 <div className="card-body">
                                   <h6 className="card-title">{value.created_time}</h6>
                                   <p>{value.message}</p>
                                   <p>{value.description}</p>
                                
                                  
                               </div>
                           </div>
                       </div>
                   );
               })}
           </div>
           </div>

           );
}
}



   export default Post;