import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-postulation',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './form-postulation.component.html',
  styleUrl: './form-postulation.component.scss'
})
export class FormPostulationComponent implements OnInit {
  public firstForm!: FormGroup;
  public secondForm!: FormGroup;
  public thirdForm!: FormGroup;
  public fourthForm!: FormGroup;

  public languageList = [{ name: 'Inglés' }, { name: 'Alemán' }, { name: 'Francés' }, { name: 'Español' }]
  public levelList = [{ value: 'A0.Principiante' }, { value: 'A1-A2.Básico' }, { value: 'A2-B1.Preintermedio' }, { value: 'B1-B2.Intermedio' }, { value: 'B2.Intermedio alto' }, { value: 'C1-C2.Avanzado' }]
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialogRef: MatDialogRef<FormPostulationComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.firstForm = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: ['']
    });
    this.secondForm = this.formBuilder.group({
      company: [''],
      job: [''],
      initDate: [],
      endDate: []
    });
    this.thirdForm = this.formBuilder.group({
      school: [''],
      certificate: [''],
      initDate: [],
      endDate: []
    });
    this.fourthForm = this.formBuilder.group({
      description: [''],
      hability: [''],
      language: [''],
      level: ['']
    });
  }
}
