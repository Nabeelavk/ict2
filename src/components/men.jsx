import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Men = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const signout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/')
  }

  return (
  <div>
    <div style={{justifyContent:'space-between',display:'flex',alignContent:'center',backgroundColor:'lightgray',alignItems:'center',height:'90px',gap:'50px'}}>
      <img src='logo1.jpeg' style={{height:'90px',width:'150px'}}></img>
      
      <button style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',padding:'10px'}}>Favourites</button>
      <button style={{display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',padding:'10px'}}>Add to cart</button>
      
    </div>

    <div style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='men1.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Athletic Shoe</div>
        <div  style={{color:'white'}}>Rs:5,000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='men2.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Leather Shoe</div>
        <div  style={{color:'white'}}>Rs:3,600/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='men3.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Leather Sandal</div>
        <div style={{color:'white'}}>Rs:2,700/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='men4.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Athletic shoe</div>
        <div style={{color:'white'}}>Rs:6,000/-</div>

      </a>
    </div>
    <div  style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='men5.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Casual Slipper</div>
        <div style={{color:'white'}}>Rs:500/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='men6.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Sneakers Shoe</div>
        <div style={{color:'white'}}>Rs:4,000/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='men7.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Jack&Sons Slipper</div>
        <div style={{color:'white'}}>Rs:500/-</div>
      </a>
      <a href='#'>
        <h4></h4>
        <img src='men8.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Slipper</div>
        <div style={{color:'white'}}>Rs:300/-</div>

      </a>


    </div>

    
      
  </div>



  );
};

export default Men;