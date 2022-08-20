let para = document.getElementById("para");

let colorInput = document.getElementById("colorbox");
let colorButton = document.getElementById("color-button");


let boldBtn = document.getElementById("b_Btn");

let italicBtn = document.getElementById("i_Btn");

let underLineBtn = document.getElementById("u_Btn");



// colorButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     let colorOutPut = colorInput.value;
//     text.innerText.style.color = "colorOutPut";

// })

slider.addEventListener("change", slidFun);

boldBtn.addEventListener("click", boldFun);

italicBtn.addEventListener("click", italicFun);

underLineBtn.addEventListener("click", underLineFun);

fontFamily.addEventListener("change", changeFontFamily);


function slidFun(){
   let slider = document.getElementById("slider");
   para.style.fontSize = slider.value+"px";
   console.log(slider.value);
}

function boldFun(){
   para.classList.toggle("b_Para2");
}

function italicFun(){
   para.classList.toggle("i_para2");
}

function underLineFun(){
   para.classList.toggle("u_para2")
}

function changeFontFamily(){
   let fontFamily = document.getElementById("fontFamily");
   para.style.fontFamily = fontFamily.value;
   console.log(fontFamily.value);
}