import { DEFAULT_PACKAGE_URL_PROVIDER } from "@angular/platform-browser-dynamic/src/compiler_factory";

export class CrudService {
    workers = [{
        fullName: "Yaruna Liubinets"
    },{
        fullName: "Roman Liubinets"
    }];
// CRUD Operations
// add to new workers
    addWorker(fullName: string) {
        this.workers.push({
            fullName
        })
    }
//delete workers
    deleteWorker(index){ 
        this.workers.splice(index, 1); 
    }
// Edit workers
    // editWorker(index) {
    //     this.workers.fullName = editName;
    // }    
}