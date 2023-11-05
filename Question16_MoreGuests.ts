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
console.log("Guess what found a bigger table")
invite.unshift("Izzah")
invite.splice(3,0,"Ayesha")
invite.push("Waheeb")
invite.forEach(newerguest=>{
    console.log(newerguest+" are invited")
})
