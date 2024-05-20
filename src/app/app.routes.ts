import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { JobListComponent } from './job-list/job-list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    }, {
        path: 'candidatos',
        redirectTo: 'candidatos/.'
    }, {
        path: 'candidatos/.',
        component: CandidateProfileComponent,
        pathMatch: 'full'
    }, {
        path: 'postulaciones',
        redirectTo: 'postulaciones/.'
    }, {
        path: 'postulaciones/.',
        component: JobListComponent,
        pathMatch: 'full'
    }, {
        path: '**',
        redirectTo: '404/.'
    }, {
        path: '404/.',
        component: ErrorComponent,
        pathMatch: 'full'
    }
];
