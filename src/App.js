// import CartItem from "./Cartitem";
import React from "react";
import Cart from "./cart";
import Navbar from "./Navbar";


class App extends React.Component{
  constructor (){

    super();
    this.state ={
     
        products :[
            {   
            price: 1099,
            title : 'Mobile Phone',
            qty : 1,
            img : 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            id: 1
        },   
        {
        price: 10099,
        title : 'Wrist Watch',
        qty : 41,
        img : 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        id: 2
    },  
        { price: 169,
        title : 'Shoes',
        qty : 14,
        img : 'https://images.unsplash.com/photo-1570464197285-9949814674a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: 3
    }
    ]
    // this.increaseQuantity = this.increaseQuantity.bind(this)
}}


handleIncreaseQuantity =(product)  =>  {
    console.log('Heyy!! Please Increase the qty of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty +=1;
    this.setState({
        products
    })
}

handleDecreaseQuantity =(product)  => {
    console.log('Decrease functionality',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty==0){
        return;
    }
    products[index].qty -=1;
   
    this.setState({
        products
    })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item)=> item.id !==id);

    this.setState({
        products : items
    })
}

getCartCount = () => {
  const { products} = this.state;

  let count = 0;

  products.forEach((product)=>{

    count+= product.qty;
  })
  return count;
}

getCartTotal =() =>{
  const {products}  = this.state;

 let cartTotal = 0;

 products.map((product)=>{
  cartTotal = cartTotal + product.qty * product.price
 })

 return cartTotal;
}
  render(){

    const { products} = this.state;
   
  return (
    <div className="App">
  <Navbar count = {this.getCartCount()}/>
  <Cart 
  products = {products}
  onIncreaseQunatity ={this.handleIncreaseQuantity}
  onDecreaseQunatity ={this.handleDecreaseQuantity}
  onDeleteProduct = {this.handleDeleteProduct}
  />
  <div style={{padding:10,fontSize:20 , fontFamily:'cursive'}}>TOTAL : {this.getCartTotal()}</div>
    </div>
  );
}}

export default App;
