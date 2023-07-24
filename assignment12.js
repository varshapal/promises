const posts = [{title: 'Post1'}];



function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}



function create2Post() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({title:'Post2'});
            resolve('Post2');
        },2000)
    })
}
function create3Post() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({title:'Post3'});
            resolve('Post3');
        },2000)
    })
}


function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.createdAt = new Date().getTime();
            resolve(posts.createdAt);
        },1000)
    })
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length>0) {
                let pop = posts.pop();
                resolve(pop.title);
            }
            reject("Error");
        },2000)
    }) 
}


Promise.all([create2Post(), updateLastUserActivityTime(),  deletePost(), create3Post(), updateLastUserActivityTime()]).then((values) => {console.log(values)})
  .catch((err) => console.log(err));