import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




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
                           <div className="card" style= {{width: "13rem"}} style ={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"}}>
                                 <img src={value.full_picture} className="card-img-top " alt={value.name}/>
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