import React from 'react'

const PrimaryBtn = (props) => {
  return (
    <button className={`primaryBtn text-white fw-bold rounded-pill py-3 px-5 border-0 ${props.cstm}`}>
        {props.name}
    </button>
  )
}

export default PrimaryBtn
