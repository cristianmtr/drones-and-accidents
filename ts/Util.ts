class Utils {
    public static randomIntInRange(min:number, max:number):number {
        if (max < min) {
            throw "Max is smaller than min"
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static gerNrFromString(text:string):number {
        // returns the first group of digits found in the string
        // as a number
        var theNr:number = null;
        var foundBegin:boolean = false;
        for (var i = 0; i < text.length; i++) {
            if (!isNaN(Number(text[i]))) {
                if (foundBegin === false) {
                    foundBegin = true;
                    theNr = parseInt(text[i]);
                }
                else if (foundBegin === true) {
                    theNr = theNr * 10 + parseInt(text[i]);
                }
            }
            else if (foundBegin === true) {
                break;
            }
        }
        return theNr;
    }
}