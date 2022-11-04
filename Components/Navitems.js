import React,{useState} from 'react'
import {CSSTransition} from "react-transition-group";

export const Navitems = (props) => {
    const[open, setOpen]=useState(false);
  return (
    <li className='nav-item' onClick={()=>setOpen(!open)}>
        <a href='#' className='nav-link'>{props.link}</a>
        <CSSTransition in={open} unmountOnExit timeout={500} classNames="main">
            <div className='menu'>
                {props.children}

            </div>
        </CSSTransition>
    </li>
  )
}

