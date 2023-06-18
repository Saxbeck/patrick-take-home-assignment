import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
	standalone: true,
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [DynamicFormComponent, ReactiveFormsModule],
})
export class AppComponent {
	title = 'Patrick Take Home Assignment';
}
