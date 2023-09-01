const historybox=document.querySelector("#search");
const searchinput=document.querySelector("#searchinput");
const body=document.querySelector("body");
const flag=0;
searchinput.addEventListener('click',function(){
	if(flag===0){
	historybox.style.visibility="visible";
	flag=1;
}else{
	historybox.style.visibility="visible";

}
	
})
historybox.addEventListener('mouseleave',function(){
	historybox.style.visibility="hidden";

});

const inputtext=document.querySelector('#searchinput');
const el=()=>{
	return inputtext.value;
}
const searchbtn=document.querySelector('#img3');
const inputarray=[];
const array=inputarray.unshift(inputtext.value);

const searchbox=document.querySelector('#search');
const pushdiv=`<div id="search-icon">
		 		<i id="IC" class="fa-solid fa-clock-rotate-left"></i>
		 		<p>mobile cover</p>
		 	</div>`;
searchbtn.addEventListener("click",function(){
	return searchbox.insertAdjacentHTML('beforeend',pushdiv);
});

/*products section like grocery , fasion*/
// adding links



/*Men's Bottom Wear*/
const fasion=document.querySelector('#fasion');
const fasionsction=document.querySelector('#fasion-section');
fasion.addEventListener('mouseover',function(){
   fasionsction.style.visibility="visible";
});
fasionsction.addEventListener('mouseleave',function() {
	 fasionsction.style.visibility="hidden";
});
const menbottomwear=document.querySelector('#fasion-product2');
const icon=document.querySelector('#icon2');
const category2=document.querySelector('#category2');
const category3=document.querySelector('#category3');
const category4=document.querySelector('#category4');
const category5=document.querySelector('#category5');
const category6=document.querySelector('#category6');
menbottomwear.addEventListener('mouseover',function(){
	menbottomwear.style.color="skyblue";
	icon.style.visibility="visible";
	category2.innerHTML="Men's Jeans";
	category3.innerHTML="Men's Trouser";
	category4.innerHTML="Men's Shorts";
	category5.innerHTML="Men's Cargos";
	category6.innerHTML="Men's Jackets";
});
menbottomwear.addEventListener('mouseleave',function(){
	icon.style.visibility="hidden";
	menbottomwear.style.color="black";
});

/*Women Ethnic*/

const womanethnicwear=document.querySelector('#fasion-product3');
const icon3=document.querySelector('#icon3');
womanethnicwear.addEventListener('mouseover',function(){
	womanethnicwear.style.color="skyblue";
	icon3.style.visibility="visible";
	category2.innerHTML="Woman Sarees";
	category3.innerHTML="Woman Cloths";
	category4.innerHTML="Woman Ehthics";
	category5.innerHTML="Woman Glons";
	category6.innerHTML="Woman Lehnga";
});
womanethnicwear.addEventListener('mouseleave',function(){
	icon3.style.visibility="hidden";
	womanethnicwear.style.color="black";
});

/*Woman Western*/


const womanwestern=document.querySelector('#fasion-product4');
const icon4=document.querySelector('#icon4');
womanwestern.addEventListener('mouseover',function(){
	womanwestern.style.color="skyblue";
	icon4.style.visibility="visible";
	category2.innerHTML="Woman NightSuits";
	category3.innerHTML="Woman Jeans";
	category4.innerHTML="Woman Tops";
	category5.innerHTML="Woman Mackups";
	category6.innerHTML="Woman Track Pants";
});
womanwestern.addEventListener('mouseleave',function(){
	icon4.style.visibility="hidden";
	womanwestern.style.color="black";
});

/*men's footwears*/


const mensfootwear=document.querySelector('#fasion-product5');
const icon5=document.querySelector('#icon5');
mensfootwear.addEventListener('mouseover',function(){
	mensfootwear.style.color="skyblue";
	icon5.style.visibility="visible";
	category2.innerHTML="Men's casual Shoes";
	category3.innerHTML="Men's Normal Shoes";
	category4.innerHTML="Sneakers";
	category5.innerHTML="Sliderts";
	category6.innerHTML="Crocks";
});
mensfootwear.addEventListener('mouseleave',function(){
	icon5.style.visibility="hidden";
	mensfootwear.style.color="black";
});

/*woman footwears*/

const womansfootwear=document.querySelector('#fasion-product6');
const icon6=document.querySelector('#icon6');
womansfootwear.addEventListener('mouseover',function(){
	womansfootwear.style.color="skyblue";
	icon6.style.visibility="visible";
	category2.innerHTML="women's casual Shoes";
	category3.innerHTML="women's Normal Shoes";
	category4.innerHTML="Heels";
	category5.innerHTML="Party Wears";
	category6.innerHTML="Chappal";
});
womansfootwear.addEventListener('mouseleave',function(){
	icon6.style.visibility="hidden";
	womansfootwear.style.color="black";
});

