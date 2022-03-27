const menuInfo = document.querySelector(".contacts__left-content");
const contactsInfo = gsap.timeline({ paused: true });
contactsInfo
  .fromTo(menuInfo, { display: "none" }, { display: "block" })
  .fromTo(menuInfo, { opacity: "0" }, { opacity: "1" });

const btnClose = document.querySelector(".contacts__left-btn");

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
        balloonContent: "",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../img/marker.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0],
      }
    );

    myMap.controls.remove("searchControl");
    myMap.controls.remove("trafficControl");
    myMap.controls.remove("fullscreenControl");
    myMap.controls.remove("rulerControl");
    myMap.behaviors.disable("scrollZoom");
    myMap.behaviors.disable("drag");
    myMap.controls.remove("typeSelector");
    myMap.geoObjects.add(placeMarkCustom);
    placeMarkCustom.events.add('click', function () {
      contactsInfo.play()
    })
    btnClose.addEventListener('click', () => {
      placeMarkCustom.balloon.close()
      contactsInfo.reverse()
    })
  }
}
