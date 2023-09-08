const map = document.querySelector('#map');
const list = document.querySelector('.list');

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    const { longitude, latitude } = position.coords;
    console.log(longitude, latitude);

    const mapObject = L.map('map').setView([latitude, longitude], 16);

    console.log(mapObject);
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapObject);

    var customIcon = L.icon({
        iconUrl: 'marker.png',
        iconSize: [50, 60],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    L.marker([latitude, longitude], { icon: customIcon }).addTo(mapObject)
        .bindPopup(L.popup({
            maxWidth: 400,
            maxHeight: 300, // Fixed the typo here
            autoClose: false,
            closeOnClick: false
        }))
        .setPopupContent('<h2>Hello, sir</h2>')
        .openPopup();

    // Move the Routing control initialization outside the click event handler
    const control = L.Routing.control({
        waypoints: [
            L.latLng(17.41892923667908, 78.4374396965176), // Starting point
            L.latLng(17.41458666629159, 78.44535761787373) // Ending point
        ],
        routeWhileDragging: true
    }).addTo(mapObject);

    mapObject.on('click', (pos) => {
        console.log(pos)
        const { lat, lng } = pos.latlng;
        L.marker([lat, lng], { icon: customIcon })
            .addTo(mapObject)
            .bindPopup(L.popup({
                maxWidth: 400,
                maxHeight: 300, // Fixed the typo here
                autoClose: false,
                closeOnClick: false
            }))
            .setPopupContent('<h2>Hello, sir</h2>')
            .openPopup();

        const card = document.createElement('div');
        card.classList.add('card');
        list.appendChild(card);

        const exercise = document.createElement('select');
        exercise.classList.add('exercise-type');
        const option1 = document.createElement('option');
        option1.innerText = "Workout";
        option1.setAttribute('value', '');

        const option2 = document.createElement('option');
        option2.innerText = "Walk";
        option2.setAttribute('value', 'Walk');

        const option3 = document.createElement('option');
        option3.innerText = "Sprint";
        option3.setAttribute('value', 'Sprint');

        const option4 = document.createElement('option');
        option4.innerText = "Cycling";
        option4.setAttribute('value', 'Cycling');

        card.appendChild(exercise);
        exercise.appendChild(option1);
        exercise.appendChild(option2);
        exercise.appendChild(option3);
        exercise.appendChild(option4);
    });
});





