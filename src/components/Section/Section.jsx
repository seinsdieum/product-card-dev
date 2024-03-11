import React from 'react';
import style from './Section.module.css'
import Icon from "../Icon/Icon.jsx";
const Section = ({title, ...props}) => {
    return (
        <>
            <div className={style.section__title}><Icon></Icon><h1>{title}</h1></div>
            <section {...props} className={style.section}>
            </section>
        </>
    );
};

export default Section;