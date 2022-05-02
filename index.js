//Get DOM elements
const imgDivs = document.querySelector('.img-container');
const checkBtn = document.querySelector('.pair');
let imgContaierImages = document.querySelectorAll('.img-container img');
let imgContaierDivs = document.querySelectorAll('.img-container div');
//Create an array for the random numbers
let numbers1 = [];
//Create flags for random number controll
let c0=0, c1=0, c2=0, c3=0, c4=0, c5=0;
//Create variables for checking the images sources later
let imageSource1 = "";
let imageSource2 = "";
//Create variables for counting
let count=0;
let tries=0;

//I have 12 image elements in the DOM, so I want 12 random numbers, but only I only want 2 with the same value
while(numbers1.length!=12){
    //Create an "r" variable for the random number between 1-6, because I need 6 images from the API, but I will use twice every pictures (I need pairs)
    let r = Math.floor(Math.random()*6);
    //The logic --> If the "r" variable is my number and I dont have flag for my variable then I push this random number into my array than give a flag
      if (r === 0 && c0 <= 1){
        numbers1.push(r);
        c0++;
    } if ( r === 1 && c1 <= 1){
        numbers1.push(r);
        c1++;
    } if ( r === 2 && c2 <= 1){
        numbers1.push(r);
        c2++;
    } if ( r === 3 && c3 <= 1){
        numbers1.push(r);
        c3++;
    } if ( r === 4 && c4 <= 1){
        numbers1.push(r);
        c4++;
    } if ( r === 5 && c5 <= 1){
        numbers1.push(r);
        c5++;
    }
}

