import { Injectable } from '@angular/core';
import { Game } from './model/Employee';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GameManage {
  url: string;
  employee : Game;
  employeeArr : Game[];
  constructor(private http: HttpClient) {
    this.url="http://localhost:3004/employees";
    this.employee= new Game();
    this.employeeArr=[];
   }
  insertEmployee(employee : Game){
    this.http.post<Game>(this.url,employee).subscribe();
    return"Game details added";
}
updateEmployee(employee : Game){
  this.http.put<Game>(this.url+"/"+employee.id,employee).subscribe();
  return"Game details updated";
}
deleteEmployee(empId :number){
  this.http.delete<Game>(this.url+"/"+ empId).subscribe();
  return"Game details deleted";
}
findEmployee(empId :number){
  this.http.get<Game>(this.url+"/"+ empId).subscribe(data =>this.employee=data);
  return this.employee;
}
findAllEmployee(){
  this.http.get<Game[]>(this.url).subscribe(data =>this.employeeArr=data);
  return this.employeeArr;
}
}
