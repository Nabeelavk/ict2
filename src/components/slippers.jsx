import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Slippers = () => {
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
        <img src='sp1.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Slippers</div>
        <div  style={{color:'white'}}>Rs:400/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='sp2.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>kids wear</div>
        <div  style={{color:'white'}}>Rs:300/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='sp3.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>women slippers</div>
        <div  style={{color:'white'}}>Rs:800/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='s4.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Women slippers</div>
        <div  style={{color:'white'}}>Rs:600/-</div>

      </a>
    </div>
    <div  style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='sp5.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>men wear</div>
        <div  style={{color:'white'}}>Rs:700/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='sp6.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>NIKE</div>
        <div  style={{color:'white'}}>Rs:1600/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='sp7.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>kids wear</div>
        <div  style={{color:'white'}}>Rs:700/-</div>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='sp8.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>kids slippers</div>
        <div  style={{color:'white'}}>Rs:200/-</div>

      </a>


    </div>

    
      
  </div>



  );
};

export default Slippers;