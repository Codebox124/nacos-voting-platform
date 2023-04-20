
    function disableOtherRadio() {
        
        var radio1 = document.getElementById("president1");
        var radio2 = document.getElementById("president2");
        if (radio1.checked) {
            radio2.disabled = true;
        } else if(radio2.checked) {
            radio1.disabled = true;
        }
    }
