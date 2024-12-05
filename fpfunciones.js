document.addEventListener('DOMContentLoaded', function () {

    const offersData = {
        //provincia1= Chaco
        provincia1: {
            lunes0: {
title: "6 y 12 Cuotas sin Interés",
description: "",
additionalContent: "Límite financiable: $1.188.000. Exclusivo para compras presenciales en Misiones.",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/New Folder/LOGOWEB_1.webp",
hiddenrow: "Beneficio disponible pagando con tarjeta de crédito VISA y MasterCard todos los lunes en la compra de electrodomésticos, notebooks, celulares y tablets.",
visible: true,
},
lunes1: {
title: "9 Cuotas sin interés.",
description: "",
additionalContent: "Del 20 al 24 de diciembre.",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/LOGOWEB_7.webp",
hiddenrow: "¡Con Naranja, disfruta de 9 cuotas sin interés del 20 al 24 de diciembre! Aprovechá esta increíble oferta para hacer tus compras navideñas sin preocupaciones. ¡No te lo podés perder!",
visible: true,

},
lunes2: {
title: "6 cuotas sin interés",
description: "",
additionalContent: "Los dias 6, 11,12,13,18,20 y 23 de Diciembre ",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/LOGOWEB_9.webp",
hiddenrow: "¡Estos días especiales de diciembre, aprovecha 6 cuotas sin interés en las siguientes fechas: 6, 11, 12, 13, 18, 20 y 23 de diciembre! No dejes pasar esta oportunidad única para tus compras navideñas. ¡Disfrutá de la comodidad de pagar en cuotas y haz tus regalos sin estrés!",
visible: true,
},
lunes3: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
lunes4: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
lunes5: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
lunes6: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
lunes7: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
martes0: {
title: "9 Cuotas sin interés.",
description: "",
additionalContent: "Del 20 al 24 de diciembre.",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/LOGOWEB_7.webp",
hiddenrow: "¡Con Naranja, disfruta de 9 cuotas sin interés del 20 al 24 de diciembre! Aprovechá esta increíble oferta para hacer tus compras navideñas sin preocupaciones. ¡No te lo podés perder!",
visible: true,

},
martes1: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
martes2: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
martes3: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
martes4: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
martes5: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
martes6: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
martes7: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},

miercoles0: {
title: "6 cuotas sin interés ",
description: "",
additionalContent: "Los dias 6, 11,12,13,18,20 y 23 de Diciembre",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/LOGOWEB_9.webp",
hiddenrow: "¡Estos días especiales de diciembre, aprovecha 6 cuotas sin interés en las siguientes fechas: 6, 11, 12, 13, 18, 20 y 23 de diciembre! No dejes pasar esta oportunidad única para tus compras navideñas. ¡Disfrutá de la comodidad de pagar en cuotas y haz tus regalos sin estrés!",
visible: true,

},
miercoles1: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
miercoles2: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
miercoles3: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
miercoles4: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
miercoles5: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
miercoles6: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
miercoles7: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
jueves0: {
title: " 6 y 12 cuotas sin interés",
description: "",
additionalContent: "Posadas Magica del 5 al 8 de diciembre",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/PM_LOGO.webp",
hiddenrow: "¡Con Banco Macro, financiá tus compras hasta $1.320.000! Acordando con tu vendedor, podés aprovechar esta gran promo para regalar lo mejor. ¡No te lo pierdas!",
visible: true,

},
jueves1: {
title: "6 cuotas sin interés ",
description: "",
additionalContent: "Los dias 6, 11,12,13,18,20 y 23 de Diciembre",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/LOGOWEB_9.webp",
hiddenrow: "¡Estos días especiales de diciembre, aprovecha 6 cuotas sin interés en las siguientes fechas: 6, 11, 12, 13, 18, 20 y 23 de diciembre! No dejes pasar esta oportunidad única para tus compras navideñas. ¡Disfrutá de la comodidad de pagar en cuotas y haz tus regalos sin estrés!",
visible: true,
},
jueves2: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
jueves3: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
jueves4: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
jueves5: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
jueves6: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
jueves7: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
viernes0: {
title: " 6 y 12 cuotas sin interés",
description: "",
additionalContent: "Posadas Magica del 5 al 8 de diciembre",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/PM_LOGO.webp",
hiddenrow: "¡Con Banco Macro, financiá tus compras hasta $1.320.000! Acordando con tu vendedor, podés aprovechar esta gran promo para regalar lo mejor. ¡No te lo pierdas!",
visible: true,

},
viernes1: {
title: "9 Cuotas sin interés.",
description: "",
additionalContent: "Del 20 al 24 de diciembre.",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/LOGOWEB_7.webp",
hiddenrow: "¡Con Naranja, disfruta de 9 cuotas sin interés del 20 al 24 de diciembre! Aprovechá esta increíble oferta para hacer tus compras navideñas sin preocupaciones. ¡No te lo podés perder!",
visible: true,
},
viernes2: {
title: "6 cuotas sin interés ",
description: "",
additionalContent: "Los dias 6, 11,12,13,18,20 y 23 de Diciembre",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/LOGOWEB_9.webp",
hiddenrow: "¡Estos días especiales de diciembre, aprovecha 6 cuotas sin interés en las siguientes fechas: 6, 11, 12, 13, 18, 20 y 23 de diciembre! No dejes pasar esta oportunidad única para tus compras navideñas. ¡Disfrutá de la comodidad de pagar en cuotas y haz tus regalos sin estrés!",
visible: true,
},
viernes3: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
viernes4: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
viernes5: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: " ",
visible: false,
},
viernes6: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: " ",
visible: false,
},
viernes7: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},

