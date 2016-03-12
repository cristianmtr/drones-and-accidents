class Accident {
    public static accidentWidth: number = 70;

    private topPosition: number;
    private leftPosition: number;
    private accidentId: number;

    private randomPosToAccident() {
        var maxLeft = $("#mapContainer").width() - Accident.accidentWidth; // no going into the menu side
        var maxTop = $("#mapContainer").height() - Accident.accidentWidth; // or below container
        var randTop: number = Utils.randomIntInRange(0,maxTop);
        var randLeft: number = Utils.randomIntInRange(0,maxLeft);

        // this is the middle
        this.topPosition = randTop + Accident.accidentWidth / 2;
        this.leftPosition = randLeft + Accident.accidentWidth / 2;
        $("#accident"+this.accidentId).css({top: randTop, left: randLeft});
    }

    constructor (id: number) {
        this.accidentId = id;
        // assign random positions on the window
        this.randomPosToAccident();
        MenuContainer.getInstance().updateNrAccidents(1);
        $(document).on('click','#accident'+id, (e => this.onClickHandler(e)));
    }

    private onClickHandler(e:JQueryEventObject):void {
        // is there a spinning drone
        // move it here
        var droneIdString: string = $('.spin-drone').attr('id');

        var droneId = Utils.gerNrFromString(droneIdString);

        var spinDrone: JQuery = $("#drone"+droneId);
        if (spinDrone.length > 1) {
            console.log("ERROR :there was more than 1 spinning drone ");
            return;
        }
        spinDrone.animate({top: this.topPosition - Drone.droneWidth / 2, left: this.leftPosition - Drone.droneWidth / 2}, 1000, function () {
            // stop the spinning
            // increase the counter
            MenuContainer.getInstance().incrementDroneAccidents(droneId);
            $('#drone'+droneId).removeClass('spin-drone');

        });
    }
}

class AccidentsContainer{
    private static uniqueInstance : AccidentsContainer;

    public static getInstance() : AccidentsContainer {

        if(this.uniqueInstance == null) {
            this.uniqueInstance = new AccidentsContainer();
        }
        return this.uniqueInstance;
    }

    private accidents: Accident[];

    public getNrAccidents():number {
        return this.accidents.length;
    }

    constructor(){
        console.log("init AccidentsContainer");
        // get accidents from body
        // and construct accident objects out of them
        var accidentsDivs = $(".accident");
        for (var i=0; i<accidentsDivs.length; i++) {
            var newAccident: Accident = new Accident(i); // i is also the id
        }
    }
}
