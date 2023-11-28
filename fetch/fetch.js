const container=document.querySelector('.container');
//Fetch API
fetch('https://cat-fact.herokuapp.com/facts')
    .then(function (promise){
        console.log(promise)
        return promise.json();
    }).then(function(results){
        console.log(results);
        container.innerText=JSON.stringify(results);
        // res= results;
    })

    console.log("==>",res);