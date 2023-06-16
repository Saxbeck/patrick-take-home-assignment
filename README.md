# Patrick Take Home Assignment

## Toughts

**Wednesday** 
The included .json file contains an array, with question objects. 
They have shared parameter such as 'name, type, label' with some having differences such as 'options, instructions, 'minvalue, maxvalue', this leads to 3 distinct question types.

These could be done as classes, but that would require you to rewrite the survey structure each time.
Could it be done directly from the json, using type to differentiate ?
For now lets stick it in a .ts file, so we can return it as mock data from a service.


```` json
{
	"name": "mobility",
	"type": "choice",
	"label": "MOBILITY",
	"instructions": "Please select the ONE box that best describes your health TODAY.",
	"options": [
			{
				"value": 1,
				"display": "I have no problems in walking about"
			}
	]
}
````

Factory Pattern maybe ? 
- https://blogs.halodoc.io/commonly-used-design-patterns-in-angular/
- https://iwconnect.com/creating-components-dynamically-with-component-factory-in-angular/

Seems like the right pattern
- https://dev.to/coly010/the-factory-pattern-design-patterns-meet-the-frontend-1p2l

Ok let's try and make a simpel factory, with 2 types, and a text.
Just to try it out before committing too much time, if it fails I can always fallback to the dynamic form tutorial, and instantiate all the questions manually. But there's not much reusability in that.

Alright enough about factories, I over complicated things again the Dynamic Forms docs is totally usable and enough for this.

Let's try and combine both:
- Make a question base, that defines all the possible answer types
- Define the control classes for the questions
- Create the dynamic form component
- Create a service with hardcoded question types
- Display form, and ensure valid data
- Make basic form validation
- Refactor question service to generate questions from a factory class

**Thursday**
I'm an idiot, Material Stepper takes form groups as input, the json is structured as object so you can generate a new formgroup for each. Making a factory + dynamic form is way too overkill.
Previous work added to its own branch, to be pruned.

huh, had to add animation providers in boostrapApplication, hope this is in scope or else I did something wrong..

Ok, seems like we are getting somewhere, the stepper generates steps from questionservice using mockdata, but only 2 types for now. It also saves some values now, but im having problems clearing them because of incorrect stepcontrol/formArray use.

The stepper takes all the mock data now, after manually updating the formbuilder with all the question names. Still trouble with stepcontrol, if I get it working i should find a way to cut down on the component boilerplate.

## Task

The task is to re-implement the EQ-5D-5L questionnaire demo app found [here](https://eq-5d-tablet-pda-demo.euroqol.org/app/app.cfm?app=5&id=1D8B24E9-09E4-8CE4-7F7D2A6608C625EE) using the latest versions of Angular and Angular Material.

We have provided the JSON file `src/assets/eq5d.json` to assist you, but it is not mandatory to use it.

### Key requirements

- [x]   Each page should have one question, similar to the EQ-5D-5L demo app.
- [x]   Replicate the basic layout of the demo app's pages.
- [x]   Include Previous and Next buttons to navigate between questions.
- [x]   The user must answer the current question before proceeding to the next question.
- [x]   When navigating back to a previous question, the previously selected answer should be retained.
- [x]   Like the ED-5Q-5L demo app, include a "Back to start" button on the final page that resets the demo and clears any entered data.
- [x]   Use standalone components
- [ ]   Use OnPush change detection
- [ ]   Push your code to a public repository (GitHub or GitLab) and share it with us.

### Helpful notes

-   Use Angular Material components and avoid using 3rd party components outside of Angular Material. For multiple choice questions, use radio groups and radio buttons. For the final question, use a slider. The slider can be horizontal instead of vertical, as Angular Material does not support vertical sliders. Do not spend excessive time replicating the slider.
-   The focus should be on replicating the rough layout rather than precisely matching the appearance of the ED-5D-5L demo app. Utilize Angular Material components with default styling whenever possible.
-   You can optionally use Tailwind for utility classes, but it is not expected.
-   Use Angular's built-in toolbox, including services and template-driven or reactive forms from @angular/forms.
-   Consider reusability of components, as there may be a future requirement to implement a second questionnaire in the app.
-   Not required or expected:
    -   The initial page “Demo disclaimer”
    -   The copyright notice in the footer of the app.
    -   Any form of login.
    -   Usage of NGRX or other third-party state management libraries.
    -   Saving data to an API or local storage. It is acceptable for the application to lose all state on page reload.
    -   Use of icons and or images.
    -   Loading the JSON from a JSON file (you can copy it into a TypeScript file instead).
    -   In-depth understanding of the E5QD questionnaire or spending time learning about it.
    -   Writing tests.
    -   Usage of Signals (still in preview and not planned for near-future use).
-   We understand that you may have time constraints due to your current job, etc. The most important aspect for us is not the completion of every aspect of the task, but having a foundation for a follow-up discussion about your code and decisions.
-   Communication is essential in our team. If anything is unclear or if you have any questions, please let us know. We consider it a strength, not a weakness, for you to reach out. Please keep in mind that we may not be able to reply immediately.

## Deadline

Monday the 19th at 8 AM.

Email us with a link to your repository when you have finished your work.

## About the repository

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

It uses standalone components

Angular Material and Tailwind have been setup for you. Note that there might be minor styling conflicts between the two in more complex use cases. If you encounter such issues, just ignore them.

Prettier and the `.editorconfig` is setup to mirror what we use in Consensus, so you have to spend energy on code formatting. You can run `npx prettier --write .` to format your code or use e.g., the Prettier VS Code extension.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
