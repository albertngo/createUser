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

let serverData = fetchServerData(true, [1,2,3,4]);
serverData.then((data)=> {
    // console.log(data);
})



//create new users================================================//
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
// ===============================================================//
function checkUsername(name, array){
    for (let user of array){
        if (name == user.username)
            return true;
    }
}


function errorCheck (newUsers){
    let accepted = [{username:"engeoh"}];
    let rejected = [];
    for (let user of newUsers){
        let status = true;

        try{ //check existing username
            if (checkUsername(user.username,accepted) == true){
                status = false;
                rejected.push(user);
                throw new Error (`Username: '${user.username}' already exists`)
            }
            }catch(error){
                console.log(error.message);
            }
        //checkusername format
        try{
            
        }
        catch(error){
                
        }
            //check first/last name

                //check age > 21

        if (status == true) accepted.push(user);

    }
     
    return [accepted, rejected];

}
//==================================================================//
let newUserArr = [];
let acceptedUsers = []
let unAcceptedUsers = [];

newUserArr.push(new newUser("engeoh", "Alvin", "Ngo", 23));
newUserArr.push(new newUser("engeoh2", "Bert", "Lee", 23));
newUserArr.push(new newUser("engeoh", "Nall", "Singh", 23));

let splitArray = errorCheck(newUserArr);
[acceptedUsers, unAcceptedUsers] = splitArray;
console.log("The accepted users are:");
console.log(acceptedUsers);
console.log("The rejected users are:");
console.log(unAcceptedUsers);