sabado0: {
title: " 6 y 12 cuotas sin interés",
description: "",
additionalContent: "Posadas Magica del 5 al 8 de diciembre",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/PM_LOGO.webp",
hiddenrow: "¡Con Banco Macro, financiá tus compras hasta $1.320.000! Acordando con tu vendedor, podés aprovechar esta gran promo para regalar lo mejor. ¡No te lo pierdas!",
visible: true,

},
sabado1: {
title: "9 Cuotas sin interés.",
description: "",
additionalContent: "Del 20 al 24 de diciembre.",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/LOGOWEB_7.webp",
hiddenrow: "¡Con Naranja, disfruta de 9 cuotas sin interés del 20 al 24 de diciembre! Aprovechá esta increíble oferta para hacer tus compras navideñas sin preocupaciones. ¡No te lo podés perder!",
visible: true,

},
sabado2: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
sabado3: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
sabado4: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
sabado5: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
sabado6: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
sabado7: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},

domingo0: {
title: " 6 y 12 cuotas sin interés",
description: "",
additionalContent: "Posadas Magica del 5 al 8 de diciembre",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/PM_LOGO.webp",
hiddenrow: "¡Con Banco Macro, financiá tus compras hasta $1.320.000! Acordando con tu vendedor, podés aprovechar esta gran promo para regalar lo mejor. ¡No te lo pierdas!",
visible: true,

},
domingo1: {
title: "9 Cuotas sin interés.",
description: "",
additionalContent: "Del 20 al 24 de diciembre.",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/LOGOWEB_7.webp",
hiddenrow: "¡Con Naranja, disfruta de 9 cuotas sin interés del 20 al 24 de diciembre!  Aprovechá esta increíble oferta para hacer tus compras navideñas sin preocupaciones. ¡No te lo podés perder!",
visible: true,
},
domingo2: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
domingo3: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
domingo4: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
domingo5: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
domingo6: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
domingo7: {
title: "",
description: "",
additionalContent: "",
image: "",
hiddenrow: "",
visible: false,
},
todoslosdias0: {
title: "3 Cuotas sin interés y  6, 9 y 12 cuotas fijas.",
description: "",
additionalContent: "Disfruta de la nueva forma de pago Cuota Simple y financia tus compras en 3 Cuotas sin interés o 6, 9 y 12 cuotas fijas. con tu tarjeta de crédito VISA, Mastercard, AMEX, CABAL Y NATIVA de cualquier banco.",
image: "https://www.electromisiones.com.ar/img/cms/Formas%20de%20Pago/LOGOWEB_1.webp",
hiddenrow: "¡Con Cuota Simple, hacer realidad tus compras nunca fue tan fácil! Financia tus productos favoritos en 3, 6, 9 o 12 cuotas fijas mensuales y disfruta de la comodidad de pagar a tu ritmo. Ya sea que necesites electrodomésticos o cualquier otro producto de origen nacional, Cuota Simple te ofrece una opción accesible y flexible para que puedas llevarte lo que más deseas ¡HOY!",
visible: true,
},

