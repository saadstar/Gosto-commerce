import React from 'react';


export const Top = () => {
  return (
    <div className="space-above">
      <div className="top">
        <h2>
          Over <span>6,500</span> Curated Design
          <br />
          Resources,<span>Graphic & Website</span> Templates
        </h2>
        <p>
          High-quality Design Themes for personal or commercial use contains 6k+
          items in 100 categories.
        </p>
        <button className="all">
          <button>All Catagories</button>
          <input placeholder="search product"></input>
          <i className="fa fa-search"> </i>
        </button>
        <p className='ero'>Examples: Mockup, PSD, Theme Design, Image…</p>
      </div>
      <div className='model-five'>
        <div className='holl'>
          <img src='./images/aboutus.jpg' alt='webtheme' width={50} height={50} className="hollimg" />
          <div className='left'>
          <h4>Web Themes</h4><br />
          <p>5 items</p>
          </div>
        </div>
        <div className='holl'>
          <img src='./images/img1.jpg' alt='webtheme' width={ 50} height={50 } className="hollimg" />
          <div className='left'>
          <h4>UI Design</h4>
          <p>12 items</p>
          </div>
        </div>
        <div className='holl'>
          <img src='./images/img2.jpg' alt='webtheme' width={ 50} height={50 } className="hollimg" />
          <div className='left'>
          <h4>3D Models</h4>
          <p>12 items</p>
          </div>
        </div>
        <div className='holl'>
          <img src='./images/img3.jpg' alt='webtheme' width={ 50} height={50 } className="hollimg" />
          <div className='left'>
          <h4>Image Stock</h4>
          <p>15 items</p>
          </div>
        </div>
        <div className='holl'>
          <img src='./images/img1.jpg' alt='webtheme' width={ 50} height={50 } className="hollimg" />
          <div className='left'>
          <h4>Mockup Design</h4>
          <p>7 items</p>
          </div>
        </div>
      </div>
    </div>
  )
}
