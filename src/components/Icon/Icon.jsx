import React from 'react';
import style from './Icon.module.css'
import defaultSrc from './../../assets/card.svg'
const Icon = ({src, onClick, ...props}) => {
    return (
        <img onClick={() => {
            if(onClick) onClick()
        }} src={src || defaultSrc} className={style.Icon}>

        </img>
    );
};

export default Icon;