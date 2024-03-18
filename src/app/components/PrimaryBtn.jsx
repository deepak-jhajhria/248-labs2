import React from 'react'

const PrimaryBtn = (props) => {
  return (
    <div className='bg-GradientBtn rounded-pill d-inline-block'>
      <button className={`primaryBtn  text-white fw-bold rounded-pill border-0 position-relative overflow-hidden  ${props.cstm}`}>
        {props.name}
      </button>
    </div>
  )
}

export default PrimaryBtn
