import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { DtoGet } from './types/interface';

@Component({
  selector: 'app-crud',
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {
  data: DtoGet[] = [];
  constructor(private service: CrudService){}

  ngOnInit(): void {
    this.service.Listar().subscribe((res: any)=>{
      console.log('respuesta', res);
      this.data = res;
    })
  }

}
