function changefontweight (){
    var getText=document.getElementById("matxt");
    if(getText.style.fontWeight=="normal"){
        getText.style.fontWeight="bold";
    }
else{getText.style.fontWeight="normal";
}
}
function changefontstyle (){
    var getText=document.getElementById("matxt");
    if(getText.style.fontStyle=="normal"){
        getText.style.fontStyle="italic";
    }
else{getText.style.fontStyle="normal";
}
}
function changetextdecoration (){
    var getText=document.getElementById("matxt");
    if(getText.style.textDecoration=="none"){
        getText.style.textDecoration="underline";
    }
else{getText.style.textDecoration="none";
}
}
function changefontsize(){
    var size=document.getElementById("size").value;
    console.log(size)
    document.getElementById("matxt").style.fontSize = size 
}
function changefontfamily(){
    
    var font = document.getElementById("f-f").value ;
    console.log(font)
    document.getElementById("matxt").style.fontFamily = font
}

