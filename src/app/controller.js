

const Controller = fetch('https://randomuser.me/api/?results=15')
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        return data.results;
    });

export default Controller;
