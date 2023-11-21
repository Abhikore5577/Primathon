const array = [
    {
    first: "Javascript",
    last: "Tutorial"
    },
    {
    first: "Primathon",
    last: "Academy"
    }
   ];
   

   let newArr=array.map(item=>{
    return item.first+item.last
   })

   console.log(newArr)