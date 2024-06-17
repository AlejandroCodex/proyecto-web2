import React from 'react'

import ReactPlayer from 'react-player'

const Service = () => {
  const videoprueba = 'https://youtu.be/GD3N7kckN5I?si=erizKxeu8jpqF9VU'
  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Servicios</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <i class="fa-solid fa-scissors"></i>
            </div>
            <h3 className="fs-2">Peluqueria</h3>
            <p>Párrafo de texto debajo del título para explicar el título. Le agregaremos otra oración y probablemente continuaremos hasta que nos quedemos sin palabras.</p>
            
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <i class="fa-solid fa-stethoscope"></i> 
            </div>
            <h3 className="fs-2">Clinica Veterinaria</h3>
            <p>Párrafo de texto debajo del título para explicar el título. Le agregaremos otra oración y probablemente continuaremos hasta que nos quedemos sin palabras.</p>
            
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <i class="fa-solid fa-house"></i>
            </div>
            <h3 className="fs-2">Adpocion</h3>
            <p>Párrafo de texto debajo del título para explicar el título. Le agregaremos otra oración y probablemente continuaremos hasta que nos quedemos sin palabras.</p>
          </div>
        </div>
      </div>

      <div>
        <ReactPlayer style={{margin: '0px auto'}}
            url={videoprueba}
            playing={false}
            volume={0.5}
            controls
            width='75%'
            height='790px'
        />
      </div>
    </div>
  )
}

export default Service