

import React from 'react'
 
export default function NavListItem({ item, navOnClick }) {
  return (
    
    <li>
     <a
     href="#" 
     className={`${item.active ? 'active' : undefined}`}
     onClick={() => navOnClick(item._id, item.target)}
     >
        <i className={`bi ${item.icon}`}></i> 
        <span className="nav-name">{item.name}</span>
     </a>
    </li>
  ) 
}

