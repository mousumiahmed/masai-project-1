import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'reactstrap';



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
                           <div className="card" style= {{width: "13rem"}}>
                                 <div className="card-body">
                                   <h6 className="card-title">{value.id}</h6>
                                   <h6>{value.name}</h6>
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



   export default Group;