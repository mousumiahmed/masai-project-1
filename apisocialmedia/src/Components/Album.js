import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




class Album extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
       // console.log(this.props.albums);
        return(
            <div className = "container">
                <div className = "row">    
                {this.props.albums.map((value,index) => {
                   return (
                       <div key={index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
                           <div className="card" style= {{width: "13rem"}} style ={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)"}}>
                                 <div className="card-body">
                                   <h6 className="card-title">{value.name}</h6>
                                   <img src={value.picture.data.url} style={{height:"10em"}} ></img>
                                   <p>{value.name}</p>                                
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



   export default Album;