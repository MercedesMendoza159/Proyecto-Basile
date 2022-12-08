let ingresoNombre = prompt("Hola! ingresa tu nombre para comenzar a comprar")


alert("Bienvenido/a" + " " + ingresoNombre)

let macetero = 700;
let cruceDeBañera = 550;
let alfombra = 670;
let jabonera = 450;
let estante = 1350;
let precioFinal = 0;

function total() {
    alert("El total de tu compra es de" + " " + "$" + precioFinal);
}


let productos = prompt("Elige cualquiera de nuestros productos disponiles: \nMacetero \nCruce de bañera \nAlfombra/deck \nJabonera \nEstante flotante \nPresiona x para finalizar.")

while (productos != "x") {

    switch (productos) {
        case "macetero":
            let color = prompt("Elija entre tonalidades roble oscuro o roble claro");
            if (color === "roble claro") {
                precioFinal = parseInt(precioFinal + macetero)
                total ();
                alert ("Gracias por su compra!");
            } else if (color === "roble oscuro") {
                precioFinal = parseInt(precioFinal + macetero)
                total ();
                alert ("Gracias por su compra!");
            }
            else {
                alert("Opcion incorrecta, seleccione uno de nuestros productos y luego elija el tono deseado");
            }
            break;
        case "cruce de bañera":
            let color2 = prompt("Elija entre tonalidades roble oscuro o roble claro");
            if (color2 === "roble claro") {
                precioFinal = parseInt(precioFinal + cruceDeBañera)
                total ();
                alert ("Gracias por su compra!");
            } else if (color2 === "roble oscuro") {
                precioFinal = parseInt(precioFinal + cruceDeBañera)
                total ();
                alert ("Gracias por su compra!");
            }
            else {
                alert("Opcion incorrecta, seleccione uno de nuestros productos y luego elija el tono deseado");
            }
            break;
        case "alfombra/deck":
            let color3 = prompt("Elija entre tonalidades roble oscuro o roble claro");
            if (color3 === "roble claro") {
                precioFinal = parseInt(precioFinal + alfombra)
                total ();
                alert ("Gracias por su compra!");
            } else if (color3 === "roble oscuro") {
                precioFinal = parseInt(precioFinal + alfombra)
                total ();
                alert ("Gracias por su compra!");
            }
            else {
                alert("Opcion incorrecta, seleccione uno de nuestros productos y luego elija el tono deseado");
            }
            break;
        case "jabonera":
            let color4 = prompt("Elija entre tonalidades roble oscuro o roble claro");
            if (color4 === "roble claro") {
                precioFinal = parseInt(precioFinal + jabonera)
                total ();
                alert ("Gracias por su compra!");
            } else if (color4 === "roble oscuro") {
                precioFinal = parseInt(precioFinal + jabonera)
                total ();
                alert ("Gracias por su compra!");
            }
            else {
                alert("Opcion incorrecta, seleccione uno de nuestros productos y luego elija el tono deseado");
            }
            break;
        case "estante flotante":
            let color5 = prompt("Elija entre tonalidades roble oscuro o roble claro");
            if (color5 === "roble claro") {
                precioFinal = parseInt(precioFinal + estante)
                total ();
                alert ("Gracias por su compra!");
            } else if (color5 === "roble oscuro") {
                precioFinal = parseInt(precioFinal + estante)
                total ();
                alert ("Gracias por su compra!");
            }
            else {
                alert("Opcion incorrecta, seleccione uno de nuestros productos y luego elija el tono deseado");
            }
            break;

        default:
            alert("Opción no valida");
            break;
    }
    productos = prompt("Elige cualquiera de nuestros productos disponiles: \nMacetero \nCruce de bañera \nAlfombra/deck \nJabonera \nEstante flotante \nPresiona x para finalizar.")

    
}







