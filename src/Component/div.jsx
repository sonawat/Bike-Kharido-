import './div.css'
import lk from './Pulsar-400-new2.jpg'
const Div = () =>
{
    return(
        <>
 <div className="i">
    {/* <img src={lk} style={{position:'absolute',zIndex:'-1',width:'100%',height:'100%'}}/> */}
 <div className='o'>
                <h1>Search the right bike</h1>
               
    <h5 style={{color:'silver'}}>Get Comprehensive information about Bike!</h5>
                <br/>
        <div style={{border:'1px solid silver',width:'70%',height:'61px'}}>
        <div style={{fontSize:'20px',width:'50%',padding:'15px',backgroundColor:'red',float:'left',textAlign:'center',color:'white'}}>New Bike</div>
        <div style={{fontSize:'20px',width:'50%',padding:'15px',backgroundColor:'',float:'right'}}>Used Bike</div>
    
        </div>
        <br/>
        <div style={{marginBottom:'10px',marginTop:'10px'}}>
        <input type='radio' name='a' style={{color:'red',width:'21px',height:'21px'}} checked />
        <span style={{marginLeft:'8px',marginRight:'38px',color:'red',fontSize:'21px'}}>By Brand</span>
          <input type='radio' name='a' style={{width:'21px',height:'21px'}}/>
          <span style={{marginLeft:'8px',fontSize:'21px',color:'gray'}}>By Budget</span><br/><br/>
          </div>
            <select style={{width:'100%',padding:'15px',border:'1px solid silver',fontSize:'20px',borderRadius:'6px'}}>
        <option selected>Selected Brand</option>
        <option>dwdw</option>
        <option>dwdw</option>
        <option>dwdw</option>
            </select>
            <br/>
            <select style={{marginTop:'20px',width:'100%',padding:'12px',border:'1px solid silver',fontSize:'20px',borderRadius:'6px'}}>
        <option selected>Selected Brand</option>
        <option>dwdw</option>
        <option>dwdw</option>
        <option>dwdw</option>
            </select><br/><br/>


        <button style={{width:'100%',padding:'12px',backgroundColor:'red',border:'none',color:'white',borderRadius:'10px',fontWeight:'bold'}}><i className="fas fa-search"></i> Search</button>
           <br/><br/>
          <p> <small style={{float:'right'}}>Advance Search
            <small style={{marginLeft:'6px'}}><i className='fa solid fa-arrow-right'></i></small>
           </small></p>
            </div>

         

</div>
        </>
    )
}

export default Div