window.addEventListener('DOMContentLoaded',(event)=>{

    let sub =document.querySelector("button")
    sub.onclick= function(){Act()}
    
    function Act(){
        fetch('http://localhost/comp2245-assignment4/superheroes.php')
            .then(response =>  response.text())
            .then(data =>{
                let set = document.querySelector("#display")
                set.textContent= data
            })

        .catch(error =>alert(error))
    };

});
