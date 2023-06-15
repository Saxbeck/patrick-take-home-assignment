import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { QuestionsComponent } from './components/questions/questions.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
	standalone: true,
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatCardModule, MatButtonModule,QuestionsComponent, DynamicFormComponent, ReactiveFormsModule],
})
export class AppComponent {
	title = 'Patrick Take Home Assignment';
}
