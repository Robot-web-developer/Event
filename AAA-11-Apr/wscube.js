// let alllielement1=document.getElementsByTagName("li");
// for(let i=0;i<alllielement1.length;i++){
//     alllielement1[i].style.color="red";
//     alllielement1[i].style.fontSize="20px";
//     alllielement1[i].style.fontFamily="Arial";
//     alllielement1[i].style.fontWeight="bold";
// }
// console.log(alllielement1);

let alllielement=document.querySelectorAll("li");
console.log(alllielement);
// console.log(alllielement[0].innerHTML);
// console.log(alllielement[2].innerHTML);
// console.log(alllielement[3].innerHTML);
// console.log(alllielement[4].innerHTML);

// alllielement=Array.from(alllielement);
// console.log(alllielement);

alllielement.forEach(function(li){
    li.style.color="red";
    li.style.fontSize="20px";
    li.style.fontFamily="Arial";
    li.style.fontWeight="bold";
    console.log(li.innerHTML);
});


// alllielement.forEach(({Items, index})=>{ 
//     Items.style.color="red";
//     Items.style.fontSize="20px";
//     Items.style.fontFamily="Arial";
//     Items.style.fontWeight="bold";

//     console.log(Items.innerHTML)
    
// })