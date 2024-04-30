import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Sandals = () => {
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
        <img src='s1.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Leather Sandals</div>
        <div  style={{color:'white'}}>Rs:15000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='s2.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Women Wear</div>
        <div  style={{color:'white'}}>Rs:1200/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='s3.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Sandals</div>
        <div  style={{color:'white'}}>Rs:1800/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='s4.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>women wear</div>
        <div  style={{color:'white'}}>Rs:1,400/-</div>

      </a>
    </div>
    <div  style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='s5.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>sandals</div>
        <div  style={{color:'white'}}>Rs:2500/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='s6.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}> sandal</div>
        <div  style={{color:'white'}}>Rs:2000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='s7.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Men Wear</div>
        <div  style={{color:'white'}}>Rs:2000/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='s8.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>kids sandals</div>
        <div  style={{color:'white'}}>Rs:900/-</div>

      </a>


    </div>

    
      
  </div>



  );
};

export default Sandals;