class MenuContainer {
    constructor() {
        console.log('init MenuContainer');
        $(document).on("click", "#btnCreateDrones", function() {
            menuContainer.onCreateDronesClick(droneContainer);
        });
        this.updateNrAccidents(0);

    }

    private selectedDrone: number = null;

    private static uniqueInstance:MenuContainer;

    public static getInstance():MenuContainer {

        if (this.uniqueInstance == null) {
            this.uniqueInstance = new MenuContainer();
        }
        return this.uniqueInstance;
    }

    public deselectDrone():void{
        if (this.selectedDrone === null) {
            console.log("No drone selected");
        }
        $("#drone"+this.selectedDrone+"StatsContainer").css({border: ''});
    }

    public selectDroneInMenu(droneId:number): void{
        this.selectedDrone = droneId;
        $("#drone"+droneId+"StatsContainer").css({border: 'red 0.1em solid'});
    }

    public updateNrAccidents(nrAccidents:number) {
        var lastNr = parseInt($("#lblTotalAccidents").text());
        var newNr = lastNr + nrAccidents;
        $("#lblTotalAccidents").text(newNr);
    }

    public incrementsAccidentsForDrone(droneId: number): void {
        var oldNr = parseInt($("#lblDrone"+droneId+"Accidents").text());
        oldNr++;
        $("#lblDrone"+droneId+"Accidents").text(oldNr);
    }

    public onCreateDronesClick(droneContainer:DroneContainer):void {
        droneContainer.generateDrones();
        $("#txtNrDronesContainer").remove();
    }

    public deleteDroneFromList(droneId: number): void {
        var theNrOfDrones = parseInt($("#lblTotalDrones").text());
        theNrOfDrones--;
        $("#lblTotalDrones").text(theNrOfDrones);

        // rem individual stats section
        $("#drone"+droneId+"StatsContainer").remove();
    }

    public addDrone(droneId: number):void {
        var theNrOfDrones = parseInt($("#lblTotalDrones").text());
        theNrOfDrones++;
        $("#lblTotalDrones").text(theNrOfDrones);

        // add individual stats section
        var statsContainer = $("#lblIndividualDroneStats");
        var btnIdString: string = 'btnDeleteDrone' + droneId;
        var theDiv = '<div id="drone'+droneId+'StatsContainer">#'+droneId+': <span id="lblDrone'+droneId+'Accidents">0</span> <i class="fa fa-trash" id="'+btnIdString+'"></i></div>';
        statsContainer.append(theDiv);

        // register delete button listener
        $(document).on('click', '#'+btnIdString, (e=>DroneContainer.getInstance().deleteDrone(droneId)) );

    }
}