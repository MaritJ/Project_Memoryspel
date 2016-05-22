/*--------------jQuery met versie------------------------------*/
/*------Eerst speler 1 aan de beurt ----------------------------*/
        $(".punten1").css("background-color", "#AE983A");
/*------Popup met uitleg ---------------------------------------*/
        $("#Uitleg").on('click', function() {
            swal({
                title: "Uitleg",
                text: "De bedoeling is om dit spel met twee te spelen. Je moet proberen zo hoog mogelijk te scoren. Je kan een punt verdienen door twee dezelfde kaartjes te vinden. Als je twee dezelfde kaartjes vindt blijf je aan de beurt. Anders gaat de beurt naar de andere speler. Je kan kiezen uit de zeven periodes. Je kan één of meerdere periode(s) selecteren om te oefenen.",
                type: "info",
                confirmButtonText: "Ok"
            });
        });

        "use strict";
        /*global $ */

/*-----Kaarten omdraaien --------------------------------------*/
        var kaart1 = null,
            kaart2 = null,
            beurt = -1,
            kleur = true,
            id1,
            id2,
            kaartonthouden,
            kaartonthouden1; //nieuwe variabele om te ontouden welke kaart als eerste werd geklikt.
        

        function nulzetten() { 
            kaart1 = null;
            kaart2 = null;
            id1 = "";
            id2 = "";
        }

        function kaartenverbergen(id1, id2) {
            setTimeout(function() {
                $('#' + id1).toggleClass('flipped');
                $('#' + id2).toggleClass('flipped');
                nulzetten();
            }, 2000);
        }


        function kaartomdraaien(id, image) {
            if (kaartonthouden1 === image) {} 
            else { 
                kaartonthouden = image; 
                if (beurt < 3) {
                    beurt++;
                } else {
                    beurt = 0;
                }


                if (kaart2 !== null) {} else {
                    $('#' + id).toggleClass('flipped');
                    if (kaart2 !== null) {
                        kaartenverbergen(id1, id2);
                        nulzetten();
                    }
                    if (image.substr(0, 1) === "a") {
                        (image = image.substr(9, 20));
                        console.log(image);
                    } else {
                        (image = image.substr(12, 20));
                        console.log(image);
                    }
                    if (kaart1 === null) {
                        kaartonthouden1 = kaartonthouden;
                        kaart1 = image;
                        id1 = id;

                    } else {
                        kaart2 = image;
                        id2 = id;

                        kaartonthouden1 = "";
                        eerstekaart = ""; 
                    }


                    if (kaart2 !== null) {
                        if (kaart1 === kaart2) {
                            if (kleur === true) {
                                var score = 1 + parseInt($("#score1").text());
                                $("#score1").text(score);

                            } else {
                                var score = 1 + parseInt($("#score2").text());
                                $("#score2").text(score);

                            }
                            $("#" + id1).fadeOut(2000);
                            $("#" + id2).fadeOut(2000);
                            nulzetten();
                        } else {
                            kaartenverbergen(id1, id2);
                            if (kleur === true) {
                                kleur = false;
                            } else {
                                kleur = true;
                            }


                        }
                    }
                    setTimeout(function() {
                        if (kleur === false) {
                            $(".punten2").css("background-color", "#AE983A");
                            $(".punten1").css("background-color", "transparent");
                        } else {
                            $(".punten2").css("background-color", "transparent");
                            $(".punten1").css("background-color", "#AE983A");
                        }


                    }, 1500);


                }
            }

        }


