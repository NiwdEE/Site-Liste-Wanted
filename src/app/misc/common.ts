import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

/**
 * Data type designed to be an API response
*/
export type TypedRes<T> = {
    Code: number,
    Message: string,
    Response: T
}

/**
 * Calculates an array that represents a discrete interval
 * @param v1 Last value of array if v2 is not given, first value otherwise
 * @param v2 Last value of the array
 * @param step Step
 * @return
 * (a) => [0, 1, ..., a] ;
 * 
 * (a, b) => [a, a+1, ..., b] ;
 * 
 * (a, b, s) => [a, a+s, ..., min(a + floor((b-a)/s))*s, b) ]
 */
export function arr_range(v1: number, v2: number|undefined = undefined, step: number = 1): number[]{
    let end = (v2 == undefined ? v1 : v2)
    let start = (v2 == undefined ? 0 : v1)
    let arr = new Array();
    let i = start;
    while(i <= end){
        arr.push(i);
        i+=step;
    }
    return arr;
}

export function abs(value: number): number{
    return value>0?value:-value
}

/**
 * Returns an integer randomly chosen between 0 and max-1
 * 
 * To get an x inside [a, b] just do x = a + randomInt( b-a+1 )
 * 
 * @param max Maximum value of the number
 */
export function randomInt(max: number): number{
    return Math.floor(Math.random() * max);
}

/**
 * Applies a procedure to an object and return it
 * 
 * /!\ if the procedure modifies the object, both return and argument will be modifies
 * @param object The object to modify
 * @param application The modification to be made
 * 
 * @example
 * let x = apply<number>(-2, x => x = -x)
 * //here x === 2
 * @example
 * let x = [1, 2, 6];
 * let y = apply(x, x=>x.push(0))
 * //here x === y === [1, 2, 6, 0]
 */
export function apply<T>(object: T, application: (x: T) => void): T{
    application(object);
    return object;
}

@Directive({
    selector: '[Var]',
})
export class VarDirective {
    @Input()
    set Var(context: unknown) {
        this.context.$implicit = this.context.Var = context;

        if (!this.hasView) {
            this.vcRef.createEmbeddedView(this.templateRef, this.context);
            this.hasView = true;
        }
    }

    private context: {
        $implicit: unknown;
        Var: unknown;
    } = {
        $implicit: null,
        Var: null,
    };

    private hasView: boolean = false;

    constructor(
        private templateRef: TemplateRef<any>,
        private vcRef: ViewContainerRef
    ) {}
}




// export function Element_cast(Collection: any){
//     return Array.from(Collection as HTMLCollectionOf<HTMLElement>);
// }