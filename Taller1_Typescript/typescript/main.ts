import { Serie } from "./serie.js";
import { dataSeries } from "./data.js";

let seriesRows: HTMLElement = document.getElementById("series")!;
let averageSeasons: HTMLElement = document.getElementById("avgSeasons")!;
let count: number = 0;
let sum: number = 0;

if (seriesRows) {
    seriesRows.innerHTML = '';
    console.log(dataSeries);
    renderSeriesInTable(dataSeries);
} else {
    console.error('No se encontró el elemento con ID "series".');
}

let row = document.createElement('tr');
row.innerHTML = `<td>Seasons average: ${sum/count}</td>`;
averageSeasons.appendChild(row);

function renderSeriesInTable(series: Serie[]): void {
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