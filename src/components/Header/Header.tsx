import React,  { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Header.module.css'
import { useHistory } from 'react-router-dom';

const Header = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    const history = useHistory()

    const logoutHandler = () => {
        authCtx.logout();
        // optional: redirect the user
        history.replace('/')
    };

    return (
        <header className={classes.header}>
            <h1>Header Component</h1>
            {isLoggedIn && <button className={classes.button} onClick={logoutHandler}>Logout</button>}
        </header>
    )
}


export default Header
