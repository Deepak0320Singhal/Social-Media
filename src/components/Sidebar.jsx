import React from 'react'
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const isActive = ({ isActive }) => ({ color: isActive ? "active" : "" })
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "280px" }}   >
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">

                <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/">Home</NavLink>
                </li>

                <li>
                    {/* <a href="#" className="nav-link text-white">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                        Orders
                    </a> */}
                    <NavLink className="nav-link text-white" to="/create-post" style={isActive}>Create Post</NavLink>
                </li>

                <li>
                    <NavLink className="nav-link text-white" to="/check-post" style={isActive}>Check Post</NavLink>
                </li>

                <li>
                    <NavLink className="nav-link text-white" to="/input" style={isActive}>Create Post</NavLink>
                </li>

            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>


    )
}

export default Sidebar;