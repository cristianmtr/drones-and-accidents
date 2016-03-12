class Drone {
    public static droneWidth:number = 30;

    private onClickHandler(e: JQueryEventObject) {
        console.log("clicked on ", this.droneId);
        // remove spin from all other drones
        // begin spin animation of drone
        // mark accidents as being possible choices
        $(".spin-drone").removeClass('spin-drone');
        $("#drone"+this.droneId).addClass('spin-drone');
        $(".accident").addClass('blink-accident');
    }

    private droneId: number;

    constructor (droneId: number) {
        console.log("new drone");
        this.droneId = droneId;
        // generate div
        var droneIdString:string = 'drone'+droneId;
        console.log("id ",droneIdString);
        // random pos for drone as well
        var maxLeft = $("#mapContainer").width(); // no going into the menu side
        var maxTop = $("#mapContainer").height();
        var randTop: number = Utils.randomIntInRange(0,maxTop);
        var randLeft: number = Utils.randomIntInRange(0,maxLeft);
        var droneDiv = '<div id="'+droneIdString+'" class="drone" style="top:'+randTop+'px;left: '+randLeft+'px"></div>';
        $("#mapContainer").append(droneDiv);
        // on click
        $(document).on("click", "#"+droneIdString, (e => this.onClickHandler(e)));
    };
}

class DroneContainer {
    private static uniqueInstance : DroneContainer;

    public static getInstance() : DroneContainer {

        if(this.uniqueInstance == null) {
            this.uniqueInstance = new DroneContainer();
        }
        return this.uniqueInstance;
    }

    private nextIdForDrones: number = 0;

    private theDrones: Drone[];

    public getNrDrones():number {
        return this.theDrones.length;
    }

    private generateDrone() {
        var newDrone: Drone = new Drone(this.nextIdForDrones);
        this.nextIdForDrones++;
        this.theDrones.push(newDrone);
    }

    public generateDrones() {
        var count: number = parseInt($("#txtNrDrones").val());
        var totalNew:number = 0;
        while (totalNew<count) {
            this.generateDrone();
            totalNew++;
        }
    }

    constructor(){
        console.log("init dronesContainer");
        this.theDrones = [];
    }

}