/*watches & asseccories*/

const watches=document.querySelector('#fasion-product7');
const icon7=document.querySelector('#icon7');
watches.addEventListener('mouseover',function(){
	watches.style.color="skyblue";
	icon7.style.visibility="visible";
	category2.innerHTML="Wallet";
	category3.innerHTML="Men & Women Belt";
	category4.innerHTML="Men & Women Wtches";
	category5.innerHTML="Party Wears";
	category6.innerHTML="Men & Women Sunglasses";
});
watches.addEventListener('mouseleave',function(){
	icon7.style.visibility="hidden";
	watches.style.color="black";
});

/*Bags*/

const bags=document.querySelector('#fasion-product8');
const icon8=document.querySelector('#icon8');
bags.addEventListener('mouseover',function(){
	bags.style.color="skyblue";
	icon8.style.visibility="visible";
	category2.innerHTML="Duffle Bag";
	category3.innerHTML="Bag";
	category4.innerHTML="Trolly";
	category5.innerHTML="Rucksacks";
	category6.innerHTML="BagPacks";
});
bags.addEventListener('mouseleave',function(){
	icon8.style.visibility="hidden";
	bags.style.color="black";
});

/*kids*/

const kids=document.querySelector('#fasion-product9');
const icon9=document.querySelector('#icon9');
kids.addEventListener('mouseover',function(){
	kids.style.color="skyblue";
	icon9.style.visibility="visible";
	category2.innerHTML="Boy Shirts";
	category3.innerHTML="Girls dresses";
	category4.innerHTML="Boys Pants";
	category5.innerHTML="Girls Jeans";
	category6.innerHTML="other ";
});
kids.addEventListener('mouseleave',function(){
	icon9.style.visibility="hidden";
	kids.style.color="black";
});

/*Winter*/
const winters=document.querySelector('#fasion-product10');
const icon10=document.querySelector('#icon10');
winters.addEventListener('mouseover',function(){
	winters.style.color="skyblue";
	icon10.style.visibility="visible";
	category2.innerHTML="Thermals";
	category3.innerHTML="jackets";
	category4.innerHTML="Sweaters";
	category5.innerHTML=" ";
	category6.innerHTML=" ";
});
winters.addEventListener('mouseleave',function(){
	icon10.style.visibility="hidden";
	winters.style.color="black";
});

[category2,category3,category4,category5,category6].forEach(function(red){
	red.addEventListener('mouseover',function() {
		red.style.color="skyblue";
	})
	red.addEventListener('mouseleave',function() {
		red.style.color="black";
	})
	

});
/*image slideer sction*/
let imageSlider=document.querySelector('#image');
let button1=document.querySelector('#prev');
let button2=document.querySelector('#next');
let images=["https://rukminim2.flixcart.com/fk-p-flap/844/140/image/c2d8527e77c55b8c.jpg?q=50",
"https://rukminim2.flixcart.com/fk-p-flap/50/50/image/5d29d1282e0d3164.jpg?q=50",
"https://rukminim2.flixcart.com/fk-p-flap/50/50/image/9527eeaa1f8cc740.png?q=50"];

let i=0;


button2.addEventListener('click',function(){
imageSlider.setAttribute('src',images[i]);
i++;
if(i>3){
	i=0;

}

});




button1.addEventListener('click',function(){
	imageSlider.setAttribute('src',images[i]);
	i--;
if(i<0)	{
  i=3;
}


});
setInterval(function(){
imageSlider.setAttribute('src',images[i]);
i++;
if(i>3){
	i=0;

}

},3000);

/*view all button*/
let viewAll=document.querySelector('#viewAll1');
  viewAll.addEventListener('click',function(){
	window.open("https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&wid=4.dealCard.OMU_3&otracker=hp_omu_Best%2Bof%2BElectronics_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_wc_view-all_3",target="_self")
});
   /*electronic div sction div slider */

   const container = document.getElementById('electronic_products');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const slideWidth = container.offsetWidth+2+2 ; 
const numVisibleSlides = Math.floor(container.offsetWidth / slideWidth);
const totalSlides = container.children.length;
let currentSlide = 0;

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();

  }
  if (currentSlide < 1){
  	prevButton.style.visibility="hidden";
  }
  
});

nextButton.addEventListener('click', () => {
  if (currentSlide < totalSlides - numVisibleSlides) {
    currentSlide++;
    updateSlider();
    prevButton.style.visibility="visible"
  }
});

function updateSlider() {
  const slidePosition = -currentSlide * slideWidth;
  container.style.transform = `translateX(${slidePosition}px)`;
}

