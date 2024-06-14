function clock(){
    let houer=document.getElementById
    ('houer');
    let minutes=document.getElementById
    ('minutes');
    let sceand=document.getElementById
    ('sceand');
    let period=document.getElementById
    ('period');


    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let AMPM= h >= 12 ? "AM" :"PM";

    if(h>12){
        h = h-12;
    }
    h =( h < 10) ? "0" + h : h;
    m =( m < 10) ? "0" + m : m;
    s =( s < 10) ? "0" + s : s;

    houer.innerHTML=h;
    minutes.innerHTML=m;
    sceand.innerHTML=s;
    period.innerHTML=AMPM;
}
setInterval (clock,1000);
