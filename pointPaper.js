window.onload = function () {
	const svgCanvas = document.getElementById("vector-paper");
	svgCanvas.setAttribute("width", document.documentElement.clientWidth);
	svgCanvas.setAttribute("height", document.documentElement.clientHeight);
    var svgLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
	svgLine.setAttribute("stroke", "black");
	svgLine.setAttribute("x1", 100);
	svgLine.setAttribute("y1", 100);
	svgLine.setAttribute("x2", 150);
	svgLine.setAttribute("y2", 200);
	svgCanvas.appendChild(svgLine);
}
