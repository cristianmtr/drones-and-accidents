class Drone {
    private onClickHandler(e: JQueryEventObject) {
        console.log("clicked on ", this.droneId);
        // open menu
    }

    private droneId: number;

    constructor (droneId: number) {
        console.log("new drone");
        this.droneId = droneId;
        // generate div
        var droneIdString:string = 'drone'+droneId;
        console.log("id ",droneIdString);
        var droneDiv = '<div id="'+droneIdString+'" class="drone"></div>';
        $("body").append(droneDiv);
        // on click
        $(document).on("click", "#"+droneIdString, (e => this.onClickHandler(e)));
    };
}

class DroneContainer {
    private nextIdForDrones: number = 0;

    private theDrones: Drone[];

    constructor(){
        console.log("new dronesContainer");
        var newDrone: Drone = new Drone(this.nextIdForDrones);
        this.nextIdForDrones++;
    }

}