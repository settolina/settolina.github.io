const myImage = document.querySelector("img");

myImage.onclick= () => {
    const mysrc = myImage.getAttribute("src");
    if(mysrc === "images/free-event-icon-2319-thumb.png")
    {
        myImage.setAttribute("src", "images/hijab.png");
    }
    else{
        myImage.setAttribute("src", "images/free-event-icon-2319-thumb.png");
    }
}

let myButton= document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName()
{
    const myName = prompt("Please enter your name:");
    if(!myName)
    {
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
    
}

if(!localStorage.getItem("name"))
{
    setUserName();

}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => 
{
    setUserName();
}