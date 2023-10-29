//@ts-ignore
import {Request, Response} from "npm:express@4.18.2";
import  DiscoModelType  from "../db/discos.ts";

const updateDisco = async (req: Request, res: Response )=>{
    try{
        const {id} = req.params;
        const {nombre, autor, formato, pais, arte} = req.body;

        if (!nombre||!autor) {
            res.status(400).send("Nombre del disco y autor requeridos");
            return;
        }
        const updateDisco = await DiscoModelType.findByIdAndUpdate(id, 
            {nombre, autor, formato, pais, arte},{new: true}).exec();
        if (!updateDisco) {
            res.status(404).send("Disco no encontrado");
            return;
        }
        res.status(200).send({
            nombre: updateDisco.nombre,
            autor: updateDisco.autor,
            formato: updateDisco.formato,
            pais: updateDisco.pais,
            arte: updateDisco.arte,
            id: updateDisco.id.toString()
        });
    }catch(error){
        res.status(500).send(error.message);
    }
};
export default updateDisco;
