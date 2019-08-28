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
                           <div className="card card h-100" style= {{width: "13rem",height: "11rem"}} style ={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"}}>
                                 <img src={value.full_picture} style= {{height: "10rem" }}  className="card-img-top p-2 img-fluid" alt={value.name}/>
                                 <div className="card-body">
                                   
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