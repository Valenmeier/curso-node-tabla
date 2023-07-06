import fs from "fs";
import colors from "colors";
export const crearArchivo = async (base = 5, listar, limite = 10) => {
  try {
    let salida = ``;
    let consola = "";
    for (let index = 1; index <= limite; index++) {
      salida +=
        `${base} ` +
        `x`.cyan +
        ` ${index} ` +
        `=`.magenta +
        ` ${base * index}\n`;
      consola += `${base} x ${index} = ${base * index}\n`;
    }
    if (listar) {
      console.log("=========================".magenta);
      console.log(`       Tabla del ${base}      `.rainbow);
      console.log("=========================".magenta);
      console.log(salida);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

    return `tabla-${base}.txt creada`;
  } catch (error) {
    throw error;
  }
};
