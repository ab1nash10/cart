import React from "react";

class CartItem extends React.Component{
    constructor (){

        super();
        this.state ={
            price: 1099,
            title : 'Mobile Phone',
            qty : 10,
            img : ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)
    }
    increaseQuantity =() =>{
        console.log('this',this.state);
    }
    render() {
        const { price , title, qty}= this.state;

        return(
         <div className ="cart-item">
         <div className="left-block">
            <img style={styles.image}/>
         </div>
         <div className="right-block">
            <div style={{fontSize : 25,fontFamily: 'cursive'}}><b>{title}</b></div>
            <div style={{color : 'grey'}}>Rs { price}/-</div>
            <div style={{color : 'grey'}}>{qty}</div>
          
            <div className="cart-item-actions">
                {/* buttons */}
                <img alt ="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/561/561169.png" 
                onClick ={this.increaseQuantity}/>
                <img alt ="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/64/64518.png" />
                <img alt ="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/6896/6896239.png" />
                </div> </div></div>
        );
    }
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