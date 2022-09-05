const distancia = 100;

if (distancia > 1000 && distancia <= 10000) {
    console.log("se irá en bicicleta");
} else if (distancia > 10000 && distancia <= 30000) {
    console.log("se irá en colectivo");
} else if ( distancia > 30000 && distancia <= 100000) {
    console.log("se irá en auto");
} else if ( distancia > 100000) {
    console.log("se irá en avion")
} else {
    console.log("se irá a pie");
}
