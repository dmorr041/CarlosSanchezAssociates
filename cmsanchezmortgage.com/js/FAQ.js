function initMap() {
    var uluru = {lat: 34.067274, lng: -118.392440};

    var mini_map = new google.maps.Map(document.getElementById('mini_map'), {
    zoom: 12.9,
        center: uluru
    });

    var marker = new google.maps.Marker({
      position: uluru,
      map: mini_map
    });
}