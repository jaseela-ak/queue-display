import React from 'react'
import {Firebase} from '../../firebase/config'
import 'bootstrap/dist/css/bootstrap.min.css';

import './Table.css'

class Table extends React.Component{
  constructor(props){
    super(props);
    this.state={docters:[1]}
    
  }
 
  componentDidMount(){
    Firebase.firestore().collection('docters').get().then(snapshot=>{
      let docters=[];
      
      snapshot.forEach((obj)=>{
        docters.push(obj.data());
        console.log(obj.data())
      });
      
      this.setState({docters:docters});
      
    });
    
     }
    
render(){
  
   return (
   
     <div className='footer'>
    
       <table className=' tableStyle'>
         <tbody>
           <tr>
             <th className='thStyle'>Id</th>
             <th  className='thStyle'>Name</th>
             <th  className='thStyle'>Department</th>
             <th  className='thStyle'>Qualification</th>
             <th  className='thStyle'>RoomNo</th>
             <th  className='thStyle'>TokenNo</th>
             <th className='thStyle'>NextToken</th>
             <th className='thStyle'>pt waiting</th>
           </tr>
           
           {this.state.docters.map((data) =>{
            
             return(
              
          
             <tr >
               <td className='tdStyle'>{data.id}</td>
               <td className='tdStyle'>{data.name}</td>
               <td className='tdStyle'>{data.department}</td>
               <td className='tdStyle'>{data.qualification}</td>
               <td className='tdStyle'>{data.roomno}</td>
               <td className='tdStyle'>{data.TokenNo}</td>
               <td className='tdStyle'>{data.NextToken}</td>
               <td className='tdStyle'>{data.ptwaiting}</td>
             </tr>
           );
           
            } )}
          { console.log(this.state.docters)}
             
         </tbody>
        
       </table>
      
     </div>
   );
}
}

export default Table;