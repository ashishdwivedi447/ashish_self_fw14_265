import React, { useEffect } from "react";
import { useSelector ,useDispatch } from "react-redux/es/exports";
import { getprofilefailure, getprofilerequest, getprofilesuccess } from "../Redux/action";
import axios from "axios"
import ProfileDataRow from "../Components/ProfileDataRow";

const Homepage = () => {
  const profile=useSelector((store)=>store.profileData)
  const dispatch=useDispatch()

  const getProfiledata=()=>{
    dispatch(getprofilerequest())
    axios.get("http://localhost:8080/profile")
    .then((res)=>dispatch(getprofilesuccess(res.data)))
    .catch((error)=>dispatch(getprofilefailure()))

  }

  useEffect(()=>{
  getProfiledata()
  },[])

  console.log(profile);
  return (
    <div>
      <table>
        <thead style={{ fontWeight: "700" }}>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
          {profile.map((item)=>(
            <ProfileDataRow profile={item}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
