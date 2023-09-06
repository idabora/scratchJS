const map=document.querySelector('.map');
const list=document.querySelector('.list');
map.addEventListener('click',()=>{
    console.log('inside')
    const card=document.createElement('div');
    card.classList.add('card');
    list.appendChild(card);

    const exercise=document.createElement('select');
    exercise.classList.add('exercise-type');
    const option1= document.createElement('option');
    option1.innerText="Workout";
    option1.setAttribute('value','')

    const option2= document.createElement('option');
    option2.innerText="Walk";
    option2.setAttribute('value','Walk')

    const option3= document.createElement('option');
    option3.innerText="Sprint";
    option3.setAttribute('value','Sprint')

    const option4= document.createElement('option');
    option4.innerText="Cycling";
    option4.setAttribute('value','Cycling')
    
    card.appendChild(exercise)
    exercise.appendChild(option1)
    exercise.appendChild(option2)
    exercise.appendChild(option3)
    exercise.appendChild(option4)
    
    console.log(list.innerHTML);
// console.log(list.innerHTML)
})
