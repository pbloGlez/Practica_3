import mongoose from "npm:mongoose@7.6.3";
import {Disco} from "../types.ts";
//hacemos el esquema
const Schema = mongoose.Schema;

const DiscoSchema = new Schema({
        nombre : {type: String, required: true},
        autor : {type: String, required: true},
        formato : {type: String, required: true},
        matriz: {type: String, required: false},
        pais: {type: String, required: true},
        arte:{type: String, required: true}
});
//hacemos el modelo
export type DiscoModelType = mongoose.Document & Omit<Disco, "id">;
export default mongoose.model<DiscoModelType>("discos", DiscoSchema);

