export class User {
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public permission: string,
        public id?: number
    ) {}
}