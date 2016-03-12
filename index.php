<!DOCTYPE html>
<html>
<head>
    <title>DRONES AND ACCIDENTS</title>
    <link rel="stylesheet" href="css/main.css"/>
</head>
<body>
<div id="menuContainer">
    <div id="txtNrDronesContainer">
        <div>ADD DRONES</div>
        <input type="text" id="txtNrDrones" placeholder="drones to create"/>
        <button id="btnCreateDrones">CLICK</button>
        <hr/>
    </div>

    <h3>STATS</h3>

    <hr/>

    <h4>DRONES</h4>


    <div>TOTAL: <span id="lblTotalDrones">0</span></div>

    <hr/>

    <div>Accidents per:</div>

    <div id="lblIndividualDroneStats"></div>

    <hr/>
    <h4>ACCIDENTS</h4>

    <div>TOTAL: <span id="lblTotalAccidents">0</span></div>

    <hr/>

</div>
<div id="mapContainer">
    <!--// TODO random between 4 and 8-->
    <?php
            // construct accident divs
            // we do not assign them random position in php
            // since we do not know the window size
            $accidentId = 0;
            $nrAccidents = 5 ;

            function generateAccidentDiv($accidentId) {
            $accidentDiv = '<div class="accident" id="accident'.$accidentId.'"></div>';
            echo $accidentDiv;
            }

            while ($accidentId < $nrAccidents) {
            generateAccidentDiv($accidentId);
            $accidentId++;
            }

            ?>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript" src="js/index.js"></script>
</body>
</html>
