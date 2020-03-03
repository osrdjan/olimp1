<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name']; // ime pošiljaoca
  $email = $_POST['email']; // mejl pošiljaoca
  $subject = $_POST['subject']; // naslov poruke
  $message = $_POST['message']; // poruka

  $validationError = false;
  $errorEmail = false;

  if (empty($name) || empty($email) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "<span class='form-error'>Validation errors occurred!</span>";
    $validationError = true;
  }
  // elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  //   echo "<span class='form-error'>Write a valid e-mail adress!</span>";
  //   $errorEmail = true;
  // }
  else{
    echo "<span class='form-success'>Thanks for contacting us!<br>We will get back to you soon.</span>";
    $mailTo = "milanuebzs@gmail.com";
    $headers = "From: ".$email;
    $txt = "Ime: ".$name."\n\n".$message;
    mail($mailTo,$subject,$txt,$headers);
  }
}
else {
  echo "There was an error!";
}

?>


<script>

  var validationError = "<?php echo $validationError; ?>";
  //var errorEmail = "<?php //echo $errorEmail; ?>";

  if (validationError == true) {
    $("#alert-name, #alert-email, #alert-subject, #alert-message").addClass("alert-visibility");
  }

  if (validationError == false) {
    $("#contact-form").css("display", "none");
    $(".form-wrapper").css("padding", "3rem 1rem");
  }

  //  if (errorEmpty == true) {
  //    //$("#alert-name, #alert-email, #alert-subject, #alert-message").addClass("alert-visibility");
  //    $("#form-name, #form-email, #form-subject, #form-message").addClass("input-error");
  // }

  //  $("#form-name, #form-email, #form-subject, #form-message").removeClass("input-error");

  //  if (errorEmail == true) {
  //    $("#alert-email").addClass("alert-visibility");
  //    $("#form-email").addClass("email-error");
  //  }

  //  if (errorEmpty == false) {
  //    $("#form-name, #form-email, #form-subject, #form-message").val("");
  //  }
  
  //  $(".email-error").click(function(){
  //    $(".alert-visibility").css("display", "none");
  //  });

  //  $("#form-submit").click(function(){
  //    if (errorEmail == true) {
  //      $(".alert-visibility").css("display", "block");
  //    }
  //  });

  

  //  function validateEmail(email) {
  //    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //    return re.test(email);
  //  }

  //  function validate() {
  //    var email = $("#form-email").val();
  
  //    if (!validateEmail(email)) {
  //       $("#alert-email").addClass("alert-visibility");
  //       $("#form-email").addClass("email-error");
  //       $(".alert-visibility").css("display", "block");
  //    }
  //    else {
  //       $(".alert-visibility").css("display", "none");
  //    }
  //     return false;
  //  }



  //  $('.form-input').focusout(function(){
  //    check_empty();
  //  });

  //  function check_empty() {
  //    if($('.form-input').val() == '') {
  //      $("#form-name, #form-subject, #form-message").addClass("input-error");
  //    }
  //   }
  
  //  $('.form-input').focusout(function(){
  //    check_empty();
  //  });

  //  function check_empty() {
  //    if($('.form-input').val() == '') {
  //      $("#form-name, #form-subject, #form-message").addClass("input-error");
  //    }
  //  }

</script>