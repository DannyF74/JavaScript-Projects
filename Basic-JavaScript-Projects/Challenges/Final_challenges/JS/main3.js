function displayType(vehicle) {
    var vehicleType = vehicle.getAttribute("data-vehicle-type");
    alert(vehicle.innerHTML + " is a type of " + vehicleType + "!");
}