import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transact:any

  constructor(private ds:DataService){
    ds.getTransactions().subscribe((res:any)=>{
      console.log(res)
      this.transact=res.data

    })
    
  }
}
