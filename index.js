alert("Calcula el costo de nuestros cursos con beneficios educativos");

let precio = 300000;
let nombre = prompt("Cual es tu nombre?");
let rol = prompt("Eres estudiante, docente o particular");
let descuentop = 40;
let descuentoin = 10;

if(rol=="estudiante" || rol=="docente"){
    let hnos = prompt("Tienes hermanos estudiando con nosotros");
    if(hnos=="si"){
        let numhnos = +(prompt("Cuantos?"))
        desc1(numhnos);
    }else{
        let descuento=descuentop;
        alert("Hola " +nombre+ ", por ser parte de nuestra comunidad del instituto, te damos el " + descuentop + " porciento de descuento" );
        total(descuento);
    }
}else{
    let descuento=descuentoin;
    alert("Hola " +nombre+ ", para que comiences a estudiar con nosotros, te damos el " +descuentoin+ " porciento de descuento");
    total(descuento);
}

function desc1 (numhnos){
    let descuento1=0;
    for(let i=1; i<=numhnos; i++){
        descuento1=descuento1+5;
    }
    let descuento=descuento1+descuentop;
    alert("Hola " +nombre+ ", por ser parte de nuestra comunidad del instituto y tener " + numhnos + " hermanos estudiando con nosotros, te damos el " + descuento + " porciento de descuento" );
    total(descuento);
}
function total(descuento){
    tot=precio-(precio*(descuento/100));
    alert("El total del curso que deseas estudiar es de " + tot);
}



