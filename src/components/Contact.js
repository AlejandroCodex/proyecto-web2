import React from 'react'

const Contact = () => {
  return (
    <div className='container my-5'>
      <form class="row g-3 flex flex-wrap">
      <div class="col-md-6">
        <label for="name" class="form-label">Nombre Completo</label>
        <input type="text" class="form-control" id="name" autoComplete='off' required/>
      </div>
      <div class="col-md-6">
        <label for="name" class="form-label">Numero de Celular</label>
        <input type="text" class="form-control" id="name" autoComplete='off' required/>
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Direccion</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete='off' required/>
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Ciudad</label>
        <input type="text" class="form-control" id="inputCity"/>
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">Servicio</label>
        <select id="inputState" class="form-select">
          <option selected>Consulta Medica</option>
          <option selected>Accesorios</option>
          <option selected>Comida</option>
          <option selected>Estetica</option>
          <option selected>Ropa</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Descripcion</label>
        <textarea rows={6} class="form-control" id="inputPassword4" autoComplete='off' required></textarea>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-success">Enviar</button>
      </div>
    </form>
    </div>
  )
}

export default Contact