export class CustomerModel{

    constructor(public customerid:string="",public accountholdername:string="",
                public overdraftflag:number=0,public clearbalance:number=0,
                public customeraddress:string="",public  customercity:string="",
                public customertype:string="")
                {
                    
                }
}