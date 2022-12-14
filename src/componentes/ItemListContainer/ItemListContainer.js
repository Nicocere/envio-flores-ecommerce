import React from "react";

const Item = ({producto}) => {

    return (
        <div className="product-item" >
             <img src={producto.img} alt=""/>
            <h4 className="tituloProducto">{producto.nombre}</h4>
            
            <h6 className="elijaTamaño">Elija un Tamaño</h6>
            
            <select  id="select" className="opcionTam"  > 
    <option value="${producto.opciones[0].tamaño}">${producto.opciones[0].tamaño}</option>
    <option value="${producto.opciones[1].tamaño}">${producto.opciones[1].tamaño}</option>
    <option value="${producto.opciones[2].tamaño}">${producto.opciones[2].tamaño}</option>
    </select>    
    <p id="precioProd" className="precioProd"> </p>
    <button id="agregar" className="button-add"  >Agregar producto <i className='fas fa-shopping-cart'></i></button>
            
    <div id="btn-prod">    
        
</div>
    </div>
)

}

export default Item;