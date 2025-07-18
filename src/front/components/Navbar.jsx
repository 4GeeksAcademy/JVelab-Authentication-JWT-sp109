import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Inicio</span>
				</Link>
				<div className="ml-auto d-flex gap-3">
					<Link to="/singup">
						<button className="btn btn-primary">Sing up</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-primary">Log in</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};