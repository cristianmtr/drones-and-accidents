<!DOCTYPE html>
<html>
<head>
    <title>DRONES AND ACCIDENTS</title>
    <link rel="stylesheet" href="css/main.css"/>
</head>
<body>
<?php
        // construct accident divs
        // we do not assign them random position in php
        // since we do not know the window size
        $accidentId = 0;
        $nrAccidents = 5;

        function generateAccidentDiv($accidentId) {
        $accidentDiv = '<div class="accident" id="accident'.$accidentId.'"></div>';
        echo $accidentDiv;
        }

        while ($accidentId < $nrAccidents) {
        generateAccidentDiv($accidentId);
        $accidentId++;
        }

        ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript" src="js/index.js"></script>
</body>
</html>
