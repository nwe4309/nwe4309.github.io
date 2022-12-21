// $(document).ready(function(){
//   $('.modal').each(function(){
//       var src = $(this).find('iframe').attr('src');
//     $(this).on('click', function(){
//       $(this).find('iframe').attr('src', '');
//       $(this).find('iframe').attr('src', src);
//     });
//   });
// });

// $(document).ready(function(){
// $('.modal').on('hidden.bs.modal', function(e) {
//   var $iframes = $(e.target).find('iframe');
//   $iframes.each(function(index, iframe){
//   $(iframe).attr('src', $(iframe).attr('src'));
//   });
// })
// });

// For whatever reason, only works most of the time...
$(document).ready(function(){
  $('#ShatteringSwords').on('hidden.bs.modal', function () {
    console.log("tss called");
    $("#ShatteringSwords iframe").attr("src", $("#ShatteringSwords iframe").attr("src"));
  });
});

// For some reason, the hidden.bs.modal event only works for the first modal on the page
// $(document).ready(function(){
//   console.log("on ready");
//   $('#Mispel').on('hide.bs.modal', function () {
//     console.log("called");
//     $("#Mispel iframe").attr("src", $("#Mispel iframe").attr("src"));
//   });
// });

// $(document).ready(function(){
//   $('#SeekingSolanum').on('hidden.bs.modal', function () {
//     console.log("SeekingSolanum called");
//     $("#SeekingSolanum iframe").attr("src", $("#SeekingSolanum iframe").attr("src"));
//   });
// });

// Horrible horrible horrible solution but it will have to do for now.
window.onload = function() {            
  function test() 
  {
    if(document.getElementById("ShatteringSwords").style.display != "block")
    {
      $("#ShatteringSwords iframe").attr("src", $("#ShatteringSwords iframe").attr("src"));
    }
    if(document.getElementById("Mispel").style.display != "block")
    {
      $("#Mispel iframe").attr("src", $("#Mispel iframe").attr("src"));
    }
    if(document.getElementById("SeekingSolanum").style.display != "block")
    {
      $("#SeekingSolanum iframe").attr("src", $("#SeekingSolanum iframe").attr("src"));
    }
    if(document.getElementById("Reincarnation").style.display != "block")
    {
      $("#Reincarnation iframe").attr("src", $("#Reincarnation iframe").attr("src"));
    }
    if(document.getElementById("Snowman").style.display != "block")
    {
      $("#Snowman iframe").attr("src", $("#Snowman iframe").attr("src"));
    }
    if(document.getElementById("Spriggan").style.display != "block")
    {
      $("#Spriggan iframe").attr("src", $("#Spriggan iframe").attr("src"));
    }
    if(document.getElementById("RCT").style.display != "block")
    {
      $("#RCT iframe").attr("src", $("#RCT iframe").attr("src"));
    }
    if(document.getElementById("Vanguard").style.display != "block")
    {
      $("#Vanguard iframe").attr("src", $("#Vanguard iframe").attr("src"));
    }
    if(document.getElementById("Squire").style.display != "block")
    {
      $("#Squire iframe").attr("src", $("#Squire iframe").attr("src"));
    }
  }
  setInterval(test, 1000);
}

function includeHTML() 
{
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }