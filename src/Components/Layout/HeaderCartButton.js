import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/cart-context';

const HeaderCartButton = (props) => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)
    const cartCTX = useContext(CartContext);
    const {items} = cartCTX
    const numberOfCartItems = items.reduce((curtNumber, item)=>{
        return curtNumber + item.amount;
    }, 0)

    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump: ''}`

    useEffect(()=>{
        if(items.length ===0){
            return
        }
        setBtnIsHighLighted(true)
        const timer = setTimeout(()=>{
            setBtnIsHighLighted(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton
