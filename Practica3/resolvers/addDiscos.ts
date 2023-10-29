//@ts-ignore
import {Request, Response} from "npm:express@4.18.2";
import DiscoModel from "../db/discos.ts";
import { FORMATOTYPES } from "../types.ts";


const addDisco = async(req: Request, res: Response) =>{
    try{
        const {nombre, autor, formato, matriz, pais, arte} = req.body;
        if (!nombre||!autor||!formato) {
            res.status(400).send("Nombre del disco, autor y formato son requeridos");
            return;
        }
        if (!Object.values(FORMATOTYPES).includes(formato)) {
            res.status(400).send("El tipo de formato no es válido");
            return;
        }
        const newDisco = new DiscoModel({
            nombre,
            autor,
            formato,
            matriz,
            pais,
            arte
        });
        await newDisco.save();

        res.status(200).send({
            nombre: newDisco.nombre,
            autor: newDisco.autor,
            formato: newDisco.formato,
            matriz: newDisco.matriz,
            pais: newDisco.pais,
            arte: newDisco.arte,
            id: newDisco.id.toString(),
        });
    }catch(error){
        res.status(500).send(error.message);
        return;
    }
}
export default addDisco;