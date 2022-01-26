import React, { useState } from 'react'
import SermonImg from '../assets/images/JCCI The Word Page 1 (6).png'
import Image from '../assets/images/Rectangle 10.png'
import Youtube from '../assets/images/youtube.png'
import Facebook from '../assets/images/facebook.png'
import Instagram from '../assets/images/instagram.png'

const TeenageChurch = () => {
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
                Teenage Church
            </h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                        <div className="upload-link">
                            <div className="giving-link">
                                <p>Upload Youtube Link</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-contents">
                                    <img src={Youtube} alt="cards" className='youtube' />
                                <input 
                                type="text" 
                                name="link" 
                                value={state.link}  
                                onChange={handleInputChange} 
                                />
                                </div>
                             <div className="giving-button">
                                <button type="submit">Upload</button>
                                <button type="submit" className='remove'>Remove</button>
                            </div>
                            </form>
                                <p>Upload Instagram Link </p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-contents">
                                    <img src={Instagram} alt="cards" className='instagram'/>
                                    <input 
                                    type="text" 
                                    name="link1" 
                                    value={state.link1}  
                                    onChange={handleInputChange} 
                                    />
                                </div>
                                
                             <div className="giving-button">
                                <button type="submit">Upload</button>
                                 <button type="submit" className='remove'>Remove</button>
                                </div>
                            </form>
                                <p>Upload Facebook Link </p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-contents">
                                    <img src={Facebook} alt="cards" className='facebook'/>
                                     <input 
                                        type="text" 
                                        name="paypal" 
                                        value={state.paypal}  
                                        onChange={handleInputChange} 
                                     />
                                </div>
                             <div className="giving-button">
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

export default TeenageChurch
