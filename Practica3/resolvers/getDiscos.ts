//@ts-ignore
import {Request, Response} from "npm:express@4.18.2";
import  DiscoModelType from "../db/discos.ts";

export const getDisco = async(req: Request, res: Response)=>{
    try{
        const{ id } = req.params;
        const disco = await DiscoModelType.findById(id).exec();
        if(!disco){
            res.status(404).send("Disco no encontrado");
            return;
        }
        res.status(200).send({
            nombre: disco.nombre,
            autor: disco.autor,
            formato: disco.formato,
            matriz: disco.matriz,
            pais: disco.pais,
            arte: disco.arte,
            id: disco.id.toString(),
        });
    }catch (error){
        res.status(404).send(error.message);
        return;
    }
}
export const getTodosLosDiscos = async(req: Request, res: Response) => {
    try{
        const Discos = await DiscoModelType.find().exec();
        res.send(Discos);
    }catch(e){
        res.stats(500).send("No hay discos");
    }
}

export const getDiscosPorNombre = async(req: Request, res: Response) => {
    try{
        const nombre = req.params.nombre;
        const Discos = await DiscoModelType.find({nombre: nombre}).exec();
        res.json(Discos);
    }catch(e){
        res.status(500).send("Obtener discos por nombre no funciona");
    }
}

export const getDiscoFormato = async(req: Request, res: Response)=>{
    try{
        const formato = req.params.formato;
        const Discos = await DiscoModelType.find({formato: formato}).exec();
        res.json(Discos);
    }catch(e){
        res.status(500).send("Get discos por el formato ha fallado");
    }
}

export const getDiscoPais = async(req: Request, res: Response) => {
    try{
        const pais = req.params.pais;
        const Discos = await DiscoModelType.find({pais: pais}).exec();
        res.json(Discos);
    }catch(e){
        res.status(500).send("Get discos por el país ha fallado")
    }
}