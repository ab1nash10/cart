import React from "react";

const CartItem= (props) =>{
    
    // increaseQuantity =() =>{
    //     // this.state.qty += 1;
      
    //     //setState form 1
    //     // this.setState({
    //     //     qty: this.state.qty +1
    //     // },() => {  console.log('this',this.state);});
    //     //setState form 2 - if previous state is required then we use this else we use the state 1
    //     this.setState(( prevState ) => {
    //         return {
    //             qty: prevState.qty+1
    //         }
    //     },() => {  console.log('this',this.state);});
    // }
    // decreaseQuantity =() => {

    //     const {qty} = this.state;

    //     if(qty === 0){
    //         return;
    //     }
        

    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty -1
    //         }
    //     },() => {  console.log('this',this.state);
    // });
    // }


    
  
       
        const { price , title, qty}= props.product;
        const {product , onIncreaseQunatity , onDecreaseQunatity, onDeleteProduct}=props;

        return(
         <div className ="cart-item">
         <div className="left-block">
            <img style={styles.image} src={product.img}/>
         </div>
         <div className="right-block">
            <div style={{fontSize : 25,fontFamily: 'cursive'}}><b>{title}</b></div>
            <div style={{color : 'grey'}}>Rs { price}/-</div>
            <div style={{color : 'grey'}}>Qty: {qty}</div>
          
            <div className="cart-item-actions">
                {/* buttons */}
                <img alt ="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/561/561169.png" 
                onClick ={()=>onIncreaseQunatity(product)}/>
                <img alt ="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/64/64518.png" onClick={()=>onDecreaseQunatity(product)}/>
                <img alt ="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/6896/6896239.png" onClick={()=> onDeleteProduct(product.id)} />
                </div> </div></div>
        );
    }


const styles ={
    image:{
        height : 110,
        width : 110,
        borderRadius:4,
        background:'grey'
    }
}

export default CartItem;