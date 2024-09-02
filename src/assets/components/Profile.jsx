import React from 'react'

export default function Profile() {
  return (
    <div>
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
  </div>
  <button type="submit" className="btn btn-primary">Cerrar sesión</button>
</form>
    </div>
  )
}