/*adding links in slider div 1section*/
const product1=document.getElementById('Elproduct1');
const product2=document.getElementById('Elproduct2');
const product3=document.getElementById('Elproduct3');
const product4=document.getElementById('Elproduct4');
const product5=document.getElementById('Elproduct5');
const product6=document.getElementById('Elproduct6');
const product7=document.getElementById('Elproduct7');
const secondAd=document.getElementById('ad2');
product1.addEventListener('click',()=>window.open("https://www.flipkart.com/cameras/dslr-mirrorless/pr?sid=jek%2Cp31%2Ctrv&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.type%255B%255D%3DMirrorless&param=179&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTaG9wIE5vdyEiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgTWlycm9ybGVzcyBDYW1lcmFzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiRExMRzJYRENGQlhWVVpUSCIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_831e5628-de1d-44ba-acbf-13f0eb35bc71_3.Q5LU1U8PHMK6&ppt=None&ppn=None&ssid=cduijd7yq80000001692517215717&otracker=hp_omu_Best%2Bof%2BElectronics_2_3.dealCard.OMU_Q5LU1U8PHMK6_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_2_NA_view-all_3&cid=Q5LU1U8PHMK6",target="_self"));
product2.addEventListener('click',()=>window.open("https://www.flipkart.com/mobile-accessories/power-banks/~cs-zewisow11f/pr?sid=tyy%2C4mr%2Cfu6&collection-tab-name=Premium+PowerBanks&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTaG9wIE5vdyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlByZW1pdW0gUG93ZXJCYW5rcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_831e5628-de1d-44ba-acbf-13f0eb35bc71_3.UDG9W07DN4PD&ppt=None&ppn=None&ssid=cduijd7yq80000001692517215717&otracker=hp_omu_Best%2Bof%2BElectronics_4_3.dealCard.OMU_UDG9W07DN4PD_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_4_NA_view-all_3&cid=UDG9W07DN4PD",target="_self"));
product3.addEventListener('click',()=>window.open("https://www.flipkart.com/health-personal-care-appliances/~cs-t04l50abp7/pr?sid=zlw&collection-tab-name=Trimmer_OMU&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTM5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkJlc3Qgb2YgVHJpbW1lcnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJUTVJHRzdIQURGSkdHRUVGIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&fm=neo%2Fmerchandising&iid=M_831e5628-de1d-44ba-acbf-13f0eb35bc71_3.2IW4SJEJYQMC&ppt=None&ppn=None&ssid=cduijd7yq80000001692517215717&otracker=hp_omu_Best%2Bof%2BElectronics_3_3.dealCard.OMU_2IW4SJEJYQMC_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_3_NA_view-all_3&cid=2IW4SJEJYQMC",target="_self"));
product4.addEventListener('click',()=>window.open("https://www.flipkart.com/computers/computer-peripherals/printers-inks/printers/pr?sid=6bo%2Ctia%2Cffn%2Ct64&fm=neo%2Fmerchandising&iid=M_2731d14e-2583-4664-a065-6fc7ea504a6d_2_372UD5BXDFYS_MC.ES1XN5J8PT49&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=ES1XN5J8PT49&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DHP&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTM5OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJQcmludGVycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlBSTkRYSFpFNVI5SFVKSlkiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_831e5628-de1d-44ba-acbf-13f0eb35bc71_3.D54DFY00C5JD&ppt=None&ppn=None&ssid=cduijd7yq80000001692517215717&otracker=hp_omu_Best%2Bof%2BElectronics_1_3.dealCard.OMU_D54DFY00C5JD_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_1_NA_view-all_3&cid=D54DFY00C5JD",target="_self"));
product5.addEventListener('click',()=>window.open("https://www.flipkart.com/computers/monitors/pr?sid=6bo%2C9no&fm=neo%2Fmerchandising&iid=M_ce1a6f68-d7d2-4ae1-875c-0d0877d9a11f_2_372UD5BXDFYS_MC.ECL5SFI77NSY&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&cid=ECL5SFI77NSY&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DLenovo&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTc5NDkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNb25pdG9ycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6Ik1PTkZWNUhSTkY0UUZWRzQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_831e5628-de1d-44ba-acbf-13f0eb35bc71_3.ZIEW022R2RTS&ppt=None&ppn=None&ssid=cduijd7yq80000001692517215717&otracker=hp_omu_Best%2Bof%2BElectronics_5_3.dealCard.OMU_ZIEW022R2RTS_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_5_NA_view-all_3&cid=ZIEW022R2RTS",target="_self"));
product6.addEventListener('click',()=>window.open("https://www.flipkart.com/computers/computer-peripherals/printers-inks/printers/pr?sid=6bo%2Ctia%2Cffn%2Ct64&fm=neo%2Fmerchandising&iid=M_2731d14e-2583-4664-a065-6fc7ea504a6d_2_372UD5BXDFYS_MC.ES1XN5J8PT49&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=ES1XN5J8PT49&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DHP&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTM5OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJQcmludGVycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlBSTkRYSFpFNVI5SFVKSlkiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_831e5628-de1d-44ba-acbf-13f0eb35bc71_3.D54DFY00C5JD&ppt=None&ppn=None&ssid=cduijd7yq80000001692517215717&otracker=hp_omu_Best%2Bof%2BElectronics_1_3.dealCard.OMU_D54DFY00C5JD_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_1_NA_view-all_3&cid=D54DFY00C5JD",target="_self"));
product7.addEventListener('click',()=>window.open("https://www.flipkart.com/search?q=projectors&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",target="_self"));
secondAd.addEventListener('click',()=>window.open("https://www.flipkart.com/travel/flights?param=TTravel_Travel_DT-RHS_AW_NEW_AKASA-1299&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=C5ME8NIC6ZB8_IAD&otracker=hp_rhs_announcement_1_4.rhsAnnouncement.RHS_ANNOUNCEMENT_C5ME8NIC6ZB8",target="_self"));


