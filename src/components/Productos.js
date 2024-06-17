import React from 'react'
import "./Home.css"

const Productos = () => {
  return (
    <div className='container'>
         <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Diapositiva 1" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Diapositiva 2" className=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Diapositiva 3" className=""></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src='https://www.mobiliariocomercialmaniquies.com/blog/wp-content/uploads/2022/05/Hugo-Boss-Ropa-para-perros-750x375.jpg' width={1500} height={500}></img>
            <div className="container">
            <div className="carousel-caption text-start">
                <h1>Descuento en Ropa para tus mascotas</h1>
                <p className="opacity-75">Algún contenido de marcador de posición representativo para la primera diapositiva del carrusel.</p>
                <p><a className="btn btn-primary" href="/productos">Regístrate hoy</a></p>
            </div>
            </div>
        </div>
        <div className="carousel-item">
            <img src='https://media.admagazine.com/photos/618a5df258ac69e38abb5cfb/master/w_1600,c_limit/92748.png' width={1500} height={500}></img>
            <div className="container">
            <div className="carousel-caption">
                <h1>Promociones en productos</h1>
                <p>Algún contenido de marcador de posición representativo para la segunda diapositiva del carrusel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Ver más</a></p>
            </div>
            </div>
        </div>
        <div className="carousel-item">
            <img src='https://www.worldpets.com.co/wp-content/uploads/2021/05/petshop.jpg' width={1500} height={500}></img>
            <div className="container">
            <div className="carousel-caption text-end">
                <h1>Y mucho Mas!!!</h1>
                <p>Algún contenido representativo de marcador de posición para la tercera diapositiva de este carrusel.</p>
                <p><a className="btn btn-primary" href="#">Explorar galería</a></p>
            </div>
            </div>
        </div>
        </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Próximo</span>
            </button>
        </div>
        <hr class="featurette-divider"></hr>
        <div class="container marketing" >
            <div class="row">
            <div class="col-lg-4">
                <img id='circle' src='https://st3.depositphotos.com/1593759/37151/i/450/depositphotos_371514964-stock-photo-pet-accessories-concept-dry-food.jpg' ></img>
                <h2 class="fw-normal">Juguetes</h2>
                <p>Algún contenido de marcador de posición representativo para las tres columnas de texto debajo del carrusel. Esta es la primera columna.</p>
                <p><a class="btn btn-secondary" href="#">Ver detalles "</a></p>
            </div>
            <div class="col-lg-4">
            <img id='circle' src='https://www.smurfitkappa.com/es/-/m/images/page-hero-610-x-350/pet-food.png?rev=7c39076bb45548e981b77ff2d1d6ee1d' ></img>
                <h2 class="fw-normal">Alimento</h2>
                <p>Otro contenido interesante de marcador de posición representativo. Esta vez pasamos a la segunda columna.</p>
                <p><a class="btn btn-secondary" href="#">Ver detalles "</a></p>
            </div>
            <div class="col-lg-4">
            <img id='circle' src='https://www.stocksmetic.com/media/wysiwyg/Family_pet_800pxl.jpg' ></img>
                <h2 class="fw-normal">Higiene</h2>
                <p>Y por último, esta, la tercera columna de contenido representativo de marcador de posición.</p>
                <p><a class="btn btn-secondary" href="#">Ver detalles "</a></p>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Productos