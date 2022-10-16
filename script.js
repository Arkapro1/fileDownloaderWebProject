const link=document.querySelector("input");
const btn= document.querySelector("button");
btn.addEventListener("click",()=>
{   btn.innerHTML=`Downloading⚡⬇file......`;
    fetchFile(link.value);
}
);
function fetchFile(url){
    fetch(url).then(res=>res.blob()).then(file=>{
        let tempurl= URL.createObjectURL(file);
        // console.log(tempurl);
        let aTag=document.createElement("a");
        aTag.href=tempurl;
        // aTag.download=url.replace(/^.*[\\\/]/, '');
        aTag.download="fileName";
        document.body.appendChild(aTag);
        aTag.click();// to donwload;
        aTag.remove();// to remove after dwnld;
        URL.revokeObjectURL(tempurl);
        btn.innerHTML=`Download file`;
    }).catch(()=>{
        alert("file source is restricted");
        btn.innerHTML=`Download file`;
    })
}