/*slider div 2*/
 const container2 = document.getElementById('foodtoy_products');
const prevButton2 = document.getElementById('prevButton2');
const nextButton2 = document.getElementById('nextButton2');
const slideWidth2 = container2.offsetWidth+2+2 ; 
const numVisibleSlides2 = Math.floor(container2.offsetWidth / slideWidth2);
const totalSlides2 = container2.children.length;
let currentSlide2= 0;

prevButton2.addEventListener('click', () => {
  if (currentSlide2 > 0) {
    currentSlide2--;
    updateSlider2();
  }
  if (currentSlide2 < 1){
  	prevButton2.style.visibility="hidden";
  }
});

nextButton2.addEventListener('click', () => {
  if (currentSlide2 < totalSlides2 - numVisibleSlides2) {
    currentSlide2++;
    updateSlider2();
    prevButton2.style.visibility="visible"
  }
});

function updateSlider2() {
  const slidePosition2 = -currentSlide2 * slideWidth2;
  container2.style.transform = `translateX(${slidePosition2}px)`;
}

/*adding links in slider div 2*/

const ftproduct1=document.getElementById('Ftproduct1');
const ftproduct2=document.getElementById('Ftproduct2');
const ftproduct3=document.getElementById('Ftproduct3');
const ftproduct4=document.getElementById('Ftproduct4');
const ftproduct5=document.getElementById('Ftproduct5');
const ftproduct6=document.getElementById('Ftproduct6');
const ftproduct7=document.getElementById('Ftproduct7');
ftproduct1.addEventListener('click',()=>window.open("https://www.flipkart.com/sports/cycling/cycles/pr?sid=abc%2Culv%2Cixt&p%5B%5D=facets.tyre_size%255B%255D%3D27.5%2Binches&p%5B%5D=facets.tyre_size%255B%255D%3D28%2Binches&p%5B%5D=facets.tyre_size%255B%255D%3D29%2Binches&p%5B%5D=facets.brand%255B%255D%3DHERCULES&p%5B%5D=facets.brand%255B%255D%3DUrban%2BTerrain&p%5B%5D=facets.brand%255B%255D%3DHRX&p%5B%5D=facets.brand%255B%255D%3DLEADER&p%5B%5D=facets.brand%255B%255D%3DHERO&p%5B%5D=facets.brand%255B%255D%3DCRADIAC&p%5B%5D=facets.brand%255B%255D%3DAdrenex%2Bby%2BFlipkart&p%5B%5D=facets.brand%255B%255D%3DWALTX&p%5B%5D=facets.brand%255B%255D%3DVector%2B91&p%5B%5D=facets.brand%255B%255D%3DMontra&p%5B%5D=facets.brand%255B%255D%3DFIREFOX%2BBIKES&p%5B%5D=facets.fulfilled_by%255B%255D%3DPlus%2B%2528FAssured%2529&hpid=Lk-wso-VDfqk58fy3bl2IKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuSAzOTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiQ0NFRzZHRUVHTVVDSkdKTSIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdlYXJlZCBDeWNsZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_5a5df373-d9a0-479e-9d78-0d0a06d92f29_7.D44KL0ET2AE5&ppt=None&ppn=None&ssid=tyuez3lvkw0000001692515837648&otracker=hp_omu_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_2_7.dealCard.OMU_D44KL0ET2AE5_5&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_NA_dealCard_cc_2_NA_view-all_5&cid=D44KL0ET2AE5",target="_self"));
ftproduct2.addEventListener('click',()=>window.open("https://www.flipkart.com/toys/stuffed-toys/pr?sid=mgl%2C1zt&hpid=aYIiqog0ctRH4fZXM42Ro6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcHRvIDcwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTVEZGRUNIR0RVUjgzUERFIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiU29mdCBUb3lzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&fm=neo%2Fmerchandising&iid=M_5a5df373-d9a0-479e-9d78-0d0a06d92f29_7.OUL3W0VU1PEA&ppt=None&ppn=None&ssid=tyuez3lvkw0000001692515837648&otracker=hp_omu_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_6_7.dealCard.OMU_OUL3W0VU1PEA_5&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_NA_dealCard_cc_6_NA_view-all_5&cid=OUL3W0VU1PEA",target="_self"));
ftproduct3.addEventListener('click',()=>window.open("https://www.flipkart.com/search?q=stationery&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",target="_self"));
ftproduct4.addEventListener('click',()=>window.open("https://www.flipkart.com/automotive-accessories/helmets-and-riding-gear/helmet-and-accessories/biker-helmets/pr?sid=1mt%2Cztf%2Civ8%2Ctih&marketplace=FLIPKART&hpid=8c7ftGcyG0cjQM1vrbGcgap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIDY5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkhMTUdIU0hGVFdKQURDWlQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJSaWRlciBIZWxtZXRzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&fm=neo%2Fmerchandising&iid=M_cd87c07e-1584-439a-bded-8a717c2eb040_7.V5VSIKF9EZSQ&ppt=None&ppn=None&ssid=qqz7t8kn400000001692522749489&otracker=hp_omu_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_4_7.dealCard.OMU_V5VSIKF9EZSQ_5&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_NA_dealCard_cc_4_NA_view-all_5&cid=V5VSIKF9EZSQ",target="_self"));
ftproduct5.addEventListener('click',()=>window.open("https://www.flipkart.com/toys/action-toys/pr?sid=tng%2Csv3&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&hpid=rTHd3P8c2Eh-2fwrqbmKvqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcCB0byA3MCUgT2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiVFdQRkc4WEZUSFJLTU5QSiIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlRyaWN5Y2xlcyAmIFJpZGVvbnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_cd87c07e-1584-439a-bded-8a717c2eb040_7.E6ABSCK1PFW6&ppt=None&ppn=None&ssid=qqz7t8kn400000001692522749489&otracker=hp_omu_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_5_7.dealCard.OMU_E6ABSCK1PFW6_5&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_NA_dealCard_cc_5_NA_view-all_5&cid=E6ABSCK1PFW6",target="_self"));
ftproduct6.addEventListener('click',()=>window.open("https://www.flipkart.com/automotive-accessories/tyre-and-wheel/tyres/pr?sid=1mt%2Cw8q%2Cfos&marketplace=FLIPKART&hpid=-CSFSwmdIfW7QbIwFPGUDqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIDc5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlZURUdBMjlXWlVKRkRINFYiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUeXJlcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_cd87c07e-1584-439a-bded-8a717c2eb040_7.P95NTY8S8S8J&ppt=None&ppn=None&ssid=qqz7t8kn400000001692522749489&otracker=hp_omu_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_6_7.dealCard.OMU_P95NTY8S8S8J_5&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_NA_dealCard_cc_6_NA_view-all_5&cid=P95NTY8S8S8J",target="_self"));
ftproduct7.addEventListener('click',()=>window.open("https://www.flipkart.com/exercise-fitness/fitness-accessories/pr?sid=qoc%2Cacb&p%5B%5D=facets.fulfilled_by%255B%255D%3DPlus%2B%2528FAssured%2529&hpid=wXxDXjUDi0JocvmBiNvc9Kp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEzOSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkZHUEdHOFBINjVQNDM4RlUiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJHeW0gRXNzZW50aWFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_cd87c07e-1584-439a-bded-8a717c2eb040_7.I6MRHUZZIZNC&ppt=None&ppn=None&ssid=qqz7t8kn400000001692522749489&otracker=hp_omu_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_7_7.dealCard.OMU_I6MRHUZZIZNC_5&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Beauty%252C%2BFood%252C%2BToys%2B%2526%2Bmore_NA_dealCard_cc_7_NA_view-all_5&cid=I6MRHUZZIZNC",target="_self"));


