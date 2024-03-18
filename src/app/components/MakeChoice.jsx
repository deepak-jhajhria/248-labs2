import Image from 'next/image';
import img from '../../../public/assets/images/choiceImg.png';
import CommonBtn from './CommonBtn'

const MakeChoice = () => {
    return (
        <div className='bg-black pb-150'>
            <div className='container'>
                <Image className=' w-100 pb-4' src={img} alt="#" />
                <div className='row'>
                    <div className=' col-lg-3'>
                        <CommonBtn name="name@domain.com" cstm="py-3" />
                        <CommonBtn name="Make Your Move" cstm="py-3 px-5 text-nowrap" />
                    </div>
                    <div className="col-lg-9">
                        <p className='max-w-793 text-capitalize pb-3 '>Unveiled is a unique <span className='fw-semibold text-white'>Collectible Card Game</span> in which you gain fervour for your ventures, spending it on mercenaries, spies, automata, and influence. </p>
                        <p className='max-w-880 text-capitalize pb-3 '>You play <span className='fw-semibold text-white'>a rogue merchant trader</span> allied to a noble house, alongside your <span className='fw-semibold text-white'>cryptid-humanoid companions</span> in a game of ambition and alliance, deception and miracles, manipulation and annihilation. Bells chime in the harbour, and markets are opening. Guards have swept the streets of the more obvious dangers. </p>
                        <p className=' m-0 fw-semibold text-white roboto-flex fs-sm1'>What’s your next move?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeChoice