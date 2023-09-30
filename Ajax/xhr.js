let xhr = new XMLHttpRequest();

console.log(xhr.readyState);
xhr.open('GET', 'https://cat-fact.herokuapp.com/facts')

console.log(xhr.readyState);
let responseData;

xhr.send();
console.log(xhr.readyState);
xhr.onreadystatechange = () => {

    // console.log(xhr.readyState);
    responseData = xhr.responseText;

    // console.log(responseData);
    const x = JSON.parse(responseData);
    // console.log(x);
    // console.log(responseData)
    // let x=responseData.map((obj)=>JSON.parse(obj))
    console.log(x);
    // const y= x.map((obj) =>JSON.parse(obj))
    // console.log(y);
    document.querySelector('.container').innerText = JSON.stringify(x);
    console.log(x[0].status);
    // document.querySelector('.container').innerText = x.map((obj) =>JSON.parse(obj))
}

// console.log(responseData)
// console.log(data)






