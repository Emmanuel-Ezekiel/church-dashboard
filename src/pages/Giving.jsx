import React, { useState } from 'react'
import SermonImg from '../assets/images/JCCI The Word Page 1 (1).png'
import Image from '../assets/images/Rectangle 10.png'
import Paypal from '../assets/images/paypal-logo-removebg-preview 1.png'
import Zelle from '../assets/images/Zelle-Symbol 1.png'
import Cashapp from '../assets/images/cash app 1.png'
import Cards from '../assets/images/download__2_-removebg-preview 1.png'
import Cancel from '../assets/images/cancel.png'


const Giving = () => {
     const [buttonText, setButtonText] = useState("Upload");
     const [state, setState] = useState({
    link: "",
    link1: "",
    paypal: "",
    name: "",
  });

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

    return (
    <div>
            <h2 className="page-header">
                Giving
            </h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                        <div className="upload-link">
                            <div className="giving-link">
                                <form action="" onSubmit={handleSubmit}>
                                          <p>Upload Payment Link (Credit/Debit Card)</p>
                            <form >
                                <div className="form-contents">
                                <img src={Cards} alt="cards" />
                                <input 
                                type="text" 
                                name="link" 
                                value={state.link}  
                                onChange={handleInputChange} 
                                /> <button onClick={() => setState({ link: "", })}><img src={Cancel} alt="" className="cancel" /></button>
                                </div>
                            </form>
                                <p>Upload Payment Link (Cash App)</p>
                            <form >
                                <div className="form-contents">
                                    <img src={Cashapp} alt="cards" className='cashapp'/>
                                    <input 
                                    type="text" 
                                    name="link1" 
                                    value={state.link1}  
                                    onChange={handleInputChange} 
                                    /> <button onClick={() => setState({ link1: "", })}><img src={Cancel} alt="" className="cancel" /></button>
                                </div>
                            </form>
                                <p>Upload Payment Link (PayPal)</p>
                            <form >
                                <div className="form-contents">
                                      <img src={Paypal} alt="cards" className='paypal'/>
                                     <input 
                                        type="text" 
                                        name="paypal" 
                                        value={state.paypal}  
                                        onChange={handleInputChange} 
                                     /> <button onClick={() => setState({ paypal: "", })}><img src={Cancel} alt="" className="cancel" /></button>
                                </div>
                            </form>
                                <p>Enter Payment Email or Phone Number (Zelle)</p>
                            <form >
                                <div className="form-contents">
                                    <img src={Zelle} alt="cards" className='pic'/>
                                        <input 
                                        type="text" 
                                        name="name" 
                                        value={state.name}  
                                        onChange={handleInputChange} 
                                        /> <button onClick={() => setState({ name: "", })}><img src={Cancel} alt="" className="cancel"/></button>
                                </div>
                             
                            </form>

                            <div className="giving-button">
                                <button type="submit" type="submit"
                                    onClick={() => {
                                    setButtonText("Update");
                                    setTimeout(() => {
                                        setButtonText("Upload");
                                    }, 10000);
                                    }}>{buttonText}
                                    </button>
                            </div>
                                </form>
                          
                         </div>
                                <img src={SermonImg} alt="" />
                     </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <p className="sermon-instruction">Instruction Video</p>
                        <div className="card__sermon">
                            <div className="sermon">
                                <img className="sermon-image" src={Image} alt="pastor-image" />
                                <i class='bx bx-play-circle'></i>
                            </div>
                        </div>
                 </div>
            </div>            
        </div>
     </div>
    )
}

export default Giving
