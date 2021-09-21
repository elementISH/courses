// monthly to yearly switch

let animationDiv = $(".animation-div");
let yearlyBtn = $(".btn-yearly");
let monthlyBtn =  $(".btn-monthly");
let newPrice;

function changeToYearly() {
    animationDiv.css('display', 'block');
    monthlyBtn.css('background', '#fff');
    monthlyBtn.css('color', '#002147');
    animationDiv.animate({right: '365px'}, 500).promise().done(function(res){
        yearlyBtn.css('background', '#00b2b2');
        yearlyBtn.css('color', '#fff');
        animationDiv.css('display', 'none');
        $(".pricing__header").each(function(priceInList, price) {
            newPrice = +$(price).text() * 3;
            $(price).html(newPrice.toFixed(2))
            })
        })
}

function changeToMonthly() {
    animationDiv.css('display', 'block');
    yearlyBtn.css('background', '#fff');
    yearlyBtn.css('color', '#002147');
    animationDiv.animate({right: '500px'}, 500).promise().done(function(res){
        monthlyBtn.css('background', '#00b2b2');
        monthlyBtn.css('color', '#fff');
        animationDiv.css('display', 'none');
        $(".pricing__header").each(function(priceInList, price) {
        newPrice = +$(price).text() / 3;
        $(price).html(newPrice.toFixed(2))
    })
}

$(yearlyBtn).on('click', changeToYearly);
$(monthlyBtn).on('click', changeToMonthly);