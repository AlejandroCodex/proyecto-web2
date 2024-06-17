import React from 'react'

const SingUp = () => {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Formulario de registro</h1>
            <p className="col-lg-10 fs-4">A continuación se muestra un formulario de ejemplo creado completamente con los controles de formulario de Bootstrap. Cada grupo de formularios requerido tiene un estado de validación que se puede activar al intentar enviar el formulario sin completarlo.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="nombre@ejemplo.com"/>
                <label for="floatingInput">Dirección de correo electrónico</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword"/>
                <label for="floatingPassword">Contraseña</label>
            </div>
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"/>Acuérdate de mí
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Inscribirse</button>
            <hr className="my-4"/>
            <small className="text-body-secondary">Al hacer clic en Registrarse, acepta los términos de uso.</small>
            </form>
        </div>
        </div>
    </div>
  )
}

export default SingUp