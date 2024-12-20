import './commands'
import './api-commands'
const { addCompareSnapshotCommand } = require('cypress-visual-regression/dist/command')
addCompareSnapshotCommand()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});