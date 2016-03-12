class WorldContainer {

    // entry point for main
    public static main() {
        console.log("START!");
        // instances of the world objects
        var droneContainer = new DroneContainer();
        var accidentsContainer = new AccidentsContainer(); // initializes accidents
        var menuContainer = new MenuContainer();
        $(document).on("click", "#btnCreateDrones", function() {menuContainer.onCreateDronesClick(droneContainer);})

    };

}

WorldContainer.main();

