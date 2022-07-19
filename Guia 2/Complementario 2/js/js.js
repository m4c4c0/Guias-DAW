var prod = new Array(100);
var precio = new Array(100);

var b1 = false;

var i;
var cantP = 1;
var seguir;

for(i = 0; i <= 100; i++){
    do{
        do{
            if(!(prod[i] =  prompt("Digite el nombre del producto"))){
                alert("error");
            }else{
                if(isNaN(prod[i])){
                    b1 = true;
                    do{
                        if(!(precio[i] = prompt("Digite el precio del producto"))){
                            alert("error");
                        }else{
                            if(isNaN(precio[i])){
                                alert("error");   
                            }else{
                                b1 = true;
                            }
                        }
                    }while(b1 == false);
                }else{
                    alert("error");
                }
            }
        }while(b1 == false);

        do{
            seguir = prompt("¿Desea agrear otro produto si o no?");
            switch(seguir){
                case 'si':
                    
                    b1 = true;
                    cantP ++;
                break;
                case 'no':
                    i = 100;
                    
                    b1 = true;
                break;
                default:
                    alert("error");
                    b1 = false;
                break;
            }
        }while(b1 == false);
    }while(b1 == false);
    }
    
    document.write("<font face='serif' size='12'> <table border = '3' align = 'center'> <tr> <th>Nombre</th> <th>Precio</th>  </tr>");
    
    for(i = 0; i < cantP; i++){
        document.write("<tr>  <td>"+ prod[i] +"</td>   <td>"+precio[i]+"</td></tr>");
    }
    
    document.write("</table>");
