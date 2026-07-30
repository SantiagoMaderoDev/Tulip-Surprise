"use strict";

const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaPregunta = document.getElementById("pantalla-pregunta");
const pantallaAcepto = document.getElementById("pantalla-acepto");
const pantallaComida = document.getElementById("pantalla-comida");

const botonComenzar = document.getElementById("boton-comenzar");
const botonSi = document.getElementById("boton-si");
const botonNo = document.getElementById("boton-no");
const botonContinuarAcepto = document.getElementById(
    "boton-continuar-acepto"
    
);
const botonVerResumen = document.getElementById("boton-ver-resumen");
const textoMaquina = document.getElementById("texto-maquina");
const resumenComida = document.getElementById("resumen-comida");
const resumenFecha = document.getElementById("resumen-fecha");
const resumenHorario = document.getElementById("resumen-horario");

const botonEnviarWhatsApp = document.getElementById(
    "boton-enviar-whatsapp"
);
const zonaBotones = document.getElementById("zona-botones");
const opcionesComida = document.querySelectorAll(".opcion-comida");

const mensajeSeleccion = document.getElementById("mensaje-seleccion");

const contenedorPetalos = document.getElementById("petalos");
const pantallaFecha = document.getElementById("pantalla-fecha");
const pantallaHorario = document.getElementById("pantalla-horario");
const pantallaMensaje = document.getElementById("pantalla-mensaje");
const pantallaResumen = document.getElementById("pantalla-resumen");
const pantallaFinal =
document.getElementById("pantalla-final");


const botonFinalPrueba =
document.getElementById("boton-final-prueba");
const fechaCita = document.getElementById("fecha-cita");
const fechaElegida = document.getElementById("fecha-elegida");

const botonContinuarFecha = document.getElementById(
    "boton-continuar-fecha"
);
const opcionesHorario = document.querySelectorAll(".opcion-horario");

const horarioElegido = document.getElementById("horario-elegido");

const botonContinuarHorario = document.getElementById(
    "boton-continuar-horario"
);
const progresoInvitacion =
document.getElementById("progreso-invitacion");

const progresoPaso =
document.getElementById("progreso-paso");

const progresoTitulo =
document.getElementById("progreso-titulo");

const progresoRelleno =
document.getElementById("progreso-relleno");
function obtenerFechaMinima() {
    const hoy = new Date();

    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const dia = String(hoy.getDate()).padStart(2, "0");

    return `${año}-${mes}-${dia}`;
}
const pasosInvitacion = [
    {
        pantalla: pantallaPregunta,
        titulo: "La pregunta importante"
    },
    {
        pantalla: pantallaAcepto,
        titulo: "Tenemos una respuesta"
    },
    {
        pantalla: pantallaComida,
        titulo: "Elige algo delicioso"
    },
    {
        pantalla: pantallaFecha,
        titulo: "Escoge la fecha"
    },
    {
        pantalla: pantallaHorario,
        titulo: "El mejor horario"
    },
    {
        pantalla: pantallaMensaje,
        titulo: "Un mensaje para ti"
    },
    {
        pantalla: pantallaFinal,
        titulo: "Misión cumplida"
    },
    {
        pantalla: pantallaResumen,
        titulo: "Nuestro plan"
    }
];
function actualizarProgreso(pantallaActual) {
    const indicePaso =
        pasosInvitacion.findIndex((paso) => {
            return paso.pantalla === pantallaActual;
        });

    if (indicePaso === -1) {
        progresoInvitacion.classList.remove("visible");
        return;
    }

    const numeroPaso = indicePaso + 1;
    const totalPasos = pasosInvitacion.length;

    const porcentaje =
        (numeroPaso / totalPasos) * 100;

    progresoPaso.textContent =
        `🌷 Paso ${numeroPaso} de ${totalPasos}`;

    progresoTitulo.textContent =
        pasosInvitacion[indicePaso].titulo;

    progresoRelleno.style.width =
        `${porcentaje}%`;

    progresoInvitacion.classList.add("visible");
}
fechaCita.min = obtenerFechaMinima();

