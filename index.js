const imgDivs = document.querySelector('.img-container');
const checkBtn = document.querySelector('.pair');
let imgContaierImages = document.querySelectorAll('.img-container img');
let imgContaierDivs = document.querySelectorAll('.img-container div');
let numbers1 = [];
let c0=0, c1=0, c2=0, c3=0, c4=0, c5=0;
let imageSource1 = "";
let imageSource2 = "";
let count=0;
let tries=0;

while(numbers1.length!=12){
    let r = Math.floor(Math.random()*6);
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

async function getImages(){
    const result = await fetch("https://picsum.photos/v2/list?page=2&limit=6");
    return result.status === 200 ? result.json() : console.log("Rejected");
}

async function loadImages(){
    const images = await getImages();
    for(let i = 0; i<=numbers1.length-1; i++)
    imgContaierImages[i].src=images[numbers1[i]].download_url;
}

loadImages();

imgDivs.addEventListener('click', e => {
    let classes = e.target.className;
    let behindImgShow = document.querySelector("."+classes+" img");
    document.querySelector("."+classes).style.backgroundColor="initial";
    count+=1;
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
    tries += 0.5;
    document.querySelector('.tries').textContent = "Tries: "+Math.floor(tries);
    if(tries===10){
        imgDivs.style.display = "none"
        document.querySelector('.tries').textContent = "You lose!";
        document.querySelector('.tries').style.marginTop = "300px";
        document.querySelector('.tries').style.fontSize = "100px";
    }
    e.preventDefault();
});

checkBtn.addEventListener('click', () => {
    tries = tries - 1;
});