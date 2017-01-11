// declare that you are pushing the title from js into the html file
var TitleOfPage = "rotalulaC thgieW ortsA"
document.getElementById("TitleOfPage").innerHTML = reverse(TitleOfPage);

function reverse(TitleOfPage) {

    var o = '';
    for (var i = TitleOfPage.length - 1; i >= 0; i--) {
        o += TitleOfPage[i];
    }
    return o;

}


var planets = [
    { planet: 'Sun', gravity: 27.9 },
    { planet: 'Mercury', gravity: 0.377 },
    { planet: 'Venus', gravity: 0.9032 },
    { planet: 'Earth', gravity: 1 },
    { planet: 'Moon', gravity: 0.1655 },
    { planet: 'Mars', gravity: 0.3895 },
    { planet: 'Jupiter', gravity: 2.640 },
    { planet: 'Saturn', gravity: 1.139 },
    { planet: 'Uranus', gravity: 0.917 },
    { planet: 'Neptune', gravity: 1.148 },
    { planet: 'Pluto', gravity: 0.06 }
];


// call the planetSelect dropdown bar from the html file
var planetSelect = document.getElementById("planetSelect");

// run through the array and push the planet names to the html
// run through the array and pull the value of 'gravity'
for (var i = 0; i < planets.length; i++) {

    var opt = document.createElement('option');
    opt.innerHTML = planets[i].planet;
    opt.value = planets[i].gravity;
    console.log(opt);
    planetSelect.appendChild(opt);

}



function calcuLate() {

    // call the textbox from the html
    var enterWeight = document.getElementById("enterWeight").value;

    // reference the planet that is selected to its gravity
    var psGravity = planetSelect.options[planetSelect.selectedIndex].value;


    // multiply the referenced planet gravity with the text from the textbox and push it to the html file
    var outPut = psGravity * enterWeight;
    document.getElementById("outPut").innerHTML = (outPut).toFixed(2);

}
// animation

$(window).load(function() {

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");

    var init = function() {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
            $(this).removeClass('hide-UI').addClass("set-speed");
            $(this).dequeue();
        });
    };

    var setView = function(view) { universe.removeClass().addClass(view); };

    $("#toggle-data").click(function(e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });

    $("#toggle-controls").click(function(e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
    });

    $("#data a").click(function(e) {
        var ref = $(this).attr("class");
        solarsys.removeClass().addClass(ref);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
    $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
    $(".set-size").click(function() { setView("scale-s set-size"); });
    $(".set-distance").click(function() { setView("scale-d set-distance"); });

    init();

});
