import {load} from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import mongoose from "npm:mongoose@7.6.3";
import express from "npm:express@4.18.2";
import addDisco from "./resolvers/addDiscos.ts";
import deleteDisco from "./resolvers/deleteDisco.ts";
import updateDisco from "./resolvers/updateDisco.ts";
import { getDisco, getDiscoFormato, getDiscoPais, getDiscosPorNombre, getTodosLosDiscos } from "./resolvers/getDiscos.ts";


const env = await load();
const URL_MONGO = env.MONGO_URL || Deno.env.get("MONGO_URL");
console.log(URL_MONGO)
if(!URL_MONGO){
  console.error("Debes definir la variable MONGO_URL");
  Deno.exit(1);
}

await mongoose.connect(URL_MONGO);
console.info("Conectado");

const app = express();
app.use(express.json());
app
  .post("/addDisco", addDisco)
  .delete("/deleteDisco/:id", deleteDisco)
  .put("/upgradeDisco/:id", updateDisco)
  .get("/getDisco/:id",getDisco)
  .get("/getNombreDisco/:nombre",getDiscosPorNombre)
  .get("/getAllDisco", getTodosLosDiscos)
  .get("/getFormatDisco/:formato", getDiscoFormato)
  .get("/getCountryDisco/:pais", getDiscoPais)



app.listen(3000, ()=> {
  console.info("API_READY")
});
