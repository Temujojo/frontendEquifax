import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-candidate-profile',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatListModule],
  templateUrl: './candidate-profile.component.html',
  styleUrl: './candidate-profile.component.scss'
})
export class CandidateProfileComponent {

  public name = 'Juanito Pérez Pérez';
  public aboutMe = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore recusandae illo officia nostrum sapiente rem doloremque, sequi ratione eligendi praesentium suscipit ipsam dignissimos doloribus nihil culpa dicta consequatur obcaecati cumque!';

  public email = 'example_email@example.com';
  public phone = '+56 9 1234 5678';
  public dni = '12312312-3';
  public disonibility = 'Inmediata';

  public technologicList = [
    {
      name: 'Angular 6 +',
      level: 'Intermedio-superior'
    },
    {
      name: 'Typescript',
      level: 'Intermedio-superior'
    },
    {
      name: 'Python',
      level: 'Básico'
    },
  ];
  public educationList = [
    {
      name: 'Instituo técnico',
      title: 'El mejor Certificado del mundo mundial',
      date: '2017 - 2021'
    }, {
      name: 'politécnico',
      title: 'Análista químico',
      date: '2012 - 2016'
    },
    {
      name: 'colegio público',
      title: '',
      date: '2006 - 2012'
    }
  ];

  public languageList = [{
    name: 'Inglés',
    level: 'A1-A2 Básico'
  }];

  public workExperienceList = [
    {
      year: '2021 - Actualidad',
      job: 'Angular Frontend Developer',
      company: 'Mi casita'
    },
    {
      year: '2019 - 2021',
      job: 'Angular Frontend',
      company: 'Su casita'
    },
    {
      year: '2015 - 2018',
      job: 'Angular Frontend',
      company: 'La casita'
    },
    {
      year: '2012 - 2015',
      job: 'Angular Frontend',
      company: 'Esta casita'
    }
  ];

}
