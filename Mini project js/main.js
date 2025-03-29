document.addEventListener("DOMContentLoaded",function(){
    const increaseBtn=document.getElementById("increaseButton");
    const decreaseBtn=document.getElementById("decreaseButton");
    const textPara=document.getElementById("textParagraph");


    increaseBtn.addEventListener("click",()=>{
        let currentFontSize=parseFloat(window.getComputedStyle(textPara,null).getPropertyValue("font-size"));
        textPara.style.fontSize= currentFontSize + 2 + "px";
    });
    decreaseBtn.addEventListener("click",()=>{
        let currentFontSize=parseFloat(window.getComputedStyle(textPara,null).getPropertyValue("font-size"));
        textPara.style.fontSize= currentFontSize - 2 + "px";
    });

})