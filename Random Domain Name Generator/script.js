function generarCombinaciones() {
    // Obtener las palabras de los textarea
    var palabras1 = document.getElementById("textArea1").value.trim().split(/\s+/);
    var palabras2 = document.getElementById("textArea2").value.trim().split(/\s+/);
    var palabras3 = document.getElementById("textArea3").value.trim().split(/\s+/);
  
    // Comprobar que se hayan ingresado palabras en al menos dos textArea
    if ((palabras1.length === 0 && palabras2.length === 0) ||
        (palabras1.length === 0 && palabras3.length === 0) ||
        (palabras2.length === 0 && palabras3.length === 0)) {
      alert("Por favor, ingrese al menos dos palabras en diferentes textarea.");
      return;
    }
  
    // Generar combinaciones en orden 
    var combinaciones = [];
  
    for (var i = 0; i < palabras1.length; i++) {
      for (var j = 0; j < palabras2.length; j++) {
        for (var k = 0; k < palabras3.length; k++) {
          combinaciones.push(palabras1[i] + palabras2[j] + palabras3[k]);
        }
      }
    }
  
    // Mostrar combinaciones en pagina
    var resultadoHTML = "<p>Combinaciones:</p><ul>";
    for (var z = 0; z < combinaciones.length; z++) {
      resultadoHTML += "<li>" + combinaciones[z] + '.com' + "</li>";
      resultadoHTML += "<li>" + combinaciones[z] + '.org' + "</li>";
      resultadoHTML += "<li>" + combinaciones[z] + '.es' + "</li>";
      resultadoHTML += "<li>" + combinaciones[z] + '.io' + "</li>";
      resultadoHTML += "<li>" + combinaciones[z] + '.net' + "</li>";
      resultadoHTML += "<li>" + combinaciones[z] + '.us' + "</li>";
    }
    resultadoHTML += "</ul>";
  
    document.getElementById("combinaciones").innerHTML = resultadoHTML;
  }