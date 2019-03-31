

const Controller = fetch('https://randomuser.me/api/?results=15')
.then((response)=>{
    return response.json();
}).then((resolvedPeople)=>{
    console.log(resolvedPeople);
});
export default Controller;