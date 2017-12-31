import { FormControl } from '@angular/forms';

export class PriceValidator {

    static isValid(control: FormControl): any {

        if(isNaN(control.value)){
            return {
                "not a number": true
            };
        }

        if (control.value < 0){
            return {
                "negative": true
            };
        }

        return null;
    }

}
