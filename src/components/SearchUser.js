import { FaSearch } from "react-icons/fa";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
const SearchUser = ({handleSearch}) =>{
    const [name,setName] = useState('');
    const [pastSearches, setPastSearches] = useState([])
    const [viewHistory,setViewHistory] = useState(false);
    //retriving the past searches data
    useEffect(() => {
        const storedPastSearches = localStorage.getItem('pastSearches');
        if (storedPastSearches) {
            setPastSearches(JSON.parse(storedPastSearches));
        }
    }, []);
    //user entered name is handled here
    const handleName = (event)=>{
        setName(event.target.value)
    }
    const handleSearchName=(event)=>{
        event.preventDefault();
        handleSearch(name);
        setPastSearches(pastSearches=>[name,...pastSearches])
        //saving past searches in local storage
        localStorage.setItem('pastSearches',JSON.stringify([name,...pastSearches]))
    };
    //Dropdown and DropUp icons are there to make search history visible and hidden
    //open the view history
    const handleViewHistory = ()=>{
         setViewHistory(true)
    }
    //close the view history
    const handleClose = ()=>{
        setViewHistory(false)
   }
    
    
return(
    <div className="flex justify-evenly  mt-2 w-4/5">
    <div className="border w-1/2 flex justify-between p-2 bg-white rounded-xl">
      <input onChange={handleName} className="w-3/4 border-0 outline-none" placeholder="Search by name..."/>
      <button onClick={handleSearchName} className="bg-indigo-600 rounded-2xl text-white py-1 px-2 font-semibold flex items-center">
        <FaSearch/>
        <div className="pl-2">Search</div></button>
    </div>
    <div>
       <button  className="bg-indigo-600 rounded-xl p-2 flex text-white relative items-center">
        <div className="pr-4">View History</div>
        {viewHistory===false ?<IoIosArrowDropdown onClick={handleViewHistory} size={25}/>:
        <IoIosArrowDropup onClick={handleClose} size={25}/>}
        </button>
       {viewHistory === true &&
                    <ul className="absolute z-5 bg-blue-500 w-28 m-1 p-2 rounded ">
                        {pastSearches && pastSearches.map((search, index) => (
                            <li key={index} className="border-b-2 border-indigo-100 text-white">{search}</li>
                        ))}
                    </ul>
                }
    </div>
    </div>
)
}
export default SearchUser;