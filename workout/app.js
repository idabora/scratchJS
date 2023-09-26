const map = document.querySelector('#map');
const list = document.querySelector('.list');

// navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position);
//     const { longitude, latitude } = position.coords;
//     console.log(longitude, latitude);

//     const mapObject = L.map('map').setView([latitude, longitude], 16);

//     console.log(mapObject);
//     L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(mapObject);

//     var customIcon = L.icon({
//         iconUrl: 'marker.png',
//         iconSize: [50, 60],
//         iconAnchor: [16, 32],
//         popupAnchor: [0, -32]
//     });

//     L.marker([latitude, longitude], { icon: customIcon }).addTo(mapObject)
//         .bindPopup(L.popup({
//             maxWidth: 400,
//             maxHeight: 300, 
//             autoClose: false,
//             closeOnClick: false
//         }))
//         .setPopupContent('<h2>Hello, sir</h2>')
//         .openPopup();

//     function routing(...cords){

//         L.Routing.control({
//         waypoints: [
//             L.latLng(cords[0],cords[1]), // Starting point
//             L.latLng(cords[2], cords[3]), // Ending point
//             // L.latLng(cords[4], cords[5]), // Ending point
//             // L.latLng(cords[6], cords[7]), // Ending point
//             // L.latLng(cords[8], cords[9]), // Ending point
//             // L.latLng(cords[10], cords[11]) // Ending point

//         ],
//         routeWhileDragging: true,
//         // showAlternatives:true,
//         // routeWhileDragging:true
//     }).addTo(mapObject);


//         const card = document.createElement('div');

//         const cardForm= document.createElement('form');
//         cardForm.classList.add('cardForm');

//         card.classList.add('card');
//         card.appendChild(cardForm);
//         list.appendChild(card);

//         const exercise = document.createElement('select');
//         exercise.classList.add('exercise-type');

//         const option1 = document.createElement('option');
//         option1.innerText = "Workout";
//         option1.setAttribute('value', '');

//         const option2 = document.createElement('option');
//         option2.innerText = "Walk";
//         option2.setAttribute('value', 'Walk');

//         const option3 = document.createElement('option');
//         option3.innerText = "Sprint";
//         option3.setAttribute('value', 'Sprint');

//         const option4 = document.createElement('option');
//         option4.innerText = "Cycling";
//         option4.setAttribute('value', 'Cycling');

//         exercise.appendChild(option1);
//         exercise.appendChild(option2);
//         exercise.appendChild(option3);
//         exercise.appendChild(option4);

//         cardForm.appendChild(exercise);

//         const startTime=document.createElement('input');
//         startTime.setAttribute('type','time');
//         startTime.classList.add('startTime');

//         cardForm.appendChild(startTime);

//         const endTime=document.createElement('input');
//         endTime.setAttribute('type','time');
//         endTime.classList.add('endTime');

//         cardForm.appendChild(endTime);

//         const submit=document.createElement('input');
//         submit.setAttribute('value','submit');
//         submit.setAttribute('type','submit');

//         cardForm.appendChild(submit);

//         cardForm.addEventListener('submit',(e)=>{
//             e.preventDefault();
//             const selectedExercise = document.querySelector('.exercise-type').value;
//             const startTime = document.querySelector('.startTime').value;
//             const endTime = document.querySelector('.endTime').value;
//             console.log(`Exercise: ${selectedExercise}`);
//             console.log(`Start Time: ${startTime}`);
//             console.log(`Start Time: ${endTime}`);
//         })

//     }
//     const p1=[];
//     mapObject.on('click', (pos) => {
//         console.log(pos)
//         const { lat, lng } = pos.latlng;
//         p1.push(lat)
//         p1.push(lng)
//         console.log(p1.length)

//         L.marker([lat,lng]).addTo(mapObject)

//         if (p1.length===4) {
//             routing(...p1)
//         }

//     });
// });



class App {

    // using # we can declare private variables in a class
    #map;
    #mapObject;
    #customIcon = L.icon({
        iconUrl: 'marker.png',
        iconSize: [50, 60],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    //Getting geolocation of the user and setting map view according to its cooords.
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.loadMap.bind(this),()=>{
                console.error("Unable to Get User's Current Location.....");
            }) 
        }
    }

    //Loads map and set's the view
    loadMap(position){
            console.log(position);
            const { latitude, longitude } = position.coords;
            console.log(latitude, longitude);

            this.#mapObject = L.map('map').setView([latitude, longitude], 15)

            L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#mapObject);
            console.log(this)

            L.marker([latitude,longitude],{icon:this.#customIcon}).addTo(this.#mapObject)
            .bindPopup(L.popup({
                maxWidth: 400,
                maxHeight: 300, 
                autoClose: false,
                closeOnClick: false
            }))
            .setPopupContent('<h2>Hello, sir</h2>')
            .openPopup();
             console.log("hello");
            
            let points=[];
            this.#mapObject.on('click',(pos)=>{
                const {lat,lng}=pos.latlng;
                console.log(lat,lng);

                points.push(lat);
                points.push(lng);
                console.log("())()()()()()",points)
                if(points.length===4){
                    console.log(points)
                    this.routingFunc(...points);
                    points=[];
                    this.showForm(lat,lng)
                }

             })

    }


    showForm(lat,lng){
        console.log("*****",lat,lng);

        const card = document.createElement('div');

        const cardForm= document.createElement('form');
        cardForm.classList.add('cardForm');

        card.classList.add('card');
        card.appendChild(cardForm);
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

        exercise.appendChild(option1);
        exercise.appendChild(option2);
        exercise.appendChild(option3);
        exercise.appendChild(option4);

        cardForm.appendChild(exercise);

        const startTime=document.createElement('input');
        startTime.setAttribute('type','time');
        startTime.classList.add('startTime');

        cardForm.appendChild(startTime);

        const endTime=document.createElement('input');
        endTime.setAttribute('type','time');
        endTime.classList.add('endTime');

        cardForm.appendChild(endTime);

        const submit=document.createElement('input');
        submit.setAttribute('value','submit');
        submit.setAttribute('type','submit');

        cardForm.appendChild(submit);

        cardForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const selectedExercise = document.querySelector('.exercise-type').value;
            const startTime = document.querySelector('.startTime').value;
            const endTime = document.querySelector('.endTime').value;

            localStorage.setItem('Exercise',selectedExercise);
            localStorage.setItem('startsAt',startTime);
            localStorage.setItem('endsAt',endTime);

            console.log(`Exercise: ${selectedExercise}`);
            console.log(`Start Time: ${startTime}`);
            console.log(`Start Time: ${endTime}`);
        })




    }

    routingFunc(...coords){

        L.Routing.control({
        waypoints: [
            L.latLng(coords[0],coords[1]), // Starting point
            L.latLng(coords[2], coords[3]), // Ending point
        ],
        routeWhileDragging: true,
        // showAlternatives:true,
    }).addTo(this.#mapObject);

    }

}

const abc = new App;
abc.getLocation();
// abc.showForm();


