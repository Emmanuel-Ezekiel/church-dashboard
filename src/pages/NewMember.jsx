import React, { useState } from 'react'
import SermonImg from '../assets/images/JCCI The Word Page 1 (3).png'
import Image from '../assets/images/Rectangle 10.png'

const NewMember = () => {

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
                New Member
            </h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                        <div className="upload-event">
                            <div className="member-link">
                                <p>Enter Header</p>
                            <form onSubmit={handleSubmit}>
                                <input 
                                type="text" 
                                name="link1" 
                                value={state.link1}  
                                onChange={handleInputChange} 
                                />
                            </form>
                                <p>Enter Passage</p>
                            <form onSubmit={handleSubmit}>
                                <input 
                                className='passage'
                                type="text" 
                                name="paypal" 
                                value={state.paypal}  
                                onChange={handleInputChange} 
                                />
                            </form>
                            <div className="member-file">
                               { file && <img src={preview} alt={file.name} style={{ width: "293px", height: "131px", marginLeft:"2px", marginTop:"-8px", borderRadius: "6px", border: "1px solid #C4C4C4", marginBottom:"5px"}} />
                                } 
                                <p>Upload Header Image</p>
                                <form action="">
                                 <input className="homecell-image" type="file" name="file" onChange={(e) => handleChange(e)}/>
                                </form>
                            <div className="member-button">
                                <button type="submit">Upload</button>
                                <button type="submit" className='remove'>Remove</button>
                            </div>
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

export default NewMember