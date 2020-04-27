//retrieve array of data from a server and parse it into usable form
let fetchServerData = function(serverStatus){
    return new Promise ((resolve,reject)=>{
        let data = [
            {
                username: "albertngo",
                First: "Albert",
                Last: "Ngo"
            },
            {
                username: "simonhuynh1995",
                First: "Simon",
                Last: "Huynh"
            }
        ];
        setTimeout(()=> {
            if (serverStatus == true) resolve(data);
            else reject("There was a problem loading your data");
        },1000);
    }) //end of promise
}

let retrievedData;
let serverData = fetchServerData(true, [1,2,3,4]);
serverData.then((data)=> {
    retrievedData = data;
    console.log(retrievedData);})

//create new users
class newUser{
    constructor(username, first, last, age){
        this.username = username;
        this.first = first;
        this.last = last;
        this.age = age;
    }

    checkuserName(userID){}
    checkFirstLast(firstlast){}
    checkage(num){}

}

