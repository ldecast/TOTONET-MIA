import React from "react";
import { Link } from "react-router-dom";
import "./Rol.css";

function Rol() {

    return (
        <div className="container-fluid">

            <div className="row index">
                <div className="col-12">
                    <h2>
                        <Link to="/index">Index</Link>
                    </h2>
                    <h2>
                        <Link to="/guest">Guest</Link>
                    </h2>
                    <h2>
                        <Link to="/admin">Adminstrador</Link>
                    </h2>
                    <h2>
                        <Link to="/coordinador">Coordinador</Link>
                    </h2>
                    <h2>
                        <Link to="/revisor">Revisor</Link>
                    </h2>
                    <h2>
                        <Link to="/aplicante">Aplicante</Link>
                    </h2>
                </div>
            </div>

        </div>
    );
}

export default Rol;