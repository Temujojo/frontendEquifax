import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ApiService } from '../../services/api.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-job',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule
  ],
  templateUrl: './form-job.component.html',
  styleUrl: './form-job.component.scss'
})
export class FormJobComponent implements OnInit {

  public form!: FormGroup;
  public technologiesList!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialogRef: MatDialogRef<FormJobComponent>,
    public formBuilder: FormBuilder,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getAllTechnologies();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      form:['job',[Validators.required]],
      title: ['', [Validators.required]],
      technologies: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status: [null, [Validators.required]],
    })
  }
  private getAllTechnologies(): void {
    this.apiService.getTechnology()
      .subscribe({
        next: (res) => {
          this.technologiesList = res;
        },
        error: (err) => {
          console.error(err);
        }
      })
  }
}
