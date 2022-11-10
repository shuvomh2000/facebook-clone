import React from 'react'
import './photos.css'

const Photos = () => {
  return (
    <div className='photo'>
        <div className='heading'>
            <h5>photos <span>37</span></h5>
            <h5>...</h5>
        </div>
        <div className='imgHolder'>
            <div className='imgContain'>
                <picture>
                    <img className='img' src='images/profilesideimg.png'/>
                </picture>
            </div>
            <div className='imgContain'>
                <picture>
                    <img className='img' src='images/profilesideimg.png'/>
                </picture>
            </div>
            <div className='imgContain'>
                <picture>
                    <img className='img' src='images/profilesideimg.png'/>
                </picture>
            </div>
            <div className='imgContain'>
                <picture>
                    <img className='img' src='images/profilesideimg.png'/>
                </picture>
            </div>
            <div className='imgContain'>
                <picture>
                    <img className='img' src='images/profilesideimg.png'/>
                </picture>
            </div>
            <div className='imgContain'>
                <div className='box'>
                    <h5>32+</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Photos