import React from 'react'
 
export default function SocialListItem({ item } ) {
  return (
    
    <li>
     <a href="#" >
        <i className={`bi ${item.icon}`}></i> 
     </a>
    </li>
  ) 
}
