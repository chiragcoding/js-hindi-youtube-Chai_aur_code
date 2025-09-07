import React from 'react'

function Model({isOpen,onClose}) {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen?" ":"hidden"}`}>

           <div className='model-container'>
            <div className='bg-indigo-700+
             text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
            </div>

           </div>
        </div>
    )
}

export default Model
