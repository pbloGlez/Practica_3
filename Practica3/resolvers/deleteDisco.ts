//@ts-ignore
import {Request, Response} from "npm:express@4.18.2";
import DiscoModelType  from "../db/discos.ts";

const deleteDisco = async (req: Request, res: Response)=>{
    try{
        const {id} = req.params;
        const disco = await DiscoModelType.findByIdAndDelete(id).exec();
        if(!disco){
            res.status(404).send("Disco not found");
            return;
        }
        res.status(200).send("Disco borrado");
    }catch(error){
        res.status(500).send(error.message);
    }
};
export default deleteDisco;
