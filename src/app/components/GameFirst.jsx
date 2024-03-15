import React from 'react'
import PrimaryBtn from './PrimaryBtn'

const GameFirst = () => {
  const data = [
    { heading: "World Building", para: "Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision", },
    { heading: "Game Design", para: "Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination." },
    { heading: "Art and Sound", para: "In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down." },
  ]
  return (
    <div className='pt-121 bg-black mt1 position-relative overflow-hidden'>
      <h2 className=' fs-xxl fw-bold roboto-flex position-absolute about-h text-white z-n1 '>About Us</h2>
      <div className='container'>
        <div className="row pb-114">
          <div className="col-lg-6">
            <div className=' d-flex mb-18'>
              <PrimaryBtn name="DOERS OVER TALKERS" />
            </div>
            <h2 className='text-white max-w-310'>Game First.Always.</h2>
          </div>
          <div className='col-lg-6 pt-50 ps-lg-5 ps-3'>
            <h4 className='text-white m-0 mb-2 pb-1'>This is difficult</h4>
            <p className='max-w-512 text-white opacity-75'>Web3 Games have a notoriously high barrier-to-entry for casual gamers who make up the vast majority of players. “Link your wallet” before gameplay is not just off-putting, it’s boring. We’re solving that with <span className=' fw-semibold '>world-class storytelling,</span> world-building, game design, art and sound. And fun.</p>
          </div>
        </div>
        <div className='row pb-131'>
          {data.map((obj, i) => (
            <div key={i} className='col-lg-4 '>
              <div className='doers-crd position-relative overflow-hidden  '>
                <h4 className=" m-0 text-white pb-4 pb-97">{obj.heading}</h4>
                <p className='text-white opacity-75 m-0 max-w-310 '>{obj.para}</p>
                <span className='elipscrd'></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameFirst