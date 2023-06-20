document.addEventListener('DOMContentLoaded',function(){
    var btnRating = document.getElementById("filter-rating");
    var btnTokopedia = document.getElementById("filter-tokopedia");
    var btnLazada = document.getElementById("filter-lazada");
    var contentRating1 = document.getElementById('rating1');
    var contentRating2 = document.getElementById('rating2');
    var contentRating3 = document.getElementById('rating3');
    var contentTokped1 = document.getElementById('tokped1');
    var contentTokped2 = document.getElementById('tokped2');
    var contentTokped3 = document.getElementById('tokped3');
    var contentLazada1 = document.getElementById('lazada1');
    var contentLazada2 = document.getElementById('lazada2');
    var contentLazada3 = document.getElementById('lazada3');
    
    btnRating.addEventListener("click",e=>{
        e.preventDefault();
        btnRating.style.borderColor = "#2B4A9D";
        btnRating.style.color = "#2B4A9D";
        btnTokopedia.style.borderColor = "#C3ADAD";
        btnTokopedia.style.color = "black";
        btnLazada.style.borderColor = "#C3ADAD";
        btnLazada.style.color = "black";
        contentRating1.style.display = "flex";
        contentRating2.style.display = "flex";
        contentRating3.style.display = "flex";
        contentTokped1.style.display = "none";
        contentTokped2.style.display = "none";
        contentTokped3.style.display = "none";
        contentLazada1.style.display = "none";
        contentLazada2.style.display = "none";
        contentLazada3.style.display = "none";
    });

    btnTokopedia.addEventListener("click",e=>{
        e.preventDefault();
        btnTokopedia.style.borderColor = '#2B4A9D';
        btnTokopedia.style.color = '#2B4A9D';
        btnLazada.style.borderColor = '#C3ADAD';
        btnLazada.style.color = 'black';
        btnRating.style.borderColor = '#C3ADAD';
        btnRating.style.color = 'black';
        contentTokped1.style.display = "flex";
        contentTokped2.style.display = "flex";
        contentTokped3.style.display = "flex";
        contentRating1.style.display = "none";
        contentRating2.style.display = "none";
        contentRating3.style.display = "none";
        contentLazada1.style.display = "none";
        contentLazada2.style.display = "none";
        contentLazada3.style.display = "none";

    });

    btnLazada.addEventListener("click",e=>{
        e.preventDefault();
        btnLazada.style.borderColor = "#2B4A9D";
        btnLazada.style.color = "#2B4A9D";
        btnTokopedia.style.borderColor = "#C3ADAD";
        btnTokopedia.style.color = "black";
        btnRating.style.borderColor = "#C3ADAD";
        btnRating.style.color = "black";
        contentLazada1.style.display = "flex";
        contentLazada2.style.display = "flex";
        contentLazada3.style.display = "flex";
        contentTokped1.style.display = "none";
        contentTokped2.style.display = "none";
        contentTokped3.style.display = "none";
        contentRating1.style.display = "none";
        contentRating2.style.display = "none";
        contentRating3.style.display = "none";
    });


});