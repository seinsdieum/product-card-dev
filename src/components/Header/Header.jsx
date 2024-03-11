import React from 'react';
import style from './Header.module.css'
import Icon from "../Icon/Icon.jsx";
const Header = ({actions,...props}) => {
    return (
        <header {...props} className={style.header}>
            {
                actions ? actions.map(act => <div onClick={act.action} key={act.title}><Icon src={act.src} onClick={act.action}></Icon> <span>{act.title}</span></div>) : ''
            }
        </header>
    );
};

export default Header;