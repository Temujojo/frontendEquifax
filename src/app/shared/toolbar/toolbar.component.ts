import { Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormService } from '../../services/subscribe.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  constructor(
    private formService: FormService
  ) { }

  public openDialog(form: string): void {
    this.formService.setFormObs(form);
  }
}
