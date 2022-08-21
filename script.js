let para = document.getElementById("para");
console.log(para);

//color
let colorInput = document.getElementById("colorbox");
let colorButton = document.getElementById("color-button");

colorButton.addEventListener("click", (e) => {
   e.preventDefault();
   let colorOutPut = colorInput.value;
   para.style.color = colorOutPut;
   colorInput.value = "";
})


//Font Size
let slider = document.getElementById("slider");

slider.addEventListener("change", (e) => {
   e.preventDefault();   
   para.style.fontSize = slider.value+"px";
});


//Bold Button
let boldBtn = document.getElementById("b_Btn");

boldBtn.addEventListener("click", (e) => {
   e.preventDefault();
   para.classList.toggle("b_Para2");
});


//Italic Button
let italicBtn = document.getElementById("i_Btn");

italicBtn.addEventListener("click", (e) => {
   e.preventDefault();
   para.classList.toggle("i_para2");
});

//Underline Button
let underLineBtn = document.getElementById("u_Btn");

underLineBtn.addEventListener("click", (e) => {
   e.preventDefault();
   para.classList.toggle("u_para2");
});


//Font Family
fontFamily.addEventListener("change", changeFontFamily);

function changeFontFamily(){
   let fontFamily = document.getElementById("fontFamily");
   para.style.fontFamily = fontFamily.value;
}