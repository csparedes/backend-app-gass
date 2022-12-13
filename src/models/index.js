import { ClientesModel } from "./clientes";
import { DispositivosModel } from "./dispositivos";
import { LecturasModel } from "./lecturas";

ClientesModel.hasMany(DispositivosModel);
DispositivosModel.belongsTo(ClientesModel);

DispositivosModel.hasMany(LecturasModel);
LecturasModel.belongsTo(DispositivosModel);