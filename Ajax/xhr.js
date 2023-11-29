let xhr = new XMLHttpRequest();

console.log('Ready state 0',xhr.readyState);
xhr.open('GET', 'https://cat-fact.herokuapp.com/facts')

console.log('ready state 1',xhr.readyState);
let responseData;


xhr.onprogress = function(event) {
    if (event.lengthComputable) {

      var percentComplete = (event.loaded / event.total) * 100;
      console.log('Progress: ' + percentComplete + '%');

    }
  };


// Way-1
xhr.onreadystatechange = () => {
    console.log('%%%',xhr.readyState)
    responseData = xhr.responseText;
    // console.log(responseData)
    // console.log(JSON.parse(responseData))
    // let x=JSON.parse(responseData)
    let x=responseData
    console.log(x[0]);
    // document.querySelector('.container').innerText =JSON.stringify(x[0]);
    document.querySelector('.container').innerText =JSON.stringify(x);

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
// console.log(xhr.readyState);





