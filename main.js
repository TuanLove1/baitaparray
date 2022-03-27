let mang = [];
function nhapMang(){
    let so = document.getElementById('number').value*1;
    mang.push(so);
    document.getElementById('outputNumber').innerHTML = mang;
}
function tongCacSoDuong(){
    let tong = 0;
    for (let i = 0; i < mang.length; i++) {
        if(mang[i] > 0){
            tong += mang[i];
        }
    }
    document.getElementById('outputNumber').innerHTML = tong;
}
function demSoDuong(){
    let dem = 0;
    for (let i = 0; i < mang.length; i++) {
        if(mang[i]> 0 ){
            dem++;
        }        
    }
    document.getElementById('outputNumber').innerHTML = dem;

}
function timSoMin(){
    let min = mang[0];
    for (let i = 0; i < mang.length; i++) {
        if(mang[i] < min){
            min = mang[i];
        }
    }
    document.getElementById('outputNumber').innerHTML = min;
}
function timSoMinDuong(){
    let min = mang[0];
    for (let i = 0; i < mang.length; i++) {
        if(mang[i] < min && mang[i] > 0){
            min = mang[i];
        }
    }
    document.getElementById('outputNumber').innerHTML = min;
}
function timSoChanCuoiMang(){
    let lastE = mang[mang.length-1];
    let kq = 0;
    for (let i = 0; i < mang.length; i++) {
       if(lastE % 2 == 0){
           kq = mang[i];
       }
       else{
           kq = -1;
       }
    }
    document.getElementById('outputNumber').innerHTML = kq;
}
function doiChoGiaTri(){
    
}