import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo List with Angular';
  list:any[]=[];
  liste:any[]=[];
  addTask(item:string)
  {
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list);

  }
  removeTask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id);
  }
  completed(item:string)
  {
    this.liste.push({id:this.liste.length,name:item})
    console.warn(this.list)
    this.list=this.list.filter(item=>item.id!==item.id);
  
  }
  clear(id:number)
  {
    console.warn(id)
    this.liste=this.liste.filter(item=>item.id!==id);
}
}
