// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// .then((res)=>res.json())
// .then((msg)=>console.log(msg[0].setup,msg[0].punchline))
// .catch((err)=>console.log(err))



fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'put',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
        userId:6,
        id:1,
        title:'Balaji',
        completed:false
    })
})

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))