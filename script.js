

const tombol=document.querySelector('#bawah #estimasi form[name="estimasi"] input[name="estimasikan"]');
const next=document.querySelector('#tengah #produk #gambar input[name="next"]');
const produk=document.querySelector('#tengah #produk #gambar img');
const back=document.querySelector('#tengah #produk #gambar input[name="back"]');
const harga=1500;
let a=1;
const kirim=document.querySelector('#bawah #hubungi form[name="total"] input[name="kirim"]');



function sleep(ms){
	return new Promise(resolve=>setTimeout(resolve,ms));
}





tombol.addEventListener("click",function(){
// function jumlahkan(){
	const jumlahnya=document.querySelector('#bawah #estimasi form[name="estimasi"] input[name="jumlah"]').value;
	if (Number.isInteger(parseInt(jumlahnya))&&jumlahnya>0) {
let hasil=harga*jumlahnya;
alert(`Perkiraan total harga Rp.${hasil}`);

	}
	else{
alert("input tidak valid");
	}

});


async function preview()
{
	
	
	for (var i = 1; i >= 0;) {
		
		// 		produk.src=`produk/produk${a}.jpeg`;
		// a++;
		// if (a==5) {
		// 	a=1;
berikutnya();
		// }
		await sleep(3000);

	}



}

window.onload=()=>{
	preview();
};

// next.addEventListener("click",function(){


// });

// back.addEventListener("click",function(){

// 	a--
// 	if (a==0) {
// 		a=4;
// 	}
	
// produk.src=`produk/produk${a}.jpeg`;
// });

function berikutnya(){
	a++
	if (a==5) {
		a=1;
	}
	
produk.src=`produk/produk${a}.jpeg`;
}
function sebelumnya(){
		a--
	if (a==0) {
		a=4;
	}
	
produk.src=`produk/produk${a}.jpeg`;
}

next.onclick=berikutnya;
back.onclick=sebelumnya;

kirim.addEventListener('click',function(){
	//harus ada if untuk isian data tidak boleh kosong
const total=document.querySelector('#bawah #hubungi form[name="total"] input[name="jumlah"]').value;
const pesan=`halo saya membeli batu-bata sebanyak ${total}`;
const url=`https://wa.me/6282136687186?text=${encodeURIComponent(pesan)}`;
window.open(url,"_blank");
});