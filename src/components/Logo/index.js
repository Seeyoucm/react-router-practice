import React from 'react';
import classNames from 'classnames';

import './Logo.css'
import logo from './logo.svg'

export default (props)=> {
    return (
        <div className={classNames("c-logo",{"vertical" : props.vertical})} >
            <img className = 'c-logo-img' src={logo} alt='' />
            <h1 className = 'c-logo-title'>哈哈哈的bolg</h1>
        </div>
    )
}