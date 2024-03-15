import React from 'react'
import { FirstLogoSec2, FourLogoSec2, SecondLogoSec2, ThirdLogoSec2 } from './Icons'

const TwichSlider = () => {
    const data = [
        { id: 1, svg: (<FirstLogoSec2 />) },
        { id: 2, svg: (<SecondLogoSec2 />) },
        { id: 3, svg: (<ThirdLogoSec2 />) },
        { id: 4, svg: (<FourLogoSec2 />) },
        { id: 1, svg: (<FirstLogoSec2 />) },
        { id: 2, svg: (<SecondLogoSec2 />) },
        { id: 3, svg: (<ThirdLogoSec2 />) },
        { id: 4, svg: (<FourLogoSec2 />) },
        { id: 1, svg: (<FirstLogoSec2 />) },
        { id: 2, svg: (<SecondLogoSec2 />) },
        { id: 3, svg: (<ThirdLogoSec2 />) },
        { id: 4, svg: (<FourLogoSec2 />) }
    ]
    return (
        <div>
            <div className='container overflow-hidden'>
                <div className='slider pt-100'>
                    <div className='slide-track gap-5 align-items-end'>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className='d-block sliderItems'>
                                    {item.svg}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwichSlider
