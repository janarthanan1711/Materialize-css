const $ = (target)=>{
    const elems = document.querySelectorAll(target)
    return (elems.length>1) ? elems : document.querySelector(target);
}
document.addEventListener('DOMContentLoaded', function(){
        M.Sidenav.init($('.sidenav'),{
            edge:  "right"
        });
        M.Slider.init($('.slider'));
});