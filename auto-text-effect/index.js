const container1=document.querySelector(".container");
const careers=["YouTuber","Web Devloper","Freelancer","Instructor","Usdd"];
let careerIndex=0;
let characterIndex=0;

function updateText(){
    characterIndex++;
    container1.innerHTML=`<h1>I am ${careers[careerIndex].slice(0,1)==="I"?"an":"a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    
    if(characterIndex===careers[careerIndex].length)
    {
        careerIndex++;
        characterIndex=0;
    }
    if(careerIndex===careers.length)
    {
        careerIndex=0;
    }
    console.log();
    setTimeout(updateText,400);
}
updateText();