# Angular Notes

+ directives versus decorators
    - decorators are metadata, start with @ symbol
    - directives manipulate DOM
        1. structural elements: add or remove element
            - *ngIf, *ngFor, *ngSwitch...
        2. attribute elements: change element they are placed on (not add/remove)
            - ngStyle  [ngStyle]="{stylePropertyGoesHere: "style" orFunctionName()};"
            - ngClass   [ngClass]="{key: valueOrFunctionOrExpression}
                - key value pairs; key is css class name, value is an expression that returns the value that the class needs (boolean, number, etc)
        3. 
    - @Component is both decorator and directive!


+ local Reference
    - <p *ngIf="boolVar"; else customRefName>
    - <ng-tempate #customRefName> content here </ng-template>
    - this does an else statement!
    - what else can be done other than else statments?
        - test else if...