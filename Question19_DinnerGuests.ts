let invite:string[]=["Ali","Hayat","Hitler"]
invite.forEach(guest=>{
    console.log(guest+" is invited")
})
console.log(invite[2]+" didnt make it")
invite.pop();
//change of plans
invite.push("Napolean")
invite.unshift("Izzah")
invite.splice(3,0,"Ayesha")
invite.push("Waheeb")
console.log("Number of people coming to dinner are "+invite.length)

  
