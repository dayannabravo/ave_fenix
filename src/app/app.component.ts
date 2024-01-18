import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UpperPartComponent } from './components/upper-part/upper-part.component';
import { HeadComponent } from './components/head/head.component';
import { BodyComponent } from './components/body/body.component';
import { PawsComponent } from './components/paws/paws.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UpperPartComponent, HeadComponent, BodyComponent, PawsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ave_fenix';
}
