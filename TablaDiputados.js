// Mostrar la tabla automáticamente al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    renderTablaDiputados();
});


// Página 1
const diputadosPagina1 = [
    { partido: 'VAMOS', diputado: 'VICTOR ALFREDO VALENZUELA ARGUETA', distrito: 'Lista Nacional' },
    { partido: 'VAMOS', diputado: 'MYNOR ALFONSO DE LA ROSA PALACIOS', distrito: 'Lista Nacional' },
    { partido: 'VAMOS', diputado: 'HECTOR ADOLFO ALDANA REYES', distrito: 'Lista Nacional' },
    { partido: 'VAMOS', diputado: 'RONALD YOMELY PORTILLO CORDON', distrito: 'Lista Nacional' },
    { partido: 'VAMOS', diputado: 'CARLOS ROBERTO CALDERON GALVEZ', distrito: 'Lista Nacional' },
    { partido: 'VAMOS', diputado: 'MARCO ALEJANDRO PÉREZ TORIBIO', distrito: 'Lista Nacional' },
    { partido: 'UNE', diputado: 'ERVIN ADIM MALDONADO MOLINA', distrito: 'Lista Nacional' },
    { partido: 'UNE', diputado: 'LOURDES TERESITA DE LEON TORRES', distrito: 'Lista Nacional' },
    { partido: 'UNE', diputado: 'SERGIO GUILLERMO ENRIQUEZ GARZARO', distrito: 'Lista Nacional' },
    { partido: 'UNE', diputado: 'LUIS JAVIER LOPEZ BOLAÑOS', distrito: 'Lista Nacional' },
    { partido: 'UNE', diputado: 'DAMARIS CAROLINA CERNA ACEVEDO', distrito: 'Lista Nacional' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'JONATHAN KIRIL THOMAS MENKOS ZEISSIG', distrito: 'Lista Nacional' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'ANA PATRICIA ORANTES THOMAS', distrito: 'Lista Nacional' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'MANFRED DUVALIER CASTAÑON GONZALEZ', distrito: 'Lista Nacional' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'ALMA LUZ GUERRERO DE LA CRUZ', distrito: 'Lista Nacional' }
];
// Página 2
const diputadosPagina2 = [
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'BYRON ALESKY OBREGON CASTAÑEDA', distrito: 'Lista Nacional' },
    { partido: 'CABAL', diputado: 'ELDER ROBERTO MARTÍNEZ (EN LUGAR DE JULIO HÉCTOR ESTRADA)', distrito: 'Lista Nacional' },
    { partido: 'CABAL', diputado: 'NERY MAMFREDO RODAS MENDEZ', distrito: 'Lista Nacional' },
    { partido: 'CABAL', diputado: 'LUIS FERNANDO AGUIRRE ESTRADA', distrito: 'Lista Nacional' },
    { partido: 'VIVA', diputado: 'EVELYN ODDETH MORATAYA MARROQUIN', distrito: 'Lista Nacional' },
    { partido: 'VIVA', diputado: 'CESAR AUGUSTO AMEZQUITA DEL VALLE', distrito: 'Lista Nacional' },
    { partido: 'VIVA', diputado: 'GUSTAVO ADOLFO CRUZ MONTOYA', distrito: 'Lista Nacional' },
    { partido: 'COALICIÓN VALOR UNIONISTA', diputado: 'ALVARO ENRIQUE ARZU ESCOBAR', distrito: 'Lista Nacional' },
    { partido: 'COALICIÓN VALOR UNIONISTA', diputado: 'ANA LUCRECIA MARROQUIN GODY', distrito: 'Lista Nacional' },
    { partido: 'AZUL', diputado: 'JORGE MARIO VILLAGRAN ALVAREZ', distrito: 'Lista Nacional' },
    { partido: 'TODOS', diputado: 'FELIPE ALEJOS LORENZANA', distrito: 'Lista Nacional' },
    { partido: 'NOSOTROS', diputado: 'NADIA LORENA DE LEON TORRES', distrito: 'Lista Nacional' },
    { partido: 'VICTORIA', diputado: 'JUAN CARLOS RIVERA ESTEVEZ', distrito: 'Lista Nacional' },
    { partido: 'ELEFANTE', diputado: 'RODRIGO ANTONIO PELLECER RODRIGUEZ', distrito: 'Lista Nacional' },
    { partido: 'BIEN', diputado: 'FIDEL REYES LEE', distrito: 'Lista Nacional' }
];
// Página 3 
const diputadosPagina3 = [
    { partido: 'COALICIÓN URNG WINAQ', diputado: 'SONIA MARINA GUTIERREZ RAGUAY', distrito: 'Lista Nacional' },
    { partido: 'VOS', diputado: 'ORLANDO JOAQUIN BLANCO LAPOLA', distrito: 'Lista Nacional' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'SAMUEL ANDRES PEREZ ALVAREZ', distrito: 'Distrito Central' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'ANDREA BEATRIZ VILLAGRAN ANTON', distrito: 'Distrito Central' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'ROMAN WILFREDO CASTELLANOS CAAL', distrito: 'Distrito Central' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'LAURA FABIOLA MARROQUIN CORDON', distrito: 'Distrito Central' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'RAUL AMILCAR BARRERA ROBLES', distrito: 'Distrito Central' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'BRENDA MARLENY MEJIA LOPEZ', distrito: 'Distrito Central' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'ELENA SOFIA MOTTA KOLLEFF', distrito: 'Distrito Central' },
    { partido: 'CREO', diputado: 'CRISTIAN RODOLFO ALVAREZ Y ALVAREZ', distrito: 'Distrito Central' },
    { partido: 'CREO', diputado: 'JOSE PABLO MENDOZA FRANCO', distrito: 'Distrito Central' },
    { partido: 'VOS', diputado: 'JOSE ALBERTO CHIC CARDONA', distrito: 'Distrito Central' },
    { partido: 'COALICIÓN VALOR UNIONISTA', diputado: 'SANDRA ERICA JOVEL POLANCO', distrito: 'Distrito Central' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'JOSE CARLOS SANABRIA ARIAS', distrito: 'Guatemala' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'RONALTH IVAN OCHAETA AGUILAR', distrito: 'Guatemala' }
];
// Página 4 
const diputadosPagina4 = [
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'MIRNA VICTORIA GODOY PALALA', distrito: 'Guatemala' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'IVANNA MARIA LUJAN PADILLA', distrito: 'Guatemala' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'DAVID MAURICIO ILLESCAS SANDOVAL', distrito: 'Guatemala' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'ANDREA MARIA REYES ZECEÑA', distrito: 'Guatemala' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'LUIS ANTONIO CACERES GAMARRO', distrito: 'Guatemala' },
    { partido: 'UNE', diputado: 'JULIO DANIEL MARROQUIN ORDOÑEZ', distrito: 'Guatemala' },
    { partido: 'UNE', diputado: 'LEON FELIPE BARRERA VILLANUEVA', distrito: 'Guatemala' },
    { partido: 'COALICIÓN VALOR UNIONISTA', diputado: 'ELMER JOSUE PALENCIA REYES', distrito: 'Guatemala' },
    { partido: 'COALICIÓN VALOR UNIONISTA', diputado: 'JORGE ESTUARDO AYALA MARROQUIN', distrito: 'Guatemala' },
    { partido: 'VAMOS', diputado: 'SHIRLEY JOANNA RIVERA ZALDAÑA', distrito: 'Guatemala' },
    { partido: 'VAMOS', diputado: 'CANDIDO FERNANDO LEAL GOMEZ', distrito: 'Guatemala' },
    { partido: 'VOS', diputado: 'JAIRO JOAQUIN FLORES DIVAS', distrito: 'Guatemala' },
    { partido: 'VOS', diputado: 'KARINA ALEXANDRA PAZ ROSALES', distrito: 'Guatemala' },
    { partido: 'VIVA', diputado: 'JORGE ROMEO CASTRO DELGADO', distrito: 'Guatemala' },
    { partido: 'BIEN', diputado: 'CESAR ROBERTO DAVILA CORDOVA', distrito: 'Guatemala' }
];
// Página 5 
const diputadosPagina5 = [
    { partido: 'ELEFANTE', diputado: 'HELLEN MAGALY ALEXANDRA AJCIP CANEL', distrito: 'Guatemala' },
    { partido: 'CABAL', diputado: 'MANUEL DE JESUS ARCHILA CORDON', distrito: 'Guatemala' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'JOSE DIEGO TOLEDO CRUZ', distrito: 'Sacatepéquez' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'MERCEDES DEL ROSARIO MONZON ESCOBEDO', distrito: 'Sacatepéquez' },
    { partido: 'CABAL', diputado: 'SERGIO LEONEL CELIS NAVAS', distrito: 'Sacatepéquez' },
    { partido: 'VALOR', diputado: 'ERNESTO BRAN COLINDRES', distrito: 'El Progreso' },
    { partido: 'VAMOS', diputado: 'CESAR AUGUSTO RODAS CARDONA', distrito: 'El Progreso' },
    { partido: 'VAMOS', diputado: 'MAYNOR GABRIEL MEJIA POPOL', distrito: 'Chimaltenango' },
    { partido: 'CABAL', diputado: 'PABLO LEONEL CIFUENTES OVALLE', distrito: 'Chimaltenango' },
    { partido: 'UNE', diputado: 'MYNOR FRANCISCO RIVERA SALAZAR', distrito: 'Chimaltenango' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'RAUL ARNULFO CUA TUMIN', distrito: 'Chimaltenango' },
    { partido: 'VIVA', diputado: 'VICTOR VICENTE BONILLA GONZALEZ', distrito: 'Chimaltenango' },
    { partido: 'UNE', diputado: 'FRANCISCO VITELIO LAM RUANO', distrito: 'Escuintla' },
    { partido: 'UNE', diputado: 'MARCO AURELIO MEJIA ALFARO', distrito: 'Escuintla' },
    { partido: 'VALOR', diputado: 'MERCEDES CRISTABEL GUARDADO LINARES', distrito: 'Escuintla' }
];
// Página 6 
const diputadosPagina6 = [
    { partido: 'VAMOS', diputado: 'SERGIO DAVID ARANA ROCA', distrito: 'Escuintla' },
    { partido: 'VIVA', diputado: 'OBBED EDIBERTO CASTAÑASA MENDIZABAL', distrito: 'Escuintla' },
    { partido: 'CABAL', diputado: 'ROLANDO GUZMAN FIGUEROA', distrito: 'Escuintla' },
    { partido: 'VAMOS', diputado: 'CARLOS NAPOLEON ROJAS ALARCON', distrito: 'Santa Rosa' },
    { partido: 'VAMOS', diputado: 'RICARDO LEONEL MARTINEZ ALARCON', distrito: 'Santa Rosa' },
    { partido: 'UNE', diputado: 'JOSE INES CASTILLO MARTINEZ', distrito: 'Santa Rosa' },
    { partido: 'VAMOS', diputado: 'ALLAN ESTUARDO RODRIGUEZ REYES', distrito: 'Sololá' },
    { partido: 'VAMOS', diputado: 'LUIS ALBERTO RODRIGUEZ REYES', distrito: 'Sololá' },
    { partido: 'CABAL', diputado: 'BEQUER NEFTALI CHOCOOJ DE LA CRUZ', distrito: 'Sololá' },
    { partido: 'CABAL', diputado: 'ALBERTO EDUARDO DE LEON BENITEZ', distrito: 'Totonicapán' },
    { partido: 'UNE', diputado: 'JULIO PEDRO GOMEZ GOMEZ', distrito: 'Totonicapán' },
    { partido: 'VALOR', diputado: 'SHEROL IVANISSE AREVALO AVILA', distrito: 'Totonicapán' },
    { partido: 'VAMOS', diputado: 'JORGE MARIO CABRERA ORDOÑEZ', distrito: 'Totonicapán' },
    { partido: 'VAMOS', diputado: 'DUAY ANTONI MARTINEZ SALAZAR', distrito: 'Quetzaltenango' },
    { partido: 'VAMOS', diputado: 'ERICK JOSE MARIO TZUN DE LEON', distrito: 'Quetzaltenango' }
];
// Página 7
const diputadosPagina7 = [
    { partido: 'VIVA', diputado: 'NERY RENE MAZARIEGOS LOPEZ', distrito: 'Quetzaltenango' },
    { partido: 'COALICIÓN VALOR UNIONISTA', diputado: 'GERARDIN ARIEL DIAZ MAZARIEGOS', distrito: 'Quetzaltenango' },
    { partido: 'TODOS', diputado: 'BYRON BLADIMIRO RODRIGUEZ PALACIOS', distrito: 'Quetzaltenango' },
    { partido: 'UNE', diputado: 'ROLANDO MIGUEL OVALLE BARRIOS', distrito: 'Quetzaltenango' },
    { partido: 'MOVIMIENTO SEMILLA', diputado: 'JOSE ORLANDO PEREZ MARROQUIN', distrito: 'Quetzaltenango' },
    { partido: 'VAMOS', diputado: 'JOSE ARNULFO GARCIA BARRIOS', distrito: 'Suchitepéquez' },
    { partido: 'VAMOS', diputado: 'OSWALDO ROSALES POLANCO', distrito: 'Suchitepéquez' },
    { partido: 'TODOS', diputado: 'DANILO MADRAZO MAZARIEGOS', distrito: 'Suchitepéquez' },
    { partido: 'UNE', diputado: 'VASNY ADIEL MALDONADO ALONZO', distrito: 'Suchitepéquez' },
    { partido: 'VIVA', diputado: 'GERSON GEOVANNY BARRAGAN MORALES', distrito: 'Suchitepéquez' },
    { partido: 'CABAL', diputado: 'GUILLERMO ANTONIO RALDA CONDE', distrito: 'Retalhuleu' },
    { partido: 'VALOR', diputado: 'JOSE LUIS GALINDO DE LEON', distrito: 'Retalhuleu' },
    { partido: 'VAMOS', diputado: 'JOSE CARLO SOLANO', distrito: 'Retalhuleu' },
    { partido: 'VAMOS', diputado: 'GUILLERMO ALBERTO CIFUENTES BARRAGAN', distrito: 'San Marcos' },
    { partido: 'VAMOS', diputado: 'GLADIS CAROLINA CIFUENTES BARRAGAN', distrito: 'San Marcos' }
];
// Página 8
const diputadosPagina8 = [
    { partido: 'VIVA', diputado: 'JEOVANNI OMAR DOMINGUEZ OROZCO', distrito: 'San Marcos' },
    { partido: 'CREO', diputado: 'LUIS ALBERTO CONTRERAS COLINDRES', distrito: 'San Marcos' },
    { partido: 'NOSOTROS', diputado: 'VIVIAN BEATRIZ PRECIADO NAVARIJO', distrito: 'San Marcos' },
    { partido: 'CABAL', diputado: 'MARIO VELASQUEZ PEREZ', distrito: 'San Marcos' },
    { partido: 'TODOS', diputado: 'GUSTAVO ADOLFO CIFUENTES NAVARRO', distrito: 'San Marcos' },
    { partido: 'BIEN', diputado: 'SABINO SEBASTIAN VELASQUEZ BAMACA', distrito: 'San Marcos' },
    { partido: 'UNE', diputado: 'MARIO ERNESTO GALVEZ MUÑOZ', distrito: 'San Marcos' },
    { partido: 'VAMOS', diputado: 'ERICK GEOVANY MARTINEZ HERNANDEZ', distrito: 'Huehuetenango' },
    { partido: 'VAMOS', diputado: 'JOEL RUBEN MARTINEZ HERRERA', distrito: 'Huehuetenango' },
    { partido: 'VAMOS', diputado: 'SOFIA JEANETH HERNANDEZ HERRERA', distrito: 'Huehuetenango' },
    { partido: 'VAMOS', diputado: 'CHRISTIAN JOEL MARTINEZ JUAREZ', distrito: 'Huehuetenango' },
    { partido: 'UNE', diputado: 'KARLA BETZAIDA CARDONA ARREAGA', distrito: 'Huehuetenango' },
    { partido: 'UNE', diputado: 'MARTIN NICOLAS SEGUNDO', distrito: 'Huehuetenango' },
    { partido: 'UNE', diputado: 'MANRIQUE OBEL GALVEZ DE LEON', distrito: 'Huehuetenango' },
    { partido: 'TODOS', diputado: 'CORNELIO GONZALO GARCIA GARCIA', distrito: 'Huehuetenango' }
];
// Página 9
const diputadosPagina9 = [
    { partido: 'BIEN', diputado: 'LUCRECIA CAROLA SAMAYOA REYES', distrito: 'Huehuetenango' },
    { partido: 'CABAL', diputado: 'JULIO CESAR LOPEZ ESCOBAR', distrito: 'Huehuetenango' },
    { partido: 'VAMOS', diputado: 'JOSUE EDMUNDO LEMUS CIFUENTES', distrito: 'Quiché' },
    { partido: 'VAMOS', diputado: 'GREICY DOMENICA DE LEON DE LEON', distrito: 'Quiché' },
    { partido: 'VAMOS', diputado: 'MANUEL GEOVANY ALVARADO VASQUEZ', distrito: 'Quiché' },
    { partido: 'UNE', diputado: 'RAUL ANTONIO SOLORZANO QUEVEDO', distrito: 'Quiché' },
    { partido: 'UNE', diputado: 'JOSE ADOLFO QUEZADA VALDEZ', distrito: 'Quiché' },
    { partido: 'CABAL', diputado: 'CARLOS ENRIQUE LOPEZ MALDONADO', distrito: 'Quiché' },
    { partido: 'CABAL', diputado: 'MARCOS EDUARDO TEBELAN PANTZAY', distrito: 'Quiché' },
    { partido: 'COALICIÓN VALOR UNIONISTA', diputado: 'CARLOS ENRIQUE LOPEZ GIRON', distrito: 'Quiché' },
    { partido: 'UNE', diputado: 'MARLENI LINETH MATIAS SANTIAGO', distrito: 'Baja Verapaz' },
    { partido: 'CABAL', diputado: 'BYRON LEONIDAS TEJEDA MARROQUIN', distrito: 'Baja Verapaz' },
    { partido: 'UNE', diputado: 'OSCAR ROLANDO CORLETO RIVERA', distrito: 'Alta Verapaz' },
    { partido: 'UNE', diputado: 'DARWIN ALBERTO LUCAS PAZ', distrito: 'Alta Verapaz' },
    { partido: 'UNE', diputado: 'VICTOR HUGO CIFUENTES DELGADO', distrito: 'Alta Verapaz' }
];
// Página 10
const diputadosPagina10 = [
    { partido: 'VICTORIA', diputado: 'RANDY ARAELY COC FIGUEROA', distrito: 'Alta Verapaz' },
    { partido: 'VICTORIA', diputado: 'SANDRA YANET MILIAN GOMEZ', distrito: 'Alta Verapaz' },
    { partido: 'VAMOS', diputado: 'LEOPOLDO SALAZAR SAMAYOA', distrito: 'Alta Verapaz' },
    { partido: 'VAMOS', diputado: 'HERMAN OTONIEL ECHEVERRIA CASADO', distrito: 'Alta Verapaz' },
    { partido: 'NOSOTROS', diputado: 'RUDY BERNER PEREIRA DELGADO', distrito: 'Alta Verapaz' },
    { partido: 'VIVA', diputado: 'FIDENCIO LIMA POP', distrito: 'Alta Verapaz' },
    { partido: 'UNE', diputado: 'CESAR AUGUSTO FION MORALES', distrito: 'Petén' },
    { partido: 'UNE', diputado: 'BENJAMIN IPIÑA LEIVA', distrito: 'Petén' },
    { partido: 'VAMOS', diputado: 'EDGAR RAUL REYES LEE', distrito: 'Petén' },
    { partido: 'VIVA', diputado: 'EDIN ALEXANDER DE JESUS MEJIA', distrito: 'Petén' },
    { partido: 'VAMOS', diputado: 'THELMA ELIZABETH RAMIREZ RETANA', distrito: 'Izabal' },
    { partido: 'VAMOS', diputado: 'JUAN RAMON RIVAS GARCIA', distrito: 'Izabal' },
    { partido: 'UNE', diputado: 'DARWIN EDGARDO RAMIREZ CAMEROS', distrito: 'Izabal' },
    { partido: 'CABAL', diputado: 'JULIO CESAR PORTILLO PAZ', distrito: 'Zacapa' },
    { partido: 'VAMOS', diputado: 'SANDRA CAROLINA ORELLANA CRUZ', distrito: 'Zacapa' }
];
// Página 11      
const diputadosPagina11 = [
    { partido: 'CAMBIO', diputado: 'ESDUIN JERSON JAVIER JAVIER', distrito: 'Chiquimula' },
    { partido: 'VAMOS', diputado: 'BORIS ROBERTO ESPAÑA CACERES', distrito: 'Chiquimula' },
    { partido: 'UNE', diputado: 'JUAN IGNACIO QUIJADA HEREDIA', distrito: 'Chiquimula' },
    { partido: 'CABAL', diputado: 'JAIRO DANILO ORELLANA SANDOVAL', distrito: 'Jalapa' },
    { partido: 'VAMOS', diputado: 'JAIME OCTAVIO AUGUSTO LUCERO VASQUEZ', distrito: 'Jalapa' },
    { partido: 'VALOR', diputado: 'FAVER EMILIO SALAZAR CORDERO', distrito: 'Jalapa' },
    { partido: 'AZUL', diputado: 'NERY ABILIO RAMOS Y RAMOS', distrito: 'Jutiapa' },
    { partido: 'CABAL', diputado: 'KEVYN LUIS CARLO ESCOBAR CASTILLO', distrito: 'Jutiapa' },
    { partido: 'TODOS', diputado: 'MARVIN ADRIAN ZEPEDA ZEPEDA', distrito: 'Jutiapa' },
    { partido: 'VAMOS', diputado: 'MAYNOR ESTUARDO CASTILLO Y CASTILLO', distrito: 'Jutiapa' }
];
const diputadosPorPaginas = [diputadosPagina1, diputadosPagina2, diputadosPagina3, diputadosPagina4, diputadosPagina5, diputadosPagina6, diputadosPagina7, diputadosPagina8, diputadosPagina9, diputadosPagina10, diputadosPagina11];

