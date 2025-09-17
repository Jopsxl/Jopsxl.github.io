
// Mapa oficial de colores por partido (según la imagen de referencia)
const coloresPartidos = {
	"VAMOS": "#2266b3",
	"UNE": "#6cc04a",
	"MOVIMIENTO SEMILLA": "#00b7a7",
	"CABAL": "#3b5998",
	"VIVA": "#1eaae2",
	"COALICIÓN VALOR UNIONISTA": "#20c997",
	"TODOS": "#6e4e9e",
	"VALOR": "#3bafc4",
	"BIEN": "#f7e225",
	"VOS": "#8a1538",
	"NOSOTROS": "#444444",
	"VICTORIA": "#e94e4e",
	"CREO": "#f7c325",
	"CAMBIO": "#1e90ff",
	"COALICIÓN URNG WINAQ": "#bdbdbd",
	"AZUL": "#2266b3",
	"ELEFANTE": "#f7c325"
};

// Paleta con todos los colores únicos definidos en coloresPartidos
const palette = Array.from(new Set(Object.values(coloresPartidos)));



window.addEventListener('DOMContentLoaded', function() {
	renderCurvaDiputados();
	renderLeyendaPartidos();
	document.getElementById('toggle-nombres').onclick = function() {
		const grid = document.getElementById('grid-nombres');
		const svg = document.getElementById('svgHerradura');
		if (grid.style.display === 'none') {
			svg.style.display = 'none';
			grid.style.display = 'block';
			this.textContent = 'Ver curva';
			renderGridNombres();
		} else {
			svg.style.display = 'block';
			grid.style.display = 'none';
			this.textContent = 'Ver nombres';
		}
	};
});

function renderLeyendaPartidos() {
	const legendDiv = document.getElementById('legend');
	if (!legendDiv) return;
	legendDiv.innerHTML = '';
	legendDiv.style.display = 'flex';
	legendDiv.style.flexWrap = 'wrap';
	legendDiv.style.justifyContent = 'center';
	legendDiv.style.alignItems = 'center';
	legendDiv.style.gap = '28px';
	legendDiv.style.margin = '32px 0 24px 0';
	legendDiv.style.fontFamily = 'Arial, sans-serif';
	legendDiv.style.fontSize = '18px';
	Object.entries(coloresPartidos).forEach(([partido, color]) => {
		const item = document.createElement('span');
		item.style.display = 'inline-flex';
		item.style.alignItems = 'center';
		item.style.gap = '8px';
		item.style.margin = '0 0px';
		const circle = document.createElement('span');
		circle.style.display = 'inline-block';
		circle.style.width = '14px';
		circle.style.height = '14px';
		circle.style.borderRadius = '50%';
		circle.style.background = color;
		circle.style.border = '1.5px solid #bbb';
		item.appendChild(circle);
		const label = document.createElement('span');
		label.textContent = partido;
		label.style.color = '#222';
		item.appendChild(label);
		legendDiv.appendChild(item);
	});
}

function renderCurvaDiputados(mostrarNombres = false) {

		const svg = document.getElementById('svgHerradura');
		while (svg.firstChild) svg.removeChild(svg.firstChild);

		svg.setAttribute('viewBox', '0 0 1400 900');
		const totalCircles = 160;
		const numFilas = 8;
		const circleRadius = 18;
		const baseRadius = 320;
		const separation = 38;
		const centerX = 700;
		const centerY = 820;
		// Calcular círculos por fila de forma balanceada
		let filas = Array(numFilas).fill(Math.floor(totalCircles / numFilas));
		let resto = totalCircles - filas.reduce((a, b) => a + b, 0);
		for (let i = 0; i < resto; i++) filas[i]++;
		let circleCount = 0;
		let colorIndex = 0;
		// Leer colores guardados
		let savedColors = {};
		try {
			savedColors = JSON.parse(localStorage.getItem('circulosCongresoColores') || '{}');
		} catch {}
		for (let row = 0; row < filas.length; row++) {
			const nCircles = filas[row];
			const radius = baseRadius + row * separation;
			// Ángulo de apertura igual para todas las filas
			const startAngle = Math.PI * 0.15;
			const endAngle = Math.PI * 0.85;
			for (let i = 0; i < nCircles; i++) {
				if (circleCount >= totalCircles) break;
				const angle = startAngle + (endAngle - startAngle) * (i / (nCircles - 1));
				const x = centerX + radius * Math.cos(angle);
				const y = centerY - radius * Math.sin(angle);
				// Usar color guardado si existe
				const color = savedColors[circleCount] || palette[colorIndex % palette.length];
				colorIndex++;
				const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
				circle.setAttribute('cx', x);
				circle.setAttribute('cy', y);
				circle.setAttribute('r', circleRadius);
				circle.setAttribute('fill', color);
				circle.setAttribute('class', 'circle');
				circle.setAttribute('data-index', circleCount);
				circle.setAttribute('data-color', color);
				circle.addEventListener('click', function(e) {
					e.preventDefault();
					const oldMenu = document.getElementById('circle-color-menu');
					if (oldMenu) oldMenu.remove();
					const select = document.createElement('select');
					select.id = 'circle-color-menu';
					select.style.position = 'absolute';
					select.style.zIndex = 1000;
					select.style.left = (e.clientX + window.scrollX) + 'px';
					select.style.top = (e.clientY + window.scrollY) + 'px';
					const defaultOpt = document.createElement('option');
					defaultOpt.textContent = 'Selecciona partido...';
					defaultOpt.disabled = true;
					defaultOpt.selected = true;
					select.appendChild(defaultOpt);
					for (const [partido, color] of Object.entries(coloresPartidos)) {
						const option = document.createElement('option');
						option.value = color;
						option.textContent = partido;
						option.style.background = color;
						option.style.color = '#fff';
						select.appendChild(option);
					}
					select.addEventListener('change', (ev) => {
						this.setAttribute('fill', select.value);
						// Guardar color en localStorage
						savedColors[this.getAttribute('data-index')] = select.value;
						localStorage.setItem('circulosCongresoColores', JSON.stringify(savedColors));
						select.remove();
					});
					select.addEventListener('blur', () => select.remove());
					document.body.appendChild(select);
					select.focus();
				});
				circle.addEventListener('contextmenu', function(e) {
					e.preventDefault();
					let current = this.getAttribute('fill');
					let newColor;
					do {
						newColor = palette[Math.floor(Math.random() * palette.length)];
					} while (newColor === current);
					this.setAttribute('fill', newColor);
					// Guardar color en localStorage
					savedColors[this.getAttribute('data-index')] = newColor;
					localStorage.setItem('circulosCongresoColores', JSON.stringify(savedColors));
				});
				svg.appendChild(circle);
				if (mostrarNombres) {
					let nombre = nombres[circleCount] || '';
					if (nombre) {
						const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
						const textRadius = radius + circleRadius + 8;
						const textX = centerX + textRadius * Math.cos(angle);
						const textY = centerY - textRadius * Math.sin(angle);
						const deg = (angle * 180 / Math.PI) - 90;
						text.setAttribute('x', textX);
						text.setAttribute('y', textY);
						text.setAttribute('text-anchor', 'middle');
						text.setAttribute('font-size', '13px');
						text.setAttribute('font-family', 'Arial, sans-serif');
						text.setAttribute('fill', '#222');
						text.setAttribute('style', `pointer-events:none;`);
						text.setAttribute('transform', `rotate(${deg} ${textX} ${textY})`);
						text.textContent = nombre;
						svg.appendChild(text);
					}
				}
				circleCount++;
			}
		}

function renderGridNombres() {
  
	// ...existing code...
}

}
