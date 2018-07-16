export class Workers {
    constructor(
       public _id: number,
       public email: string,
       public password: string,
        public name: string,
    public editable: boolean
    ) {}
}