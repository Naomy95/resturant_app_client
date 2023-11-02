import React from 'react'

const SubmitButton = ({onClick}) => {
  return (
    <button onClick={onClick} className='mt-4 p-2 bg-black border border-[1px] text-white font-sans text-center w-24' type='submit'>Submit
       
    </button>
  )
}

export default SubmitButton