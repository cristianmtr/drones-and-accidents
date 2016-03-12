class MenuContainer {
    constructor() {

    }

    public onCreateDronesClick(droneContainer:DroneContainer):void {
        droneContainer.generateDrones();
        $("#txtNrDronesContainer").remove();
    }

}
