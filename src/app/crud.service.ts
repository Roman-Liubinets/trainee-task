export class CrudService {
    workers = [{
        fullName: "Yaruna Liubinets",
        _id: 1
    },{
        fullName: "Roman Liubinets",
        _id: 2
    }];
// CRUD Operations
// add to new workers
    addWorker(fullName: string) {
        this.workers.push({
            fullName,
            _id: 1
        })
    }
    
//delete workers
    deleteWorker(index){ 
        this.workers.splice(index, 1); 
        return
    }
}

