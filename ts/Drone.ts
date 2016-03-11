/**
 * Created by cristian on 3/11/16.
 */
class Drone {
    private droneDiv: string;

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
        this.droneDiv = '<div id="'+droneIdString+'" class="drone"></div>';
        $("body").append(this.droneDiv);
        // on click
        $(document).on("click", "#"+droneIdString, (e => this.onClickHandler(e)));
    };
}

class DroneContainer {
    private nextIdForDrones: number = 0;

    private theDrones: Drone[];

    public onClickHandler(droneDivId: number) {

    }

    constructor(){
        console.log("new dronesContainer");
        var newDrone: Drone = new Drone(this.nextIdForDrones);
        this.nextIdForDrones++;
    }

}