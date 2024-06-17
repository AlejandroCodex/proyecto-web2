import React from 'react'

function Login() {
  return (
    <div className='container'>
        <main className="form-signin w-100 m-auto">
        <form>
            <img src="https://static5.depositphotos.com/1001911/395/v/950/depositphotos_3955235-stock-illustration-black-paw-print.jpg" alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Por favor, Inicia Sesion</h1>

            <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="nombre@ejemplo.com"/>
            <label for="floatingInput">Dirección de correo electrónico</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña"/>
            <label for="floatingPassword">Contraseña</label>
            </div>

            <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
                Acuérdate de mí
            </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Iniciar sesión</button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
    </main>
    </div>
  )
}

export default Login