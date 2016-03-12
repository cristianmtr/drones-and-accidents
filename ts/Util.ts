class Utils {
    public static randomIntInRange(min: number, max:number): number {
        if (max < min ) {
            throw "Max is smaller than min"
        }
        return Math.floor(Math.random()* (max - min + 1)) + min;
    }
}