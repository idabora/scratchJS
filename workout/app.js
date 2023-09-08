const map = document.querySelector('#map');
const list = document.querySelector('.list');
map.addEventListener('click', () => {
    console.log('inside')
    const card = document.createElement('div');
    card.classList.add('card');
    list.appendChild(card);

    const exercise = document.createElement('select');
    exercise.classList.add('exercise-type');
    const option1 = document.createElement('option');
    option1.innerText = "Workout";
    option1.setAttribute('value', '')

    const option2 = document.createElement('option');
    option2.innerText = "Walk";
    option2.setAttribute('value', 'Walk')

    const option3 = document.createElement('option');
    option3.innerText = "Sprint";
    option3.setAttribute('value', 'Sprint')

    const option4 = document.createElement('option');
    option4.innerText = "Cycling";
    option4.setAttribute('value', 'Cycling')

    card.appendChild(exercise)
    exercise.appendChild(option1)
    exercise.appendChild(option2)
    exercise.appendChild(option3)
    exercise.appendChild(option4)

    console.log(list.innerHTML);
    // console.log(list.innerHTML)
})

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    const { longitude, latitude } = position.coords;
    console.log(longitude, latitude);

    // const map = L.map('map').setView([latitude, longitude], 15);
    const map = L.map('map').setView([latitude, longitude], 16)

    console.log(map)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude,longitude]).addTo(map)
    .bindPopup(L.popup({
          maxWidth:400,
          maxHeight:300,
          autoClose:false,
          closeOnClick:false
        }))
    .setPopupContent('<h2>Hello, sir</h2>')
    .openPopup();

})