/*sider div 3 */
 const container3 = document.getElementById('HomeImprovement_products');
const prevButton3 = document.getElementById('prevButton3');
const nextButton3 = document.getElementById('nextButton3');
const slideWidth3 = container3.offsetWidth+2+2 ; 
const numVisibleSlides3 = Math.floor(container3.offsetWidth / slideWidth3);
const totalSlides3 = container3.children.length;
let currentSlide3= 0;

prevButton3.addEventListener('click', () => {
  if (currentSlide3 > 0) {
    currentSlide3--;
    updateSlider3();
  }
  if (currentSlide3 < 1){
  	prevButton3.style.visibility="hidden";
  }
});

nextButton3.addEventListener('click', () => {
  if (currentSlide3 < totalSlides3 - numVisibleSlides3) {
    currentSlide3++;
    updateSlider3();
    prevButton3.style.visibility="visible"
  }
});

function updateSlider3() {
  const slidePosition3 = -currentSlide3 * slideWidth3;
  container3.style.transform = `translateX(${slidePosition3}px)`;
}
/* adding links in div3*/
/*h=home i=improvement*/
const hiproduct1=document.getElementById('HIproduct1');
const hiproduct2=document.getElementById('HIproduct2');
const hiproduct3=document.getElementById('HIproduct3');
const hiproduct4=document.getElementById('HIproduct4');
const hiproduct5=document.getElementById('HIproduct5');
const hiproduct6=document.getElementById('HIproduct6');
const hiproduct7=document.getElementById('HIproduct7');
hiproduct1.addEventListener('click',()=>window.open("https://www.flipkart.com/all/~cs-709e76e0da4128665474ef38d3ac5b69/pr?sid=h1m,um7,sd1,kkl&marketplace=FLIPKART&restrictLocale=true&fm=personalisedRecommendation%2FC5&iid=R%3Ag%3Bpt%3Ahp%3Buid%3A2987fe4f-3f3c-11ee-b8b5-1932db6e4bb3%3B.cid%3AS_F_N_h1m_um7_sd1_kkl__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_sd1_kkl_%3Bet%3AS%3Beid%3Ah1m_um7_sd1_kkl_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B&ppt=None&ppn=None&ssid=qqz7t8kn400000001692522749489&otracker=hp_reco_Home%2BImprovement%2BRange_1_8.dealCard.OMU_cid%3AS_F_N_h1m_um7_sd1_kkl__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_sd1_kkl_%3Bet%3AS%3Beid%3Ah1m_um7_sd1_kkl_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B_6&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC5_Home%2BImprovement%2BRange_DESKTOP_HORIZONTAL_dealCard_cc_1_NA_view-all_6&cid=cid%3AS_F_N_h1m_um7_sd1_kkl__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_sd1_kkl_%3Bet%3AS%3Beid%3Ah1m_um7_sd1_kkl_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B",target="_self"));
hiproduct2.addEventListener('click',()=>window.open("https://www.flipkart.com/all/~cs-da5d1cbb5ba4c636bc1161b4b4e5dcb1/pr?sid=h1m,um7,sd1,a6l&marketplace=FLIPKART&restrictLocale=true&fm=personalisedRecommendation%2FC5&iid=R%3Ag%3Bpt%3Ahp%3Buid%3A2987fe4f-3f3c-11ee-b8b5-1932db6e4bb3%3B.cid%3AS_F_N_h1m_um7_sd1_a6l__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_sd1_a6l_%3Bet%3AS%3Beid%3Ah1m_um7_sd1_a6l_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B&ppt=None&ppn=None&ssid=qqz7t8kn400000001692522749489&otracker=hp_reco_Home%2BImprovement%2BRange_2_8.dealCard.OMU_cid%3AS_F_N_h1m_um7_sd1_a6l__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_sd1_a6l_%3Bet%3AS%3Beid%3Ah1m_um7_sd1_a6l_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B_6&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC5_Home%2BImprovement%2BRange_DESKTOP_HORIZONTAL_dealCard_cc_2_NA_view-all_6&cid=cid%3AS_F_N_h1m_um7_sd1_a6l__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_sd1_a6l_%3Bet%3AS%3Beid%3Ah1m_um7_sd1_a6l_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B",target="_self"));
hiproduct3.addEventListener('click',()=>window.open("https://www.flipkart.com/all/~cs-68a99b9268ecadfabca994fa7e2a5609/pr?sid=h1m,um7,yse,eua&marketplace=FLIPKART&restrictLocale=true&fm=personalisedRecommendation%2FC5&iid=R%3Ag%3Bpt%3Ahp%3Buid%3A2987fe4f-3f3c-11ee-b8b5-1932db6e4bb3%3B.cid%3AS_F_N_h1m_um7_yse_eua__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_yse_eua_%3Bet%3AS%3Beid%3Ah1m_um7_yse_eua_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B&ppt=None&ppn=None&ssid=qqz7t8kn400000001692522749489&otracker=hp_reco_Home%2BImprovement%2BRange_3_8.dealCard.OMU_cid%3AS_F_N_h1m_um7_yse_eua__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_yse_eua_%3Bet%3AS%3Beid%3Ah1m_um7_yse_eua_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B_6&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC5_Home%2BImprovement%2BRange_DESKTOP_HORIZONTAL_dealCard_cc_3_NA_view-all_6&cid=cid%3AS_F_N_h1m_um7_yse_eua__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_yse_eua_%3Bet%3AS%3Beid%3Ah1m_um7_yse_eua_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B",target="_self"));
hiproduct4.addEventListener('click',()=>window.open("https://www.flipkart.com/all/~cs-2ad00b1a906b415b2bdfea856a40f952/pr?sid=b8s,ecr,xpl&marketplace=FLIPKART&restrictLocale=true&fm=personalisedRecommendation%2FC5&iid=R%3Ag%3Bpt%3Ahp%3Buid%3A2987fe4f-3f3c-11ee-b8b5-1932db6e4bb3%3B.cid%3AS_F_N_b8s_ecr_xpl__d_50-100__NONE_ALL%3Bnid%3Ab8s_ecr_xpl_%3Bet%3AS%3Beid%3Ab8s_ecr_xpl_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B&ppt=None&ppn=None&ssid=qqz7t8kn400000001692522749489&otracker=hp_reco_Home%2BImprovement%2BRange_4_8.dealCard.OMU_cid%3AS_F_N_b8s_ecr_xpl__d_50-100__NONE_ALL%3Bnid%3Ab8s_ecr_xpl_%3Bet%3AS%3Beid%3Ab8s_ecr_xpl_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B_6&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC5_Home%2BImprovement%2BRange_DESKTOP_HORIZONTAL_dealCard_cc_4_NA_view-all_6&cid=cid%3AS_F_N_b8s_ecr_xpl__d_50-100__NONE_ALL%3Bnid%3Ab8s_ecr_xpl_%3Bet%3AS%3Beid%3Ab8s_ecr_xpl_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B",target="_self"));
hiproduct5.addEventListener('click',()=>window.open("https://www.flipkart.com/all/~cs-4b9c8777c625dbbc718d3ad43fdd86a6/pr?sid=h1m,um7,sd1,oyg&marketplace=FLIPKART&restrictLocale=true&fm=personalisedRecommendation%2FC5&iid=R%3Ag%3Bpt%3Ahp%3Buid%3A2987fe4f-3f3c-11ee-b8b5-1932db6e4bb3%3B.cid%3AS_F_N_h1m_um7_sd1_oyg__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_sd1_oyg_%3Bet%3AS%3Beid%3Ah1m_um7_sd1_oyg_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B&ppt=None&ppn=None&ssid=qqz7t8kn400000001692522749489&otracker=hp_reco_Home%2BImprovement%2BRange_5_8.dealCard.OMU_cid%3AS_F_N_h1m_um7_sd1_oyg__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_sd1_oyg_%3Bet%3AS%3Beid%3Ah1m_um7_sd1_oyg_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B_6&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC5_Home%2BImprovement%2BRange_DESKTOP_HORIZONTAL_dealCard_cc_5_NA_view-all_6&cid=cid%3AS_F_N_h1m_um7_sd1_oyg__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_sd1_oyg_%3Bet%3AS%3Beid%3Ah1m_um7_sd1_oyg_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B",target="_self"));
hiproduct6.addEventListener('click',()=>window.open("https://www.flipkart.com/all/~cs-db9ab8551e86570eae13a72cf77ac43e/pr?sid=h1m,iee,kjp&marketplace=FLIPKART&restrictLocale=true&fm=personalisedRecommendation%2FC5&iid=R%3Ag%3Bpt%3Ahp%3Buid%3A2987fe4f-3f3c-11ee-b8b5-1932db6e4bb3%3B.cid%3AS_F_N_h1m_iee_kjp__d_50-100__NONE_ALL%3Bnid%3Ah1m_iee_kjp_%3Bet%3AS%3Beid%3Ah1m_iee_kjp_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B&ppt=None&ppn=None&ssid=qqz7t8kn400000001692522749489&otracker=hp_reco_Home%2BImprovement%2BRange_6_8.dealCard.OMU_cid%3AS_F_N_h1m_iee_kjp__d_50-100__NONE_ALL%3Bnid%3Ah1m_iee_kjp_%3Bet%3AS%3Beid%3Ah1m_iee_kjp_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B_6&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC5_Home%2BImprovement%2BRange_DESKTOP_HORIZONTAL_dealCard_cc_6_NA_view-all_6&cid=cid%3AS_F_N_h1m_iee_kjp__d_50-100__NONE_ALL%3Bnid%3Ah1m_iee_kjp_%3Bet%3AS%3Beid%3Ah1m_iee_kjp_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B",target="_self"));
hiproduct7.addEventListener('click',()=>window.open("https://www.flipkart.com/all/~cs-c4fb90c788dfc2c479a2a80c6c81a15c/pr?sid=h1m,um7,i06,chn&marketplace=FLIPKART&restrictLocale=true&fm=personalisedRecommendation%2FC5&iid=R%3Ag%3Bpt%3Ahp%3Buid%3A2987fe4f-3f3c-11ee-b8b5-1932db6e4bb3%3B.cid%3AS_F_N_h1m_um7_i06_chn__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_i06_chn_%3Bet%3AS%3Beid%3Ah1m_um7_i06_chn_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B&ppt=None&ppn=None&ssid=qqz7t8kn400000001692522749489&otracker=hp_reco_Home%2BImprovement%2BRange_8_8.dealCard.OMU_cid%3AS_F_N_h1m_um7_i06_chn__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_i06_chn_%3Bet%3AS%3Beid%3Ah1m_um7_i06_chn_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B_6&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2FC5_Home%2BImprovement%2BRange_DESKTOP_HORIZONTAL_dealCard_cc_8_NA_view-all_6&cid=cid%3AS_F_N_h1m_um7_i06_chn__d_50-100__NONE_ALL%3Bnid%3Ah1m_um7_i06_chn_%3Bet%3AS%3Beid%3Ah1m_um7_i06_chn_%3Bmp%3AF%3Bct%3Ad%3Bat%3ADEFAULT%3B",target="_self"));



