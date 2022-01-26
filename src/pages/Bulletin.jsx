import React, { useState } from 'react'
import SermonImg from '../assets/images/JCCI The Word Page 1 copy.png'
import Image from '../assets/images/Rectangle 10.png'

const Bulletin = () => {
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


    return (
        <div>
            <h2 className="page-header">
                Bulletin
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <div className="file">
                                <div className="input-file">
                               { file && <div className='image-upload'> <div style={{ width: "193px",height: "270px", background: "#FFFFFF",borderRadius: "4px", boxShadow: "var(--box-shadow)"}}>
                                     <img src={preview} alt={file.name} style={{ width: "177px", height: "254px", marginLeft:"8px", marginTop: "9px"}} />
                                </div>
                                <div className="file-upload">
                                <button type="submit">Upload</button>
                                 <button type="submit" className='remove' onClick={(e) => deleteFile(e)}> Remove </button>
                                </div>
                                </div>} 
                                <p>Upload bulletin</p>
                                <form action="">
                                 <input type="file" name="file" onChange={(e) => handleChange(e)}/>
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

export default Bulletin
