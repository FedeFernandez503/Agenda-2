import "./Home.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"

const Register = ({ setUser }) => {
	const [inputsValues, setInputsValues] = useState({
		name: "",
		lastname: "",
		phone: "",
        address: "",
		birth: "",
	})
	const [mensaje, setMensaje] = useState(null)
	const [loading, setLoading] = useState()
	const navigate = useNavigate()
	const { name, lastname, phone, address, birth } = inputsValues
	const handleInputChange = (e) => {
		setInputsValues({ ...inputsValues, [e.target.name]: e.target.value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (name !== "" && lastname !== "" && phone !== "" && address !== "" && birth !== "") {
			setLoading(true)
			fetch("http://localhost:8080/api/users/createUser", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(inputsValues),
			})
				.then((res) => {
					if (res.ok) return res.json()
					else return Promise.reject()
				})
				.then((user) => {
					console.log(user)
					setUser(user)
					navigate("/contactos")
				})
				.catch((error) => {
					console.error(error)
					setMensaje("Hubo un error")
					setLoading(false)
				})
		}
	}
    return (
        <div id="containerHome">
            <form id="form" onSubmit={handleSubmit}>
                <h1 id="title">New Contact</h1>
                <input className="inputs" id="name" name="name" placeholder="please enter your name" type="text" value={name} onChange={handleInputChange}/>
                <input className="inputs" id="lastname" name="lastname" placeholder="please enter your lastname" type="text" value={lastname} onChange={handleInputChange}/>
                <input className="inputs" id="phone" name="phone" placeholder="please enter your phone number" type="number" value={phone} onChange={handleInputChange}/>
                <input className="inputs" id="address" name="address" placeholder="please enter your address" type="text" value={address} onChange={handleInputChange}/>
                <input className="inputs" id="birth" name="birth" placeholder="please enter your date of birth" type="text" value={birth} onChange={handleInputChange}/>
                <button id="send" type="submit">{loading ? "Cargando..." : "Add contact"}</button>
                <Link to="/contactos" className="link">
						Ver todos los contactos
				</Link>
            </form>
            {mensaje && (
				<div>
					<p>{mensaje}</p>
				</div>
			)}
            <div id="newUser">
                <p className="data">{name}</p>
                <p className="data">{lastname}</p>
                <p className="data">{phone}</p>
                <p className="data">{birth}</p>
            </div>
        </div>
 	)
}

export default Register