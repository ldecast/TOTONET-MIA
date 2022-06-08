import React, { Component } from "react";
import "./Login.css";
import session from '../session';
import { Link } from "react-router-dom";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            rol: "0"
        };
    }

    handleChange(event, id) {
        switch (id) {
            case 1:
                this.setState({ username: event.target.value });
                break;
            case 2:
                this.setState({ password: event.target.value });
                break;
            case 3:
                this.setState({ rol: event.target.value });
                break;
            default:
                break;
        }
    }

    signin(event) {
        if (this.state.rol !== "0") {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    session: this.state
                })
            };
            fetch('http://localhost:8080/login', requestOptions)
                .then(response => console.log(response))

            session.username = this.state.username;
            session.password = this.state.password;
            session.rol = this.state.rol;
            session.logged = true;
            console.log(session)
        } else {
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="logincard" >
                <i className="far fa-user"></i>
                <h1>Bienvenido</h1>
                <hr />
                <input placeholder="Usuario" type="text" onChange={(e) => this.handleChange(e, 1)} />
                <input placeholder="Contraseña" type="password" onChange={(e) => this.handleChange(e, 2)} />
                <select defaultValue={this.state.rol} onChange={(e) => this.handleChange(e, 3)}>
                    <option value="0" disabled>Seleccione un rol</option>
                    <option value="admin">Adminstrador del sistema</option>
                    <option value="coordinador">Coordinador de departamento</option>
                    <option value="revisor">Revisor de expedientes</option>
                    <option value="aplicante">Aplicante</option>
                </select>
                <Link id="signin" to={`/${"Home"}`} onClick={(e) => this.signin(e)}>Ingresar</Link>
                {/* <button onClick={this.signin()}>Ingresar</button> */}
            </div>
        );
    }
}

export default Login;