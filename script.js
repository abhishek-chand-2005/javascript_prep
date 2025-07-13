// task 1
// let head2 = document.createElement("h2");
// head2.textContent = "I am learning DOM";
// head2.style.color = "blue";
// document.body.appendChild(head2);


// task 2
// let para = document.createElement('p');
// para.innerHTML = "Welcome to my site — powered by <strong>JavaScript</strong>"
// document.body.appendChild(para)

// task 3

// function createUserCard(name, age){
//     let nm = name;
//     let x = age;
//     let userDiv = document.createElement("div");
//     userDiv.className = "card";
//     let head3 = document.createElement("h3");
//     head3.textContent = nm;
//     let para2 = document.createElement("p");
//     para2.textContent = `Age: ${x}`
//     userDiv.appendChild(head3);
//     userDiv.appendChild(para2);

//     document.body.appendChild(userDiv);
// }
// createUserCard("abhi", 20);

// task 4

// let count = 0;
// let mainDiv = document.createElement("div");
// let btn = document.createElement("button");
// btn.className = "bttn";
// btn.textContent = "Click me";
// let smalltg = document.createElement("small");
// mainDiv.appendChild(btn);
// mainDiv.appendChild(smalltg);
// document.body.appendChild(mainDiv);


// btn.addEventListener("click", ()=>{
//     count++
//     smalltg.textContent = `Clicked ${count} times`
// })

// task 4 
// let meinDiv = document.createElement("div")
// let inp = document.createElement("input");
// let btn = document.createElement("button");
// btn.textContent = "Say Hello";
// let hello = document.createElement('h4');
// meinDiv.appendChild(inp);
// meinDiv.appendChild(btn);

// document.body.appendChild(meinDiv)
// console.log(inp.value)
// btn.addEventListener("click", ()=>{
//     if(inp.value){
//         hello.textContent = `Hello ${inp.value}!`;
//         meinDiv.appendChild(hello);
//         inp.value = "";
//     }else{
//         hello.textContent = `Please enter a name`
//     }
// })




// https://smallest.ai/