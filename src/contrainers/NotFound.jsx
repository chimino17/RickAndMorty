import React from "react";
import { useRef, useState } from "react";

const NotFound = () => {
  const [nombre, setNombre] = useState("");
  const inputRef = useRef(null);

  const valor = nombre;
  const diptongosDecrecientes =
    valor.includes("ai") ||
    valor.includes("ei") ||
    valor.includes("oi") ||
    valor.includes("au") ||
    valor.includes("eu") ||
    valor.includes("ou");
  const diptingoCreciente =
    valor.includes("ia") ||
    valor.includes("ie") ||
    valor.includes("io") ||
    valor.includes("ua") ||
    valor.includes("ue") ||
    valor.includes("uo");
  const triptongo =
    valor.includes("iai") ||
    valor.includes("iei") ||
    valor.includes("ioi") ||
    valor.includes("uai") ||
    valor.includes("uei") ||
    valor.includes("iau") ||
    valor.includes("ieu") ||
    valor.includes("uau");

  return (
    <>
      <h2 className="Dead App">Tu pagina no fue encontrada (Error 404)</h2>
      <div className="grid-container-diptongo">
        <div>
          <h2 className="App">Diptongo</h2>
          <p className="blanc">
            ¿Te gustaría aprender lo que es un diptongo? Bien. Un diptongo es
            una cadena sonora que consiste en la articulación de dos vocales,
            una a continuación de la otra, sin interrupción y produciéndose una
            transición suave en las frecuencias sonoras que caracterizan los
            timbres de cada una de las dos vocales. Por ejempo: cuando una
            palabra lleva la combinación de vocales ai,ei,oi,au,eu y ou se le
            conoce como diptongo decreciente. Cuando una palabra lleva ia, ie,
            io, ua, ue y uo se le conoce como diptongo creciente. Y por último
            tenemos el triptongo que es cuando surge la combinación de tres
            vocales como por ejemplo iai, iei, ioi, uai, uei, iau, ieu y uau
          </p>
          <p className="blanc">
            ¿Tienes una palabra en mente y quisieras saber qué tipo de diptongo
            es o si no es un diptongo? Puedes colocarla en nuestra casilla y dar
            clic en “Revisar palabra” y veras que tipo de diptongo es:
          </p>
          <label for="fname" className="blanc">
            Escribe tu palabra:{" "}
          </label>
          <input className="input-palabra" type="text" ref={inputRef} />
          <button
            className="Revisar"
            onClick={() => setNombre(inputRef.current.value)}
          >
            Revisar palabra
          </button>
          <p className="blanc">
            Tu palabra es un:{" "}
            {triptongo ? (
              <p>un Triptongo</p>
            ) : (
              <p>
                {diptongosDecrecientes ? (
                  <p>un Diptongo decreciente</p>
                ) : (
                  <p>
                    {diptingoCreciente ? (
                      <p>un diptingo Creciente</p>
                    ) : (
                      <p>tu palabra no es un diptongo</p>
                    )}
                  </p>
                )}
              </p>
            )}
          </p>
        </div>
        <div>
          <img
            className="diptongo"
            src="https://c.tenor.com/3hIpHNbcVf4AAAAC/rick-and-morty-rick.gif"
            alt="logo"
          ></img>
        </div>
      </div>
    </>
  );
};

export default NotFound;
