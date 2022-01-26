import React from 'react'
import Data from './InstructionData'
import './Instruction.css'

function Instruction() {
    return (
        <div>
            <div className="instruction_details">
                { Data.map((user) => (
                    <>
                    <div className="user-header" key={user.id}>
                         <img src={user.image} alt="pastor-image" />
                            <div className="describe">
                                <h3>{user.describe}</h3>
                                <p>{user.pastor}</p>
                            </div>
                        <p className='user-time'>{user.time}</p>
                    </div>
                    <div className="border"></div>
                    </>
                    
                   
                ))
                }
            </div>
        </div>
    )
}

export default Instruction
