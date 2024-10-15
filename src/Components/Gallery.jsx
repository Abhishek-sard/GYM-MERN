import React from 'react'

const Gallery = () => {
  const gallery = ["/img1 (1).jpg","/img2.jpg", "/img3.jpg", "/img4.jpg", "/img7 (1).jpg", "/img8.jpg", "/img5.jpg", "/img6 (1).jpg",]
  return (
    <section className='gallery'>
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0,3). map((element,index) =>(
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3,6). map((element,index) =>(
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6,8). map((element,index) =>(
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Gallery