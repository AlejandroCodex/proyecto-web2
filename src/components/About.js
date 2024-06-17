import React from 'react'

const About = () => {
  return (
    <div className='container col-xxl-8 px-4 py5'>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src='https://www.eluniverso.com/resizer/bK8SrLrW9M4jehIdkdCcRLMPaoM=/813x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/HNPPMBADKNEYBLUO37M6NLHSCM.jpg' alt="aboutimg" className='rounded shadow'></img>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Nosotros Somos "Pet Store"</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Seguier Viendo</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Registrarse</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About