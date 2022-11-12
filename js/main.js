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

document.querySelector("#TSSImg").addEventListener("mouseover",function() {Hover(true,"TSS")});
document.querySelector("#TSSImg").addEventListener("mouseout",function() {Hover(false,"TSS")});

document.querySelector("#MispelImg").addEventListener("mouseover",function() {Hover(true,"Mispel")});
document.querySelector("#MispelImg").addEventListener("mouseout",function() {Hover(false,"Mispel")});

document.querySelector("#SeekingSolanumImg").addEventListener("mouseover",function() {Hover(true,"SeekingSolanum")});
document.querySelector("#SeekingSolanumImg").addEventListener("mouseout",function() {Hover(false,"SeekingSolanum")});

document.querySelector("#ReincarnationImg").addEventListener("mouseover",function() {Hover(true,"Reincarnation")});
document.querySelector("#ReincarnationImg").addEventListener("mouseout",function() {Hover(false,"Reincarnation")});

document.querySelector("#SnowmanImg").addEventListener("mouseover",function() {Hover(true,"Snowman")});
document.querySelector("#SnowmanImg").addEventListener("mouseout",function() {Hover(false,"Snowman")});

document.querySelector("#SprigganImg").addEventListener("mouseover",function() {Hover(true,"Spriggan")});
document.querySelector("#SprigganImg").addEventListener("mouseout",function() {Hover(false,"Spriggan")});

document.querySelector("#VanguardImg").addEventListener("mouseover",function() {Hover(true,"Vanguard")});
document.querySelector("#VanguardImg").addEventListener("mouseout",function() {Hover(false,"Vanguard")});

document.querySelector("#RCTImg").addEventListener("mouseover",function() {Hover(true,"RCT")});
document.querySelector("#RCTImg").addEventListener("mouseout",function() {Hover(false,"RCT")});

document.querySelector("#SquireImg").addEventListener("mouseover",function() {Hover(true,"Squire")});
document.querySelector("#SquireImg").addEventListener("mouseout",function() {Hover(false,"Squire")});

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