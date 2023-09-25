import { Component, EventEmitter, Inject, OnInit,Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  
  styleUrls: ['./todo.component.scss']
  
})
export class TodoComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  title: string = '';
  description: string = '';


  constructor(public  dialogRef:MatDialogRef<TodoComponent>,@Inject(MAT_DIALOG_DATA) public data:string) { }
  

  ngOnInit(): void {}
  
  oncancle(){
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close({title:this.title,description:this.description});
    this.newItemEvent.emit({title:this.title,description:this.description});
  }
}
