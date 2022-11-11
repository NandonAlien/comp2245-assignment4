window.addEventListener('DOMContentLoaded',(event)=>{

    let sub =document.getElementById("text")
    sub.onclick= function(){Act()}
    let unit = document.querySelector("input").value 
    function Act(){
        fetch("http://localhost/comp2245-assignment4/superheroes.php?set=Tony+Stark")
            .then(response =>  response.text())
            .then(data =>{
        let set = document.querySelector(".display")
        set.innerHTML= data  
            })

        .catch(error =>console(error))
        
    };

});