//Async function for fetch API
async function getImages(){
    //Create a variable for my await fetch to store the promise, if my promise is OK (status=200) then give me the json object otherwise give back "rejected" in the console
    const result = await fetch("https://picsum.photos/v2/list?page=2&limit=6");
    return result.status === 200 ? result.json() : console.log("Rejected");
}
//Async function to load the image sources (they are disabled to seen, because of my css)
async function loadImages(){
    //get the result of the previous promise and then iterate in the arrays and change the src attributum of the images (that's means random place for the pics)
    const images = await getImages();
    for(let i = 0; i<=numbers1.length-1; i++)
    imgContaierImages[i].src=images[numbers1[i]].download_url;
}
//Shoot the functions what I wrote before
loadImages();
//Add click event to my Collector div with the event arg
imgDivs.addEventListener('click', e => {
    //take the event (what we clicked) arg class attr
    let classes = e.target.className;
    //get the the DOM elements
    let behindImgShow = document.querySelector("."+classes+" img");
    document.querySelector("."+classes).style.backgroundColor="initial";
    //start the counter (add 1)
    count+=1;
    //logic --> Get the class if the class my images what i used in the HTML then check my imgsrc variables if there is any empty then the empty will store 
    //the img src after that show the picture and add to the flipped class (that's in 12 times... pretty weird and awful - !!!HAVE TO REFACTOR!!!)
    switch (classes){
        case "img1":
            if(imageSource1 === ""){
                imageSource1 = imgContaierImages[0].src;
            } else 
            if(imageSource2 === ""){
                imageSource2 = imgContaierImages[0].src;
            }
            behindImgShow.style.display="initial";
            behindImgShow.classList.add("flipped");
            break;
       case "img2":
        if(imageSource1 === ""){
            imageSource1 = imgContaierImages[1].src;
        } else 
        if(imageSource2 === ""){
            imageSource2 = imgContaierImages[1].src;
        }
            behindImgShow.style.display="initial";
            behindImgShow.classList.add("flipped");
            break;
        case "img3":
            if(imageSource1 === ""){
                imageSource1 = imgContaierImages[2].src;
            } else 
            if(imageSource2 === ""){
                imageSource2 = imgContaierImages[2].src;
            }
            behindImgShow.style.display="initial";
            behindImgShow.classList.add("flipped");
            break;
        case "img4":
            if(imageSource1 === ""){
                imageSource1 = imgContaierImages[3].src;
            } else 
            if(imageSource2 === ""){
                imageSource2 = imgContaierImages[3].src;
            }
            behindImgShow.style.display="initial";
            behindImgShow.classList.add("flipped");
            break;
        case "img5":
            if(imageSource1 === ""){
                imageSource1 = imgContaierImages[4].src;
            } else 
            if(imageSource2 === ""){
                imageSource2 = imgContaierImages[4].src;
            }
            behindImgShow.style.display="initial";
            behindImgShow.classList.add("flipped");
            break;
        case "img6":
            if(imageSource1 === ""){
                imageSource1 = imgContaierImages[5].src;
            } else 
            if(imageSource2 === ""){
                imageSource2 = imgContaierImages[5].src;
            }
            behindImgShow.style.display="initial";
            behindImgShow.classList.add("flipped");
            break;
        case "img7":
            if(imageSource1 === ""){
                imageSource1 = imgContaierImages[6].src;
            } else 
            if(imageSource2 === ""){
                imageSource2 = imgContaierImages[6].src;
            }
            behindImgShow.style.display="initial";
            behindImgShow.classList.add("flipped");
            break;
        case "img8":
            if(imageSource1 === ""){
                imageSource1 = imgContaierImages[7].src;
            } else 
            if(imageSource2 === ""){
                imageSource2 = imgContaierImages[7].src;
            }
            behindImgShow.style.display="initial";
            behindImgShow.classList.add("flipped");
            break;
        case "img9":
            if(imageSource1 === ""){
                imageSource1 = imgContaierImages[8].src;
            } else 
            if(imageSource2 === ""){
                imageSource2 = imgContaierImages[8].src;
            }
            behindImgShow.style.display="initial";
            behindImgShow.classList.add("flipped");
            break;
        case "img10":
            if(imageSource1 === ""){
                imageSource1 = imgContaierImages[9].src;
            } else 
            if(imageSource2 === ""){
                imageSource2 = imgContaierImages[9].src;
            }
            behindImgShow.style.display="initial";
            behindImgShow.classList.add("flipped");
            break;
        case "img11":
            if(imageSource1 === ""){
                imageSource1 = imgContaierImages[10].src;
            } else 
            if(imageSource2 === ""){
                imageSource2 = imgContaierImages[10].src;
            }
            behindImgShow.style.display="initial";
            behindImgShow.classList.add("flipped");
            break;
        case "img12":
            if(imageSource1 === ""){
                imageSource1 = imgContaierImages[11].src;
            } else 
            if(imageSource2 === ""){
                imageSource2 = imgContaierImages[11].src;
            }
            behindImgShow.style.display="initial";
            behindImgShow.classList.add("flipped");
        break;
    }
    //Okay... so that's the end of the switch
    //Another logic --> (I had problems here... I would appear the 3rd pic in my screen,but... !!!I HAVE TO REFACTOR!!! 
    //so the first counter will be equal to 3 then I check the 2 img sources if these are equal then I set back to zero my counter and set back to empty my imgsrc variables
    //then iterate in the images and if the images have the "flipped" class then I change it to "matched" - that's mean I got a pair
    //after that I did the same, but in there I change "flipped" to empty and changed back my img and my div styles
    if(count === 3){
        if(imageSource1 === imageSource2){
            count = 0;
            imageSource1 = "";
            imageSource2 = "";
            for(let i=0; i<=imgContaierImages.length; i++){
                if(imgContaierImages[i].className === "flipped"){
                    imgContaierImages[i].className = "matched";
                }
            }
        }else{
            count = 0;
            imageSource1 = "";
            imageSource2 = "";
            for(let i=0; i<=imgContaierImages.length; i++){
                if(imgContaierImages[i].className === "flipped"){
                    imgContaierImages[i].className = "";
                    imgContaierImages[i].style.display = "none";
                    imgContaierDivs[i].style.backgroundColor = "rgba(146, 143, 143)";
                }
            }
        }
    }
    //After that I give +0.5 to my another counter when you click a pic and change the paragraph in the HTML
    tries += 0.5;
    document.querySelector('.tries').textContent = "Tries: "+Math.floor(tries);
    //If you the secound counter will be equal 10 you will lose - so do some CSS
    if(tries===10){
        imgDivs.style.display = "none"
        document.querySelector('.tries').textContent = "You lose!";
        document.querySelector('.tries').style.marginTop = "300px";
        document.querySelector('.tries').style.fontSize = "100px";
    }
    //Please, stop refresh my page
    e.preventDefault();
});
//If you do the hardcore way you will not use this.... got a pair, got free step, it's simple
checkBtn.addEventListener('click', () => {
    tries = tries - 1;
});