import { QuestionBase } from "./question-base.model";

export class SliderQuestion extends QuestionBase<string> {
    override type = 'slider';
}
