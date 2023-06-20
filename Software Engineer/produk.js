function getQueryParameterValue(parameterName) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameterName);
}

document.addEventListener('DOMContentLoaded',function(){
    var productName = getQueryParameterValue('search');
    var currProduct = document.getElementById("product-name");
    var sourceProduct = document.getElementById("source-product");
    currProduct.innerHTML = productName;
    sourceProduct.innerHTML = productName;
    var searchBar = document.getElementById("search")
    searchBar.value = productName
});