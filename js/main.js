function Hover(mouseIn, textName)
{
    if(mouseIn == true)
    {
        document.querySelector("#" + textName + "-hover").setAttribute("style","display:block");
    }
    else
    {
        document.querySelector("#" + textName + "-hover").setAttribute("style","display:none");
    }
}

document.querySelector("#TSS").addEventListener("mouseover",function() {Hover(true,"TSS")});
document.querySelector("#TSS").addEventListener("mouseout",function() {Hover(false,"TSS")});

document.querySelector("#Mispel").addEventListener("mouseover",function() {Hover(true,"Mispel")});
document.querySelector("#Mispel").addEventListener("mouseout",function() {Hover(false,"Mispel")});

document.querySelector("#SeekingSolanum").addEventListener("mouseover",function() {Hover(true,"SeekingSolanum")});
document.querySelector("#SeekingSolanum").addEventListener("mouseout",function() {Hover(false,"SeekingSolanum")});

document.querySelector("#Snowman").addEventListener("mouseover",function() {Hover(true,"Snowman")});
document.querySelector("#Snowman").addEventListener("mouseout",function() {Hover(false,"Snowman")});

function stopAllVideos()
{
    let modals = document.querySelectorAll("modal");

    for(let i = 0; i < modals.length; i++)
    {
        if(modals[i].display === 'none')
        {
            console.log("yes");
        }
    }

    let videos = document.querySelectorAll("iframe");

    for(let i = 0; i < videos.length; i ++)
    {
        videos[i].src = videos[i].src;
    } 
}