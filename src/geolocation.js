const getLocation = (field_name, field_lat, field_lon) => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const onSuccess = (position) => {
    let crd = position.coords;
    document.getElementById(field_name).value = "Your Current Location";
    document.getElementById(field_lat).value = crd.latitude ?? "Not found";
    document.getElementById(field_lon).value = crd.longitude ?? "Not found";
    return [crd.latitude, crd.latitude];
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
