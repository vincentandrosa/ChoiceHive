document.addEventListener('DOMContentLoaded', function() {
    let search = document.getElementById("search-link");
    let searchBar = document.getElementById("search");
    search.addEventListener("click",(e)=>{
        e.preventDefault();
        var searchVal = document.getElementById("search").value;
        if(searchVal!=""){
            var url = "ProductPage.html?search=" + encodeURIComponent(searchVal);
            window.location.href = url;
        }
    });
    searchBar.addEventListener("keypress",(e)=>{
        if(e.key === "Enter"){
            e.preventDefault();
            var searchVal = document.getElementById("search").value;
            if(searchVal!=""){
                var url = "ProductPage.html?search=" + encodeURIComponent(searchVal);
                window.location.href = url;
            }
        }
    });
});