
/*
function inViewport(obj)
{
    let tops = obj.getBoundingClientRect().top;
    let bottoms = obj.getBoundingClientRect().bottom;

    console.log(tops,",",bottoms);
}*/

window.onscroll = function() {scrolls()};

function scrolls(){
    let items=document.getElementById("content-list").getElementsByTagName('li');
    for(let i=0;i<items.length;i++)
    {
        let tops=items[i].getBoundingClientRect().top;
        let bottoms=items[i].getBoundingClientRect().bottom;
        if(bottoms >0 && tops<window.innerHeight)
        {
            let temp=document.getElementById("side-list").getElementsByTagName('li');
            let temp2=temp[i].getElementsByTagName('a');
            temp2[0].style.color="blue";
        }
        else{
            let temp=document.getElementById("side-list").getElementsByTagName('li');
            let temp2=temp[i].getElementsByTagName('a');
            temp2[0].style.color="black";
        }
    }
}
