      // Array con las 100 preguntas (solo mostramos algunas por espacio)
      
      const preguntas = [
    
            // Rompehielos y Casuales
            "¿Qué harías si tuvieras un día libre sin responsabilidades?",
            "Si pudieras cenar con alguien (vivo o muerto), ¿quién sería y por qué?",
            "¿Cuál es el último libro/película/serie que te enganchó?",
            "¿Qué canción te levanta el ánimo al instante?",
            "¿Qué hobby has probado últimamente y te sorprendió?",
            
            // Sobre Ti
            "¿Qué tres palabras te definirían mejor?",
            "¿Qué logro personal te hace sentir más orgulloso/a?",
            "¿Cuál es tu recuerdo favorito de la infancia?",
            "¿Qué cosa 'inútil' te encanta coleccionar o hacer?",
            "¿Qué superpoder elegirías y cómo lo usarías en tu vida diaria?",
            
            // Viajes y Aventuras
            "¿Qué país te gustaría visitar y qué harías allí?",
            "¿Prefieres playa, montaña o ciudad? ¿Por qué?",
            "¿La mejor comida local que has probado en un viaje?",
            "¿Viajarías solo/a? ¿A dónde?",
            "¿Qué destino te decepcionó y cuál superó tus expectativas?",
            
            // Hobbies y Pasiones
            "Si tuvieras una hora extra al día, ¿en qué la invertirías?",
            "¿Qué actividad te hace perder la noción del tiempo?",
            "¿Prefieres cocinar, ordenar o decorar?",
            "¿Qué skill te gustaría dominar en el próximo año?",
            "¿Cuál es tu rutina perfecta de domingo?",
            
            // Reflexiones Profundas
            "¿Qué crees que es lo más importante para una vida feliz?",
            "¿Qué lección dura te ha enseñado la vida?",
            "¿En qué momento sentiste que 'todo encajó'?",
            "¿Qué opinas del equilibrio entre trabajo y vida personal?",
            "Si pudieras cambiar una norma social, ¿cuál sería?",
            
            // Cultura y Entretenimiento
            "¿Película clásica o cine independiente?",
            "¿Qué artista (musical, pintor, etc.) te inspira?",
            "¿Prefieres leer ficción o no ficción?",
            "¿Cuál es tu meme o chiste interno favorito?",
            "¿Qué obra de arte te emociona cada vez que la ves?",
            
            // Tecnología y Futuro
            "¿Qué avance tecnológico te asombra más hoy?",
            "¿Crees que la IA mejorará o empeorará la sociedad?",
            "¿Qué app usas más y por qué?",
            "¿Te gustaría vivir en Marte si fuera posible?",
            "¿Qué invento antiguo sigue siendo útil hoy?",
            
            // Comida y Bebida
            "¿Plato favorito para cocinar vs. para pedir a domicilio?",
            "¿Qué comida detestas pero todos aman?",
            "¿Café, té o algo más exótico?",
            "¿Postre que siempre pides en un restaurante?",
            "¿Qué ingrediente no puede faltar en tu cocina?",
            
            // Hábitos y Rutinas
            "¿Eres madrugador/a o noctámbulo/a?",
            "¿Qué hábito te gustaría eliminar o adoptar?",
            "¿Cómo te relajas después de un día estresante?",
            "¿Qué app de bienestar usas (o te gustaría usar)?",
            "¿Qué ritual matutino te pone en modo productivo?",
            
            // Filosóficas y Divertidas
            "Si fueras un animal, ¿cuál serías?",
            "¿Qué objeto llevarías a una isla desierta?",
            "¿Qué problema mundial resolverías primero?",
            "¿Qué título tendría la película de tu vida?",
            "¿Qué pregunta te harías a ti mismo/a dentro de 10 años?",
            
            // Trabajo y Proyectos
            "¿Qué te motivó a dedicarte a tu profesión?",
            "¿Qué proyecto personal te entusiasma ahora?",
            "¿Prefieres trabajar en equipo o solo/a?",
            "¿Qué consejo darías a alguien que empieza en tu campo?",
            "¿Qué industria te parece fascinante pero no conoces bien?",
            
            // Sociedad y Actualidad
            "¿Qué tendencia actual te parece sobrevalorada?",
            "¿Qué causa social te apasiona?",
            "¿Cómo crees que será el mundo en 2050?",
            "¿Qué tradición debería conservarse o desaparecer?",
            "¿Qué invento simple mejoraría la vida de millones?",
            
            // Deportes y Actividad Física
            "¿Deporte que admiras pero nunca practicarías?",
            "¿Prefieres gym, yoga o deportes extremos?",
            "¿Qué atleta te inspira?",
            "¿Qué actividad física te divierte más?",
            "¿Has tenido alguna lesión que cambiara tu perspectiva?",
            
            // Moda y Estilo Personal
            "¿Qué prenda te define mejor?",
            "¿Prefieres comodidad o estilo?",
            "¿Qué tendencia de moda odias?",
            "¿Qué accesorio nunca olvidas usar?",
            "¿Qué icono de estilo admiras?",
            
            // Naturaleza y Medio Ambiente
            "¿Qué lugar natural te hace sentir en paz?",
            "¿Qué acción pequeña haces para cuidar el planeta?",
            "¿Planta o animal que te fascine?",
            "¿Camping, glamping o hotel?",
            "¿Qué fenómeno natural te gustaría presenciar?",
            
            // Relaciones y Familia
            "¿Qué tradición familiar valoras más?",
            "¿Qué cualidad buscas en una amistad?",
            "¿Qué lección importante te enseñaron tus padres?",
            "¿Qué actividad familiar recuerdas con cariño?",
            "¿Cómo defines el amor en una palabra?",
            
            // Educación y Aprendizaje
            "¿Qué asignatura odiabas en el colegio?",
            "¿Qué tema te gustaría estudiar ahora?",
            "¿Prefieres aprender online o en persona?",
            "¿Qué idioma te gustaría dominar?",
            "¿Qué error te enseñó más que un éxito?",
            
            // Arte y Creatividad
            "¿Qué expresión artística te gustaría probar?",
            "¿Qué canción describe tu estado de ánimo hoy?",
            "¿Prefieres museos de arte clásico o moderno?",
            "¿Qué color representa tu personalidad?",
            "¿Qué artista subestimado merece más reconocimiento?",
            
            // Miedos y Desafíos
            "¿Qué miedo has superado recientemente?",
            "¿Qué situación te saca de tu zona de confort?",
            "¿Qué desafío personal te está costando ahora?",
            "¿Qué frase te repites en momentos difíciles?",
            "¿Qué persona te inspira valentía?",
            
            // Aleatorias y Divertidas
            "¿Qué emoji usas más?",
            "Si fueras un personaje de ficción, ¿cuál serías?",
            "¿Qué app abres sin pensar cuando estás aburrido/a?",
            "¿Qué título tendría tu podcast ideal?",
            "¿Qué pregunta añadirías a esta lista?"
    ];

    function mostrarPregunta() {
        
        const numero = document.getElementById('numero').value;
        const resultado = document.getElementById('resultado');
        
        if(numero >= 1 && numero <= 100) {
            resultado.innerHTML = `<strong>Pregunta ${numero}:</strong><br>${preguntas[numero-1]}`;
            resultado.style.animation = "fadeIn 0.5s";
        } else {
            resultado.innerHTML = "⚠️ Por favor ingresa un número entre 1 y 100";
            resultado.style.color = "#e74c3c";
        }
    }
    function copiarPregunta() {
        const resultado = document.getElementById('resultado');
        const texto = resultado.innerText; // Obtener el texto sin HTML
        const btnCopiar = document.getElementById('btnCopiar');

        navigator.clipboard.writeText(texto)
            .then(() => {
                btnCopiar.classList.add('copied');
                btnCopiar.textContent = "✅ ¡Copiada!";
                setTimeout(() => {
                    btnCopiar.classList.remove('copied');
                    btnCopiar.textContent = "📋 Copiar pregunta";
                }, 2000); // Resetear después de 2 segundos
            })
            .catch(() => {
                alert("No se pudo copiar. Intenta manualmente.");
            });
    }
    function preguntaAleatoria() {
        const numeroRandom = Math.floor(Math.random() * 100) + 1;
        document.getElementById('numero').value = numeroRandom;
        mostrarPregunta();
    }
