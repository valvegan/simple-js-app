let pokemonRepository = (function(){

    let pokemonList = [
    {
    name: "Bulbasaur", 
    height: 0.7, 
    types:["grass", "poison"]
},
    {
    name: "Charmander", 
    height: 0.6, 
    types: "fire"
},
    {
    name: "Charmelon", 
    height: 1.1, 
    types: "fire"
},
    {
    name: "Charizard", 
    height: 1.7, 
    types:["fire", "flying"]
}
];

function getAll() {
      return pokemonList;
    };

function add(item) {
    //adding typeof() to only allow addition of objects to the pokemonList  
    let itemAttributes = Object.keys(item)
    const safeAttributes = ["name", "height", "types"]
          if(typeof(item) === "object" &&

            //&& adding second conditional to force the new items to have the same keys as the first object in pokemonList
            safeAttributes.every(function(attr){
                return attr in item}))
                
            //JSON.stringify(Object.keys(pokemonList[0])) === JSON.stringify(Object.keys(item)))
          {
        pokemonList.push(item)
          } else{
              document.write("<p>Error adding item, item needs to be an object and have the required 3 properties</p>")
          }
    };

function filter(name){
    //I'm confused about code to exectute
    //return name.name === "Pikachu" ??
}
/*var filtered = 
    pokemonList.filter(function(item){
       return item.name === "Bulbasaur";
    })
;

console.log(filtered)*/
 /*   filter: function(pokename){
       let filterByName = pokemonList.filter(function(pokename){    
       return pokename.name === "Pikachu"
       },
       )
       console.log(filterByName)
    },*/

return {
    getAll: getAll,
    add: add,
    filter: filter,


};

}
)();

pokemonRepository.add({ 

    name: 'Pikachu', 
    height: 0.4,
    types: "electric"

});

//returning the array into the console
console.log(pokemonRepository.getAll());

//Calling the filter function
//not sure how to execute, would like to have object with "filtered" name appear on console
//forEach() loop insteaf of the for loop

pokemonRepository.getAll().forEach(function(item){
    document.write(item.name + " (height " + item.height + ") " + "<br>")
//adding conditional to check if the pokemon height is above 1.2

if (item.height > 1.2)
{
    document.write("Wow, that's a big pokemon!" + "<br>"); 
}
}
);


