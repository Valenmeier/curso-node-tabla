import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

export const argv = yargs(hideBin(process.argv))
  .option("base", {
    alias: "b",
    type: "number",
    describe: "La base para la tabla de multiplicar",
  })
  .option("listar", {
    alias: "l",
    type: "boolean",
    demandOption: false,
    describe: "Lista los archivos que lleguen",
  })
  .option("hasta", {
    alias: "h",
    type: "number",
    demandOption: false,
    describe: "Limite de multiplicación",
  }).argv;
