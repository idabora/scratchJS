let xhr = new XMLHttpRequest();

console.log(xhr.readyState);
xhr.open('GET', 'https://cat-fact.herokuapp.com/facts')

console.log(xhr.readyState);
let responseData;

// Way-1
xhr.onreadystatechange = () => {
    
    responseData = xhr.responseText;
    responseData=JSON.parse(responseData)
    const x = responseData.map((obj)=>JSON.stringify(obj));
    console.log(x);
    // console.log(responseData);

    document.querySelector('.container').innerText =x;
}

// console.log(this.responseData)

//Way-2
// xhr.onload=()=>{
//     console.log(xhr.readyState);
//     console.log("&",xhr.status)
// }

// Way-3
// xhr.addEventListener('load',()=>{
    
//     console.log(xhr.status);
//     console.log(xhr.readyState);
//     console.log(xhr.response);
// })

xhr.send();
console.log(xhr.readyState);