/*adding vertical line in after every word in about sectiondiv1*/ 
const paragraphs = document.querySelectorAll('#paragraph');

paragraphs.forEach(paragraph => {
  const words = paragraph.textContent.trim().split(' ');

  paragraph.innerHTML = words.map(word => word + '<span id="vertical-line"></span>').join(' ');
});
const grocery=document.getElementById('grocery');
const mobile=document.getElementById('mobile');
const shoplistFasion=document.getElementById('fasion');
const electronic=document.getElementById('electronic');
const furniture=document.getElementById('furniture');
const applinces=document.getElementById('applinces');
const travel=document.getElementById('travel');
const toys=document.getElementById('toys');
const twowheelers=document.getElementById('twowheelers');

grocery.addEventListener('click',function(){
	window.open("https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_da3a615e-ebda-41ef-9f0b-3b4b492e8e18_1_372UD5BXDFYS_MC.CBUR1Q46W5F1&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Grocery_CBUR1Q46W5F1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L0_view-all&cid=CBUR1Q46W5F1","_self")
});

mobile.addEventListener('click',function(){
	window.open("https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_da3a615e-ebda-41ef-9f0b-3b4b492e8e18_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J","_self")
});

shoplistFasion.addEventListener('click',function(){
	window.open("https://www.flipkart.com/search?q=fasion&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&as-pos=1&as-type=HISTORY","_self")
});

