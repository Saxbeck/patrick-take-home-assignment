export class QuestionBase<T> {
    value: T|undefined;
    //name is acting as key
    name: string;
    type: string;
    label: string;
    description: string;
    instructions: string;
    //display is acting as option key
    options: {value: number, display:string}[];
    isLabelHtml: boolean;
    minValue: number;
    maxValue: number;
    stepSize: number;
    minText: string;
    maxText: string;


    constructor(options: {
        value?: T;
        name?: string;
        type?: string;
        label?: string;
        description?: string;
        instructions?: string;
        options?: {value:number, display:string}[];
        isLabelHtml?:boolean;
        minValue?: number;
        maxValue?: number;
        stepSize?: number;
        minText?: string;
        maxText?: string;
    } = {}){
        this.value = options.value;
        this.name = options.name || '';
        this.type = options.type || '';
        this.label = options.label || '';
        this.description = options.description || '';
        this.instructions = options.instructions || '';
        this.options = options.options || [];
        this.isLabelHtml = !!options.isLabelHtml;
        // check what the operators mean
        this.minValue = options.minValue === undefined ? 0 : options.minValue;
        this.maxValue = options.minValue === undefined ? 100 : options.minValue;
        this.stepSize = options.stepSize === undefined ? 1: options.stepSize;
        this.minText = options.minText || '';
        this.maxText = options.maxText || '';
    }
}