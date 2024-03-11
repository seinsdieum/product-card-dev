import React from 'react';
import style from './View.module.css'
const View = ({...props}) => {
    return (
        <div {...props} className={style.view}>
        </div>
    );
};

export default View;