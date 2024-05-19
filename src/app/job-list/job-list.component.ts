import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface IJob {
  name: string;
  job: string;
  status: string;
  applicationDate: string;
}

const ELEMENT_DATA: IJob[] = [
  {
    name: 'Desarrollador y Administrador de Base datos',
    job: 'Angular, python, Postgre',
    status: 'Abierto',
    applicationDate: '2024-05-12'
  }, {
    name: 'Desarrollador Fullstack',
    job: 'Angular, .Net Corem, SQLserver',
    status: 'Abierto',
    applicationDate: '2024-05-12'
  }, {
    name: 'Desarrollador Fullstack',
    job: '.Net, Vue.js',
    status: 'Cerrado',
    applicationDate: '2024-05-12'
  }, {
    name: 'Desarrollador Frontend',
    job: 'Angular 6+',
    status: 'Cerrado',
    applicationDate: '2024-05-12'
  }
]

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [MatTableModule, DatePipe],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {
  public displayedColumns: string[] = ['name', 'job', 'status', 'applicationDate'];
  public dataSource = ELEMENT_DATA
}
