try{
    mainalert("Welcome to errors page");
}
catch(err){
    console.log(err);
}

function semialert(){
    let age =18;
    try{
        if(age>18){
            console.log("You can vote");
        }
        else{
            console.log("You can't vote");
        }
    }
    catch(e){
        console.log(e);
    }
}

semialert();