import React from 'react'

function Slider({slider}) {
  return (
   <>
   <div className="carousel-item active" style={{ height: '430px' }} data-bs-interval="2000">
                  <img className="w-100 h-100" src={slider.image.url} alt="1" />
                  <div className="carousel-caption">
                    <h1 className="animate__animated animate__backInDown">{slider.title}</h1>
                    <button className="animate__animated animate__backInUp btn btn-outline-light p-2">Shop Now</button>
                  </div>
                </div>
   </>
  )
}

export default Slider
