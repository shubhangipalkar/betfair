import { Component, OnInit, ViewChild } from '@angular/core';
import { BetfairapiService } from '../betfairapi.service';
import { Router} from '@angular/router';  
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
 { 
  rowData:any;
  selected = 3;
  rowStatus: any;


  constructor(private BetFair:BetfairapiService,private Router:Router,private snackBar:MatSnackBar) { }
  

  ngOnInit(): void {
    this.BetFair.getData(3).subscribe((data:any)=>{
      this.rowData=data
    })
  }



logout(){
  localStorage.removeItem('token');
  this.Router.navigate(['']);
}

getSeries($event:any){ 
  this.selected=$event.value
  console.log(this.selected)
  this.BetFair.getData($event.value).toPromise().then((data:any)=>{
  this.rowData=data;
  console.log(data); 
  })
}

cache(){
  this.BetFair.removeCache().then(data=>{
    if(data['reply']==='OK'){
    this.snackBar.open('Cache Removed' ,'Dismiss', {duration:3000});
      }
   }) 
}

onTrue($event:any,row:any){
  if($event.checked){
    let hideobj = {
      "series_id":row.seriesId,
      "is_show":"true"
    }
    console.log(hideobj)
    this.BetFair.hideunhide(hideobj).toPromise().then(()=>{this.BetFair.getData(this.selected).toPromise().then((data)=>this.rowData=data)
                                                      this.snackBar.open("Status Changed to Hide")});
  }

  else{
    let unhideobj = {
      "series_id":row.seriesId,
      "is_show":"false"
    }
    console.log(unhideobj)
    this.BetFair.hideunhide(unhideobj).toPromise().then(()=>{this.BetFair.getData(this.selected).toPromise().then((data)=>this.rowData=data)
                                                            this.snackBar.open("Status changed to Unhide")});
    

} 
}
}
