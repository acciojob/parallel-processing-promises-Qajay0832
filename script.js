//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
    { url: "https://picsum.photos/id/237/200/300" },
    { url: "https://picsum.photos/id/238/200/300" },
    { url: "https://picsum.photos/id/239/200/300" },
];
function validImg(img) {
    return new Promise((resolve,reject) => {
        let image = new Image();
        image.onload = () => resolve(img.url);
        image.onerror = () => reject("Failed to load image's URL: " + img.url);
        image.src = img.url;
    })
}

function showImage() {
    let cases=[];
    images.forEach(image=>{
        cases.push(validImg(image))
    })
Promise.all(cases).then(response=>
    response.forEach(res=>{
        let image=document.createElement("img");
           image.setAttribute("src",res);
           output.appendChild(image)
    })
).catch(err=>{
    output.innerHTML=err;
})
}

btn.addEventListener("click", showImage);