import './footer.css'
import lo from './log.png'
const Foot = () =>
{
    return(
        <>
        <div  style={{backgroundColor:'black', color:'white'}}>

            <div style={{width:'100%',paddingTop:'40px',paddingBottom:'40px',textAlign:'center'}}>
                <img src='https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/08/dfndfsgnklfg.png' />
            </div>

        <div style={{width:'100%',color:'white',fontWeight:'bold',display:'flex'}}>
        <div style={{width:'50%',textAlign:'center',fontWeight:'bold',paddingTop:'20px',paddingBottom:'20px'}}><h3>Popular Barnds</h3></div> 
        <div style={{width:'50%',textAlign:'center',fontWeight:'bold',paddingTop:'20px',paddingBottom:'20px'}}><h3>Ev Barnds</h3></div> 
        </div>
        
        <div style={{width:'100%',color:'white',fontWeight:'bold',display:'flex'}}>
        <div style={{width:'50%',textAlign:'center',paddingTop:'20px',paddingBottom:'20px'}}><h3>Popular Barnds</h3></div> 
        <div style={{width:'50%',textAlign:'center',paddingTop:'20px',paddingBottom:'20px'}}><h3>Popular Barnds</h3></div> 
        </div>

        <hr style={{color:'white'}}/>
        <h5 style={{textAlign:'center',padding:'20px'}}>Used Bike</h5>
        <div style={{width:'90%',display:'flex',margin:'auto'}}>
            <div style={{width:'50%',backgroundColor:'blue', color:'white',fontWeight:'bold',padding:'25px',textAlign:'center'}}><small>Buy Used Bike</small></div>
            <div style={{width:'50%',backgroundColor:'red', color:'white', fontWeight:'bold',padding:'25px',textAlign:'center'}}><small>Sell Used Bike</small></div>
        </div>
        <br/>
            <hr/>

            <h5 style={{textAlign:'center',paddingTop:'30px',padding:'20px'}}>Let,s Get In Touch</h5>
          
            <div className="boxicons-container" style={{margin:'auto',textAlign:'center'}}>
    
        <i style={{backgroundColor:'silver',marginLeft:'5px',padding:'10px',color:'black',borderRadius:'10px',fontSize:'30px'}} className='bx bxl-facebook'></i>
        <i style={{backgroundColor:'silver',marginLeft:'5px',padding:'10px',color:'black',borderRadius:'10px',fontSize:'30px'}} className='bx bxl-twitter'></i>
        <i style={{backgroundColor:'silver',marginLeft:'5px',padding:'10px',color:'black',borderRadius:'10px',fontSize:'30px'}} className='bx bxl-youtube'></i>
        <i style={{backgroundColor:'silver',marginLeft:'5px',padding:'10px',color:'black',borderRadius:'10px',fontSize:'30px'}} className='bx bxl-instagram'></i>
    </div>
<br/>
        <hr/>
        <h6 style={{padding:'10px',textAlign:'center'}}>2024 BikeKharido. All Rights Reserved</h6>
        </div>
        </>
    )
}
export default Foot