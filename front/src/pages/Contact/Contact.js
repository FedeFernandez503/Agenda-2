import "./Contact.css"
import axios from 'axios';
import { useEffect, useState } from "react";
import {AiTwotonePhone, AiOutlineCopyrightCircle } from "react-icons/ai"
import {FaBaby } from "react-icons/fa"
import {BsPencil, BsPencilFill} from "react-icons/bs"

export function Contact() {
    const [users, setUsers] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8080/api/users/getUsers')
            setUsers(response.data)
        };
        fetchData()
    }, [])
   
  

    return (
        <div id="containerContact">
            <h2 id="titleAgenda">La Agenda de Fede</h2>
              {users.map((user, i) => (
            <div key={i} className="users">
                <form action="/cart">
                <img className="dataImage" src={user.image}/>
                <p className="data"><BsPencil/>{user.name}</p>
                <p className="data"><BsPencilFill/>{user.lastname}</p>
                <p className="data"><AiTwotonePhone/>{user.phone}</p>
                <p className="data"><FaBaby/>{user.birth}</p>
                </form>
                
            </div>
            ))}
            <div id="footer">
                <p id="textFooter">Esta pagina fue hecha por Federico Fernandez <AiOutlineCopyrightCircle/></p>
            </div>
        </div>
    )
}