todoslosdias1: {
title: "3 Cuotas Sin interés en todas las tarjetas de crédito.",
description: "",
additionalContent: "3 Cuotas sin interes, en todas las tarjetas bancarizadas: Visa,Master,Amex,Cabal,Nativa máster",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/LOGOWEB_4.webp",
hiddenrow: "Paga tus compras con total comodidad en nuestras sucursales de Formosa con Banco Formosa. Te ofrecemos una amplia variedad de medios de pago para que elijas el que más te convenga VISA,Mastercard, CABAL y NATIVA.",
visible: true,
},
todoslosdias2: {
title: "3,5,6, y 12 cuotas Bonificadas",
description: "",
additionalContent: "Te ofrecemos una amplia variedad de medios de pago para que elijas el que más te convenga VISA,Mastercard, CABAL y NATIVA.",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/New Folder/LOGOWEB_5.webp",
hiddenrow: "¡Ahorra en tus compras con Tarjeta Tuya del nuevo Banco de Chaco! Tasa bonificada en 3,5,6,9 y 12 Cuotas.",
visible: true,
},
todoslosdias3: {
title: "3 Cuotas sin interés",
description: "",
additionalContent: "Naranja Plan Z es un plan de financiación exclusivo para clientes de Tarjeta Naranja. Financia tus compras en comercios adheridos y elige Hasta 3 sin interés pagarás cuando recibas tu resumen.Decide cómo pagar cada compra agrupada en Plan Z al recibir tu resumen.",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/New Folder/LOGOWEB_7.webp",
hiddenrow: "Naranja Plan Z es un plan de financiación exclusivo para clientes de Tarjeta Naranja. Financia tus compras en comercios adheridos y elige Hasta 3 sin interés pagarás cuando recibas tu resumen.Decide cómo pagar cada compra agrupada en Plan Z al recibir tu resumen.",
visible: true,
},
todoslosdias4: {
title: "5 Cuotas Sin interés y 10 o 18 cuotas a Tasa Bonificada",
description: "",
additionalContent: "Financiá tus compras en cuotas sin interés o bonificadas, valido para compras presenciales o virtuales",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/LOGOWEB_7.webp",
hiddenrow: "¡Con Naranja ahora podes financiar tus compras en 5 cuotas sin interés o hasta 18 cuotas bonificadas todos los días! Disfruta de la flexibilidad que necesitas para pagar cómodamente. ¡Aprovecha ya",
visible: true,
},
todoslosdias5: {
title: "12 Cuotas con 5% de reintegro",
description: "",
additionalContent: "Paga tus compras en 12 cuotas con un 5% de reintegro en todas las sucursales. Esta promoción es válida todos los días y te permite diferir el pago de tus compras hasta por un año. No te pierdas esta oportunidad de ahorrar en tus compras.",
image: "https://www.electromisiones.com.ar/img/cms/Formas%20de%20Pago/pymenacion.webp",
hiddenrow: "¡Aprovechá esta increíble oportunidad! Paga tus compras en 12 cuotas y obtené un 5% de reintegro en todas las sucursales. Esta promoción es válida todos los días y te permite diferir el pago de tus compras hasta por un año. ¡No te pierdas la chance de ahorrar mientras disfrutas de lo que más te gusta!",
visible: true,
},
todoslosdias6: {
title: "3 Cuotas sin interés",
description: "",
additionalContent: "3 Cuotas sin interés, en todas las tarjetas bancarizadas: Visa,Master,Amex,Cabal,Nativa máster ",
image: "https://www.electromisiones.com.ar/img/cms/Formas de Pago/ahora.webp",
hiddenrow: "¡Disfrutá de 3 cuotas sin interés en todas tus compras con Visa, Master, Amex, Cabal, Nativa Master y más! Exclusivo para compras web. ¡Aprovechá esta oportunidad única y hacé tus compras de forma fácil y sin costos adicionales!",
visible: true,
},
todoslosdias7: {
title: "3 cuotas sin interés, 6, 9 y 12 Cuotas bonificadas.Solo por Point",
description: "",
additionalContent: "Paga tus compras en 12 cuotas con un 5% de reintegro en todas las sucursales. Esta promoción es válida todos los días y te permite diferir el pago de tus compras hasta por un año. No te pierdas esta oportunidad de ahorrar en tus compras.",
image: "https://www.electromisiones.com.ar/img/cms/Formas%20de%20Pago/pymenacion.webp",
hiddenrow: "¡No dejes pasar esta oportunidad única con Point! Ahora podés financiar tus compras de manera súper accesible: 3 cuotas sin interés o 6, 9 y 12 cuotas bonificadas. Ya sea que compres lo que más te gusta o necesites algo esencial, esta promoción exclusiva te ofrece la flexibilidad que buscas. ¡Solo por Point, hacé tus compras hoy y pagá cómodamente a largo plazo! ¡Aprovechá esta ventaja y disfruta sin preocupaciones!",
visible: true,

            },
        },


    };

    /*
    //--------------------PROVINCIAS
    //  Asignar evento change al selector de provincias
    const provinceSelect = document.getElementById('provinceSelect');
    provinceSelect.addEventListener('change', function () {
        updateOffers();
    });

    //-------------------- FIN PROVINCIAS
*/
    // Selecciona todos los días y asigna evento click
    const dayElements = document.querySelectorAll('.day-selector .day');
    dayElements.forEach(dayElement => {
        dayElement.addEventListener('click', function () {
            const day = this.getAttribute('value');
            console.log('constante dia', day);
            console.log('CLICK EN EL DIA');

            updateText(day);
        });
    });

    // Asigna evento onchange al selector de días
    const daySelect = document.getElementById('daySelect');
    daySelect.addEventListener('change', function () {
        updateText(this.value);
    });


    // Asigna evento click a toggle-more
    const toggleElements = document.querySelectorAll('.toggle-more');
    toggleElements.forEach(toggle => {
        toggle.addEventListener('click', function () {
            toggleMore(this);
        });
    });

    /*
                //--------------------PROVINCIAS
                // Función para actualizar ofertas
                function updateOffers() {
                    const selectedProvince = document.getElementById("provinceSelect").value;
    
                    // Asignar evento change al selector de provincias
                    const provinceSelect = document.getElementById('provinceSelect');
                    console.log("entro a select provincias")
                    provinceSelect.addEventListener('change', function () {
                        updateOffers();
                    });
    
                }
                //--------------------FIN PROVINCIAS
    
                */

    function updateOffers() {
        // Función para actualizar ofertas

        // Array que mapea los días de la semana con el valor en el botón
        const daysOfWeek = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

        // Obtener el día actual como un número (0 es domingo, 1 es lunes, etc.)
        const currentDayIndex = new Date().getDay();
        const currentDayName = daysOfWeek[currentDayIndex];

        // Constante para la provincia
        const selectedProvince = 'provincia1';

        // Seleccionar los botones del día y el menú desplegable del selector de día
        const dayButtons = document.querySelectorAll('.day-selector .day');
        const daySelect = document.getElementById('daySelect');

        // Recorrer los botones del día para añadir la clase 'selected'
        dayButtons.forEach(button => {
            if (button.value === currentDayName) {
                // Agrega la clase 'selected' al botón del día actual
                button.classList.add('selected');
            }
        });

        // Seleccionar la opción en el menú desplegable que corresponde al día actual
        const options = daySelect.querySelectorAll('option');
        options.forEach(option => {
            if (option.value === currentDayName) {
                option.selected = true;
            }
        });

        // Llamado a la función updateText con el nombre del día y la provincia
        updateText(currentDayName, selectedProvince);
    }





    // Función para actualizar el texto y el día seleccionado
    function updateText(day, province = null) {
        //  const selectedProvince = province || document.getElementById("provinceSelect").value;
        const selectedProvince = "provincia1";
        const offerDetails = offersData[selectedProvince][day];
        console.log('ENTRO A UPDATETEXT');



        //--------------------------------------------COMIENZO DE LOS DIAS DE LA SEMANA-------------------------------------------------
        //Primeras f y c
        // Actualizar los detalles de la oferta según el día seleccionado

        //-----------------------------------------------LUNES------------------------------------------------

        //---------------------------------------------------------------------------


        if (day === "lunes") {
            let indices = [0, 1, 2, 3, 4, 5, 6, 7]; // Crear un arreglo con los números de 1 a 10
            for (let i = 0; i < indices.length; i++) {
                console.log('ENTRO A LUNES');
                let lunesData = offersData[selectedProvince]['lunes' + indices[i]];

                if (lunesData) {

                    let offerElement = document.getElementById('offer' + (indices[i] + 1));
                    let titleElement = document.getElementById('offerTitle' + (indices[i] + 1));
                    let descriptionElement = document.getElementById('offerDescription' + (indices[i] + 1));
                    let additionalContentElement = document.getElementById('additionalContent' + (indices[i] + 1));
                    let imageElement = document.getElementById('offerImage' + (indices[i] + 1));
                    let hiddenRowElement = document.getElementById('hiddenRow' + (indices[i] + 1));

                    if (lunesData.visible) {
                        if (offerElement) offerElement.style.display = "flex";
                        if (titleElement) titleElement.textContent = lunesData.title;
                        if (descriptionElement) descriptionElement.textContent = lunesData.description;
                        if (additionalContentElement) additionalContentElement.innerHTML = lunesData.additionalContent;
                        if (imageElement) imageElement.src = lunesData.image;
                        if (hiddenRowElement) hiddenRowElement.innerHTML = lunesData.hiddenrow;
                    } else {
                        if (offerElement) offerElement.style.display = "none";
                    }
                }
            }

        }








        //--------------------------------------MARTES----------------------------------------

        if (day === "martes") {
            let indices = [0, 1, 2, 3, 4, 5, 6, 7]; // Crear un arreglo con los números de 1 a 9
            for (let i = 0; i < indices.length; i++) {
                let martesData = offersData[selectedProvince]['martes' + indices[i]];

                if (martesData) {
                    let offerElement_martes = document.getElementById('offer' + (indices[i] + 1));
                    let titleElement_martes = document.getElementById('offerTitle' + (indices[i] + 1));
                    let descriptionElement_martes = document.getElementById('offerDescription' + (indices[i] + 1));
                    let additionalContentElement_martes = document.getElementById('additionalContent' + (indices[i] + 1));
                    let imageElement_martes = document.getElementById('offerImage' + (indices[i] + 1));
                    let hiddenRowElement_martes = document.getElementById('hiddenRow' + (indices[i] + 1));

                    if (martesData.visible) {
                        if (offerElement_martes) offerElement_martes.style.display = "flex";
                        if (titleElement_martes) titleElement_martes.textContent = martesData.title;
                        if (descriptionElement_martes) descriptionElement_martes.textContent = martesData.description;
                        if (additionalContentElement_martes) additionalContentElement_martes.innerHTML = martesData.additionalContent;
                        if (imageElement_martes) imageElement_martes.src = martesData.image;
                        if (hiddenRowElement_martes) hiddenRowElement_martes.innerHTML = martesData.hiddenrow;
                    } else {
                        if (offerElement_martes) offerElement_martes.style.display = "none";
                    }
                }
            }
        }


        //----------------------------------MIERCOLES--------------------------------------------------------

        if (day === "miercoles") {
            let indices = [0, 1, 2, 3, 4, 5, 6, 7]; // Crear un arreglo con los números de 1 a 9
            console.log("entro miercoles");
            for (let i = 0; i < indices.length; i++) {
                let miercolesData = offersData[selectedProvince]['miercoles' + indices[i]];

                if (miercolesData) {
                    let offerElement_miercoles = document.getElementById('offer' + (indices[i] + 1));
                    let titleElement_miercoles = document.getElementById('offerTitle' + (indices[i] + 1));
                    let descriptionElement_miercoles = document.getElementById('offerDescription' + (indices[i] + 1));
                    let additionalContentElement_miercoles = document.getElementById('additionalContent' + (indices[i] + 1));
                    let imageElement_miercoles = document.getElementById('offerImage' + (indices[i] + 1));
                    let hiddenRowElement_miercoles = document.getElementById('hiddenRow' + (indices[i] + 1));

                    if (miercolesData.visible) {
                        if (offerElement_miercoles) offerElement_miercoles.style.display = "flex";
                        if (titleElement_miercoles) titleElement_miercoles.textContent = miercolesData.title;
                        if (descriptionElement_miercoles) descriptionElement_miercoles.textContent = miercolesData.description;
                        if (additionalContentElement_miercoles) additionalContentElement_miercoles.innerHTML = miercolesData.additionalContent;
                        if (imageElement_miercoles) imageElement_miercoles.src = miercolesData.image;
                        if (hiddenRowElement_miercoles) hiddenRowElement_miercoles.innerHTML = miercolesData.hiddenrow;
                    } else {
                        if (offerElement_miercoles) offerElement_miercoles.style.display = "none";
                    }
                }
            }
        }






        //----------------------------------JUEVES--------------------------------------------------------

        if (day === "jueves") {
            let indices = [0, 1, 2, 3, 4, 5, 6, 7]; // Crear un arreglo con los números de 1 a 9
            for (let i = 0; i < indices.length; i++) {
                let juevesData = offersData[selectedProvince]['jueves' + indices[i]];

                if (juevesData) {
                    let offerElement_jueves = document.getElementById('offer' + (indices[i] + 1));
                    let titleElement_jueves = document.getElementById('offerTitle' + (indices[i] + 1));
                    let descriptionElement_jueves = document.getElementById('offerDescription' + (indices[i] + 1));
                    let additionalContentElement_jueves = document.getElementById('additionalContent' + (indices[i] + 1));
                    let imageElement_jueves = document.getElementById('offerImage' + (indices[i] + 1));
                    let hiddenRowElement_jueves = document.getElementById('hiddenRow' + (indices[i] + 1));

                    if (juevesData.visible) {
                        if (offerElement_jueves) offerElement_jueves.style.display = "flex";
                        if (titleElement_jueves) titleElement_jueves.textContent = juevesData.title;
                        if (descriptionElement_jueves) descriptionElement_jueves.textContent = juevesData.description;
                        if (additionalContentElement_jueves) additionalContentElement_jueves.innerHTML = juevesData.additionalContent;
                        if (imageElement_jueves) imageElement_jueves.src = juevesData.image;
                        if (hiddenRowElement_jueves) hiddenRowElement_jueves.innerHTML = juevesData.hiddenrow;
                    } else {
                        if (offerElement_jueves) offerElement_jueves.style.display = "none";
                    }
                }
            }
        }




        //------------------------------------------------------------------------------------------




        //----------------------------------VIERNES--------------------------------------------------------

        if (day === "viernes") {
            let indices = [0, 1, 2, 3, 4, 5, 6, 7]; // Crear un arreglo con los números de 1 a 9
            for (let i = 0; i < indices.length; i++) {
                let viernesData = offersData[selectedProvince]['viernes' + indices[i]];

                if (viernesData) {
                    let offerElement_viernes = document.getElementById('offer' + (indices[i] + 1));
                    let titleElement_viernes = document.getElementById('offerTitle' + (indices[i] + 1));
                    let descriptionElement_viernes = document.getElementById('offerDescription' + (indices[i] + 1));
                    let additionalContentElement_viernes = document.getElementById('additionalContent' + (indices[i] + 1));
                    let imageElement_viernes = document.getElementById('offerImage' + (indices[i] + 1));
                    let hiddenRowElement_viernes = document.getElementById('hiddenRow' + (indices[i] + 1));

                    if (viernesData.visible) {
                        if (offerElement_viernes) offerElement_viernes.style.display = "flex";
                        if (titleElement_viernes) titleElement_viernes.textContent = viernesData.title;
                        if (descriptionElement_viernes) descriptionElement_viernes.textContent = viernesData.description;
                        if (additionalContentElement_viernes) additionalContentElement_viernes.innerHTML = viernesData.additionalContent;
                        if (imageElement_viernes) imageElement_viernes.src = viernesData.image;
                        if (hiddenRowElement_viernes) hiddenRowElement_viernes.innerHTML = viernesData.hiddenrow;
                    } else {
                        if (offerElement_viernes) offerElement_viernes.style.display = "none";
                    }
                }
            }
        }


        //------------------------------------------------------------------------------------------



        //----------------------------------SABADO--------------------------------------------------------

        if (day === "sabado") {
            let indices = [0, 1, 2, 3, 4, 5, 6, 7]; // Crear un arreglo con los números de 1 a 9
            for (let i = 0; i < indices.length; i++) {
                let sabadoData = offersData[selectedProvince]['sabado' + indices[i]];

                if (sabadoData) {
                    let offerElement_sabado = document.getElementById('offer' + (indices[i] + 1));
                    let titleElement_sabado = document.getElementById('offerTitle' + (indices[i] + 1));
                    let descriptionElement_sabado = document.getElementById('offerDescription' + (indices[i] + 1));
                    let additionalContentElement_sabado = document.getElementById('additionalContent' + (indices[i] + 1));
                    let imageElement_sabado = document.getElementById('offerImage' + (indices[i] + 1));
                    let hiddenRowElement_sabado = document.getElementById('hiddenRow' + (indices[i] + 1));

                    if (sabadoData.visible) {
                        if (offerElement_sabado) offerElement_sabado.style.display = "flex";
                        if (titleElement_sabado) titleElement_sabado.textContent = sabadoData.title;
                        if (descriptionElement_sabado) descriptionElement_sabado.textContent = sabadoData.description;
                        if (additionalContentElement_sabado) additionalContentElement_sabado.innerHTML = sabadoData.additionalContent;
                        if (imageElement_sabado) imageElement_sabado.src = sabadoData.image;
                        if (hiddenRowElement_sabado) hiddenRowElement_sabado.innerHTML = sabadoData.hiddenrow;
                    } else {
                        if (offerElement_sabado) offerElement_sabado.style.display = "none";
                    }
                }
            }
        }


        //------------------------------------------------------------------------------------------

        //----------------------------------DOMINGO--------------------------------------------------------

        if (day === "domingo") {
            let indices = [0, 1, 2, 3, 4, 5, 6, 7]; // Crear un arreglo con los números de 1 a 9
            for (let i = 0; i < indices.length; i++) {
                let domingoData = offersData[selectedProvince]['domingo' + indices[i]];

                if (domingoData) {
                    let offerElement_domingo = document.getElementById('offer' + (indices[i] + 1));
                    let titleElement_domingo = document.getElementById('offerTitle' + (indices[i] + 1));
                    let descriptionElement_domingo = document.getElementById('offerDescription' + (indices[i] + 1));
                    let additionalContentElement_domingo = document.getElementById('additionalContent' + (indices[i] + 1));
                    let imageElement_domingo = document.getElementById('offerImage' + (indices[i] + 1));
                    let hiddenRowElement_domingo = document.getElementById('hiddenRow' + (indices[i] + 1));

                    if (domingoData.visible) {
                        if (offerElement_domingo) offerElement_domingo.style.display = "flex";
                        if (titleElement_domingo) titleElement_domingo.textContent = domingoData.title;
                        if (descriptionElement_domingo) descriptionElement_domingo.textContent = domingoData.description;
                        if (additionalContentElement_domingo) additionalContentElement_domingo.innerHTML = domingoData.additionalContent;
                        if (imageElement_domingo) imageElement_domingo.src = domingoData.image;
                        if (hiddenRowElement_domingo) hiddenRowElement_domingo.innerHTML = domingoData.hiddenrow;
                    } else {
                        if (offerElement_domingo) offerElement_domingo.style.display = "none";
                    }
                }
            }
        }

        //------------------------------------------------------------------------------------------


        //----------------------------------todoslosdias--------------------------------------------------------

        if (day === "todoslosdias") {
            let indices = [0, 1, 2, 3, 4, 5, 6, 7]; // Crear un arreglo con los números de 1 a 9
            for (let i = 0; i < indices.length; i++) {
                let todoslosdiasData = offersData[selectedProvince]['todoslosdias' + indices[i]];

                if (todoslosdiasData) {
                    let offerElement_todoslosdias = document.getElementById('offer' + (indices[i] + 1));
                    let titleElement_todoslosdias = document.getElementById('offerTitle' + (indices[i] + 1));
                    let descriptionElement_todoslosdias = document.getElementById('offerDescription' + (indices[i] + 1));
                    let additionalContentElement_todoslosdias = document.getElementById('additionalContent' + (indices[i] + 1));
                    let imageElement_todoslosdias = document.getElementById('offerImage' + (indices[i] + 1));
                    let hiddenRowElement_todoslosdias = document.getElementById('hiddenRow' + (indices[i] + 1));

                    if (todoslosdiasData.visible) {
                        if (offerElement_todoslosdias) offerElement_todoslosdias.style.display = "flex";
                        if (titleElement_todoslosdias) titleElement_todoslosdias.textContent = todoslosdiasData.title;
                        if (descriptionElement_todoslosdias) descriptionElement_todoslosdias.textContent = todoslosdiasData.description;
                        if (additionalContentElement_todoslosdias) additionalContentElement_todoslosdias.innerHTML = todoslosdiasData.additionalContent;
                        if (imageElement_todoslosdias) imageElement_todoslosdias.src = todoslosdiasData.image;
                        if (hiddenRowElement_todoslosdias) hiddenRowElement_todoslosdias.innerHTML = todoslosdiasData.hiddenrow;
                    } else {
                        if (offerElement_todoslosdias) offerElement_todoslosdias.style.display = "none";
                    }
                }
            }
        }


        //------------------------------------------------------------------------------------------



        //--------------------------------------------FIN DE LOS DIAS DE LA SEMANA-------------------------------------------------

        // Actualizar clase del día seleccionado en ambos elementos
        const days = document.querySelectorAll('.day-selector .day');
        days.forEach(d => d.classList.remove('selected'));

        // Resaltar el día seleccionado
        const selectedDayElement = document.querySelector(`.day[value="${day}"]`);
        if (selectedDayElement) {
            selectedDayElement.classList.add('selected');
        }

        // También actualizar el select para reflejar la selección
        const selectElement = document.getElementById('daySelect');
        selectElement.value = day;




    }


    // Función para alternar visibilidad de texto adicional
    function toggleMore(element) {
        const hiddenRow = element.closest('.offer').querySelector('.hidden-row');
        hiddenRow.style.display = hiddenRow.style.display === "none" || hiddenRow.style.display === "" ? "block" : "none";
    }




    // Initialize with default values
    window.onload = () => {

        updateOffers();
    };



});