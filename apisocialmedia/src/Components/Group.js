import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




class Group extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
       // console.log(this.props.groups);
        return(
            <div className = "container">
                <div className = "row">    
                {this.props.groups.map((value,index) => {
                   return (
                       <div key={index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
                           <div className="card" style= {{width: "13rem"}} style ={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"}}>
                                 <div className="card-body">
                                   <h6 className="card-title">{value.name}</h6>
                                   <img src={value.picture.data.url} ></img>
                                   <p>{value.description}</p>
                                   <p>{value.created_time}</p>

                                  
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



   export default Group;