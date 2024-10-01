import { useState } from 'react'
import './card4.css'
const Compare = () =>
{

    const[b,setB] = useState(1);
    const[c,setC] = useState(2);

    const a = [
        {
            id:1,
            img : "https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/Hero-Karizma-XMR-vs-Yamaha-MT-15-V2.jpg",
            name: "Hero Karima KMR VS Yamaha MT 15 ",
            n1:"Hero Karizma XMR : ₹ 1,72,900",
            n2:"Yamaha MT 15 V2 : ₹ 1,67,200"
        },
        {
            id:2,
            img : "https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/06/Hero-Splendor-plus-vs-Splendor-plus-Xtec.png",
            name: "Hero Splendor Plus vs Honda Shine",
            n1:"Hero Splendor Plus : ₹ 70,486",
            n2:"Honda Shine: ₹ 81,512 "
        },
        {
            id:3,
            img : "https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/06/Suzuki-Gixxer-SF-250-vs-Yamaha-R15-V4.png",
            name: "Suzuki Gixxer 250 vs Yamaha R15 V4 ",
            n1:"Suzuki Gixxer 250  : ₹ 1,77,692",
            n2:"Yamaha R15 V4 : ₹ 1,81,000"
        },
        {
            id:4,
            img : "https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/06/RE-Hunter-350-vs-Jawa-42.png",
            name: "Jawa 42 vs Royal Enfield Hunter 350",
            n1:  " Jawa 42 : 1,,74,561 ₹ ",
            n2: "Hunter 350  : ₹ 1,50,000 ",
        }
    ]   


    return(
        <>
        <div className="x">
            <h1 style={{textAlign:'center',paddingTop:'60px',paddingBottom:'30px'}}>Compare Bikes</h1>
       
        <div className="y">
          
            <div className='z'>
            <button className='button1'
            onClick={()=>
                {
                    if(b>1)
                    {
                    setB(b-1)
                    }
                    else
                    {
                        setB(1);
                    }
                    if(c>1)
                        {
                        setC(c-1)
                        }
                        else
                        {
                            setC(1);
                        }

                   
                }
                }><i className='fa fa-chevron-left'></i></button>
            
                <div className='A'>
                   {
                    a.map((item)=>
                    {
                        if(item.id == b)
                        {
                            return(
                        <>
                        <div className='C'><img src={item.img}/></div>                 
                    <div className='D'>
                        <h4>{item.name}</h4>
                        <h5 style={{color:'red'}}>Avg. Ex-showroom price</h5>
                        <h5 style={{color:'gray'}}>{item.n1}</h5>
                        <h5 style={{color:'gray'}}>{item.n2}</h5>
                        <h5 style={{color:'gray'}}>Compare Now</h5>
                    </div>
                    </>
                            )
                        }}
                    )
                   }
                
                </div>
                <div className='B'>
                {
                    a.map((item)=>
                    {
                        if(item.id == c)
                        {
                            return(
                        <>
                        <div className='C'><img src={item.img}/></div>                 
                    <div className='D'>
                        <h4>{item.name}</h4>
                        <h5 style={{color:'red'}}>Avg. Ex-showroom price</h5>
                        <h5 style={{color:'gray'}}>{item.n1}</h5>
                        <h5 style={{color:'gray'}}>{item.n2}</h5>
                        <h5 style={{color:'gray'}}>Compare Now</h5>
                    </div>
                    </>
                            )
                        }}
                    )
                   }
                
                </div>
                <button className='button2'
                onClick={()=>
                    {
                        if(b<4)
                        {
                        setB(b+1)
                        }
                        else
                        {
                            setB(1);
                        }
    
                        if(c<4)
                            {
                            setC(c+1)
                            }
                            else
                            {
                                setC(1);
                            }
                    }
                    }><i className='fa fa-chevron-right'></i></button>
            </div>
        </div>
       <br/>
       <br/>
        <h5 style={{textAlign:'center'}}>
            <button style={{border:'none' , padding:'10px',paddingLeft:'30px',paddingRight:'30px', color:'white', backgroundColor:'red'}}>View More Comparisons</button></h5>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </>
    )
}
export default Compare