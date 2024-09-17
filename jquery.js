$(document).ready(function () {
    $("button").click(function (event) {
        event.preventDefault(); 

        var firstName = $("input[placeholder='sdas']").val();
        var lastName = $("input[placeholder='Enter your Last Name']").val();
        var email = $("input[type='email']").val();
        var mobile = $("input[type='tel']").val();
        var gender = $("input[type='radio']:checked").val();
        var dob = $("input[type='datetime-local']").val();
        var address = $("textarea").val();
        var city = $("input[placeholder='City']").val();
        var areaPin = $("input[placeholder='Area PIN']").val();
        var state = $("input[placeholder='State']").val();
        var qualification = $("#qualification").val();
        var specialization = [];
        $("input[type='checkbox']:checked").each(function () {
            specialization.push($(this).next('label').text());
        });
        var password = $("input[type='password']").val();

        if (firstName === "" || lastName === "" || email === "" || mobile === "" || dob === "" || address === "" || city === "" || areaPin === "" || state === "" || qualification === "") {
            alert("Please fill out all details");
            return;
        }

        alert("Form submitted successfully!");
    });
});
