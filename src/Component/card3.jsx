import './card.css'


import { useEffect, useState } from 'react'
const Card3 = () => {
  
    const a = [
        {
            id: 1,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/01/1-42.jpg',
            name: "'Bajaj Pulsar NS200",
            price: '₹ 1,40,052*',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
            en: '199.5 cc',
            mi: '35 kmpl',
            ts: '140 kmph'
        },
        {
            id: 2,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/12/1-1.jpg',
            name: "TVS Ronin",
            price: '₹ 1,49,000*',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
            en: '225.9 cc',
            mi: '37 kmpl',
            ts: '120 kmph'
        },
        {
            id: 3,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/10/1-2.jpg?v=1694584914',
            name: "TVS Raider",
            price: '₹ 1,02,770*',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
            en: '124.8 cc',
            mi: '57 kmpl',
            ts: '99 kmph'
        },
        {
            id: 4,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/Royal-Enfield-Hunter-350-Green.jpg?v=1704363952',
            name: "Royal Enfield",
            price: '₹ 2,50,715*',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
            en: '349 cc',
            mi: '36 kmpl',
            ts: '145 kmph'
        },
        {
            id: 5,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/01/2.jpg?v=1691064069',
            name: "Honda Activa 6g H-Smart",
            price: '₹ 88,979*',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
            en: '109.51 cc',
            mi: '54 kmpl',
            ts: '80 kmph'
        },
        {
            id: 6,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/01/1-13.jpg?v=1691130766',
            name: "Bajaj Chetak",
            price: '₹ 1,49,917*',
            n3: 'Charging Time',
            n2: 'Range',
            n1: 'Top Speed',
            en: '70 kmph',
            mi: '95 km',
            ts: '5 Hrs'
        },
        {
            id: 7,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/01/1-12.jpg?v=1691130722',
            name: "TVS iQube",
            price: '₹ 93,759*',
            en: '78 kmph',
            mi: '100 km',
            ts: '5 Hrs',
            n3: 'Charging Time',
            n2: 'Range',
            n1: 'Top Speed',
        },
        {
            id: 8,
            Image: "https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/01/1-38.jpg?v=1691400613",
            name: 'KTM 250 Duke',
            price: '₹ 2,33,715*',
            en: '248.8 cc',
            mi: '30 kmpl',
            ts: '150 kmph',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
        }
    ]

    const d = [
        {
            id: 1,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/01-3.png',
            name: "Hero Mavrick 440",
            price: '₹ 1,99,000*',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
            en: '440 cc',
            mi: '37 kmpl',
            ts: '140 kmph'
        },
        {
            id: 2,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/02/1525.jpg',
            name: "2024 Bajaj Pulsar N160",
            price: '₹ 1,32,525*',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
            en: '225.9 cc',
            mi: '37 kmpl',
            ts: '120 kmph'
        },
        {
            id: 3,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/01/download-1-Photoroom.png-Photoroom-1.png',
            name: "Hero Xtreme 125R IBS",
            price: '₹ 95,000*',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
            en: '124.8 cc',
            mi: '66 kmpl',
            ts: '120 kmph'
        },
        {
            id: 4,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/09/military-red-000-PhotoRoom.png-PhotoRoom.png',
            name: "2023 Royal Enfield Bullet",
            price: '₹ 1,73,562*',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
            en: '349 cc',
            mi: '36 kmpl',
            ts: '125 kmph'
        },
        {
            id: 5,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/02/3.jpg',
            name: "PURE EV EcoDryft",
            price: '₹ 1,19,999*',
            n1: 'Top Speed',
            n2: 'Range',
            n3: 'Charging Time',
            en: '110.51 cc',
            mi: '50 kmpl',
            ts: '85 kmph'
        },
        {
            id: 6,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/01/1-13.jpg?v=1691130766',
            name: "Bajaj Chetak",
            price: '₹ 1,49,917*',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
            en: '70 kmph',
            mi: '95 km',
            ts: '5 Hrs'
        },
        {
            id: 7,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/01/1-12.jpg?v=1691130722',
            name: "TVS iQube",
            price: '₹ 93,759*',
            en: '78 kmph',
            mi: '100 km',
            ts: '5 Hrs',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
        },
        {
            id: 8,
            Image: "https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/01/1-38.jpg?v=1691400613",
            name: 'KTM 250 Duke',
            price: '₹ 2,33,715*',
            en: '248.8 cc',
            mi: '30 kmpl',
            ts: '150 kmph',
            n1: 'Engine',
            n2: 'Mileage',
            n3: 'Top Speed',
        }
    ]

    const f = [
        {
            id: 1,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/02/e-luna-right-side-view.png',
            name: "Bajaj Chetak",
            price: '₹ 71,000*',
            n3: 'Charging Time',
            n2: 'Range',
            n1: 'Top Speed',
            en: '70 kmph',
            mi: '95 km',
            ts: '5 Hrs'
        },
        {
            id: 2,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/01/1-13.jpg?v=1691130766',
            name: "Bajaj Chetak",
            price: '₹ 1,49,917*',
            n3: 'Charging Time',
            n2: 'Range',
            n1: 'Top Speed',
            en: '70 kmph',
            mi: '95 km',
            ts: '5 Hrs'
        },
        {
            id: 3,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/01/1-12.jpg?v=1691130722',
            name: "TVS iQube",
            price: '₹ 93,759*',
            en: '78 kmph',
            mi: '100 km',
            ts: '5 Hrs',
            n3: 'Charging Time',
            n2: 'Range',
            n1: 'Top Speed',
        },
        {
            id: 4,
            Image: 'https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/01/1-46.jpg',
            name: "Ather 450X(Pro)",
            price: '₹ 1,44,923*',
            en: '78 kmph',
            mi: '100 km',
            ts: '5 Hrs',
            n3: 'Charging Time',
            n2: 'Range',
            n1: 'Top Speed',
        }
        

    ]



    const [a1, sa1] = useState(1);
    const [b, bi1] = useState(1);
    const [b2, bi2] = useState(2);
    const [b3, bi3] = useState(3);
    const [b4, bi4] = useState(4);
    const [a2, sa2] = useState(2);
    const [a3, sa3] = useState(3);
    const [a4, sa4] = useState(4);
    const [ob,setOb] = useState(0);

    const e = [a,d,f];

    const ani = () => {
        if (a1 < e[ob].length) {
            const c = b + 1;
            bi1(c);
            sa1(b + 1);
        }
        else {
            bi1(1);
            sa1(1);
        }

        if (b2 < e[ob].length) {
            const c = b2 + 1;
            bi2(c);
            sa2(b2 + 1);

        }
        else {
            bi2(1);
            sa2(1);
        }

        if (b3 < e[ob].length) {
            const c = b3 + 1;
            bi3(c);
            sa3(b3 + 1);

        }
        else {
            bi3(1);
            sa3(1);
        }

        if (a4 < e[ob].length) {
            const c = a4 + 1;
            bi4(c);
            sa4(b4 + 1);

        }
        else {
            bi4(1);
            sa4(1);
        }
    }

    const an = () => {
        if (a1 > 1) {
            const c = b - 1;
            bi1(c);
            sa1(b - 1);
        }
        else {
            bi1(e[ob].length);
            sa1(e[ob].length);
        }

        if (a2 > 1) {
            const c = b2 - 1;
            bi2(c);
            sa2(b2 - 1);
        }
        else {
            bi2(e[ob].length);
            sa2(e[ob].length);
        }

        if (a3 > 1) {
            const c = b3 - 1;
            bi3(c);
            sa3(b3 - 1);
        }
        else {
            bi3(e[ob].length);
            sa3(e[ob].length);
        }

        if (a4 > 1) {
            const c = b4 - 1;
            bi4(c);
            sa4(b4 - 1);
        }
        else {
            bi4(e[ob].length);
            sa4(e[ob].length);
        }
    }

    const obj1 = () =>
        {
            setOb(0);
        }

const obj2 = () =>
{
   setOb(1);
}
const obj3 = () =>
    {
        setOb(2);
    }


    // useEffect(()=>
    // {
    //     if(ob == 0)
    //     {   
    // document.querySelector('#buStyle1').style.backgroundColor = 'green',
    //     }
    // },[setOb])


    return (
        <>
             <h1></h1>
            <h1 style={{ textAlign: 'center', paddingTop: '60px', paddingBottom: '15px' }}>Best Bikes of May 2024</h1>
            <button className='s' onClick={() => an()} style={{ marginTop: '280px', width: '30px', position: 'absolute', padding: '5px', borderRadius: '50px', backgroundColor: 'white', border: '1px solid silver' }}><i className='fa fa-chevron-left'></i></button>

            <div className="l">
                <button onClick={ani} style={{ border: '1px solid silver', marginTop: '250px', zIndex: '-1', float: 'right', width: '30px', padding: '5px', borderRadius: '50px', backgroundColor: 'white' }}><i className='fa fa-chevron-right'></i></button>

                {/* <div className="j">

                    <span><button onClick={obj1} style={{ border: 'none', backgroundColor: 'white' }}>POPULAR BIKES</button></span>
                    <span className='jspan' ><button onClick={obj2} style={{ border: 'none', backgroundColor: 'white' }}>LATEST BIKES</button></span>
                    <span className='jspan'><button onClick={obj3} style={{ border: 'none', backgroundColor: 'white' }}>ELECTRIC BIKES</button></span>
                </div> */}
                  <div className="j">
        
        <span className='jspan1'> <button style={{ border: 'none', backgroundColor: 'white' }} onClick={obj1}> POPULAR BIKES</button></span>
        <span className='jspan2'> <button style={{ border: 'none', backgroundColor: 'white' }} onClick={obj2}> LATEST BIKES</button></span>
        <span className='jspan3'> <button style={{ border: 'none', backgroundColor: 'white' }} onClick={obj3}> ELECTRIC BIKES</button></span>
            </div>

                <div className="k">

                    {
                        e[ob].map((item, index) => {
                            if (item.id == a1) {
                                return (

                                    <div className='m'>
                                        <div className='n'><img src={item.Image} style={{ width: '100%', height: '100%' }} /></div>
                                        <h5>{item.name}</h5>
                                        <h6>Avg. Ex-showroom Price<br /><h5>${item.price}</h5></h6>
                                        <hr></hr>
                                        <table width={'100%'}>
                                            <tr style={{ color: 'red' }}>
                                                <td>{item.n1}</td>
                                                <td>{item.n2}</td>
                                                <td>{item.n3}</td>
                                            </tr>
                                            <tr>
                                                <td>{item.en}</td>
                                                <td>{item.mi}</td>
                                                <td>{item.ts}</td>
                                            </tr>
                                        </table>
                                    </div>
                                )
                            }
                        })
                    }



                    {
                        e[ob].map((item, index) => {
                            if (item.id == a2) {
                                return (

                                    <div className='m'>
                                        <div className='n'><img src={item.Image} style={{ width: '100%', height: '100%' }} /></div>
                                        <h5>{item.name}</h5>
                                        <h6>Avg. Ex-showroom Price<br /><h5>${item.price}</h5></h6>
                                        <hr></hr>
                                        <table width={'100%'}>
                                            <tr style={{ color: 'red' }}>
                                                <td>{item.n1}</td>
                                                <td>{item.n2}</td>
                                                <td>{item.n3}</td>
                                            </tr>
                                            <tr>
                                                <td>{item.en}</td>
                                                <td>{item.mi}</td>
                                                <td>{item.ts}</td>
                                            </tr>
                                        </table>
                                    </div>


                                )
                            }
                        })
                    }


                    {
                        e[ob].map((item, index) => {
                            if (item.id == a3) {
                                return (

                                    <div className='m'>
                                        <div className='n'><img src={item.Image} style={{ width: '100%', height: '100%' }} /></div>
                                        <h5>{item.name}</h5>
                                        <h6>Avg. Ex-showroom Price<br /><h5>{item.price}</h5></h6>
                                        <hr></hr>
                                        <table width={'100%'}>
                                            <tr style={{ color: 'red' }}>
                                                <td>{item.n1}</td>
                                                <td>{item.n2}</td>
                                                <td>{item.n3}</td>
                                            </tr>
                                            <tr>
                                                <td>{item.en}</td>
                                                <td>{item.mi}</td>
                                                <td>{item.ts}</td>
                                            </tr>
                                        </table>
                                    </div>


                                )
                            }
                        })
                    }   


                    {
                        e[ob].map((item, index) => {
                            if (item.id == a4) {
                                return (

                                    <div className='m'>
                                        <div className='n'><img style={{ width: '100%', height: '100%' }} src={item.Image} /></div>
                                        <h5>{item.name}</h5>
                                        <h6>Avg. Ex-showroom Price<br /><h5>{item.price}</h5></h6>
                                        <hr></hr>
                                        <table width={'100%'}>
                                            <tr style={{ color: 'red' }}>
                                                <td>{item.n1}</td>
                                                <td>{item.n2}</td>
                                                <td>{item.n3}</td>
                                            </tr>
                                            <tr>
                                                <td>{item.en}</td>
                                                <td>{item.mi}</td>
                                                <td>{item.ts}</td>
                                            </tr>
                                        </table>
                                    </div>


                                )
                            }
                        })
                    }




                </div>
            </div>
        </>
    )
}

export default Card3