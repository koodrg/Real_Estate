let person = [
    {name: "john"}, 
    {name: "jane"}, 
    {name: "imelda"}, 
    {name: "john"},
    {name: "jane"}
    ];
    
const obj = [...new Map(person.map(item => [JSON.stringify(item), item])).values()];
console.log(obj);