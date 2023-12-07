import { Transfer } from "./transfers.model.js";


export class TransferService {
   static async createRecordTransfer(amount, sernderUserId, receiverUserId){
    return await Transfer.create({
        amount,
        sernderUserId,
        receiverUserId
    })
   }
}