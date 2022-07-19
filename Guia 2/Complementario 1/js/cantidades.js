var num, i, j, k, l, cons, conti, contp, contt, total, impar, par, menor, mayor;

do{
    num = prompt("Ingrese un numero entero: ");
if (num <0)
    alert("Ingrese un numero mayor a cero");
}while(num<0);
cons = num.split('');
par=0;
impar=0;
k=0;
j=0;
conti=0;
contp=0;
total=0;
contt=0;
mayor=0;
menor=10;
for(i=0; i <= cons.length; i++){
if(cons[i] % 2 == 0){
    contp = parseInt(cons[i]);
    par = par + contp;
    k++;
}else if(cons[i] % 2 == 1){
    conti = parseInt(cons[i]);
    impar = impar + conti;
    j++
}

if(contt=cons[i]){
contt = parseInt(cons[i]);
total = total + contt;
}
if(cons[i]>=mayor){
    mayor=cons[i];
     
}else if(cons[i]<=menor ){
    menor=cons[i]
}
}
i=i-1

document.write("<div>")
document.write("<p>cantidad de cifras: "+i+"</p>");
document.write("<p>cantidad de cifras impares: "+j+"</p>");
document.write("<p>cantidad de cifras pares: "+k+"</p>");
document.write("<p>suma de cifras impares: "+impar+"</p>");
document.write("<p>suma de cifras pares: "+par+"</p>")
document.write("<p>suma de todas las cifras: "+total+" </p>")
document.write("<p>cifra mayor: "+mayor+" </p>")
document.write("<p>cifra menor: "+menor+" </p>")
document.write("</div>")

 