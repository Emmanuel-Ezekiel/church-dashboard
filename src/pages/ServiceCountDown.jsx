import React, { useState }from 'react'

import '../assets/css/index.css'

import SermonImg from '../assets/images/JCCI The Word Page 1 (13).png'
import Image from '../assets/images/Rectangle 10.png'


const ServiceCountDown = () => {
    const [state, setState] = useState({
    link: ""
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
                Service Count Down
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <div className="upload">
                                <div className="input-link">
                                <p>Service Starts</p>
                            <form onSubmit={handleSubmit}>
                                <input 
                                type="text" 
                                name="link" 
                                value={state.link}  
                                onChange={handleInputChange} 
                                />
                             <div className="button-link">
                                <button type="submit">Upload</button>
                                 <button type="submit" className='remove'>Remove</button>
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

export default ServiceCountDown
