import React,{ useState } from 'react';
import '../stylesheet/Navbar.css'
import { useNavigate } from "react-router-dom";

export const Navbar = ({ role }) => {
    const navigate = useNavigate();
    const [menuActive, setMenuActive] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setMenuActive(!menuActive); // Toggle menu visibility
    };
    // Define menu items for each role
    const adminMenu = [
        { title: "Home", path: "/", icon: <i className="ri-home-9-line"></i>, onClick: () => navigate('/') },
        { title: "Dashboard", path: "/dashboard", icon: <i className="ri-dashboard-2-line"></i>, onClick: () => navigate('/dashboard') },
        { title: "Patients", path: "/patients", icon: <i className="ri-user-line"></i>, onClick: () => navigate('/patients') },
        { title: "Employees", path: "/employees", icon: <i className="ri-group-line"></i>, onClick: () => navigate('/employees') },
        { title: "Add Employee", path: "/add-employee", icon: <i className="ri-user-add-line"></i>, onClick: () => navigate('/add-employee') },
        { title: "Profile", path: "/profile", icon: <i className="ri-user-3-line"></i>, onClick: () => navigate('/profile'),special: true },
    ];

    const employeeMenu = [
        { title: "Home", path: "/", icon: <i className="ri-home-9-line"></i>, onClick: () => navigate('/') },
        { title: "Dashboard", path: "/dashboard", icon: <i className="ri-dashboard-2-line"></i>, onClick: () => navigate('/dashboard') },
        { title: "Patients", path: "/patients", icon: <i className="ri-user-line"></i>, onClick: () => navigate('/patients') },
        { title: "Doctors", path: "/doctors", icon: <i className="ri-user-2-line"></i>, onClick: () => navigate('/doctors') },
        { title: "Profile", path: "/profile", icon: <i className="ri-user-3-line"></i>, onClick: () => navigate('/profile'),special: true },
    ];

    const patientMenu = [
        { title: "Home", path: "/", icon: <i class="ri-home-9-line"></i>, onClick: () => navigate('/') },
        { title: "About", path: "/about", icon: <i className="ri-information-line"></i>, onClick: () => navigate('/about') },
        { title: "Doctors", path: "/doctors", icon: <i className="ri-user-2-line"></i>, onClick: () => navigate('/doctors') },
        // { title: "Departments", path: "/departments", icon: <i className="ri-hospital-line"></i>, onClick: () => navigate('/departments') },
        { title: "Contact", path: "/contact", icon: <i className="ri-contacts-line"></i>, onClick: () => navigate('/contact') },
        { title: "Make an Appointment", path: "/make-appointment", icon: <i className="ri-calendar-line"></i>, onClick: () => navigate('/make-appointment'),special: true },
    ];

    // Select the appropriate menu based on the role
    const menu = role === 'admin' ? adminMenu : role === 'employee' ? employeeMenu : patientMenu;

    return (
        <div className="layout " >
            <div className="layout__header">
                <div className="layout__header__logo">
                    <h1 className='title-name'>MediConnect</h1>
                </div>
                 <div className="menu-toggle" onClick={toggleMenu}>
                    <i className="ri-menu-line"></i> {/* Add a menu icon for toggle */}
                 </div>
                <div className={`layout__header__menu ${menuActive ? 'active' : ''}`}>
                    <ul className='text-style' >
                        {menu.map((item, index) => (
                            <li key={index} onClick={item.onClick} className={item.special ? 'import' : ''}>
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};