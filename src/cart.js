import React from "react";
import CartItem from "./Cartitem";

class Cart extends React.Component{
    constructor (){

        super();
        this.state ={
         
            products :[
                {   
                price: 1099,
                title : 'Mobile Phone',
                qty : 1,
                img : '',
                id: 1
            },   
            {
            price: 10099,
            title : 'Fax Machine',
            qty : 41,
            img : '',
            id: 2
        },  
            { price: 169,
            title : 'SOAP',
            qty : 14,
            img : '',
            id: 3
        }
        ]
        // this.increaseQuantity = this.increaseQuantity.bind(this)
    }}
  
    render()
    {
 const {products} = this.state;
      
        return (
            <div className="cart">
            
            
            {products.map((product)=> {
                return (
                <CartItem 
                product ={product} 
                key={product.id}
                  />)
            })}
            
            </div>
            
        );
    }
}

      




export default Cart; 