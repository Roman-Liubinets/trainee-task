export class CrudService {
    workers = [{
        fullName: "Yaruna Liubinets"
    },{
        fullName: "Roman Liubinets"
    }];

    addWorker(fullName: string) {
        this.workers.push({
            fullName
        })
    }
}