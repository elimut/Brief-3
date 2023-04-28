// function randombg(element){
//     let random = Math.floor(Math.random()*2);
//     let backG = [
//                 ];
//     element.style.backgroundColor = backG[random];
// }
let popUp = document.getElementsByClassName("popUp");
let key1 = "";
for (const key in popUp){
    console.log(popUp[key].innerHTML);
    key1 = popUp[key].innerHTML;
    console.log(key1);
}
// let bouton =  document.getElementById("bouton1").innerText;
// let bouton =  document.getElementById("`bouton  ${index}`").innerText;
// let bouton =  document.querySelectorAll("popUp").textContent;
// console.log(bouton);
document.querySelectorAll(".popUp").forEach(element => {
    element.addEventListener("click", (event) => {
        // let key = popUp + event.target.id;
        // console.log(key);
        let bulle = document.createElement("div");
        bulle.style.fontSize = "15px";
        bulle.style.fontWeight = "bold";
        bulle.innerText = `${key1}`;
        bulle.setAttribute("class", "bulle");
        bulle.style.border = "1px solid black";
        bulle.style.padding = "10px"
        bulle.style.width = "80%";
        bulle.style.backgroundColor = "green";
        bulle.style.height = "300px";
        bulle.style.paddingTop = "60px";
        bulle.style.zIndex = "1";
        bulle.style.position = "absolute";
        bulle.style.borderRadius = "20px";
        document.querySelector(".popUp").appendChild(bulle);
        bulle.addEventListener("click", (event) => {
            bulle.style.visibility = "hidden";
        });
    });
});