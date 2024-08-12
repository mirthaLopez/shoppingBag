const contenedorProductos = document.querySelector(".contenedorProductos");
let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || [];

var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


//delegación de eventos
contenedorProductos.addEventListener("click", function (event) {
    // si se hace click---> 
    if (event.target.classList.contains('carrito')) {
        const producto = event.target.closest('.producto');
        const nombre = producto.querySelector('h4').textContent;
        const precio = producto.querySelector('p').textContent;
        const cantidad = producto.querySelector('input').value;
        const talla = producto.querySelector('select').value;
     
        if (cantidad==="") {
            alert("Por favor, elige la cantidad de articulos.");
        } else {
            const articulo = {
                productName: nombre,
                price: precio,
                quantity: cantidad,
                size: talla
            };
    
            listaCarrito.push(articulo);
            localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito));
    
            modal.style.display = "block";
    
            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
    
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
       
    }
});