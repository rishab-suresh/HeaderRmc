import React from 'react'
import DropdownItem from './DropdownItem'

export const DropwdownMenu = () => {
  return (
    <div className='dropdown'>
        <DropdownItem>
            <h3>Test</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at dui mollis, gravida turpis quis, ullamcorper orci. Maecenas ante lacus.</p>
        </DropdownItem>
        <DropdownItem>
            <h3>Test</h3>
            <a href=''>Click</a>
        </DropdownItem>
        <DropdownItem>
            <h3>Test</h3>
            <img src=''></img>
        </DropdownItem>
    </div> 
 )
}

