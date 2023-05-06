import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent {
  @Input() item:string|undefined
  @Output() onCancel=new EventEmitter()
  @Output() onDelete=new EventEmitter()


  constructor(private ds:DataService ,private r:Router ,private hc:HttpClient){
    console.log(this.item)
  }
 
  cancel(){
    this.onCancel.emit()
  }
  deleteacc(){
    this.onDelete.emit(this.item)
  }
  
    // let res=this.ds.deleteAcc(this.item)
    // if(res==true){
    //   localStorage.removeItem("currentUser")
    //   localStorage.removeItem("acno")
    //   this.r.navigateByUrl("")


    // }
    // else{
    //   alert("deleting failed")
    // }
  


}
