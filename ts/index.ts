// singleton instances of the world objects
var droneContainer = DroneContainer.getInstance();
var accidentsContainer = AccidentsContainer.getInstance(); // initializes accidents
var menuContainer = MenuContainer.getInstance();

console.log("START!");
$(document).on("click", "#btnCreateDrones", function() {
    menuContainer.onCreateDronesClick(droneContainer);
});


