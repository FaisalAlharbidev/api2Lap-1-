// https://fakestoreapi.com/products
let mainCont=document.getElementById("continer")

fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => 
    
    data.map(itam=>{
        // console.log(data)
        console.log(itam.title)
        let text =document.createElement("p")
        text.innerText=itam.title
        mainCont.appendChild(text)
        // image

        let img=document.createElement("img")
        img.src=itam.image
        mainCont.appendChild(img)
        
    })
);
  
        
    
    



// for(i=0; i >data.)
// let img = document.createElement('img');

// img.src=data.img
// document.getElementById('body').appendChild(img);