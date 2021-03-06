window.sr = ScrollReveal();

sr.reveal('.fromLeft',{
    duration: 1300,
    origin:'left',
    easing:'cubic-bezier(1,-0.03, 0.15, 1.23)',
    distance: '100px'
});

sr.reveal('.fromRight',{
    duration: 1300,
    origin:'right',
    easing:'cubic-bezier(1,-0.03, 0.15, 1.23)',
    distance: '100px'
});

sr.reveal('.item',{
    duration: 1300,
    easing:'cubic-bezier(1,-0.03, 0.15, 1.23)',
    origin: 'bottom',
    scale: 0.001
});

sr.reveal('.logo',{
    duration: 1000,
    origin:'bottom',
    scale:0.0001,
    easing:'cubic-bezier(1,-0.03, 0, 2.31)',
    delay:500
});

function myMap() {
    var mapCanvas = document.getElementById("map");
    var college = new google.maps.LatLng(12.987056, 79.972100);
    var collegeMarker = new google.maps.Marker({position:college});
    var csDept = new google.maps.LatLng(12.987496, 79.972795);
    var csDeptMarker = new google.maps.Marker({position:csDept});
    var canteen = new google.maps.LatLng(12.986547, 79.972199);
    var canteenMarker = new google.maps.Marker({position:canteen});
    var mapOptions = {center: college, zoom: 17};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    collegeMarker.setMap(map);
    canteenMarker.setMap(map);
    csDeptMarker.setMap(map);
}

$(document).ready(function(){
    $('.modal').modal({
        ready: function () {
            $('ul.tabs').tabs();
        }
    });

    $(".button-collapse").sideNav({
        closeOnClick: true,
        draggable: true,
    });

    $(".logo").hover3d({
        selector: ".logo__card",
        shine: true,
        sensitivity: 20,
    });

    $('.btn-floating').click(function(e) {
        var link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 900);
        e.preventDefault();
    });

    $('.nav-scroll').click(function(e) {
        var link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 900);
        e.preventDefault();
    });

    /*Typed Text*/
    typer('.typed-text')
    .line()
    .pause(1000)
    .continue('September 25th.', 200)
    .pause(3000)
    .back(15, 100)
    .continue('Save the Date.', 200)
    .pause(1000)
    .back(15, 100)
    .continue('September 25th.', 200)
    .pause(1000)
    .end();

});
