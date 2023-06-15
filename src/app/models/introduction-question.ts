import { QuestionBase } from "./question-base.model";

export class IntroductionQuestion extends QuestionBase<string> {
    override type = 'introduction';
}
