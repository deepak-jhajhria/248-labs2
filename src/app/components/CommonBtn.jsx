import React from 'react'

const CommonBtn = (props) => {
    return (
        <button className={`commonBtn text-white fw-bold rounded-pill py-2 py-sm-3 px-3 text-nowrap text-lg px-sm-5 border-0 ${props.cstm}`}>
            {props.name}
        </button>
    )
}

export default CommonBtn
