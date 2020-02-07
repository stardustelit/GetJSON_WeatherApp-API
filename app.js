$(document).ready(function(){

    $('#submitWeather').click(function(){

        var city = $("#city").val();

            $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=cf680aba2e5c0c6d870ef2955be6130a", function(data){
                console.log(data);
                var z = show(data)
                $("#show").html(z);
            });
              

    });
});

function show(data){
    return "<h2>Temperatur: " + data.main.temp + " °C</h2>" +
    "<h2>Vind: " + data.wind.speed + " m/s</h2>";
}
