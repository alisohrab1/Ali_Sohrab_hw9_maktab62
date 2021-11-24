$("#password").on("input", function () {
  checkPass();
});

function checkPass() {
  let currentPass = $("#password").val();
  if (currentPass === "") {
    $("#password").removeClass("border-success")
    $("#password").removeClass("border-danger")
    $("#password").addClass("border-primary")
    $("#addon-wrapping").removeClass("border-success")
    $("#addon-wrapping").removeClass("border-danger")
    $("#addon-wrapping").addClass("border-primary")
    $("#iconForPass").css("color", "");
    $("#iconForText").css("color", "");
    $("#iconForPass").css("color", "blue");
    $("#iconForText").css("color", "blue");
    $("#message2").removeClass("text-danger");
    $("#message").removeClass("text-danger");
    $("#message2").removeClass("text-success");
    $("#message").removeClass("text-success");
    $("#message").addClass("text-info");
    $("#message2").addClass("text-primary");
    $("#message").html(`Input is empty`);
    return;
  }
  let regexResult = currentPass.match(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g
  );
  if (regexResult) {
    console.log("ok");
    changeStyle("green");
  } else {
    console.log(" not ok");
    changeStyle("red");
  }

  //   console.log(regexResult);
}

function changeInputType1() {
  $("#password").attr("type", "text");
  $("#iconForText").addClass("d-none");
  $("#iconForPass").removeClass("d-none");
}

function changeInputType2() {
  $("#password").attr("type", "password");
  $("#iconForPass").addClass("d-none");
  $("#iconForText").removeClass("d-none");
}

function changeStyle(val) {
  if (val === "green") {
    $("#password").removeClass("border-primary")
    $("#password").removeClass("border-danger")
    $("#password").addClass("border-success")
    $("#addon-wrapping").removeClass("border-primary")
    $("#addon-wrapping").removeClass("border-danger")
    $("#addon-wrapping").addClass("border-success")
    $("#iconForPass").css("color", "");
    $("#iconForText").css("color", "");
    $("#iconForPass").css("color", "green");
    $("#iconForText").css("color", "green");
    $("#message").html(`GOOD`);
    $("#message").removeClass("text-info");
    $("#message").removeClass("text-danger");
    $("#message").addClass("text-success");
    $("#message2").removeClass("text-info");
    $("#message2").removeClass("text-danger");
    $("#message2").addClass("text-success");
  } else if (val === "red") {
    $("#password").removeClass("border-primary")
    $("#password").removeClass("border-success")
    $("#password").addClass("border-danger")
    $("#addon-wrapping").removeClass("border-primary")
    $("#addon-wrapping").removeClass("border-success")
    $("#addon-wrapping").addClass("border-danger")
    $("#iconForPass").css("color", "");
    $("#iconForText").css("color", "");
    $("#iconForPass").css("color", "red");
    $("#iconForText").css("color", "red");
    $("#message").html(
      `8 characters minimum of one capital one number and one special!`
    );
    $("#message").removeClass("text-info");
    $("#message").removeClass("text-success");
    $("#message").addClass("text-danger");
    $("#message2").removeClass("text-info");
    $("#message2").removeClass("text-success");
    $("#message2").addClass("text-danger");
  }
}
