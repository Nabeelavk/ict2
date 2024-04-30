import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart= () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  
  const user = useSelector((state) => state.user.user);

  return (
  <div>
    <div style={{display:'flex',alignContent:'center',backgroundColor:'black',alignItems:'center',height:'80px',gap:'50px'}}>
      <img src='logo1.jpeg' style={{height:'80px',width:'130px'}}></img>
      <h2 style={{display:'flex', alignContent:'center',color:'white'}}>Shopping Cart</h2>
    </div>

    <div>
        <table border={'1'}>
            <thead>
             <tr>
             <th>product</th>
             <th>price</th>
             <th>quantity</th>  
             </tr>   
            </thead>
        </table>

    </div>
    

    
      
  </div>



  );
};

export default Cart;
