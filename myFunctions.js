
function myCheckboxFunction(button ,data) {
    // Get the checkbox
    var checkBox = document.getElementById(button);
    var tablerows = document.getElementsByName(data);
    console.log(tablerows);
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        for (var i = 0; i < tablerows.length; i++) {
            tablerows[i].classList.remove('hiderow');
        }
    } else {
        for (var i = 0; i < tablerows.length; i++) {
            tablerows[i].classList.add('hiderow');
        }
    }
}

window.onload = function () {
    document.getElementById('real-estate-form').addEventListener('submit', function (event) {
        var form = event.target;
        var nationalId = form.nationalId.value;

        // Check if national ID is valid
        if (!/^(0[1-9]|1[0-4])[0-9]{9}$/.test(nationalId)) {
            alert("الرقم الوطني غير صحيح");
            event.preventDefault();
            return false;
        }
        else {
            console.log(1);
            if ($('input[name="sel_prop"]').is(':checked')) {
                //console.log(2);

                let m = $('input[name=sel_prop]:checked').val();
                //console.log(3);

                let es = $('td[name=' + m + ']');

                let text = "هل انت متاكد من حجز العقار بالمعلومات ادناه: \n  المدينة: " + es[0].getInnerHTML() + " \n التفاصيل: " + es[1].getInnerHTML() + " \n الايجار: " + es[2].getInnerHTML() + " \n المنطقة: " + es[3].getInnerHTML() + " \n الميزات: " + es[4].getInnerHTML() + " \n  الطابق: " + es[5].getInnerHTML() + " \n "
                    + "الملكية: " + es[6].getInnerHTML() + " \n بلكون: " + es[7].getInnerHTML() + " \n الفرش: " + es[8].getInnerHTML();

                if (confirm(text) == true) {
                    text = "You pressed OK!";
                } else {
                    text = "You canceled!";
                }
                alert(text);
            } else {
                alert("pls select prop");
                event.preventDefault();
                return false;
            }
            return ture;
        }

        
    });
}
function controlForm() {

    let x = document.getElementById("myForm").style.display;
    if (x === 'block') {
        document.getElementById("myForm").style.display = "none";
        document.getElementById("formcontrol").innerText = "متابعة"
    }
    else {
        document.getElementById("myForm").style.display = "block";
        document.getElementById("formcontrol").innerText = "رجوع"
    }
}


// $('input[name=sel_prop]:checked').val()
//$("#prop2").prop("checked", true)