electronic.addEventListener('click',function(){
	window.open("https://www.flipkart.com/search?q=electronic&as=on&as-show=on&otracker=AS_Query_HistoryAutoSuggest_1_3_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_3_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=electronic&requestId=bbdc6879-c25f-4075-9531-f81ef163724e&as-backfill=on","_self")
});

furniture.addEventListener('click',function(){
	window.open("https://www.flipkart.com/search?q=furniture&sid=wwe%2C7p7&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=furniture%7CBeds+%26+More&requestId=e7b000db-91da-4d87-91f3-c081bfdf96a7&as-backfill=on","_self")
});

applinces.addEventListener('click',function(){
	window.open("https://www.flipkart.com/tvs-and-appliances-new-clp-store?fm=neo%2Fmerchandising&iid=M_e150a377-e728-40dd-8866-19eca2347428_1_372UD5BXDFYS_MC.LO4IWVHA61BX&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Appliances_LO4IWVHA61BX&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L0_view-all&cid=LO4IWVHA61BX","_self")
});

travel.addEventListener('click',function(){
	window.open("https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_e150a377-e728-40dd-8866-19eca2347428_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321","_self")
});

toys.addEventListener('click',function(){
	window.open("https://www.flipkart.com/toysclp-store?fm=neo%2Fmerchandising&iid=M_e150a377-e728-40dd-8866-19eca2347428_1_372UD5BXDFYS_MC.A6A2ZZGHEZUT&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Beauty%252C%2BToys%2B%2526%2BMore~Toys%2B%2526%2BSchool%2BSupplies_A6A2ZZGHEZUT&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L1_view-all&cid=A6A2ZZGHEZUT","_self")
});

twowheelers.addEventListener('click',function(){
	window.open("https://www.flipkart.com/two-wheelers-store?fm=neo%2Fmerchandising&iid=M_e150a377-e728-40dd-8866-19eca2347428_1_372UD5BXDFYS_MC.SCJPZ04TFJJM&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Two%2BWheelers~Petrol%2BVehicles_SCJPZ04TFJJM&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=SCJPZ04TFJJM","_self")
});