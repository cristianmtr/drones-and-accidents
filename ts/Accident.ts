class Accident {
    private topPosition: number;
    private leftPosition: number;
}

class AccidentsContainer {
    private accidents: Accident[];

    constructor(){
        console.log("new AccidentsContainer");
    }
}