// Declarar paginaActual en el ámbito global para la paginación de la tabla
let paginaActual = 1;

function renderTablaDiputados() {
    const container = document.getElementById('diputados-lista');
    if (!container) return;
    const totalPaginas = diputadosPorPaginas.length;
    const diputadosPagina = diputadosPorPaginas[paginaActual - 1] || [];
    let html = `<table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;">
        <thead>
            <tr style="background:#19a7e0;color:#fff;font-weight:bold;">
                <td style="padding:10px 16px;">Partido</td>
                <td style="padding:10px 16px;">Diputado Electo</td>
                <td style="padding:10px 16px;">Distrito Electoral</td>
            </tr>
        </thead>
        <tbody>`;
    diputadosPagina.forEach((d, idx) => {
        // Normalizar nombres para coincidencia exacta con coloresPartidos
        let partidoKey = d.partido.trim().toUpperCase();
        if (partidoKey === "COALICIÓN WINAQ-URNG") partidoKey = "COALICIÓN URNG WINAQ";
        if (partidoKey === "PARTIDO AZUL") partidoKey = "AZUL";
        if (partidoKey === "COMUNIDAD ELEFANTE") partidoKey = "ELEFANTE";
        if (partidoKey === "VALOR UNIONISTA") partidoKey = "COALICIÓN VALOR UNIONISTA";
        // Si hay más casos, agrégalos aquí
        const colorOficial = coloresPartidos[partidoKey] || "#cccccc";
        html += `<tr style="background:${idx%2===0?'#f7f9fc':'#e9edf5'};">
            <td style="background:${colorOficial};color:#fff;padding:10px 16px;font-weight:bold;">${d.partido}</td>
            <td style="padding:10px 16px;">${d.diputado}</td>
            <td style="padding:10px 16px;">${d.distrito}</td>
        </tr>`;
    });
    html += '</tbody></table>';
    if (totalPaginas > 1) {
        html += `<div style="display:flex;align-items:center;justify-content:center;margin:18px 0 0 0;gap:18px;">
            <button id="prevPagP" tabindex="0" style="padding:8px 24px;font-size:20px;border-radius:6px;border:2px solid #19a7e0;background:#fff;color:#19a7e0;cursor:pointer;transition:background 0.2s;" ${paginaActual === 1 ? 'disabled' : ''}>&lt;</button>
            <span style="font-size:22px;font-weight:bold;">${paginaActual} / ${totalPaginas}</span>
            <button id="nextPagP" tabindex="0" style="padding:8px 24px;font-size:20px;border-radius:6px;border:2px solid #19a7e0;background:#fff;color:#19a7e0;cursor:pointer;transition:background 0.2s;" ${(paginaActual === totalPaginas || diputadosPorPaginas[paginaActual] == null || diputadosPorPaginas[paginaActual].length === 0) ? 'disabled' : ''}>&gt;</button>
        </div>`;
    }
    container.innerHTML = html;
    if (totalPaginas > 1) {
        const prevBtn = document.getElementById('prevPagP');
        const nextBtn = document.getElementById('nextPagP');
        if (prevBtn) {
            prevBtn.onclick = function() {
                if (paginaActual > 1) {
                    paginaActual--;
                    renderTablaDiputados();
                }
            };
        }
        if (nextBtn) {
            nextBtn.onclick = function() {
                if (paginaActual < totalPaginas) {
                    paginaActual++;
                    renderTablaDiputados();
                }
            };
        }
    }
}

window.addEventListener('DOMContentLoaded', function() {
    renderTablaDiputados();
});
