import "./Error.css"
import { Link } from "react-router-dom"

export function Error() {
    return (
        <div id="containerError">
            <h1 id="titleError">Error 404 not found</h1>
            <p>Please enter a valid url</p>
            <img id="imageError" src="https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1600"></img>
            <Link to="/" className="link">
                Home
            </Link>
        </div>
    )
}
