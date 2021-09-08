export class TransactionModel {

 
    
    constructor(public customerid:string="",public receviverBic:string="",public raccountname:string="",
                    public raccountnumber:string="",public transfertype:string="",
                    public  messagecode:string="",public inramount:number=0,public transferfee:number=0) {
                
    }

}