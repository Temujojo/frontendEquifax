import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { map } from 'rxjs';
interface IJob {
  title: string;
  technologies: string;
  status: boolean;
  published: string;
}
@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [MatTableModule, DatePipe],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit {
  public displayedColumns: string[] = ['title', 'technologies', 'status', 'published'];
  public dataSource!: any;
  public isLoading = false;
  public technologiesList!: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getAllTechnologies();
  }

  public getAllTechnologies(): void {
    this.isLoading = true;
    this.apiService.getTechnology()
      .subscribe({
        next: (res) => {
          this.technologiesList = res;
          this.getAllJobs();
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          this.isLoading = false;
        }
      })
  }

  public getAllJobs(): void {
    this.isLoading = true;
    this.apiService.getJob().pipe(
      map(x => {
        let y: Array<IJob> = [];
        x.forEach((element: any) => {
          const fields = element.fields;
          const filtered = this.technologiesList.flatMap((x: any) => {
            if (x.id === element.fields.technologies) {
              return x.name
            }
          }).reduce((a: any, b: any) => {
            return a ? a : b;
          });
          let itemAux = {
            published: fields.published,
            status: fields.status,
            technologies: filtered,
            title: fields.title
          }
          y.push(itemAux);
        });
        return y;
      })
    ).subscribe({
      next: (res) => {
        this.dataSource = res;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.isLoading = false;
      }
    })

  }
}
