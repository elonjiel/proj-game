/* eslint-disable react/prop-types */



export default function NavListItem({item}) {
  return (
    
    <li>
     <a href="#">
        <i className={`bi ${item.icon}`}></i> 
        <span className="nav-name">{item.name}</span>
     </a>
    </li>
  )
}

