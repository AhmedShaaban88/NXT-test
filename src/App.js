import React, { useState } from "react";
import './App.css';
let types = {

   owner: 1,
  
   admin: 2,
  
   user: 3
  
  }

  let admins = [
   {
  
     id: 1,
  
     name: 'Ahmed',
  
     type: 1,
  
     email: "user@email.com",
  
     teams: "Development team",
  
     access: ["World cup event", "Workshop workspace", "Admin Workspace",  "Fun Event",  "Development Workspace"],
  
     image: "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg"
  
   },
  
   {
  
     id: 2,
  
     name: 'Ali',
  
     type: 2,
  
     email: "user@email.com",
  
     teams: "Design team",
  
     access: ["World cup event", "Workshop workspace"],
  
     image: "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg"
  
   },
  
   {
  
     id: 3,
  
     name: 'Mohamed',
  
     type: 3,
  
     email: "user@email.com",
  
     teams: "QA team",
  
     access: ["World cup event", "Workshop workspace", "Fun Event"],
  
     image: "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg"
  
   },
  
   {
  
     id: 4,
  
     name: 'Omar',
  
     type: 3,
  
     email: "user@email.com",
  
     teams: "Development team",
  
     access: ["World cup event", "Workshop workspace", "Fun Event", "Development Workspace"],
  
     image: "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg"
  
   }
  
  ]

function App() {
  const [currentAdmins, setCurrentAdmins] = useState(admins);
    const getName = (name, type, image) => {
    const userType = Object.keys(types).find(key => types[key] === type);
      return <div>
      <span className="name">
      <img src={image} alt={name} width={34} className="avatar"/>
        {name} {"  "}
        <span>{userType}</span>
        </span>
      </div>
    }
    const getTeamShort = (teams) =>{
      const shortName = teams.split(' ').map(letters => letters[0]).join('').toUpperCase();
      return <div>
        <span className="name-badge">{shortName}</span>{"  "}
        <span>{teams}</span>
      </div>
    }
    const getAccess = (access) => {
      let shownAccess = [];
      let badgeLength = 0;
      if(access && access.length > 2){
        shownAccess = access.slice(0, 2);
        badgeLength = access.length - shownAccess.length;
      }
      if(badgeLength > 0){
        return <div>
        {shownAccess.map((access, index) => <span key={index}>{' '} {access} {' '}</span>)}
        <span>+{badgeLength}</span>
        </div>
      }
      return <div>
        {
        access.map((access,index) => <span key={index}>{access}</span>)
        }
      </div>
    }
    const deleteItem = (item) => {
      const _admins = currentAdmins.filter(admin => admin.id !== item.id);
      setCurrentAdmins(_admins)
    }
  return (

    <table>
      <thead>
      <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Teams</th>
      <th>Access</th>
      <th>{' '}</th>
    </tr>
      </thead>
   <tbody>
   {currentAdmins.map(admin => <tr key={admin.id}>
      <td>
        {getName(admin.name, admin.type, admin.image)}
        </td>
      <td>{admin.email}</td>
      <td>
        {getTeamShort(admin.teams)}
        </td>
      <td>{getAccess(admin.access)}</td>
      <td>
        <button onClick={() => deleteItem(admin)}>Delete</button>
      </td>
    </tr>
    )}
   </tbody>

   
  </table>

  );
}



export default App;