const UserInfoList = ({userInfo})=>{
    return(
        <div className=" w-screen mt-10 p-2 flex justify-center">
            {/*table to show user information*/}
           <table className="2xl:w-4/5 overflow-auto"> 
            <thead className= "text-white">
                <tr>
                    <th className="p-4 bg-indigo-600 rounded-lg">Sno.</th>
                    <th className="p-4 bg-indigo-600 rounded-sm">Name</th>
                    <th className="p-4 bg-indigo-600 rounded-sm">UserName</th>
                    <th className="p-4 bg-indigo-600 rounded-sm">Email</th>
                    <th className="p-4 bg-indigo-600 rounded-sm">Address</th>
                    <th className="p-4 bg-indigo-600 rounded-sm">Contact</th>
                    <th className="p-4 bg-indigo-600 rounded-sm">Website</th>
                    <th className="p-4 bg-indigo-600 rounded-lg">Company</th>
                </tr>
            </thead>
            <tbody  className="bg-blue-200">
              {userInfo?.map(user=>( <tr key={user.name}>
                <td className="p-2 text-center">{user.id}</td>
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.username}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2">
                    <span>{user.address.street}</span>
                    <span>{user.address.suite}</span>
                    <span>{user.address.city}</span>
                    <span>{user.address.zipcode}</span>
              </td>
              <td className="py-2">{user.phone}</td>
              <td className="py-2">{user.website}</td>
              <td className="py-2">
                {user.company.name}
              </td>
               </tr>))}
            </tbody>
           </table>
        </div>
    )
}

export default UserInfoList;