import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:  "474px",
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};



const EventTable = (props) => {
   
     const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);


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
        <tr>
            <td>
                    <p className="font-medium mb-0">{props.date}</p>
                  </td>
                  <td>
                    <p className="text-muted">{props.title}</p>
                  </td>
                  <td>
                    <p>{props.address}</p>
                  </td>
                  <td>
                    <p className="text-muted">{props.header}</p>
                  </td>{' '}
                    <td>
                      <span
                        className="btn d-block text-black "
                        style={{
                          background: '#3A89F8',
                          color: '#fff',
                          borderRadius: 2,
                          padding: 5,
                          cursor: 'pointer',
                          marginRight: "-100px",
                          fontSize: 10,
                          fontWeight: 'bold',   
                          
                        }}
                        onClick={handleOpen}
                      >
                        Update
                      </span>
                    </td>
                    <td>
                      <span
                        className="btn d-block text-black "
                        style={{
                          background: '#FF0000',
                          color: '#fff',
                          borderRadius: 2,
                          padding: 5,
                          cursor: 'pointer',
                          marginLeft: 18,
                          fontSize: 10,
                          fontWeight: 'bold',    
                        }}
                        onClick={handleOpen}
                      >
                        Delete
                      </span>
                    </td>
                     <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                   <Box sx={style}>
                         <div className="event-modal">
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
                            <div className="eventFile-modal">
                               { file && <img src={preview} alt={file.name} style={{ width: "239px", height: "131px", marginLeft:"2px", marginTop:"-8px", borderRadius: "6px", border: "1px solid #C4C4C4", marginBottom:"5px"}} />
                                } 
                                <p>Upload Header Image</p>
                                <form action="">
                                 <input className="file-image" type="file" name="file" onChange={(e) => handleChange(e)}/>
                                </form>

                              <div className="event-button">
                                  <button type="submit">Update</button>
                              </div>
                            </div>
                          </div>
                      </Box>
                    </Modal>
                  
                              
                    
        </tr>
    )
}

export default EventTable
