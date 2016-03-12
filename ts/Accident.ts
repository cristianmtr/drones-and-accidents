class Accident {
    private topPosition: number;
    private leftPosition: number;
    private accidentId: number;

    private randomPosToAccident() {
        var maxLeft = $("#mapContainer").width(); // no going into the menu side
        var maxTop = $("#mapContainer").height();
        var randTop: number = Utils.randomIntInRange(0,maxTop);
        var randLeft: number = Utils.randomIntInRange(0,maxLeft);
        $("#accident"+this.accidentId).css({top: randTop, left: randLeft});
    }

    constructor (id: number) {
        this.accidentId = id;
        // assign random positions on the window
        this.randomPosToAccident()
    }
}

class AccidentsContainer {
    private accidents: Accident[];

    constructor(){
        console.log("new AccidentsContainer");
        // get accidents from body
        // and construct accident objects out of them
        var accidentsDivs = $(".accident");
        for (var i=0; i<accidentsDivs.length; i++) {
            var newAccident: Accident = new Accident(i); // i is also the id
        }
    }
}
