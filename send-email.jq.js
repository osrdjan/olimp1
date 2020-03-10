//Ajax - Send Mail
// $(document).ready(function () {
//     $("form").submit(function (event) {
//         event.preventDefault();
//         var name = $("#form-name").val();
//         var email = $("#form-email").val();
//         var subject = $("#form-subject").val();
//         var message = $("#form-message").val();
//         var submit = $("#form-submit").val();

//         $(".notification-message").load("email-from-user.php", {
//             name: name,
//             email: email,
//             subject: subject,
//             message: message,
//             submit: submit
//         });
//     });
// });

//Form validation

$('#form-name').focusin(function () {
    if ($('#alert-name').hasClass('alert-visibility')) {
        $('#alert-name').removeClass('alert-visibility');
    }
});

$('#form-name').focusout(function () {
    check_name();
});

function check_name() {
    //var pattern = /^[a-zA-Z]/;
    var fname = $('#form-name').val();
    if ($.trim(fname) == '') {
        $("#alert-name").addClass("alert-visibility");
        //$(".empty-alert-visibility").css("display", "block");
    }
    else {
        $("#alert-name").removeClass("alert-visibility");
        //$(".empty-alert-visibility").css("display", "none");            
    }
}


$('#form-subject').focusin(function () {
    if ($('#alert-subject').hasClass('alert-visibility')) {
        $('#alert-subject').removeClass('alert-visibility');
    }
});

$('#form-subject').focusout(function () {
    check_subject();
});

function check_subject() {
    //var pattern = /^[a-zA-Z]*$/;
    var fsubject = $('#form-subject').val();
    if ($.trim(fsubject) == '') {
        $("#alert-subject").addClass("alert-visibility");
        //$(".empty-alert-visibility").css("display", "block");  
    }
    else {
        $("#alert-subject").removeClass("alert-visibility");
        //$(".subject-alert-visibility").css("display", "none");
    }
}


$('#form-message').focusin(function () {
    if ($('#alert-message').hasClass('alert-visibility')) {
        $('#alert-message').removeClass('alert-visibility');
    }
});

$('#form-message').focusout(function () {
    check_message();
});

function check_message() {
    //var pattern = /^[a-zA-Z]*$/;
    var fmessage = $('#form-message').val();
    if ($.trim(fmessage) == '') {
        $("#alert-message").addClass("alert-visibility");
        //$(".empty-alert-visibility").css("display", "block");
    }
    else {
        $("#alert-message").removeClass("alert-visibility");
        // $(".empty-alert-visibility").css("display", "none");
    }
}


$('#form-email').focusin(function () {
    if ($('#alert-email').hasClass('alert-visibility')) {
        $('#alert-email').removeClass('alert-visibility');
    }
});

$('#form-email').focusout(function () {
    validate();
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return re.test(email);
}

function validate() {
    var email = $("#form-email").val();
    if ($.trim(email) == '' || !validateEmail(email)) {
        $("#alert-email").addClass("alert-visibility");
    }
    else {
        $("#alert-email").removeClass("alert-visibility");
    }


    // if(email == '') {
    //     $("#alert-email").addClass("empty-alert-visibility");
    //     //$(".empty-alert-visibility").css("display", "block");
    // }
    // else if(!validateEmail(email)) {
    //     $("#alert-email").removeClass("empty-alert-visibility");
    //     $("#alert-email").addClass("alert-visibility");
    //     //$(".alert-visibility").css("display", "block");
    // }
    // else {
    //     $("#alert-email").removeClass("alert-visibility");
    //     //$(".alert-visibility").css("display", "none");
    // }
}



// $( document ).ready(function() {
//     $('.alert-text').width($('.alert-wrapper').width()+20);
// });

$(document).ready(function () {
    // $(".container").hover(function(){
    //     $(this).find(".overlay").toggleClass("overlay-active");
    // });

    $(".container").click(function () {
        $(this).find(".overlay").toggleClass("overlay-active");
    });
});

// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes


window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("contact-form");
    // var name = document.getElementById("form-name");
    // var email = document.getElementById("form-email");
    // var subject = document.getElementById("form-subject");
    // var message = document.getElementById("form-message");
    // var button = document.getElementById("form-submit");
    var status = document.getElementById("notification-message");   

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        form.style = "display: none ";
        status.innerHTML = "Thanks for contacting us!<br>We will get back to you soon.";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
            return re.test(email);
        }

        var name = $('#form-name').val();
        var email = $("#form-email").val();
        var subject = $("#form-subject").val();
        var message = $("#form-message").val();
        if ($.trim(name) == '' || $.trim(subject) == ''|| $.trim(message) == '' || $.trim(email) == '' || !validateEmail(email)) {
            error();
        }
        else {
            ajax(form.method, form.action, data, success, error);
        }
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}