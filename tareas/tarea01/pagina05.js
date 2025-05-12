let ejemplo = document.getElementById("demo");
        ejemplo.innerHTML = "hola";

        function imprimir(){
            let numImagenes = document.getElementById("num").value;
            const idImagen = document.getElementById("id").value;
            
            contenedor = document.getElementById("demo");
            imagen = picture(idImagen);

            for (let i = 0; i < numImagenes; i++) {
                contenedor.innerHTML += imagen;
            }
        }

        const picture = (id) =>{
            return `<figure>
                <img src="https://picsum.photos/id/${id}/200" alt="jhon">
                <figcaption>Jhon</figcaption>
            </figure>`;
        };