import Img from '../../../public/assets/images/richsecImg.png'
import { VideoIcon } from './Icons'
const RichSec = () => {
    return (
        <div>
            <div className="container">
                <div className="position-relative"><img className='w-100' src={Img} alt="image" />
                    <span className='rich-video'>
                        <VideoIcon />
                    </span>
                </div>
                <p className='fs-sm fw-normal text-gray text-center pt-4'> Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming but <span className="d-block">also for film and television, events, merchandising, and partnerships.</span></p>
            </div>
        </div>
    )
}

export default RichSec