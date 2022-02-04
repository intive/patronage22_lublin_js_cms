import React from 'react';

function NavItem(state: { to: string; label: string }) {
    return (
        <li>
            <a href={state.to}>{state.label}</a>
        </li>
    );
}

export default NavItem;
