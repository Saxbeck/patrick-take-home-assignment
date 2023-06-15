import { QuestionBase } from "./question-base.model";

export class RadioQuestion extends QuestionBase<string> {
    override type = 'choice'
}
