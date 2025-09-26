import { Component, signal } from '@angular/core';

import { MainLayoutComponent} from './shared/infrastructure/ui/layouts/main-layout/main.component';

@Component({
  selector: 'app-root',
  imports: [ MainLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LandingPageSoftFocus');
}
