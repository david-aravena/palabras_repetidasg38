var contenedor = document.getElementById("texto-entrada").innerHTML.toLowerCase();
var abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","ll","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
var array_letras = [];

for(var a=0; a<abecedario.length; a++){
    var repeticiones = [];
    for(var c=0; c<contenedor.length; c++){
        if(abecedario[a] == contenedor[c].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g, "")){
            repeticiones.push(contenedor[c].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g, ""));
        };
    };
    array_letras.push(repeticiones);
};

var resultados = document.getElementById("resultados");
for(var x=0; x<array_letras.length; x++){
    if(array_letras[x].length != 0){
        var letra = document.createElement('h4');
        letra.innerHTML = `la letra ${array_letras[x][0]} se repite ${array_letras[x].length} veces`;
        resultados.append(letra);
    };
};


/////////////////////////////////////////


var uno = contenedor.split(" ");
var palabras = [];

for(var u=0; u<uno.length; u++){
    if(palabras.includes(uno[u].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g, ""))){
        continue;
    } else {
        palabras.push(uno[u].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g, ""));
    };
};

var final = [];
for(var p=0; p<palabras.length; p++){
    var repeticiones = [];
    for(var n=0; n<uno.length; n++){
        if(palabras[p] == uno[n].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g, "")){
            repeticiones.push(uno[n].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g, ""));
        };
    };
    final.push(repeticiones);
};


var palabras_repetidas = document.getElementById("palabras-repetidas");
for(var r=0; r<final.length; r++){
    var elemento = document.createElement('h4');
    elemento.innerHTML = `la palabra ${final[r][0]} se repite ${final[r].length} veces`;
    palabras_repetidas.append(elemento);
};