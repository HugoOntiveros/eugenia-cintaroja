import React from 'react'

const Formulario = () => {
    return (
        <div>
            <form>
                <div classNameName="form-row">
                    <div className="form-group col-md-6">
                        <label for="name">Nombre</label>
                        <input type="name" className="form-control" id="name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="iEmail4nput">e-mail</label>
                        <input type="email" className="form-control" id="ejemplo@don.com"placeholder="ejemplo@xxx.com" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Teléfono</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="52 + codigo de tu ciudad" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Dirección</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Calle No. y Colonia" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">Ciudad</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">Estado</label>
                        <select id="inputState" className="form-control">
                            <option selected>Selecciona...</option>
                            <option>Ciudad de México</option>
                            <option>Estado de México</option>
                            <option>Queretaro</option>
                            <option>Guerrero</option>
                            <option>Jalisco</option>
                            <option>Morelos</option>
                            <option>Puebla</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Codigo Postal</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <div className="form-group">
                    <div class="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Deseas guardar tus datos para proximos pedidos
      </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-secondary">Inicia tu elección</button>
            </form>











        </div>
    )
}

export default Formulario
