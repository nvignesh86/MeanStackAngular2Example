import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class TaskService{
	constructor(private http:Http){
		console.log("Service Initialized");
	}

	getTasks(){
		return this.http.get("/api/tasks")
					.map(res=>res.json());
	}
	
	//Join two table
	getDetails(){
		return this.http.get("/api/tasksjoin")
					.map(res=>res.json());
	}

	addTask(newContact){
		var headers = new Headers();
		headers.append("Content-Type","application/json");
		return this.http.post("http://localhost:3000/api/tasks",JSON.stringify(newContact),{headers:headers})
					.map(res => res.json());
	}

	deleteTask(contactId){
		return this.http.delete("http://localhost:3000/api/tasks/"+contactId)
				.map(res => res.json());
	}


	updateTask(newContact){
		var headers = new Headers();
		headers.append("Content-Type","application/json");
		return this.http.put("http://localhost:3000/api/tasks/"+newContact._id,JSON.stringify(newContact),{headers:headers})
				.map(res => res.json());
	}
}