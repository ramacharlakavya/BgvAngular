import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class LoginDto
{
  empId:number;
  password:string;
  roleId:number;
  constructor(empId:number, password:string, roleId:number){
    this.empId = empId;
    this.password = password;
    this.roleId = roleId;
}
}
export class EmployeeDocumentDto
{
  empId:number;
  docId:number;
  docType:string;
  docData:string;
  empName:string;
  constructor(empId:number,docId:number,docType:string,docData:string,empName:string){
    this.empId = empId;
    this.docId = docId;
    this.docType = docType;
    this.docData=docData;
    this.empName=empName;
}
}
export class VerificationDto
{
  verfId:number;
  status:string;
  constructor(verfId:number,status:string)
  {
    this.verfId=verfId;
    this.status=status;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor(private http:HttpClient) { }

  logindto:LoginDto;
  employeedocumentdto:EmployeeDocumentDto;
  verification:VerificationDto;
  public getlogindetails(empId:number,password:string){
    
    return this.http.get("http://localhost:4945/bgv/login/"+empId+"/"+password);//,{responseType: 'json'});
  
  }
  public getdocumentbyid(empId:number){
  
return this.http.get<EmployeeDocumentDto>("http://localhost:4945/bgv/getdocumentbyid/"+empId);//,{responseType: 'json'});
  
  }
  public getdocumentbyname(empName:string){
    
    return this.http.get("http://localhost:4945/bgv/getdocumentbyname/"+empName,{responseType: 'json'});
  
  }
  
  
  public setstatus(verf){
    console.log(verf);
    return this.http.put("http://localhost:4945/bgv/setstatus",verf,{responseType: 'text'});
  }



  

  

}

