import React from 'react'

const CommonBtn = (props) => {
    return (
        <button className={`commonBtn text-white fw-bold rounded-pill py-3 px-5 border-0 ${props.cstm}`}>
            {props.name}
        </button>
    )
}

export default CommonBtn
