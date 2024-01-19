import React from 'react';
import './SideMenu.css';

// functional component
const SideMenu = () => {
    return (
        <aside className='sidemenu'> 
            <div className='sidemenu-button'>
                <span>+</span>
                New Chat
            </div>
        </aside>
    )
}

export default SideMenu;

/* aside (a parte, de lado) = uma div lateral */