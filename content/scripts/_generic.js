// form validation

function validateEmail(email) {
    const REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return REGEX.test(email);
  }
  
  function validate(mail) {
    const XHTTP = new XMLHttpRequest();
    const EMAIL = $(mail);
    const LABEL = $('.validation-text');
    const FORM = $('.subscribe-form');
    const SUBSCRIBEBUTTON = $('.subscribe-btn');
    if (validateEmail(EMAIL.val())) {
        // valid
        XHTTP.open("GET", "demo_get2.asp?fname=Henry&lname=Ford");
        LABEL.text("email is valid! ");
        LABEL.removeClass("icon-no-email");
        LABEL.removeClass("icon-invalid");
        LABEL.addClass("icon-valid validation-text");
        FORM.css('border-color', 'green');
        SUBSCRIBEBUTTON.attr('disabled', false);
        LABEL.css('color', 'green');
    } else if(!EMAIL.val()){
        // no email
        LABEL.text("please enter an email! ");
        LABEL.removeClass("icon-invalid");
        LABEL.removeClass("icon-valid");
        LABEL.addClass("icon-no-email validation-text");
        FORM.css('border-color', '#dba644');
        SUBSCRIBEBUTTON.attr('disabled', true);
        LABEL.css('color', '#dba644');
    } else {
        // invalid
        LABEL.text("email is invalid! ");
        LABEL.removeClass("icon-no-email");
        LABEL.removeClass("icon-valid");
        LABEL.addClass("icon-invalid validation-text");
        FORM.css('border-color', 'red');
        SUBSCRIBEBUTTON.attr('disabled', true);
        LABEL.css('color', 'red');
    }
    return;
}

// search popup
let searchInputContainer = document.getElementById('search__container');

// get full document height

var body = document.body,
html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                   html.clientHeight, html.scrollHeight, html.offsetHeight );

function popupSearch() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    searchInputContainer.style.display = "block";
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
    searchInputContainer.style.height = height + 'px'
}
function closePopup() {
    searchInputContainer.style.display = "none";
    document.getElementsByTagName('body')[0].style.overflow = "auto";
}
