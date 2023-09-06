import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
function App() {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((data) => data.json())
      .then((users) => {
        console.log(users.results);
        setUsersList(users.results);
      });
  }, []);
 
  return (
    <>
      {usersList.map((user, index) => {
        return <ContactList 
        imgUrl ={user.picture.large}
        name={user.name.first} 
        age={user.dob.age} 
        email={user.email}
        />;
      })}
    </>
  );
}

export default App;