/*------Alle kaarten in spel steken ---------------------------- */


        $(document).ready(function() {
            $("#period").on("click", function() {
                $("#jmenu").slideToggle();
            });

            var pre = ['../pics/afbe/pre1.jpg', '../pics/afbe/pre2.jpg', '../pics/afbe/pre3.jpg', '../pics/afbe/pre4.jpg', '../pics/afbe/pre5.jpg', '../pics/tijd/pre1.jpg', '../pics/tijd/pre2.jpg', '../pics/tijd/pre3.jpg', '../pics/tijd/pre4.jpg', '../pics/tijd/pre5.jpg']

            var str = ['../pics/afbe/str1.jpg', '../pics/afbe/str2.jpg', '../pics/afbe/str3.jpg', '../pics/afbe/str4.jpg', '../pics/afbe/str5.jpg', '../pics/tijd/str1.jpg', '../pics/tijd/str2.jpg', '../pics/tijd/str3.jpg', '../pics/tijd/str4.jpg', '../pics/tijd/str5.jpg']

            var ko = ['../pics/tijd/ko1.jpg', '../pics/tijd/ko2.jpg', '../pics/tijd/ko3.jpg', '../pics/tijd/ko4.jpg', '../pics/tijd/ko5.jpg', '../pics/afbe/ko1.jpg', '../pics/afbe/ko2.jpg', '../pics/afbe/ko3.jpg', '../pics/afbe/ko4.jpg', '../pics/afbe/ko5.jpg']

            var mid = ['../pics/afbe/mid1.jpg', '../pics/afbe/mid2.jpg', '../pics/afbe/mid3.jpg', '../pics/afbe/mid4.jpg', '../pics/afbe/mid5.jpg', '../pics/tijd/mid1.jpg', '../pics/tijd/mid2.jpg', '../pics/tijd/mid3.jpg', '../pics/tijd/mid4.jpg', '../pics/tijd/mid5.jpg']

            var nt = ['../pics/afbe/nt1.jpg', '../pics/afbe/nt2.jpg', '../pics/afbe/nt3.jpg', '../pics/afbe/nt4.jpg', '../pics/afbe/nt5.jpg', '../pics/tijd/nt1.jpg', '../pics/tijd/nt2.jpg', '../pics/tijd/nt3.jpg', '../pics/tijd/nt4.jpg', '../pics/tijd/nt5.jpg']

            var nst = ['../pics/afbe/nst1.jpg', '../pics/afbe/nst2.jpg', '../pics/afbe/nst3.jpg', '../pics/afbe/nst4.jpg', '../pics/afbe/nst5.jpg', '../pics/tijd/nst1.jpg', '../pics/tijd/nst2.jpg', '../pics/tijd/nst3.jpg', '../pics/tijd/nst4.jpg', '../pics/tijd/nst5.jpg']

            var et = ['../pics/afbe/et1.jpg', '../pics/afbe/et2.jpg', '../pics/afbe/et3.jpg', '../pics/afbe/et4.jpg', '../pics/afbe/et5.jpg', '../pics/tijd/et1.jpg', '../pics/tijd/et2.jpg', '../pics/tijd/et3.jpg', '../pics/tijd/et4.jpg', '../pics/tijd/et5.jpg']

            var array = [
                /* prehistorie = */
                false,
                /* stroomculturen = */
                false,
                /* klassieke oudheid = */
                false,
                /* middeleeuwen = */
                false,
                /* nieuwe tijd= */
                false,
                /* nieuwste tijd = */
                false,
                /* eigen tijd= */
                false
            ]

            function clicked(arraynumber, time) {
                if (array[arraynumber]) {
                    $("#" + time).css("background-color", "transparent");
                    array[arraynumber] = false;
                } else {
                    $("#" + time).css("background-color", "#AE983A");
                    array[arraynumber] = true;
                }
            }

            function shuffle(arrayList) {
                var j, x, i;
                for (i = arrayList.length; i; i--) {
                    j = Math.floor(Math.random() * i);
                    x = arrayList[i - 1];
                    arrayList[i - 1] = arrayList[j];
                    arrayList[j] = x;
                }
            }

            $("#Pre").on('click', function() {
                clicked(0, "Pre");
            });
            $("#Sto").on('click', function() {
                clicked(1, "Sto");
            });
            $("#Kla").on('click', function() {
                clicked(2, "Kla");
            });
            $("#Mid").on('click', function() {
                clicked(3, "Mid");
            });
            $("#Nwt").on('click', function() {
                clicked(4, "Nwt");
            });
            $("#Nst").on('click', function() {
                clicked(5, "Nst");
            });
            $("#Eig").on('click', function() {
                clicked(6, "Eig");
            });
            $("#Start").on('click', function() {

        /*-----periodes niet meer indrukken vanaf start* -------------------*/
                $("#Pre").unbind("click"); 
                $("#Sto").unbind("click");
                $("#Kla").unbind("click");
                $("#Mid").unbind("click");
                $("#Nwt").unbind("click");
                $("#Nst").unbind("click");
                $("#Eig").unbind("click");
                

                $(".container").remove();
                var example = [];
                beurt = -1;
                $("#score1").text("0");
                $("#score2").text("0");
                if (array[0]) {
                    example = $.merge(example, pre)
                }

                if (array[1]) {
                    example = $.merge(example, str)
                }
                if (array[2]) {
                    example = $.merge(example, ko)
                }
                if (array[3]) {
                    example = $.merge(example, mid)
                }
                if (array[4]) {
                    example = $.merge(example, nt)
                }
                if (array[5]) {
                    example = $.merge(example, nst)
                }
                if (array[6]) {
                    example = $.merge(example, et)
                }
                shuffle(example);
                console.log(example);
                for (var i = 0; i < example.length; i++) {
                    var periode = example[i];
/*-----Kaarten aanmaken --------------------------------------*/
                    $('<div/>', {
                        'id': i,
                        'class': 'container',
                    }).appendTo('#k');
                    $('<div/>', {
                        'id': i + 'b',
                        'class': 'card',
                        'onclick': 'kaartomdraaien(this.id,"' + periode + '")',
                    }).appendTo('#' + i);
                    $('<div/>', {
                        'class': 'front',
                    }).appendTo('#' + i + 'b');
                    $('<div/>', {
                        'id': i + 'c',
                        'class': 'back',
                    }).appendTo('#' + i + 'b');
                    $('#' + i + 'c').prepend('<img width="200"src="pics/' + periode + '" />');
                }


            });
/*-----Nieuw spel --------------------------------------*/
            $("#nieuw").click(function() {
                location.reload();
            });
        });
  