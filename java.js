<html>
<head>
    <script
            src="https://code.jquery.com/jquery-3.1.1.min.js"
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
            crossorigin="anonymous"></script>
    <style>
	#div {background-color: blue}
    </style>
</head>

<body>
<div id="div"></div>
<script>
    function waitThreeSeconds(){
        var ms = 3000 + new Date().getTime();
        while (new Date() < ms){}
        console.log('finished function');
    }

    function clickHandler(){
       console.log('click event!');
    }

    document.addEventListener('click', clickHandler);

    waitThreeSeconds();
    console.log('finished execution');
</script>
</body>

</html> 