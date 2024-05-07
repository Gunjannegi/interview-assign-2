const SortUserList=({userInfo,handleSortedList})=>{
    const handleSortList=()=>{
        if(userInfo!==undefined && userInfo.length>1){
            const sortedUsers = userInfo.sort((a, b) => {
                const firstCharA = a.name.charAt(0).toUpperCase(); 
                const firstCharB = b.name.charAt(0).toUpperCase(); 
                
                if (firstCharA < firstCharB) {
                    return -1; 
                }
                if (firstCharA > firstCharB) {
                    return 1;
                }
                return 0; 
            });
            console.log(sortedUsers)
            //lifting up the sorted list
            handleSortedList(sortedUsers)
        }
    }
return(
    <>
    <button className="bg-indigo-600 text-white h-10 px-2 rounded-lg active:bg-indigo-400" onClick={handleSortList}>Sort List</button>
    </>
)
};
export default SortUserList;