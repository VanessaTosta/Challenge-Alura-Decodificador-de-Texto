var textInput = document.querySelector("#inputtexto");
var outInput = document.querySelector("#resultadoTexto");






function criptografar(){

        var texto = textInput.value;
      
        var criptografia = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
      
        
      document.getElementById('resultadoTexto').innerHTML = '<textarea readonly class="resultado"  id="criptoResult">' + criptografia + 
        '</textarea>'       
}

function descriptografar(){

        var texto = textInput.value;
      
        var descriptografia = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u");
      
        
       document.getElementById('resultadoTexto').innerHTML = '<textarea readonly class="resultado" id="criptoResult">' + descriptografia + 
        '</textarea>'
       
       
        
}

function copiar(){

        var textoCopiado = document.getElementById('criptoResult');
        textoCopiado.select();
        document.execCommand('copy');
        alert("Texto copiado!");
}










 
   


   

  
