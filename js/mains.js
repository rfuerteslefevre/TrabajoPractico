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
                <div class="widget-4">
                    <header>
                        <img src="${lists.picture.large}" />
                    </header>
                    <section>
                        <ul>
                            <li><h2> ${lists.name.first}</h2></li>
                            <li>Edad: ${lists.dob.age}</li>
                            <li>Pais: ${lists.location.country}</li>
                            <li>Calificación: ${parseFloat((Math.random() * (5 - 3) + 3).toFixed(1))}</li>
                        </ul>
                    </section>
                    <br/>
                </div> `
            })

            //Show On Our Screen All Data
            document.getElementById('output').innerHTML = output
        })
}