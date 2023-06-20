// import CartItem from "./Cartitem";
import React from "react";
import Cart from "./cart";
import Navbar from "./Navbar";
import {firestore as db}  from './firebase-config' 
import firebase from './firebase-config';

class App extends React.Component{
  constructor (){

    super();
    this.state ={
     
        products :[],
        loading : true 
    
}
this.db = firebase.firestore();
}


componentDidMount(){

// firebase
// .firestore()
// .collection('products')
// .get()
// .then((snapshot) =>{
//   console.log(snapshot);
//   snapshot.docs.map((doc)=>{
//     console.log(doc.data());
//   });

//   const products = snapshot.docs.map((doc) => {
//     const data = doc.data();
//     data['id'] = doc.id;
//     return data;
//   })
//   this.setState({
//     products ,
//     loading : false
//   })
// })


this.db
.collection('products')
// .where('price', '==',60000)
// .where('title','==','laptop')
.orderBy('price','desc')
.onSnapshot((snapshot) =>{

    console.log(snapshot);
    snapshot.docs.map((doc)=>{
      console.log(doc.data());
    });
  
    const products = snapshot.docs.map((doc) => {
      const data = doc.data();
      data['id'] = doc.id;
      return data;
    })
    this.setState({
      products ,
      loading : false
    })
  })
}





handleIncreaseQuantity =(product)  =>  {
    console.log('Heyy!! Please Increase the qty of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].qty +=1;
    // this.setState({
    //     products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty:products[index].qty +1 
    })
    .then(() => {
      console.log('Document updated successfully')
    })
    .catch((error) => {
      console.log('Error: ', error)
    })

}

handleDecreaseQuantity =(product)  => {
    console.log('Decrease functionality',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty==0){
        return;
    }
    // products[index].qty -=1;
   
    // this.setState({
    //     products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty : products[index].qty - 1
    })
    .then(()=>{
      console.log('updated successfully');
    })
    .catch((error)=> {
      console.log('Error: ', error);
    })

}



handleDeleteProduct = (id) => {
    const {products} = this.state;

    // const items = products.filter((item)=> item.id !==id);

    // this.setState({
    //     products : items
    // })

    const docRef = this.db.collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log('Deleted successfully');
    })
    .catch((error)=> {
      console.log('Error: ', error);
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


addProduct = () => {
 this.db
  .collection('products')
  .add({
    img: '',
    price : 100 ,
    title : 'wrist watch ',
    qty :  3
  })
  .then((docRef) => {
    console.log("Product has been added " ,docRef);

  })
  .catch((error)=>{
    console.log('Error:' , error);
  })
}


  render(){

  const { products , loading} = this.state;
   
  return (
  <div className="App">
  <Navbar count = {this.getCartCount()}/>
  {/* <button onClick={this.addProduct} style={{fontFamily: 'cursive' , color: 'GrayText' , padding : 20 , fontSize : 15, top : -10}} >Add a product</button> */}
  <Cart 
  products = {products}
  onIncreaseQunatity ={this.handleIncreaseQuantity}
  onDecreaseQunatity ={this.handleDecreaseQuantity}
  onDeleteProduct = {this.handleDeleteProduct}
  />
  {loading && <h1>loading products ... </h1>}
  <div style={{padding:10,fontSize:20 , fontFamily:'cursive'}}>TOTAL : {this.getCartTotal()}
  </div>
  </div>
  );
}}

export default App;
