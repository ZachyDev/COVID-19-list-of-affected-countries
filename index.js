let request = new XMLHttpRequest();
request.open('GET','https://covid19.mathdro.id/api/countries');
request.onload = function(){
    let response = request.response;
    let data = JSON.parse(response)
    let country = data['countries'][0].name;
    console.log(data);
    // loop through the countries
    for(country in data){
        // console.log(country)
        for(item in country){
            console.log(data[country][item].name)
            let iso2 = data[country][item].iso2
            // create list
            let li = document.createElement('li');
            li.innerHTML += iso2;
            document.body.appendChild(li);
        }
    }
  
}
request.send();