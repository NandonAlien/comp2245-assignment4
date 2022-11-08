window.addEventListener('DOMContentLoaded',(event)=>{

    let sub =document.querySelector("button")
    sub.onclick= function(){Act()}
    
    function Act(){
        fetch('http://localhost/comp2245-assignment4/superheroes.php')
            .then(response =>  response.text())
            .then(data =>{
                alert(data)
            })

        .catch(error =>alert(error))
        console.log("check 1");
    };

});
