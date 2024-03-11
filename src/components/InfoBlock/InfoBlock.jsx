import React from 'react';
import style from './InfoBlock.module.css'
import defaultSrc from '../../assets/home.svg'
const InfoBlock = ({id, title, src, ...props}) => {
    return (
        <div className={style.info__block}>
            <img src={src || defaultSrc}/>
            <h1>{title}</h1>
        </div>
    );
};

export default InfoBlock;