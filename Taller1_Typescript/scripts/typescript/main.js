import { dataSeries } from "./typescript/data.js";
let seriesRows = document.getElementById("series");
let averageSeasons = document.getElementById("avgSeasons");
let count = 0;
let sum = 0;
if (seriesRows) {
    seriesRows.innerHTML = '';
    console.log(dataSeries);
    renderSeriesInTable(dataSeries);
}
else {
    console.error('No se encontró el elemento con ID "series".');
}
let row = document.createElement('tr');
row.innerHTML = `<td>Seasons average: ${sum / count}</td>`;
averageSeasons.appendChild(row);
function renderSeriesInTable(series) {
    series.forEach((serie) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id.toString()}</td>
            <td id="name">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons.toString()}</td>
        `;
        count = count + 1;
        sum = serie.seasons + sum;
        seriesRows.appendChild(row);
    });
}
