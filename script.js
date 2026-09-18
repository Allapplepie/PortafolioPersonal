function girarTarjeta(tarjeta) {
    // Busca en la lista de clases del <li> y alterna la clase "girar"
    tarjeta.classList.toggle('girar');
}

// Esperamos a que todo el HTML de la página esté cargado completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 🍔 1. MENÚ HAMBURGUESA RESPONSIVO
    // ==========================================
    const botonHamburguesa = document.querySelector(".nav-toggle");
    const menuNavegacion = document.querySelector(".nav-menu");

    if (botonHamburguesa && menuNavegacion) {
        botonHamburguesa.addEventListener("click", () => {
            // El interruptor (toggle) añade o quita la clase para mostrar/ocultar el menú
            menuNavegacion.classList.toggle("nav-menu_visible");
        });
    }

    // ==========================================
    // ✍️ 2. VALIDACIÓN DE FORMULARIO EN TIEMPO REAL
    // ==========================================
    const formulario = document.querySelector("form");
    
    if (formulario) {
        const inputNombre = formulario.querySelector("input[type='text']");
        const inputCorreo = formulario.querySelector("input[type='email']");
        const inputTelefono = formulario.querySelector("input[type='number']");

        // Escuchamos cuando el usuario escribe en tiempo real ("input")
        if (inputNombre) {
            inputNombre.addEventListener("input", () => {
                if (inputNombre.value.trim().length < 3) {
                    inputNombre.style.borderColor = "#ff4d4d"; // Rojo si es muy corto o vacío
                    inputNombre.style.backgroundColor = "#fff55"; 
                } else {
                    inputNombre.style.borderColor = "#2ecc71"; // Verde si es válido
                    inputNombre.style.backgroundColor = "#f5fff7";
                }
            });
        }

        if (inputCorreo) {
            inputCorreo.addEventListener("input", () => {
                const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!expresionCorreo.test(inputCorreo.value)) {
                    inputCorreo.style.borderColor = "#ff4d4d"; // Rojo si no tiene formato email
                    inputCorreo.style.backgroundColor = "#fff55";
                } else {
                    inputCorreo.style.borderColor = "#2ecc71"; // Verde si está bien escrito
                    inputCorreo.style.backgroundColor = "#f5fff7";
                }
            });
        }

        if (inputTelefono) {
            inputTelefono.addEventListener("input", () => {
                if (inputTelefono.value.trim().length < 7) {
                    inputTelefono.style.borderColor = "#ff4d4d"; // Rojo si tiene pocos números
                    inputTelefono.style.backgroundColor = "#fff55";
                } else {
                    inputTelefono.style.borderColor = "#2ecc71"; // Verde si cumple
                    inputTelefono.style.backgroundColor = "#f5fff7";
                }
            });
        }

        // Validación final al presionar el botón "Enviar"
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault(); // Evitamos que la página se recargue sola

            if (inputNombre.value.trim() === "" || inputCorreo.value.trim() === "") {
                alert("❌ Por favor, completa los campos obligatorios correctamente.");
            } else {
                // Modificación dinámica del DOM mediante una alerta de éxito
                alert("✨ ¡Mensaje enviado con éxito! Gracias por contactarme.");
                formulario.reset(); // Limpia los campos del formulario
                
                // Resetea los colores de los inputs a su estado original
                [inputNombre, inputCorreo, inputTelefono].forEach(input => {
                    if(input) {
                        input.style.borderColor = "#ccc";
                        input.style.backgroundColor = "#ffffff";
                    }
                });
            }
        });
    }
});