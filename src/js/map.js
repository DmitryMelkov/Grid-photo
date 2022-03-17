export function map() {
  ymaps.ready(init);
  function init() {
    let center = [55.769535, 37.639985];
    let myMap = new ymaps.Map("map", {
      center: center,
      zoom: 12,
    });
    let placeMarkCustom = new ymaps.Placemark(
      center,
      {
        balloonContent: "Даев переулок, дом 41",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../img/marker.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0],
      }
    );

    myMap.geoObjects.add(placeMarkCustom);
  }
}
