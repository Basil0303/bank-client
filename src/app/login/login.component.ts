import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder ,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {




  logform=this.fb.group({
    acno:['',[Validators.required,Validators.pattern("[0-9]+")]],
    password:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{8,}")]]
  })


  constructor(private r:Router, private ds:DataService ,private fb:FormBuilder){}  
  
  //dependancy injection
  


  clicked(){
    let acc:any = this.logform.value.acno
    let pswd = this.logform.value.password
    let res = this.ds.login(acc,pswd)
 
  res.subscribe((resp:any)=>{
    if(resp){
      localStorage.setItem("currentUser",resp.currentUser)
      localStorage.setItem("currentAcno",resp.currentAcno)
      localStorage.setItem("token",JSON.stringify(resp.token))
      alert(resp.message)
      this.r.navigateByUrl("dashb")
    }
  },
  (err)=>{
    alert(err.error.message)
  })
}




}
