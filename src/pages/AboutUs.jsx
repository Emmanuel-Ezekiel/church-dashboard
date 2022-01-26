import React, { useState } from 'react'
import SermonImg from '../assets/images/JCCI The Word Page 1 (8).png'
import Image from '../assets/images/Rectangle 10.png'

const AboutUs = () => {

    const [state, setState] = useState({
    link: ""
  });

    const [file, setFile] = useState("")
    const [ preview, setPreview] = useState("")

    const handleChange = (event) => {
        const selectedFile = event.target.files[0]
        setFile(selectedFile)
        const filePreview = URL.createObjectURL(selectedFile)
        setPreview(filePreview)
    }

    const deleteFile = (e) => {
        
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }

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
                About Us
            </h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                        <div className="forms">
                            <div className="about-link">
                                <p>Address</p>
                            <form onSubmit={handleSubmit}>
                                <input 
                                type="text" 
                                name="link1" 
                                value={state.link1}  
                                onChange={handleInputChange} 
                                />
                            </form>
                                <p>State</p>
                            <form onSubmit={handleSubmit}>
                                 <select name="" id="">
                                   <option value=""></option>
                                   <option value="">Abia</option>
                                   <option value="">Lagos</option>
                                   <option value="">Abuja</option>
                               </select>
                            </form>
                             <p>Write Message</p>
                            <form onSubmit={handleSubmit}>
                                <input
                                className='input-message'
                                type="text" 
                                name="link1" 
                                value={state.link1}  
                                onChange={handleInputChange} 
                                />
                            </form>
                            <div className="member-file">
                            <div className="member-button">
                                <button type="submit">Upload</button>
                                <button type="submit" className='remove'>Remove</button>
                            </div>
                            </div>
                         </div>
                         <div className="about-link next-link">
                                <p>City</p>
                            <form onSubmit={handleSubmit}>
                               <select name="" id="">
                                   <option value=""></option>
                                   <option value="">Ikeja</option>
                                   <option value="">Abuja</option>
                                   <option value="">Oshodi</option>
                               </select>
                            </form>
                             <div className="member-file">
                               { file && <img src={preview} alt={file.name} style={{ width: "293px", height: "131px", marginLeft:"2px", marginTop:"-8px", borderRadius: "6px", border: "1px solid #C4C4C4", marginBottom:"5px"}} />
                                } 
                                <p>Upload Header Image</p>
                                <form action="">
                                 <input className="homecell-image" type="file" name="file" onChange={(e) => handleChange(e)}/>
                                </form>
                            </div>
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

export default AboutUs