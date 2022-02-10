import React,{useEffect, useState} from 'react'
import './DocterDetails.css'
import axios from 'axios';
function DocterDetails() {
    const[profileImage,setProfileImage]= useState("");
    const[profileName,setProfileName]= useState("");
    const[profileDepartment,setProfileDepartment]= useState("");
    const[profileQualification,setProfileQualification]= useState("");
    const[profileNationality,setProfileNationality]= useState("");
    const[profileRoomNo,setProfileRoomNo]= useState("");
    const[profileFloor,setProfileFloor]= useState("");
    const[profileDutyTime,setProfileDutyTime]= useState("");
    const profileData =async()=>{
        try{
          const res=await axios.get("https://api.1up.health").then(res => {
            console.log("Success")
        }) 
          setProfileName(res.data.results[0].name) ;
          setProfileImage(res.data.results[0].image.large);
          setProfileDepartment(res.data.results[0].deapartment);
          setProfileQualification(res.data.results[0].qualification);
          setProfileNationality(res.data.results[0].nationality);
          setProfileRoomNo(res.data.results[0].roomno);
          setProfileFloor(res.data.results[0].floor);
          setProfileDutyTime(res.data.results[0].time);
          console.log(res.data.name)
        }catch(error){

        } console.error();
    };
    useEffect(() => {
profileData();
    },[])
    return (
        <div  className="card">
             <img src={profileImage} style={{width:"100%"}} alt="docterimg" />
            <h3 className="name" >{profileName}</h3>
  <ul>     
<li><i class="fas fa-user-md"></i>{profileDepartment}</li>
<li><i class="fas fa-user-graduate"></i>{profileQualification}</li>
<li><i class="fas fa-flag"></i>{profileNationality}</li>
<li><i class="fas fa-person-booth">{profileRoomNo}</i></li>
<li><i class="fas fa-bars"></i>{profileFloor}</li>
<li><i class="far fa-clock"></i>{profileDutyTime}</li>
</ul>
        </div>
    )
}

export default DocterDetails
