import React from 'react'

const Footer = () => {
  return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3 fs-5">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted"><i className="fa-brands fa-facebook"></i></a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted"><i className="fa-brands fa-instagram"></i></a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted"><i className="fa-brands fa-twitter"></i></a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted"><i className="fa-brands fa-github"></i></a></li>
            </ul>
            <p className="text-center text-muted">© Derechos Reservados</p>
        </footer>
  )
}

export default Footer