fechaCita.addEventListener("change", () => {
    if (!fechaCita.value) {
        fechaElegida.textContent =
            "Todavía no has elegido una fecha.";

        botonContinuarFecha.disabled = true;
        return;
    }

    fechaSeleccionada = fechaCita.value;

    const fechaFormateada = new Date(
        `${fechaSeleccionada}T12:00:00`
    ).toLocaleDateString("es-MX", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    fechaElegida.textContent =
        `Perfecto: ${fechaFormateada} 🌷`;

    botonContinuarFecha.disabled = false;
});

botonContinuarFecha.addEventListener("click", () => {
    mostrarPantalla(pantallaHorario);
});
opcionesHorario.forEach((opcion) => {
    opcion.addEventListener("click", () => {

        opcionesHorario.forEach((boton) => {
            boton.classList.remove("seleccionada");
        });

        opcion.classList.add("seleccionada");

        horarioSeleccionado = opcion.dataset.horario;

        horarioElegido.textContent =
            `Perfecto, elegiste las ${horarioSeleccionado} 🌷`;

        botonContinuarHorario.disabled = false;
    });
});

botonContinuarHorario.addEventListener("click", () => {
    console.log("Comida:", comidaSeleccionada);
    console.log("Fecha:", fechaSeleccionada);
    console.log("Horario:", horarioSeleccionado);

    mostrarPantalla(pantallaMensaje);("¡Perfecto! Ya tenemos comida, fecha y horario 💚");
    setTimeout(function () {
    iniciarMaquinaDeEscribir();
}, 2500);
});
botonVerResumen.addEventListener("click", () => {
    resumenComida.textContent = comidaSeleccionada;
    resumenFecha.textContent = fechaSeleccionada;
    resumenHorario.textContent = horarioSeleccionado;

    mostrarPantalla(pantallaFinal);
});
botonEnviarWhatsApp.addEventListener("click", () => {
    const numeroWhatsApp = "525521934063";

    const tulipan = String.fromCodePoint(0x1F337);
    const sonrisa = String.fromCodePoint(0x1F601);
    const plato = String.fromCodePoint(0x1F37D, 0xFE0F);
    const calendario = String.fromCodePoint(0x1F4C5);
    const reloj = String.fromCodePoint(0x1F552);

    const mensajeWhatsApp = [
        `${tulipan} Acepto oficialmente la invitación ${sonrisa}`,
        "",
        `${plato} Comida: ${comidaSeleccionada}`,
        `${calendario} Fecha: ${fechaSeleccionada}`,
        `${reloj} Horario: ${horarioSeleccionado}`,
        "",
        `Ahora te toca escoger el lugar perfecto. ${tulipan}`
    ].join("\n");

    const enlaceWhatsApp = new URL(
        "https://api.whatsapp.com/send"
    );

    enlaceWhatsApp.searchParams.set(
        "phone",
        numeroWhatsApp
    );

    enlaceWhatsApp.searchParams.set(
        "text",
        mensajeWhatsApp
    );

    window.location.href = enlaceWhatsApp.toString();
});
let comidaSeleccionada = "";
let fechaSeleccionada = "";
let horarioSeleccionado = "";
const frasesMaquina = [
    "Chof, La verdad...",
    "Llevaba varios días pensando cómo invitarte.",
    'Mandarte un "¿salimos?"... cualquiera lo hace.',
    "Pero quise hacer algo diferente.",
    "Espero haberte sacado al menos una sonrisa. :)",
    "Ahora me toca elegir el lugar perfecto... "
];function esperar(milisegundos) {
    return new Promise((resolve) => {
        setTimeout(resolve, milisegundos);
    });
}
async function escribirTexto(frase) {
    textoMaquina.textContent = "";

    for (let indice = 0; indice < frase.length; indice++) {
        textoMaquina.textContent += frase[indice];
        await esperar(55);
    }
}
async function borrarTexto() {
    while (textoMaquina.textContent.length > 0) {
        textoMaquina.textContent =
            textoMaquina.textContent.slice(0, -1);

        await esperar(30);
    }
}
async function iniciarMaquinaDeEscribir() {
    textoMaquina.textContent = "";

    botonVerResumen.classList.remove("boton-visible");
    botonVerResumen.classList.add("boton-oculto");

    for (
        let indiceFrase = 0;
        indiceFrase < frasesMaquina.length;
        indiceFrase++
    ) {
        await escribirTexto(frasesMaquina[indiceFrase]);

        const esUltimaFrase =
            indiceFrase === frasesMaquina.length - 1;

        if (!esUltimaFrase) {
            await esperar(1500);
            await borrarTexto();
            await esperar(400);
        }
    }
    

    await esperar(800);

    botonVerResumen.classList.remove("boton-oculto");
    botonVerResumen.classList.add("boton-visible");
}
let transicionEnCurso = false;

function mostrarPantalla(pantallaDestino) {
    const pantallaActual =
        document.querySelector(".pantalla.activa");

    if (transicionEnCurso) {
        return;
    }

    if (pantallaActual === pantallaDestino) {
        return;
    }

    if (!pantallaActual) {
    pantallaDestino.classList.add("activa");
    actualizarProgreso(pantallaDestino);
    return;
}

    transicionEnCurso = true;

    pantallaActual.classList.add("saliendo");

    setTimeout(() => {
        pantallaActual.classList.remove("activa", "saliendo");

        pantallaDestino.classList.add("activa");
        pantallaDestino.classList.add("activa");
actualizarProgreso(pantallaDestino);

transicionEnCurso = false;

        transicionEnCurso = false;
    }, 350);
}

botonComenzar.addEventListener("click", () => {
    mostrarPantalla(pantallaPregunta);
});

botonSi.addEventListener("click", () => {
    botonSi.classList.add("celebrando");
    celebrarConPetalos();

    setTimeout(() => {
        botonSi.classList.remove("celebrando");
        mostrarPantalla(pantallaAcepto);
    }, 550);
});
botonContinuarAcepto.addEventListener("click", () => {
    mostrarPantalla(pantallaComida);
});
function moverBotonNo() {
    const zona = zonaBotones.getBoundingClientRect();
    const boton = botonNo.getBoundingClientRect();

    const espacioX = Math.max(zona.width - boton.width, 0);
    const espacioY = Math.max(zona.height - boton.height, 0);

    const nuevaX = Math.random() * espacioX;
    const nuevaY = Math.random() * espacioY;

    botonNo.style.position = "absolute";
    botonNo.style.left = `${nuevaX}px`;
    botonNo.style.top = `${nuevaY}px`;
}

botonNo.addEventListener("mouseenter", moverBotonNo);
botonNo.addEventListener("pointerdown", (evento) => {
    evento.preventDefault();
    moverBotonNo();
});

opcionesComida.forEach((opcion) => {
    opcion.addEventListener("click", () => {

        opcionesComida.forEach((boton) => {
    boton.classList.remove("seleccionada", "atenuada");

    if (boton !== opcion) {
        boton.classList.add("atenuada");
    }
});

        opcion.classList.add("seleccionada");

        comidaSeleccionada = opcion.dataset.comida;

        mensajeSeleccion.textContent =
            `Perfecto, elegiste ${comidaSeleccionada}. Excelente elección 🌷`;

        setTimeout(() => {
            mostrarPantalla(pantallaFecha);
        }, 1200);
    });
});

function crearPetalo() {
    const petalo = document.createElement("span");

    const simbolos = ["🌸", "🌷"];
    const simboloAleatorio =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    petalo.className = "petalo";
    petalo.textContent = simboloAleatorio;

    petalo.style.left = `${Math.random() * 100}%`;
    petalo.style.fontSize = `${14 + Math.random() * 14}px`;
    petalo.style.opacity = `${0.35 + Math.random() * 0.4}`;
    petalo.style.animationDuration = `${7 + Math.random() * 5}s`;

    petalo.style.setProperty(
        "--movimiento-x",
        `${Math.random() * 220 - 110}px`
    );

    petalo.style.setProperty(
        "--rotacion",
        `${Math.random() * 720 - 360}deg`
    );

    contenedorPetalos.appendChild(petalo);

    petalo.addEventListener("animationend", () => {
        petalo.remove();
    });
}
function celebrarConPetalos() {
    const cantidadPetalos = 18;

    for (let i = 0; i < cantidadPetalos; i++) {
        const petalo = document.createElement("span");

        const simbolos = ["🌸", "🌷", "✨"];
        const simboloAleatorio =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        const angulo =
            (360 / cantidadPetalos) * i;

        const distancia =
            110 + Math.random() * 130;

        const movimientoX =
            Math.cos(angulo * Math.PI / 180) * distancia;

        const movimientoY =
            Math.sin(angulo * Math.PI / 180) * distancia;

        petalo.className = "petalo-celebracion";
        petalo.textContent = simboloAleatorio;

        petalo.style.setProperty(
            "--destino-x",
            `${movimientoX}px`
        );

        petalo.style.setProperty(
            "--destino-y",
            `${movimientoY}px`
        );

        petalo.style.setProperty(
            "--rotacion-final",
            `${Math.random() * 720 - 360}deg`
        );

        petalo.style.fontSize =
            `${18 + Math.random() * 14}px`;

        document.body.appendChild(petalo);

        petalo.addEventListener("animationend", () => {
            petalo.remove();
        });
    }
}

setInterval(crearPetalo, 900);
botonFinalPrueba.addEventListener("click", () => {
    const progreso = document.getElementById("progreso-invitacion");

    if (progreso) {
        progreso.style.display = "none";
    }

    mostrarPantalla(pantallaResumen);
});
window.addEventListener("load", function () {
    const pantallaCarga = document.getElementById("pantalla-carga");
    const pantallaFrase = document.getElementById("pantalla-frase");
    const aplicacion = document.querySelector(".aplicacion");

    if (!pantallaCarga || !pantallaFrase) {
        return;
    }

    setTimeout(function () {
        pantallaCarga.classList.add("oculta");
        pantallaFrase.classList.add("visible");
    }, 4500);

    setTimeout(function () {
        pantallaCarga.remove();
    }, 5100);

    setTimeout(function () {
    pantallaFrase.classList.add("ocultando");
}, 10800);

    setTimeout(function () {
    pantallaFrase.remove();
}, 11650);

});
