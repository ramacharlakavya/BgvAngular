import { Component, OnInit } from '@angular/core';
import { BackgroundService, EmployeeDocumentDto } from '../background.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})
export class SearchByIdComponent implements OnInit {
 
  empId:any;
  retrievedImage: any;
  completeData:EmployeeDocumentDto;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any; 

  
  constructor(private service:BackgroundService,private router:Router) { 
    this.router=router;
  }


  ngOnInit(): void {
  }
  getImage()
  {
    this.service.getdocumentbyid(this.empId).subscribe(res=>{
      this.completeData=res[0];
      this.base64Data=this.completeData.docData;
      this.retrievedImage='data:image/jpg;base64,' + this.base64Data;
    },
    error=>{
      this.message="id does not exisits";
    }
    
      )
  }

}


