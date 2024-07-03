

function validar (){

let sueldobruto = parseInt(prompt("ingrese el sueldo bruto"))
if(isNaN(sueldobruto) || sueldobruto <= 0)
    {
        alert("ingrese un numero valido")
    }else{
        return sueldobruto
    }

}

let sueldobruto = validar() 
let sueldoneto

if (isNaN(sueldobruto)){
    alert(`hasta luego`)

}else{
    let opciones = prompt("usted tiene obra social?:y/n")
    switch(opciones){
    case 'y':
    sueldoneto = sueldobruto * 0.83
    alert(`su sueldo es: ${sueldoneto}`)
    break;
    case 'n':
    sueldoneto = sueldobruto * 0.87
    alert(`su sueldo es: ${sueldoneto}`)
    break;
    default:
    alert("la opcion ingresada no es valida")
    break;
   }
}



