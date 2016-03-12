class MenuContainer {
    constructor() {
        console.log('init MenuContainer');
        this.updateNrAccidents(0);
        this.updateNrDrones(0);
    }

    private static uniqueInstance:MenuContainer;

    public static getInstance():MenuContainer {

        if (this.uniqueInstance == null) {
            this.uniqueInstance = new MenuContainer();
        }
        return this.uniqueInstance;
    }

    public updateNrAccidents(nrAccidents:number) {
        var lastNr = parseInt($("#lblTotalAccidents").text());
        var newNr = lastNr + nrAccidents;
        $("#lblTotalAccidents").text(newNr);
    }

    public onCreateDronesClick(droneContainer:DroneContainer):void {
        droneContainer.generateDrones();
        $("#txtNrDronesContainer").remove();
        this.updateNrDrones(droneContainer.getNrDrones());
    }

    private updateNrDrones(nrDrones:number):void {
        var lastNr = parseInt($("#lblTotalDrones").text());
        var newNr = lastNr + nrDrones;
        $("#lblTotalDrones").text(newNr);

        if (newNr === 0){
            $("#lblIndividualDroneStats").text("N/A");
        }
        else {
            $("#lblIndividualDroneStats").text("DRONE 1 : X");
        }
    }
}