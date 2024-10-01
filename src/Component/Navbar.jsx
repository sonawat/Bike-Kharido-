import lo from './log.png'
import {Table} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Navbar.css'
import { useState } from 'react';
const Navbar = () =>
{

 

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const handleMouseEnter = () =>
    {
      
       setIsOpen(true);
    }
  const handleMouseLeave = () => setIsOpen(false);

  const handleMouseEnter1 = () => setIsOpen1(true);
  const handleMouseLeave1 = () => setIsOpen1(false);

  const handleMouseEnter3 = () => setIsOpen3(true);
  const handleMouseLeave3 = () => setIsOpen3(false);

  const handleMouseEnter4 = () => setIsOpen4(true);
  const handleMouseLeave4 = () => setIsOpen4(false);

  const handleMouseEnter5 = () => setIsOpen5(true);
  const handleMouseLeave5 = () => setIsOpen5(false);

  const menuStyle = {
    display: isOpen ? 'block' : 'none',
  };
  const menuStyle1 = {
    display: isOpen1 ? 'block' : 'none',
  };
  const menuStyle3 = {
    display: isOpen3 ? 'block' : 'none',
    
  };
  const menuStyle4 = {
    display: isOpen4 ? 'block' : 'none',
  };
  const menuStyle5 = {
    display: isOpen5 ? 'block' : 'none',
  };


  return(
    <>

    <div className='d'>
      
      <div style={{float:'left'}}><img className='c' src={lo}/></div>
      <div style={{float:'right'}}><input className='a' type='text' placeholder='Eg. YZF R15 V3,Activa 6G'/><span className='b'><i className="fas fa-search"></i></span></div>
    </div>

     
    <div id='mai'>
    <div className="box">Home</div>


    <div className="box g" style={{flex:'0 1 150px'}}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
       <div className='u'>SCOOTERS <i className='fa fa-caret-down'></i> </div>
       <div className='h' style={menuStyle}>
         <div className='f'>Option 1</div>
         <div className='f'>Option 2</div>
         <div className='f'>Option 3</div>
       </div>
     </div>




    <div
       className='box g' style={{flex:'0 1 100px'}}
      onMouseEnter={handleMouseEnter1}
      onMouseLeave={handleMouseLeave1}>
   
      <div className='u'>BIKES <i className='fa fa-caret-down'></i></div>
      <div style={menuStyle1} className='h'>
        <div className='f'>Option 4</div>
        <div className='f'>Option 4</div>
        <div className='f'>Option 4</div>
      </div>
    </div>


    <div className="box g" 
      onMouseEnter={handleMouseEnter3}
      onMouseLeave={handleMouseLeave3}
    >
      <div className='u'>TOP BRANDS <i className='fa fa-caret-down'></i></div>
      <div style={menuStyle3} className='h'>
        <div className='f'>Option 4</div>
        <div className='f'>Option 4</div>
        <div className='f'>Option 4</div>
      </div>
    </div>


    <div className="box g"
      onMouseEnter={handleMouseEnter4}
      onMouseLeave={handleMouseLeave4}
    >
      <div className='u'>USED BIKES <i className='fa fa-caret-down'></i></div>
      <div style={menuStyle4} className='h'>
        <div className='f'>Option 4</div>
        <div className='f'>Option 4</div>
        <div className='f'>Option 4</div>
      </div>
    </div>


    <div className="box g"
      onMouseEnter={handleMouseEnter5}
      onMouseLeave={handleMouseLeave5}
    >
      <div className='u'>EV BRANDS <i className='fa fa-caret-down'></i></div>
      <div style={menuStyle5} className='h'>
        <div className='f'>Option 4</div>
        <div className='f'>Option 4</div>
        <div className='f'>Option 4</div>
      </div>
    </div>

    <div className="box u">SHOW ROOMS</div>
    <div className="box u">COMPARE BIKE</div>
    <div className="box b1 u">NEWS</div>
    </div>
     
   

    </>
  )
}

export default Navbar