var osszfiz = 0;
var osszdb = 0;

function hozzaad1() {
        document.getElementById("pskonti").value++;
        nyomas()
}
function elvesz1() {
        if (document.getElementById("pskonti").value <= 0) {
                alert("Nem lehet a kosárban negatív szám")
                document.getElementById("pskonti").value++;
        }

        document.getElementById("pskonti").value--;
        nyomas()
}
function hozzaad2() {
        document.getElementById("boxkonti").value++;
        nyomas()
}
function elvesz2() {
        if (document.getElementById("boxkonti").value <= 0) {
                alert("Nem lehet a kosárban negatív szám")
                document.getElementById("boxkonti").value++;
        }

        document.getElementById("boxkonti").value--;
        nyomas()
}
function hozzaad3() {
        document.getElementById("pskonzol").value++;
        nyomas()
}
function elvesz3() {
        if (document.getElementById("pskonzol").value <= 0) {
                alert("Nem lehet a kosárban negatív szám")
                document.getElementById("pskonzol").value++;
        }

        document.getElementById("pskonzol").value--; nyomas()
}
function hozzaad4() {
        document.getElementById("boxkonzol").value++; nyomas()
}
function elvesz4() {
        if (document.getElementById("boxkonzol").value <= 0) {
                alert("Nem lehet a kosárban negatív szám")
                document.getElementById("boxkonzol").value++;
        }
        document.getElementById("boxkonzol").value--; nyomas()
}
function hozzaad5() {
        document.getElementById("boxallomas").value++; nyomas()
}
function elvesz5() {
        if (document.getElementById("boxallomas").value <= 0) {
                alert("Nem lehet a kosárban negatív szám")
                document.getElementById("boxallomas").value++;
        }
        document.getElementById("boxallomas").value--; nyomas()
}
function hozzaad6() {
        document.getElementById("usbc").value++; nyomas()
}
function elvesz6() {
        if (document.getElementById("usbc").value <= 0) {
                alert("Nem lehet a kosárban negatív szám")
                document.getElementById("usbc").value++;
        }
        document.getElementById("usbc").value--; nyomas()
}
function hozzaad7() {

        document.getElementById("parna").value++;
        nyomas()
}
function elvesz7() {
        if (document.getElementById("parna").value <= 0) {
                alert("Nem lehet a kosárban negatív szám")
                document.getElementById("parna").value++;
        }
        document.getElementById("parna").value--;
        nyomas()
}

function cso() {


        var pskontidb = parseInt(document.getElementById("pskonti").value);
        var fizetendo1 = pskontidb * 27990

        var boxkontidb = parseInt(document.getElementById("boxkonti").value);
        var fizetendo2 = boxkontidb * 23990

        var pskonzoldb = parseInt(document.getElementById("pskonzol").value);
        var fizetendo3 = pskonzoldb * 199990

        var boxkonzoldb = parseInt(document.getElementById("boxkonzol").value);
        var fizetendo4 = boxkonzoldb * 219990

        var boxallomasdb = parseInt(document.getElementById("boxallomas").value);
        var fizetendo5 = boxallomasdb * 5490

        var usbcdb = parseInt(document.getElementById("usbc").value);
        var fizetendo6 = usbcdb * 1190

        var parnadb = parseInt(document.getElementById("parna").value);
        var fizetendo7 = parnadb * 990

        osszfiz = fizetendo1 + fizetendo2 + fizetendo3 + fizetendo4 + fizetendo5 + fizetendo6 + fizetendo7
        osszdb = boxkonzoldb + boxkontidb + boxallomasdb + pskontidb + pskonzoldb + parnadb + usbcdb
}

function nyomas() {
        cso()
        document.getElementById("ar").innerHTML = osszfiz;
        document.getElementById("db").innerHTML = osszdb;
}



function csovaz()
{
        var nev = document.getElementById("nev").value
        var isz = document.getElementById("isz").value
        var telepules = document.getElementById("telepules").value
        var utcahaz = document.getElementById("utcahaz").value
        var email = document.getElementById("email").value
        var teloszam = document.getElementById("teloszam").value
        
        console.log(iga)

}


function csecskk()
{
csovaz()

        if(document.getElementById("csecs").checked == 1){
                document.getElementById("nev1").value = nev   
                document.getElementById("isz1").value = isz
                document.getElementById("telepules1").value = telepules 
                document.getElementById("utcahaz1").value = utcahaz
        }
        if(document.getElementById("csecs").checked==0)
        {
        document.getElementById("nev1").value = 0
        document.getElementById("isz1").value = 0
        document.getElementById("telepules1").value = 0
        document.getElementById("utcahaz1").value = 0
        }
}

