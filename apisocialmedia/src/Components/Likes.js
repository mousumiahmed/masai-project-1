import React from "react";



class Likes extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
       // console.log(this.props.groups);
        return(
            <div className = "container">
                <div className = "row">    
                {this.props.likes.map((value,index) => {
                   return (
                       <div key={index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
                           <div className="card card h-100" style= {{width: "13rem",height:"15rem"}} style ={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"}}>
                                 <div className="card-body">
                                   <h6 className="card-title text-primary">{value.name}</h6>
                                   <img src={value.picture.data.url} />
                                   <p>{value.about}</p>                     
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



   export default Likes;