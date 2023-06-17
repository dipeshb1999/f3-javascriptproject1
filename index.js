let arr=[
]
function addUser(){
    let nameref=document.getElementById("name")
    let name=nameref.value.trim();
    let profession=document.getElementById("profession").value.trim();
    let age=document.getElementById("age").value.trim();

        if(age!="" && name!="" && profession!=""){
            arr.push({
                id:arr.length+1,
                name:name,
                profession:profession,
                age:age,
            })
           

            let sucessmsg=document.createElement("P");
            sucessmsg.className="sucess";
            sucessmsg.innerText="Sucess : Employee added";
            let msg=document.getElementById("msg");
            msg.innerHTML="";
            msg.append(sucessmsg);

        }else{

            let errormsg=document.createElement("P");
            errormsg.className="error";
            errormsg.innerText="Please make sure all the field are filled before adding user!!";
            let msg=document.getElementById("msg");
            msg.innerHTML="";
            msg.append(errormsg);
        }
        appedUser();
        console.log(arr)
}
function appedUser(){
     let cardcontainer=document.getElementsByClassName("card-container");
     cardcontainer.innerHTML="";
        for(let i=0;i<arr.length;i++){
            let cardItem=document.createElement("div")
            cardItem.className="card-item";
            cardItem.innerHTML=`
            <div class="card">
                <p>${arr[i].id} Name: ${arr[i].name} </p>
                <p>Profession: ${arr[i].profession}</p>
                <p>Age : ${arr[i].age}</p>
             </div>
             <button class="delete" >Delete User</button>
            `;
            cardcontainer.append(cardItem);
        }
      
}