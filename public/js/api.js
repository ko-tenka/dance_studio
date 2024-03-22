function initMap() {

  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 10,
  });
  var myPlacemark = new ymaps.Placemark([55.763117, 37.590042], {
    hintContent: "Моя метка",
    balloonContent: "Это моя метка",
});
  myMap.geoObjects.add(myPlacemark);
}

ymaps.ready(initMap);

