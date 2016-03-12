class Accident {
    private topPosition: number;
    private leftPosition: number;
    private accidentId: number;

    private randomPosToAccident() {
        var maxLeft = $("#mapContainer").width() - 70; // no going into the menu side
        var maxTop = $("#mapContainer").height() - 70; // or below container
        var randTop: number = Utils.randomIntInRange(0,maxTop);
        var randLeft: number = Utils.randomIntInRange(0,maxLeft);
        $("#accident"+this.accidentId).css({top: randTop, left: randLeft});
    }

    constructor (id: number) {
        this.accidentId = id;
        // assign random positions on the window
        this.randomPosToAccident();
        MenuContainer.getInstance().updateNrAccidents(1);
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
