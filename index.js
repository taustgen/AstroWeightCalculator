$(document).ready(function() {

    var planets = [
        ['Pluto', 0.06],
        ['Neptune', 1.148],
        ['Uranus', 0.917],
        ['Saturn', 1.139],
        ['Jupiter', 2.640],
        ['Mars', 0.3895],
        ['Moon', 0.1655],
        ['Earth', 1],
        ['Venus', 0.9032],
        ['Mercury', 0.377],
        ['Sun', 27.9]
    ];

    ;
    for (var i = 0; i < planets.length; i++) {
        $("select").append("<option value=" + planets[planets.length - 1 - i][1] + ">" + planets[planets.length - 1 - i][0] + "</option>");

        //$('<option/>').val(planets[i][1]).html(planets[i][0]).appendTo('#pList');

    }


    $("#calculate").click(function() {
        $("#result").html("You are on " + $("select option:selected").html() + ", you weigh " + Math.round($("#weight").val() * $("select option:selected").val() * 100) / 100 + " lbs.");
        console.log($("planet").val());
    })
    $('#pluto').change(function() {
        if ($('#pluto').is(':checked')) $('#planet').children("option:last").remove();
        else $("select").append("<option value=" + planets[0][1] + ">" + planets[0][0] + "</option>");
    });


});
