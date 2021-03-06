let mang = [];
function nhapMang() {
    let so = document.getElementById('number').value * 1;
    mang.push(so);
    document.getElementById('outputNumber').innerHTML = mang;
}
function tongCacSoDuong() {
    let tong = 0;
    for (let i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
            tong += mang[i];
        }
    }
    document.getElementById('outputNumber').innerHTML = 'Tổng các số dương là: '+ tong;
}


function demSoDuong() {
    let dem = 0;
    for (let i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
            dem++;
        }
    }
    document.getElementById('outputNumber').innerHTML = 'Có: ' + dem + ' số dương trong mảng';

}


function timSoMin() {
    let min = mang[0];
    for (let i = 0; i < mang.length; i++) {
        if (mang[i] < min) {
            min = mang[i];
        }
    }
    document.getElementById('outputNumber').innerHTML = 'số nhỏ nhất trong mảng là: ' + min;
}



function timSoMinDuong() {
    let min = mang[0];
    for (let i = 0; i < mang.length; i++) {
        if (mang[i] < min && mang[i] > 0) {
            min = mang[i];
        }
    }
    document.getElementById('outputNumber').innerHTML ='số dương nhỏ nhất là: '+ min;
}




function kiemTraSoChan(n){
    let flag = 1;
    if(n % 2 == 0){ 
        flag = 0;
    }
    return flag;
}

function timSoChanCuoiMang() {
    let kq = 0;
    for (let i = mang.length-1; i >=0; i--) {
        if(kiemTraSoChan(mang[i]) == 0){
            kq = 'số chẵn cuối mảng là: ' + mang[i];
            break;
        }
        else{
            kq = 'Trong mảng không cố số chẵn nào nên trả về: ' + (-1);
        }
    } 
    document.getElementById('outputNumber').innerHTML =  kq;
}


function doiChoGiaTri() {
    let so1 = document.getElementById('number1').value * 1;
    let so2 = document.getElementById('number2').value * 1;
    for (let i = 0; i < mang.length - 1; i++) {
        for (let j = i + 1; j < mang.length; j++) {
            if (so1 == i && so2 == j) {
                let temp = mang[i];
                mang[i] = mang[j];
                mang[j] = temp;
            }
        }
    }
    document.getElementById('outputNumber').innerHTML = 'Đổi vị trí '+ so1 + ' và ' + so2 + ' ta được mảng mới là: '+ mang;
}

function sapXepTangDan() {
    for (let i = 0; i < mang.length - 1; i++) {
        for (let j = i + 1; j < mang.length; j++) {
            if (mang[i] > mang[j]) {
                let temp = mang[i];
                mang[i] = mang[j];
                mang[j] = temp;
            }
        }
    }
    document.getElementById('outputNumber').innerHTML = 'Thứ tự tăng dần trong mảng là: '+ mang;
}
// Tìm số nguyên tố đầu tiên
function kiemTraSNT(n) {
    let a = true;
    if (n < 2) {
        a = false;
    }
    else {
        for (let i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                a = false;
                break;
            }
        }
    }
    //Kiểm tra biến
    if (a == true) {
        return n;
    }
    else {
        return 0;
    }
}
function timSoNguyenToDauTien() {
    let ketQua = 0;
    for (let i = 0; i < mang.length; i++) {
        if (kiemTraSNT(mang[i])) {
            ketQua = 'số nguyên tố đầu tiên là: ' + mang[i];
            break;
        }
        else {
            ketQua = 'Trong mảng không có số nguyên tố nào nên trả về: '+(-1);
        }
    }
    document.getElementById('outputNumber').innerHTML = ketQua;
}


function soSanhSoDuongVaAm() {
    let kq = '';
    let soDuong = 0;
    soDuong*1;
    let soAm = 0;
    soAm*1;
    for (let i = 0; i < mang.length; i++) {
        mang[i] < 0 ? (soAm +=1) : (soDuong +=1);
    }
    if(soAm>soDuong){
        kq = 'số âm nhiều hơn số dương ' + (soAm-soDuong) + ' số';
    }else{
        kq = 'số dương nhiều hơn số âm ' + (soDuong-soAm) + ' số';
    }
    document.getElementById('outputNumber').innerHTML = kq;
}

let arr = [];
function nhapMangSoThuc() {
    let number = document.getElementById('number3').value*1;
    arr.push(number);
    document.getElementById('outputNumber').innerHTML = arr;
}
function timSoNguyenTrongMang() {
    let dem = 0;
    for (let i = 0; i < arr.length; i++) {
        if(Number.isInteger(arr[i])){
            dem++;
        }
    }
    document.getElementById('outputNumber').innerHTML = 'Có '+ dem + ' số nguyên';
}