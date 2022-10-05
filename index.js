// console.log("Before");

// Callbacks
    // callbacks are to deal with async code by calling a function when the async code is done(Promise is resolved)  

    // const getUser = (id, callback) => {
    //     setTimeout(() => {
    //         callback({ id: 1, name: "John" });
    //     }, 1000);
    // }

    // const getRepos = (username, callback) => {
    //     setTimeout(() => {
    //         callback(["repo1", "repo2", "repo3"]);
    //     }, 1000);
    // }

    // const getCommits = (repo, callback) => {
    //     setTimeout(() => {
    //         callback(["commit"]);
    //     }, 1000);
    // }

// Callback Hell - Pyramid of Doom

    // getUser(1, (user) => {
    //     console.log(user);
    //     getRepos(user.name, (repos) => {
    //         console.log(repos);
    //         getCommits(repos[0], (commits) => {
    //             console.log(commits);
    //         }) 
    //     })
    // })

// Removing callback hell using named functions

    // const displayCommits = (commits) => {
    //     console.log(commits);
    // }

    // const displayRepos = (repos) => {
    //     console.log(repos);
    //     getCommits(repos[0], displayCommits)
    // }

    // const displayUserData = user => {
    //     console.log(user);
    //     getRepos(user.name, displayRepos);
    // }
    // try {
    //     getUser(1, displayUserData);
    // } catch (error) {
    //     console.log(error);
    // }


// Promises

    // promises are to deal with async code by calling a function (resolve) 
    // when the async code is done(Promise are better and cleaner than callbacks)
    // and calling a function (reject) when the async code is not done
    // it is a better way to deal with async code
    // function getUser(id){
    //     return new Promise((reslove, reject) => {
    //         try {
    //             setTimeout(() => {
    //                 reslove({ id: 1, name: "John" });
    //             }, 1000);
    //         } catch (error) {
    //             reject(new Error( error));
    //         }
    //     })
    // }

    // function getRepos(username){
    //     return new Promise((reslove, reject) => {
    //         try {
    //             setTimeout(() => {
    //                 reslove(["repo1", "repo2", "repo3"]);
    //             }, 1000);
    //         } catch (error) {
    //             reject(new Error( error));
    //         }
    //     })
    // }

    // function getCommits(repo){
    //     return new Promise((resolve, reject) => {
    //         try {
    //             setTimeout(() => {
    //                 resolve(["commit"]);
    //             }, 1000);
    //         } catch (error) {
                // reject(new Error(error)); // Creating a new error object and passing the error message
    //         }
    //     })
    // }


    // Calling functions using promises 

    // getUser(1).then(user => {
    //     console.log(user);
    //     return getRepos(user.name);
    // }).then(repos => {
    //     console.log(repos);
    //     return getCommits(repos[0]);
    // }).then(commits => {
    //     console.log(commits);
    // })
    // .catch(error => console.log(error.message)); // listening for errors and displaying the error message


// Async and Await

    // async Await is a better way to deal with async code it make async code as if it was sync code
    // the code in an async function is executed line by line as if sync code while the function it self is async
    // and the code is cleaner and easier to read moreover it is easier to catch errors and display them
    // the code in a function is wrapped in a try catch block and the error is caught and displayed

    // async function displayCommits(){
    //     try {
    //         const user = await getUser(1);
    //         const repos = await getRepos(user.name);
    //         const commits = await getCommits(repos[0]);
    //         console.log(commits);
    //     } catch (error) {
    //         console.log(error); 
    //     }
    // }
    // displayCommits()

// console.log("After");
    