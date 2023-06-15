import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SurveyComponent } from './components/survey/survey.component';

@Component({
	standalone: true,
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatCardModule, MatButtonModule, SurveyComponent],
})
export class AppComponent {
	title = 'Patrick Take Home Assignment';
}
