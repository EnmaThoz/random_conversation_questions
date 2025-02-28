      // Array con las 100 preguntas (solo mostramos algunas por espacio)
      
      const preguntas = [
       // Rompehielos y Casuales
  "¿Qué harías si pudieras vivir en cualquier época de la historia?",
  "¿Cuál es tu estación favorita del año y por qué?",
  "¿Qué harías si encontraras una maleta llena de dinero?",
  "¿Cuál es tu recuerdo más divertido?",
  "Si pudieras ser otra persona por un día, ¿quién serías?",
  "¿Qué harías si te ganaras la lotería mañana?",
  "¿Qué serie o película recomiendas siempre a tus amigos?",
  "¿Cuál es tu comida reconfortante favorita?",
  "¿Qué lugar cercano siempre has querido visitar pero nunca lo has hecho?",
  "¿Tienes alguna rutina o hábito inusual que amas?",
  
  // Sobre Ti
  "¿Qué es lo primero que haces al despertar?",
  "¿Qué es algo que siempre llevas contigo?",
  "¿Cuál es tu mayor manía o hábito extraño?",
  "¿Qué es lo más valiente que has hecho en tu vida?",
  "¿Qué tres cosas nunca olvidarías si te mudaras de casa?",
  "¿Qué harías si pudieras vivir sin trabajar?",
  "¿Qué cualidad te gusta más de ti mismo/a?",
  "¿Qué tipo de cosas te hacen reír más?",
  "¿Qué es algo que siempre has querido aprender pero nunca has intentado?",
  "¿Qué es algo que te hace sentir nostálgico/a?",

  // Viajes y Aventuras
  "Si pudieras teletransportarte, ¿a dónde irías ahora mismo?",
  "¿Qué país tiene la cultura que más te fascina?",
  "Si tuvieras que elegir un lugar para vivir el resto de tu vida, ¿cuál sería?",
  "¿Cuál ha sido tu mejor viaje y por qué?",
  "¿Qué es lo más extraño que has comido en un viaje?",
  "¿Qué viaje fue completamente diferente a lo que esperabas?",
  "Si pudieras viajar al espacio, ¿lo harías?",
  "¿Cuál es tu transporte favorito al viajar?",
  "¿Qué lugar turístico crees que está sobrevalorado?",
  "¿Qué viaje planeas hacer en los próximos años?",

  // Hobbies y Pasiones
  "¿Qué actividad te da más energía?",
  "¿Qué hobby quisieras convertir en tu trabajo?",
  "¿Qué es algo que disfrutas hacer en solitario?",
  "¿Qué actividad creativa te relaja más?",
  "¿Qué hobbie has abandonado y quisieras retomar?",
  "¿Qué proyecto personal te emociona más en este momento?",
  "¿Qué actividad te gustaría probar pero te da miedo?",
  "¿Qué cosa nueva aprendiste este año?",
  "¿Qué hobby crees que está poco valorado?",
  "Si pudieras dedicarte a una sola actividad, ¿cuál sería?",

  // Reflexiones Profundas
  "¿Qué te hace sentir agradecido/a?",
  "¿Qué es algo que cambiarías del mundo actual?",
  "¿Qué valoras más en las personas?",
  "¿Qué es algo que te da esperanza en momentos difíciles?",
  "¿Qué crees que las personas suelen olvidar sobre la vida?",
  "¿Qué harías si pudieras vivir para siempre?",
  "¿Qué importancia tiene la familia en tu vida?",
  "¿Qué es algo que nunca podrías perdonar?",
  "¿Qué significa para ti el éxito?",
  "¿Qué te motiva a seguir adelante en días malos?",

  // Cultura y Entretenimiento
  "¿Qué género de música te define mejor?",
  "¿Qué libro cambió tu forma de pensar?",
  "¿Qué película te emocionó tanto que la sigues recomendando?",
  "¿Qué serie es tu placer culposo?",
  "¿Quién es tu actor o actriz favorito/a?",
  "¿Qué estilo de arte te atrae más?",
  "¿Qué banda sonora te trae buenos recuerdos?",
  "¿Qué videojuego te atrapó por completo?",
  "¿Prefieres conciertos en vivo o festivales?",
  "¿Qué documental te impactó más?",

  // Tecnología y Futuro
  "¿Qué tecnología crees que revolucionará el mundo en la próxima década?",
  "¿Qué gadget no podrías dejar de usar?",
  "¿Qué opinas de las criptomonedas?",
  "¿Qué invento esperas que exista en el futuro?",
  "¿Qué opinas de los autos eléctricos?",
  "¿Qué redes sociales usas más y por qué?",
  "¿Qué tecnología antigua te parece impresionante?",
  "¿Crees que los robots reemplazarán a los humanos en algunos trabajos?",
  "¿Qué opinas del metaverso?",
  "¿Qué avances médicos te parecen más esperanzadores?",

  // Comida y Bebida
  "¿Comida que te hace feliz al instante?",
  "¿Qué bebida siempre pides en un restaurante?",
  "¿Qué plato típico de tu país recomendarías a un extranjero?",
  "¿Qué sabor te trae recuerdos de tu infancia?",
  "¿Prefieres dulce o salado?",
  "¿Qué comida exótica te gustaría probar?",
  "¿Qué ingrediente evitas siempre?",
  "¿Qué restaurante es tu favorito y por qué?",
  "¿Qué postre podrías comer todos los días?",
  "¿Qué comida rápida es tu debilidad?",

  // Hábitos y Rutinas
  "¿Qué haces para mantenerte organizado/a?",
  "¿Qué actividad disfrutas más al final del día?",
  "¿Qué hábito saludable intentas mantener?",
  "¿Cómo es tu rutina ideal antes de dormir?",
  "¿Qué te motiva a empezar el día?",
  "¿Qué hábito quisieras heredar de alguien cercano?",
  "¿Qué haces para desconectarte de la tecnología?",
  "¿Qué rutina te ayuda a relajarte más?",
  "¿Qué hábito de tu infancia aún mantienes?",
  "¿Qué es lo primero que haces al llegar a casa?",

  // Filosóficas y Divertidas
  "¿Qué harías si supieras que hoy es tu último día?",
  "¿Qué pregunta filosófica siempre te ha intrigado?",
  "¿Qué crees que pasa después de la muerte?",
  "¿Qué harías si fueras invisible por un día?",
  "¿Qué cosa absurda siempre te hace reír?",
  "¿Qué animal mitológico te gustaría tener como mascota?",
  "¿Qué invento absurdo te gustaría crear?",
  "¿Qué harías si pudieras controlar el tiempo?",
  "¿Qué cosa te resulta completamente incomprensible?",
  "¿Qué es algo que nadie sabe de ti?",

  // Trabajo y Proyectos
  "¿Qué es lo más importante para ti en un trabajo?",
  "¿Qué proyecto profesional ha sido el más desafiante?",
  "¿Qué te motiva a seguir aprendiendo?",
  "¿Qué es lo más gratificante de tu profesión?",
  "¿Qué habilidad quisieras mejorar en tu campo?",
  "¿Qué te inspira a ser mejor en tu trabajo?",
  "¿Qué consejo te gustaría haber recibido al empezar tu carrera?",
  "¿Qué trabajo crees que desaparecerá en el futuro?",
  "¿Qué valoras más en un compañero de trabajo?",
  "¿Qué industria crees que está creciendo más rápido?",

  // Relaciones y Familia
  "¿Qué valoras más en una amistad?",
  "¿Qué tradición familiar te gustaría continuar?",
  "¿Qué actividad disfrutas más con tus seres queridos?",
  "¿Qué es lo más importante en una relación de pareja?",
  "¿Qué cualidad admiras más en tus padres?",
  "¿Qué es algo que siempre recuerdas de tus abuelos?",
  "¿Qué es algo que has aprendido de tus amigos?",
  "¿Qué relación ha marcado tu vida más profundamente?",
  "¿Qué haces para mantener relaciones a larga distancia?",
  "¿Qué valoras más en una relación cercana?",
  "¿Qué es algo que siempre has querido coleccionar?",
  "¿Qué es lo más extraño que has soñado?",
  "¿Qué es algo que te gustaría hacer antes de morir?",
  "¿Qué es algo que te hace sentir orgulloso/a de ti mismo/a?",
  "¿Qué es algo que te gustaría cambiar de tu pasado?",
  "¿Qué es algo que te gustaría aprender a hacer?",
  "¿Qué es algo que te gustaría enseñarle a alguien?",
  "¿Qué es algo que te gustaría ver en el futuro?",
  "¿Qué es algo que te gustaría probar en la comida?",
  "¿Qué es algo que te gustaría hacer en un día libre?",
    // Ciencia y Naturaleza
    "¿Qué fenómeno natural te parece más fascinante?",
    "Si pudieras resolver un misterio científico, ¿cuél elegirías?",
    "¿Qué invento médico te parece más revolucionario?",
    "¿Qué animal en peligro de extinción te gustaría salvar?",
    "¿Qué pregunta le harías a un astronauta?",
    
    // Arte y Creatividad
    "¿Qué obra de arte abstracto te provoca más emociones?",
    "Si tu vida fuera un género artístico, ¿cuál sería?",
    "¿Qué técnica artística te gustaría dominar?",
    "¿Qué museo del mundo visitarías solo por su arquitectura?",
    "¿Qué artista callejero admiras?",
    
    // Futuro y Tecnología  
    "¿Qué aspecto de la vida actual crees que será obsoleto en 50 años?",
    "¿Qué planeta, además de Marte, te gustaría colonizar?",
    "¿Qué app del futuro te imaginas que existirá?",
    "¿Qué dilema ético crees que traerá la IA?",
    "¿Qué objeto cotidiano debería ser 'inteligente'?",
    
    // Sociedad y Cultura
    "¿Qué tradición cultural ajena te gustaría adoptar?",
    "¿Qué problema social crees que merece más atención?",
    "¿Qué figura histórica subestimada debería ser más reconocida?",
    "¿Qué estereotipo cultural te molesta más?",
    "¿Qué festival internacional te gustaría experimentar?",
    
    // Deportes y Aventura
    "¿Qué deporte extremo probarías si tuvieras garantía de seguridad?",
    "¿Qué récord mundial te gustaría batir?",
    "¿Qué atleta retirado debería volver a competir?",
    "¿Qué escenario natural sería ideal para unas Olimpiadas alternativas?",
    "¿Qué habilidad física te gustaría tener?",
    
    // Educación y Aprendizaje  
    "¿Qué materia debería enseñarse en todas las escuelas?",
    "¿Qué skill del siglo XXI consideras más valioso?",
    "¿Qué error educativo crees que se repite generacionalmente?",
    "¿Qué personaje histórico debería tener su propia serie educativa?",
    "¿Qué idioma antiguo te gustaría entender?",
    
    // Psicología y Emociones
    "¿Qué emoción te cuesta más expresar?",
    "¿Qué hábito mental te gustaría eliminar?",
    "¿Qué lección de tu infancia te sigue guiando?",
    "¿Qué tipo de inteligencia (emocional, lógica, creativa) valoras más?",
    "¿Qué experiencia te hizo replantearte tu forma de pensar?",
    
    // Gastronomía Innovadora  
    "¿Qué insecto comerías si fuera un manjar gourmet?",
    "¿Qué comida tradicional reinventarías?",
    "¿Qué chef famoso te gustaría que cocinara para ti?",
    "¿Qué alimento 'del futuro' probarías (ej: carne de laboratorio)?",
    "¿Qué desecho alimenticio debería aprovecharse?",
    
    // Viajes Alternativos
    "¿Qué ciudad submarina te gustaría explorar?",
    "¿Qué ruta de tren olvidada debería reactivarse?",
    "¿Qué isla deshabitada te gustaría habitar temporalmente?",
    "¿Qué país tiene el sistema de transporte más interesante?",
    "¿Qué paisaje sonoro (naturaleza/ciudad) grabarías para relajarte?",
    
    // Filosofía Moderna  
    "¿Qué 'verdad absoluta' cuestionarías?",
    "¿Qué pensamiento te quita el sueño?",
    "¿Qué contradicción humana te parece más intrigante?",
    "¿Qué pregunta no tiene respuesta pero vale la pena hacerse?",
    "¿Qué concepto filosófico explicaría mejor el mundo actual?",
    
    // Cine y Entretenimiento
    "¿Qué película independiente cambiarías para hacerla mainstream?",
    "¿Qué actor debería interpretar a un villano en su próximo papel?",
    "¿Qué final de serie te decepcionó completamente?",
    "¿Qué reality show antiguo debería revivir?",
    "¿Qué escena de película te hace llorar inevitablemente?",
    
    // Moda y Estilo  
    "¿Qué prenda retro debería volver a estar de moda?",
    "¿Qué diseñador revolucionaría la industria de la moda hoy?",
    "¿Qué accesorio simple puede transformar un look básico?",
    "¿Qué tendencia de moda te parece ridícula pero popular?",
    "¿Qué famoso tiene el peor estilo según tú?",
    
    // Música y Sonido
    "¿Qué canción te gustaría escuchar en el espacio?",
    "¿Qué artista debería hacer un álbum acústico?",
    "¿Qué sonido cotidiano te resulta musicalmente inspirador?",
    "¿Qué género musical desaparecerá en la próxima década?",
    "¿Qué letra de canción te describe en este momento?",
    
    // Ecología  
    "¿Qué especie invasora debería controlarse urgentemente?",
    "¿Qué producto ecológico es menos sostenible de lo que parece?",
    "¿Qué ciudad es ejemplo de urbanismo verde?",
    "¿Qué hábito eco-amigable es más efectivo de lo que creemos?",
    "¿Qué paisaje natural está en tu lista de 'ver antes de que desaparezca'?",
    
    // Relaciones Digitales  
    "¿Qué red social mejoraría eliminando un feature específico?",
    "¿Qué emoji representa mejor tu personalidad online?",
    "¿Qué tradición analógica deberíamos recuperar de lo digital?",
    "¿Qué influencer te parece auténticamente inspirador?",
    "¿Qué app de citas tendría un diseño revolucionario?",
    
    // Arquitectura  
    "¿Qué edificio histórico debería reconstruirse?",
    "¿Qué ciudad tiene la peor planificación urbana?",
    "¿Qué material de construcción del futuro te entusiasma?",
    "¿Qué rascacielos demolerías por impacto visual?",
    "¿Qué casa famosa de película te gustaría habitar?",
    
    // Literatura  
    "¿Qué clásico literario sería un éxito en TikTok?",
    "¿Qué autor vivo debería ganar el Nobel?",
    "¿Qué libro infantil tiene enseñanzas para adultos?",
    "¿Qué novela distópica se parece más a nuestra realidad?",
    "¿Qué poeta moderno merece más reconocimiento?",
    
    // Enigmas  
    "¿Qué misterio sin resolver te obsesiona?",
    "¿Qué conspiracy theory tiene base científica?",
    "¿Qué fenómeno paranormal investigarías con método científico?",
    "¿Qué código sin descifrar te gustaría resolver?",
    "¿Qué evento histórico necesita una investigación moderna?",
    
    // 25 preguntas adicionales variadas
    "¿Qué habilidad de supervivencia te gustaría dominar?",
    "¿Qué tradición familiar crearías desde cero?",
    "¿Qué invento accidental cambió más el mundo?",
    "¿Qué deporte olímpico es subestimado?",
    "¿Qué película animada tiene mensajes ocultos para adultos?",
    "¿Qué ley absurda sigue vigente en tu país?",
    "¿Qué trabajo sería imposible para los robots?",
    "¿Qué superhéroe tiene el peor poder?",
    "¿Qué ruina arqueológica debería excavarse urgentemente?",
    "¿Qué moda pasada te avergüenza haber seguido?",
    "¿Qué instrumento musical suena a magia?",
    "¿Qué descubrimiento científico te asombró recientemente?",
    "¿Qué plato simple puede convertirse en gourmet?",
    "¿Qué error común cometen los turistas en tu ciudad?",
    "¿Qué sonido te transporta inmediatamente a tu infancia?",
    "¿Qué habilidad social debería enseñarse en el trabajo?",
    "¿Qué canción infantil tiene letras perturbadoras?",
    "¿Qué tradición deberíamos importar de otra cultura?",
    "¿Qué invento antiguo sigue siendo insuperable?",
    "¿Qué película de culto es incomprensible para ti?",
    "¿Qué talento oculto tiene alguien de tu familia?",
    "¿Qué fenómeno astronómico te gustaría presenciar?",
    "¿Qué leyenda urbana de tu ciudad es la más popular?",
    "¿Qué habilidad manual se está perdiendo?",
    "¿Qué objeto cotidiano tendrá valor arqueológico en 1000 años?"
    ];

    function mostrarPregunta() {
        
        const numero = document.getElementById('numero').value;
        const resultado = document.getElementById('resultado');
        
        if(numero >= 1 && numero <= 245) {
            resultado.innerHTML = `<strong>Pregunta ${numero}:</strong><br>${preguntas[numero-1]}`;
            resultado.style.animation = "fadeIn 0.5s";
        } else {
            resultado.innerHTML = "⚠️ Por favor ingresa un número entre 1 y 245";
            resultado.style.color = "#e74c3c";
        }
    }

    function preguntaAleatoria() {
        const numeroRandom = Math.floor(Math.random() * 245) + 1;
        document.getElementById('numero').value = numeroRandom;
        mostrarPregunta();
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
