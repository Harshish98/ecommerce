import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/Context'
import styles from './Navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faShop } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    const global = useContext(CartContext);
    const state = global.state;
    return (
        <>
        <div className={styles.navbar}>
            <nav className={styles.navContent}>
            <Link to="/home"><p><FontAwesomeIcon icon={faShop} />Shopzy</p></Link>
                <ul>
                <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className={styles.cart_icon}>
                <Link to="/cart"><button><FontAwesomeIcon icon={faCartPlus} size="2x" /></button></Link>
                    <button className={styles.cart_number}>{state.length}</button>
                    </div>
            </nav>
        </div>
        </>
    )
}

export default Navigation
