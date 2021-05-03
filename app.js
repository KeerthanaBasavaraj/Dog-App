console.log('hello');
const data = fetch("https://dog.ceo/api/breeds/image/random")
            .then(function(response){
            return response.json()
            }).then(function(jsondata){
                console.log(jsondata)
            })