import { Clerk } from "./Clerk";

export class Mandi{

    mandiPincode: number;
    storage: number;
    clerk: Clerk = new Clerk();
    adminId: string;

    constructor(){ }
}