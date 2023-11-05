const invite:string[]=["Ali","Hayat","Hitler"]
invite.forEach(guest=>{
    console.log(guest+" is invited")
})
console.log(invite[2]+" didnt make it")
invite.pop();
//change of plans
invite.push("Napolean")
invite.forEach(newguest=>{
    console.log(newguest+" is invited")
})
    
