fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resposta => resposta.json ())
    .then(json => json.forEach(post=>console.log(post.id, post.title)));