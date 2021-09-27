import classes from './CartButton.module.css';
import { uiAction } from '../../store/uiSlice';
import { useSelector,useDispatch } from 'react-redux';
const CartButton = (props) => {
  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
const dispatch=useDispatch()
const cartVisibleHandler=(event)=>{
  event.preventDefault();
  dispatch(uiAction.toggle())
}
  return (
    <button className={classes.button} onClick={cartVisibleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
