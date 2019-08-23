import React from "react";



class Album extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
        console.log(this.props.albums);
        return(
            <div className = "container">
                <div className = "row">    
                {this.props.albums.map((value,index) => {
                   return (
                       <div key={index} className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-2">
                           <div className="card" style= {{width: "13rem"}}>
                                 <div className="card-body">
                                   <h6 className="card-title">{value.created_time}</h6>
                                   <p><img src={value.picture.data.url} /></p>
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