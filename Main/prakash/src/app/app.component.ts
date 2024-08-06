import { Component } from '@angular/core';
import { Game } from './model/Employee';
import { GameManage } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employee : Game ;
  result :string;
  employeeArr : Game[];
  flag : boolean;

  constructor( private service:GameManage){
    this.employee =new Game();
    this.result="";
    this.employeeArr=[];
    this.flag=false;
  }
  insertEmployee(data:any){
    this.employee.id=data.Gamename;
    this.employee.Jersey=data.Jerseyno;
    this.employee.Player=data.Playername;
    this.employee.Role =data.Playerrole;
    this.result=this.service.insertEmployee(this.employee);
  }
  updateEmployee(data:any){
    this.employee.id=data.Gamename;
    this.employee.Jersey=data.Jerseyno;
    this.employee.Player=data.Playername;
    this.employee.Role=data.Playerrole;
    this.result=this.service.updateEmployee(this.employee);
  }
  deleteEmployee(data:any){
    this.result=this.service.deleteEmployee(data.empId);
  }
  findEmployee (data: any){
    this.employee=this.service.findEmployee(data.empId);
    this.result =this.employee.id+" "+this.employee.Jersey+" "+this.employee.Player+" "+this.employee.Role;
  }
  findAllEmployee(){
    this.employeeArr=this.service.findAllEmployee();
    this.flag=true;
  }
}
