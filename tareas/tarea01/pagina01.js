function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      const xmlDoc = xhttp.responseXML;
      const alumnos = xmlDoc.getElementsByTagName("alumno");
      mostrarAlumnos(alumnos);
    }
    xhttp.open("GET", "alumnos.xml");
    xhttp.send();
  }
  
  function mostrarAlumnos(alumnos) {
    let table = "<tr><th>Nombre</th><th>Correo</th><th>Nacimiento</th></tr>";
    for (let i = 0; i < alumnos.length; i++) {
      let nombre = "";
      let correo = "";
      let nacimiento = "";
  
      const alumno = alumnos[i];
  
      const nombreElem = alumno.getElementsByTagName("nombre")[0];
        nombre = nombreElem.textContent;
        correo = alumno.getAttribute("correo");
  
      const nacimientoElem = alumno.getElementsByTagName("nacimiento")[0];
      if (nacimientoElem) {
        nacimiento = nacimientoElem.textContent;
      }
  
      table += `<tr>
                  <td>${nombre}</td>
                  <td>${correo}</td>
                  <td>${nacimiento}</td>
                </tr>`;
    }
    document.getElementById("demo").innerHTML = table;
  }