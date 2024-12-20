let fs = require("fs");
let { render } = require("mustache");


async function collectCypressTestResults(results) {

    // Ajustando nome do browser
    const browserName = results.browserName;
    const browserNameCapitalized = browserName.charAt(0).toUpperCase() + browserName.slice(1)

    // Passando a duração de ms para s
    const durationInMillis = parseInt(JSON.stringify(results.totalDuration));
    const durationInSeconds = durationInMillis / 1000;

    // Construindo os valores para o template
    let summary = {
        browser: browserNameCapitalized,
        passed: results.totalPassed,
        failed: results.totalFailed,
        pendind: results.totalPending,
        skipped: results.totalSkipped,
        duration: durationInSeconds
    }

    // Lendo o template
    let template = fs.readFileSync("./.github/templates/summary.md").toString();

    // Montando o sumário dinamicamente
    let output = render(template, summary);

    // Gravando os dados de sumário na pasta reports
    fs.writeFileSync(`cypress/reports/summary-${browserName}.md`, output);
}



module.exports = collectCypressTestResults;