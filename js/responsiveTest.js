var size = $(document.getElementsByClassName("navbar-brand")).css('font-size');
var w = window.innerWidth;


function expect(par1, par2){
    if (par1 == par2) return true
    else return false;
}
function check18px(){
    if (w > 356 ) {
        if (expect('18px', size))
            console.log('Test passed')
        else 
             console.log('Test failed')
    }else {
        console.log('Test passed')
    }
}
function check15px(){
    if (w > 315 && w <= 356){
        if (expect('15px', size))
            console.log('Test passed')
        else 
             console.log('Test failed')
    }else {
        console.log('Test passed')
    }
}
function check13px(){
    if (w > 276 && w <= 315) {
        if (expect('13px', size))
            console.log('Test passed')
        else 
             console.log('Test failed')
    }else {
        console.log('Test passed')
    }
}
function check9px(){
    if (w > 249 && w <= 276) {
        if (expect('9px', size))
            console.log('Test passed')
        else 
            console.log('Test failed')
    }else {
        console.log('Test passed')
    } 
}
function checkFontSize(){
    check18px();
    check15px();
    check13px();
    check9px();
}

checkFontSize();