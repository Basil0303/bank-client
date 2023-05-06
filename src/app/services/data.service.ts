import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,} from '@angular/common/http'
const options={
  headers:new HttpHeaders()

}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentAcno=''
  currentUser=''
  

  accounts:any={
    1000:{account_no:1000,name:"Jaseel",phone:9485784939,balance:100000,password:"jaseel123",transactions:[]},
    1001:{account_no:1001,name:"Shani",phone:9485744933,balance:100000,password:"shani123",transactions:[]},
    1002:{account_no:1002,name:"Sahal",phone:9485784935,balance:100000,password:"sahal123",transactions:[]},
    1003:{account_no:1003,name:"Suhail",phone:9485784940,balance:100000,password:"suhail123",transactions:[]}
  }

  constructor( private hc:HttpClient) { 
    // this.getDetails()
  }

  // getDetails(){
  //   if(localStorage.getItem("currentUser")){
  //     this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
  //   }
  //   if(localStorage.getItem("accounts")){
  //     this.accounts=JSON.parse(localStorage.getItem("accounts")||'')
  //   }
  //   if(localStorage.getItem("acno")){
  //     this.currentAcno=JSON.parse(localStorage.getItem("acno")||'')
  //   }
  // }

  saveDetails(){
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.accounts){
      localStorage.setItem("accounts",JSON.stringify(this.accounts))
    }
    if(this.currentAcno){
      localStorage.setItem("acno",JSON.stringify(this.currentAcno))
    }

  }

  login(acno:any,psw:any){

    let data={
      acno,
      psw
    }
    return this.hc.post("http://localhost:3000/login",data)

    // if(acno in this.accounts){
    //   if(this.accounts[acno].password==psw){
    //     this.currentUser=this.accounts[acno].name
    //     this.currentAcno=acno
    //     this.saveDetails()
    //     return true
    //   }
    //   else{
    //     return false
    //   }
    // }
    // else{
    //   return false
    // }
  }

  register(acno:any,username:any,phone:any,password:any){

    let data={
      acno,
      uname:username,
      phone,
      pswd:password
    }

  return  this.hc.post("http://localhost:3000/register",data)
    // if(acno in this.accounts){
    //   alert("Account number already exist")
    //   return false
    // }
    // else{
    //   this.accounts[acno]={account_no:acno,name:username,phone:phone,balance:0,password:password,transactions:[]}
    //   console.log(this.accounts)
    //   this.saveDetails()
    //   return true
    // }
  }

  deposit(acc: any, password: any, amount: any) {
    let data = {
      acc,
      password,
      amount,
    };
    return this.hc.post(
      'http://localhost:3000/deposite',
      data,
      this.getoptions()
    );
  }

  // ----------------------------------------------------------------------------
  getoptions() {
    const token = JSON.parse(localStorage.getItem('token') || '');
    let header = new HttpHeaders();
    if (token) {
      header = header.append('x-access-token', token);
      options.headers = header;
    }
    return options;
  }
  // ------------------------------------------------------------------------------


  

  // -----------------withdrawal----------------------------

  withdrawal(acc: any, password: any, amount: any) {
    let data = {
       acc,
      password,
      amount,
    };
    return this.hc.post('http://localhost:3000/withdraw', data, this.getoptions()
 );
  }
  getTransactions(){
    let data= {
      acc:JSON.parse(localStorage.getItem("currentAcno")||'')
    
    }
      
      return this.hc.post('http://localhost:3000/transaction',data,this.getoptions()  );
  }


  deleteAcc(acc:any){
     
      return this.hc.delete("http://localhost:3000/delacc"+acc,this.getoptions())
  }



}

