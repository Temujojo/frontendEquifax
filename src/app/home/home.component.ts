import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface ICandidate {
  name: string;
  job: string;
  status: string;
  applicationDate: string;
}

const ELEMENT_DATA: ICandidate[] = [
  {
    name: 'Ramón Faúndez',
    job:'Fullstack',
    status: 'Aceptado',
    applicationDate: '2024-05-12'
  }, {
    name: 'Alejandro Naranjo',
    job: 'Fullstack',
    status: 'Contratado',
    applicationDate: '2024-05-12'
  }, {
    name: 'Darwin Poblete',
    job: 'FullStack',
    status: 'Aceptado',
    applicationDate: '2024-05-12'
  },{
    name: 'Rodolfo Ahumada',
    job: 'Frontend',
    status: 'Rechazado',
    applicationDate: '2024-05-12'
  }
]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public displayedColumns: string[] = ['name','job','status','applicationDate'];
  public dataSource = ELEMENT_DATA;
}