window.onload = getData

function getData() {

    //Get API
    fetch('https://randomuser.me/api/?results=3')
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            let usuarios = data.results
            // console.log(author);

            //Get Data Value
            let output = "<h2>Experiencia de nuestro usuarios</h2>"

            //Get Data Loop Through
            usuarios.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2> ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Edad: ${lists.dob.age}</li>
                            <li class="list-group-item">Pais: ${lists.location.country}</li>
                            <li class="list-group-item">Calificación: ${parseFloat((Math.random() * (5 - 3) + 3).toFixed(1))}</li>
                        </ul>
                    </div>
                </div> `
            })

            //Show On Our Screen All Data
            document.getElementById('output').innerHTML = output
        })
}