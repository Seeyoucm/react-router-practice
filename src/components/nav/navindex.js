import React from 'react'

import {
    Link
  } from 'react-router-dom';

import './nav.css'

export default (props)=>{
        return (
            <ul className='c-nav'>
            {
                props.items.map(item =>{
                    return (
                        <li key={item.url}>
                            <Link to={item.url}>{item.text}</Link>
                        </li>
                    )
                })
            }
            </ul>
        )
}