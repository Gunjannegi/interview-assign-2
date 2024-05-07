import { useEffect, useState } from "react";
import UserInfoList from "./UserInfoList";
import SearchUser from "./SearchUser";
import SortUserList from "./SortUserList";

const FetchUserInfo = () =>{
    const [userInfo,setUserInfo] = useState();
    //fetching userInfo
    useEffect(()=>{
        const fetchingUserInfo = async()=>{
           try{
             const response = await fetch('https://jsonplaceholder.typicode.com/users');
             const info = await response.json();
            setUserInfo(info)
           }catch(error){
              console.error(error)
           }
        }
        if(userInfo===undefined){
            fetchingUserInfo();
        }
    },[userInfo])
    //searching name typed by user
    const handleSearchUserName = (username) =>{
          const filteredUser = userInfo.filter(user=>(
            user.name.includes(username)
          ));
          setUserInfo(filteredUser)
    }
    //sort functionality
    const handleSortedList = (sortedList)=>{
        setUserInfo([...sortedList])
    }
  return(
    <div className="flex justify-center w-screen">
    <div className="flex flex-col m-6">
      <div className="flex items-center">
      <SearchUser handleSearch={handleSearchUserName}/>
      <SortUserList userInfo={userInfo} handleSortedList={handleSortedList}/>
      </div>
      <UserInfoList userInfo={userInfo}/>
    </div>
    </div>
  )
}
export default FetchUserInfo;