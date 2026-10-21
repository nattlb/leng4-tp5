import React, { useState } from 'react';

function App() {
  const [blob, setBlob] = useState(null);

  // 1. crea un blob
  const crearBlob = () => {
    const nuevoBlob = new Blob(["Hola, este es un texto de prueba."], { type: "text/plain" });
    setBlob(nuevoBlob);
    alert("¡Blob creado!");
  };

  // 2. descarga Blob
  const descargarBlob = () => {
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = "archivo.txt";
    enlace.click();
  };

  // 3. corta blob con slice()
  const usarSlice = async () => {
    const parte = blob.slice(0, 4); // Corta los primeros 4 caracteres ("Hola")
    alert("Resultado de slice(): " + await parte.text());
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Ejemplo de uso de Blobs</h2>

      <button onClick={crearBlob} style={{ backgroundColor: "#4CAF50", color: "white", margin: "5px" }}>
        Crear Blob de texto
      </button>

      <button onClick={descargarBlob} disabled={!blob} style={{ backgroundColor: "#4CAF50", color: "white", margin: "5px" }}>
        Descargar Blob
      </button>

      <button onClick={usarSlice} disabled={!blob} style={{ backgroundColor: "#4CAF50", color: "white", margin: "5px" }}>
        Usar slice()
      </button>
    </div>
  );
}

export default App;