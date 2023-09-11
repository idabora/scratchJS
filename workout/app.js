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

    function routing(...cords){ L.Routing.control({
        waypoints: [
            L.latLng(cords[0],cords[1]), // Starting point
            L.latLng(cords[2], cords[3]), // Ending point
            // L.latLng(cords[4], cords[5]), // Ending point
            // L.latLng(cords[6], cords[7]), // Ending point
            // L.latLng(cords[8], cords[9]), // Ending point
            // L.latLng(cords[10], cords[11]) // Ending point
           
        ],
        routeWhileDragging: true,
        // showAlternatives:true,
        // routeWhileDragging:true
    }).addTo(mapObject);
    }
    const p1=[];
    mapObject.on('click', (pos) => {
        console.log(pos)
        const { lat, lng } = pos.latlng;
        p1.push(lat)
        p1.push(lng)
        console.log(p1.length)
        if (p1.length===4) {
            routing(...p1)
        }
        L.marker([lat, lng], { icon: customIcon })
            .addTo(mapObject)
            .bindPopup(L.popup({
                maxWidth: 400,
                maxHeight: 300,
                autoClose: false,
                closeOnClick: false
            }))
            // .setPopupContent('<h2>Hello, sir</h2>')
            // .openPopup();

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

<<<<<<< HEAD

=======
>>>>>>> changes
