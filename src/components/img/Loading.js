import React from 'react';

import Loading from './loading.svg'
import './loading.css'

export default ()=>{
    return (
        <div className="c-loading">
            <img src= {Loading} alt='loading' />
        </div>
    )
}