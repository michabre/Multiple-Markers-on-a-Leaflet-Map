const getLocation = (field_lat, field_lon) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const onSuccess = (position) => {
    let crd = position.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    document.getElementById(field_lat).value = crd.latitude;
    document.getElementById(field_lon).value = crd.longitude;
  };

  const onError = (error) => {
    console.warn(`ERROR(${error.code}): ${error.message}`);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

export default getLocation;
