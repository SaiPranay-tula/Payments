import { Injectable } from "@angular/core";
import { TransactionModel } from "../models/transaction.model"
@Injectable()
export class TransactionService{

    transaction:TransactionModel;

// trans={
//     "customerid":"71319440983198",
//     "receviverBic":"ABNAINBBAHM",
//     "raccountname":"Pranay",
//     "raccountnumber":"324234234324",
//     "transfertype":"C",
//     "messagecode":"CHQB",
//     "inramount":"120000.23",
//     "transferfee":"1232.2"
// }
constructor(){
    this.transaction=new TransactionModel();
}

print(){
    console.log(this.transaction)
}

}