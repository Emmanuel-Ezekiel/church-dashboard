import React, { useState } from 'react'
import SermonImg from '../assets/images/JCCI The Word Page 1 (2).png'
import Image from '../assets/images/Rectangle 10.png'
import { Card, CardBody, CardTitle, Table} from 'reactstrap'
import Data from '../components/eventData/Data'
import EventTable from '../components/eventData/event-table'

const Event = () => {
  
/* for model opening */ 

     const [state, setState] = useState({ link: ""});

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
                Events
            </h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                        <div className="upload-event">
                            <div className="event-link">
                                <p>Date of Event</p>
                            <form onSubmit={handleSubmit}>
                                <input 
                                type="date" 
                                name="link" 
                                value={state.link}  
                                onChange={handleInputChange} 
                                />
                            </form>
                                <p>Title of Event</p>
                            <form onSubmit={handleSubmit}>
                                <input 
                                type="text" 
                                name="link1" 
                                value={state.link1}  
                                onChange={handleInputChange} 
                                />
                            </form>
                                <p>Address of Event</p>
                            <form onSubmit={handleSubmit}>
                                <input 
                                type="text" 
                                name="paypal" 
                                value={state.paypal}  
                                onChange={handleInputChange} 
                                />
                            </form>
                            <div className="event-file">
                               { file && <img src={preview} alt={file.name} style={{ width: "239px", height: "131px", marginLeft:"2px", marginTop:"-8px", borderRadius: "6px", border: "1px solid #C4C4C4", marginBottom:"5px"}} />
                                } 
                                <p>Upload Header Image</p>
                                <form action="">
                                 <input className="file-image" type="file" name="file" onChange={(e) => handleChange(e)}/>
                                </form>
                              <div className="event-button">
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
                                <div className="event-table">
        <div>
          <Table className="mb-0" responsive>
            <thead>
              <tr>
                <th colSpan="1" className="text-muted font-medium border-top-0" style={{ width: "700px"}} >
                  Date of Event
                </th>
                <th className="text-muted font-medium border-top-0" style={{ width: "700px"}}>
                  Title of Event 
                </th>
                <th style={{ width: "200px !important"}}className="text-muted font-medium border-top-0" style={{ width: "700px"}}>Address of Event</th>
                <th className="text-muted font-medium border-top-0"  style={{ width: "700px"}}>
                  Header Image
                </th>
                  <th className="text-muted font-medium border-top-0">
                  </th>
                  <th className="text-muted font-medium border-top-0">
                  </th>
                
              </tr>
            </thead>
            <tbody>
              { Data.map((data, index) => ( 
                  <>
                    <EventTable
                    key={index}
                    date={data.date}
                    title={data.title}
                    address={data.address}
                    header={data.header}
                    />
                  </> 
              ))}
              
               
              </tbody>
          </Table>
        </div>
          <img src={SermonImg} alt="" />      
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

export default Event