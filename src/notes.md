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
                - use '' for class names that have '-' in them
        3. 
    - @Component is both decorator and directive!


+ local Reference
        <p *ngIf="boolVar"; else customRefName>
        <ng-template #customRefName> content here </ng-template>
    - this does an else statement - ng-template displays if p not showing!
    - what else can be done other than else statments?
        - test else if...
        - local reference can be used to pass input value




+ *ngFor="let item of items; let i = index"
    - i can now be used in logic or to display the id/number of items



+ @Input('alias')
+ @Output('alias')