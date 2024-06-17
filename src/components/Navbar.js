import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nOWZT0tbQRTFfysTTOpaXXXhovgnC1EDfq22X6ClOzUJ4p9PYwXdqgvNVhHBfZuaoiSkDBxhkKhvkjfzbuiBgUeYO3PPm5l75p1AcagBLaAN/FG7AprAChOAEnAI9IHBK60P7KuvSbjEjpXsA7AFrAMVtXVgG+iqz0+rZA6V4DXw6Y1+i8CN+u5hDDVtmYd3SPhk3Mr0gGUMoaU37LZTVuwopoEhtJXUWkDMhmJcNTODjpJyhzorqor5jUEiHwJiKl5JNqMzF0poMyCmDNxb05nvSuIgMK4ETFvSmTkl8BR44E3qzBdNfqdtMw4Wi9IZV4FOROQ2ByKF6IxPwq3GQk7jbqTUmYoOZd4kkupMTBIOMxr7FxO4nXzUNf4lE0wCHfKBDr05EuWMFW0J+Kvy655NkVhQaXaxq2/0W/IEcReDJO68+9SjkqyraFT13NBKuD5HwJRVEifAV+8+Naz1RNI0iap+nwd+AOe6wndUnXZinIlxdeKjt9dPA79V/h8StSEO4LmW2S13zO2UzAHs6ipumsTxOw5gSyVxYJVEiAO4qkRuLZKoBTqAWa8QSUmM6gCaIzGqA2iOxKgOoEmx62iyPN9WIYrd1oSuxE7cdvLR1KTOwRsXZZXm5CSQIdyXajvTa1wiz6vxmQKwr8lvciCzJlvU6dIsiVHybrJd3fnr2hrTIxjFBxrrGwWgJEO4N+SyeB+o5puKO6NALOu7+MorzaE6M2P5n6aqNQcwhc5EdwBT6UxUBzCVzkR1AFPpTFQHMLbOJHEAU+lMVAeQSHipM1EdwKz4B0QgOuOfxmjDAAAAAElFTkSuQmCC"/>
            <Link className="navbar-brand" to="/">Pet Store</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">Quienes Somos</Link>
                </li>  
                <li className="nav-item">
                <Link className="nav-link" to="/service">Servicios</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/productos">Productos</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contactanos</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/creditos">Creditos</Link>
                </li>
            </ul>
            <form className="d-flex gap-2" role="search">

                <Link to="/login"><button className="btn btn-info" type="submit">Iniciar Sesion</button></Link>
                <Link to="/singup"><button className="btn btn-success" type="submit">Registrarse</button></Link>
            </form>
            </div>
        </div>
    </nav>
  )
}

export default Navbar