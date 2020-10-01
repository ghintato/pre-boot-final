$(function () {
    $('#myTab li:last-child a').tab('show')
})


// chat

$('#chat-form').submit(function(){
    var chatName = $('#chat-name').val();
    var chatMessage = $('#chat-message').val();
    var currentdate = new Date(); 
    var datetime = "" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    $('#chatbox-field').append('<p class="m-3"><b>' + chatName + '</b><span class="mx-5">'+ datetime + '</span></p><p id="msg" class="mb-3">' + chatMessage + '</p><p></p>');
    $('#chat-name').val('');
    $('#chat-message').val('');

    return false;
})





// register 

//tos
$("#tos").click(function () {
    $("#tos-text").toggle()
});

//validation

$(function () {

    $('#username-error').hide();
    $('#password-error').hide();
    $('#retype-error').hide();
    $('#tos-error').hide();
    $('#country-selection-error').hide();

    var usernameError = false;
    var passwordError = false;
    var retypeError = false;
    var firstNameError = false;
    var tosError = false;
    var countryError = false;

    $('#form-username').focusout(function () {
        validateUsername();
    });
    $('#form-password').focusout(function () {
        validatePassword();
    });
    $('#form-retype').focusout(function () {
        validateRetype();
    });    
    $('#form-first-name').focusout(function () {
        validateFirstName();
    });    
    $('#inputCountry').focusout(function () {
        validateCountry();
    });    
    $('#form-check-tos').click(function () {
        validateTosCheck();
    });


    function validateUsername(){
        var usernameLength = $('input#form-username').val().length;
        
        if(usernameLength < 5 || usernameLength > 20){
            $('#username-error').html("Username should 5-20 characters long.");
            $('#username-error').show();
            usernameError = true;
        } else {
            $('#username-error').hide();
        }
    }

function validatePassword(){
    var passwordSafety = $('input#form-password').val().length;
        
    if(passwordSafety < 8){
        $('#password-error').html("Your password must be more than 8 characters long. For more secure passwords it is advised to include both lowercase and uppercase letters as well as numbers.");
        $('#password-error').show();
        passwordError = true;
    } else {
        $('#password-error').hide();
    }
}

function validateRetype(){
    var password = $('#form-password').val();
    var passwordRetype = $('#form-retype').val();

    if (password != passwordRetype) {
        $('#retype-error').html("Passwords do not match.");
        $('#retype-error').show();
        retypeError = true;
    } else {
        $('#retype-error').hide();
    }
}
function validateFirstName(){
    var firstName = $('input#form-first-name').val().length;

    if (firstName < 1){
        $('#first-name-error').html("This field is required.");
        $('#first-name-error').show();
        firstNameError = true;
    } else {
        $('#first-name-error').hide();
    }
}

function validateTosCheck(){
    if ($('#form-check-tos').is(":checked")) {
    $('#tos-error').hide();
    } else {
        $('#tos-error').html("You must agree to our terms and conditions to continue.");
        $('#tos-error').show();
        tosError = true;
    }
}

function validateCountry(){
    if ($('#inputCountry').val()==0){
        $('#country-selection-error').html("Please select your country.");
        $('#country-selection-error').show();
        countryError = true;
    } else {
        $('#country-selection-error').hide();
    } 
}



$('#form-submit').click(function(){

    
    usernameError = false;
    passwordError = false;
    retypeError = false;
    firstNameError = false;
    countryError = false;
    tosError = false;

    validateUsername();
    validatePassword();
    validateRetype();
    validateFirstName();
    validateCountry();
    validateTosCheck();



    if (usernameError == false && passwordError == false && retypeError == false && firstNameError == false && countryError == false && tosError == false){
        return $('#registration').html("<h3>Registration successful!</h3>");
    } else {
        return false;
    }

});


});


