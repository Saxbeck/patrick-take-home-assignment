import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';


// bootstrapApplication(AppComponent).catch(err => console.error(err));
bootstrapApplication(AppComponent, {providers: provideAnimations()}).catch(err => console.error(err));
