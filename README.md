# Accessibility Workshop

Demo application for an accessibility workshop.
See also the [deployed project](https://porscheui.github.io/porsche-kitchen-sink).

## Setup

### Requirements
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [Chrome Browser](https://www.google.com/intl/de_de/chrome/)  
- [AXE Chrome Extension](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)
- [WAVE Chrome Extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)

### Start
Run `yarn start`

### Start Dev
Run `yarn start:watch`

--- 

## Workshop

### 1. Find and fix issues found by automatic accessibility test

#### Axe accessibility test
1. Start application with `yarn start` and open it in your Chrome Browser (http://localhost:5000)
1. Open Chrome Developer Tools (CMD + Option + i)
1. Navigate to **axe** tab and click **Scan all of my page**
1. Axe extension scans the page for accessibility issues. Result should be **14 issues**
1. Fix issues 😁. Look for help on [Porsche Design System Accessibility Workflow](https://designsystem.porsche.com/latest/#/accessibility/workflow)


