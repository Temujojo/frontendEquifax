import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FormService } from './services/subscribe.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormJobComponent } from './forms/form-job/form-job.component';
import { FormPostulationComponent } from './forms/form-postulation/form-postulation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private formService: FormService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.formService.getFormObs().subscribe({
      next: (form) => {
        this.openDialog(form);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  private openDialog(form: string): void {
    let dialogRef;
    switch (form) {
      case 'job': {
        dialogRef = this.dialog.open(FormJobComponent, {
          maxWidth: '350px',
          minWidth: '',
          maxHeight:'500px',
          minHeight:'',
          hasBackdrop: true,
          autoFocus: false,
          disableClose: true,
          enterAnimationDuration: 600,
        });

        break;
      }
      case 'postulation': {
        dialogRef = this.dialog.open(FormPostulationComponent, {
          maxWidth: '600px',
          minWidth: '',
          hasBackdrop: true,
          autoFocus: false,
          disableClose: true,
          enterAnimationDuration: 600,
        });
      }
    }
    if (dialogRef) {
      dialogRef.afterClosed().subscribe({
        next: (res) => {
          console.log(res);
        }
      })
    }
  }
}
