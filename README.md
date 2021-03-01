# Accessibility Workshop for Developers

Demo application for an accessibility workshop.
See also the [deployed project](https://porscheui.github.io/porsche-accessibility-workshop).

## Setup

### Requirements
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [Chrome Browser](https://www.google.com/intl/de_de/chrome/)  
- [AXE Chrome Extension](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)
- Google Lighthouse - included in Google Chrome Developer Tools

### Install
Run `yarn`

### Start
Run `yarn start`

### Start Dev
Run `yarn start:watch`

--- 

## Workshop

### Introduction
This workshop is for **developers**, and those who have slightly understanding of **HTML/CSS** who want to learn how to find and fix the most basic accessibility issues. 
It is based both on findings from recent accessibility audits and general basics and best practices. 
But it doesn't claim to cover a complete list of possible accessibility issues. 

Let's get started and have fun!

### 1. Setup
1. Install application `yarn`
1. Create new branch `workshop/your-name` from `master` and be sure that the new branch is your **HEAD branch**

### 2. Automatic testing
Automatic testing can give you fast results of possible accessibility issues. 
Be aware that the results has to be checked manually and do **only cover up to 20% of possible issues**.

#### Get 1st impressions
1. Start application with `yarn start`
1. Open Chrome and go to **http://localhost:5000/**
1. Open Chrome Dev Tools (CMD + OPTION + i) and go to **Lighthouse** tab
1. Choose only **"Accessibility"** and **"Device: Desktop"** from list and **generate report**
1. Inspect **Accessibility Score**
1. Switch to **"axe"** tab in Chrome Dev Tools (be sure you have installed the extension!)
1. Click **"Scan all of my page"**
1. Inspect issues and become familiar with the AXE tool

#### Start fixing issues found by AXE accessibility test
1. Start application again with `yarn start:watch` to activate automatic rebuilding
1. Open up following HTML file: `./public/index.html`
1. Start fixing issues by following order: critical, serious, moderate, minor, needs review 
1. Retest again, and you should end up with only 3 issues which must be tested manual

### 3. Manual testing
As already mentioned, an automatic accessibility test can only cover up to 20% of possible issues. 
So we have to make our hands dirty and dive into the HTML file to fix and optimize our code base.

#### The Accessibility Checklist
1. Open up our accessibility guidelines on [Porsche Design System Accessibility Workflow](https://designsystem.porsche.com/latest/#/accessibility/workflow) under section **"Audit"** where you find an accessibility checklist which you can use to find basic issues.
1. Some of the "top 5" potential issues should have been already fixed (like alt-text and color contrast issues), so we will skip the other ones (for now) and head over to the next sections
1. Go through the other sections of the checklist and fix/optimize as many issues as possible
1. Last but not least fix all issues regarding keyboard accessibility (mostly focus state/order)
1. Little help: There are around **50 issues** in total which can be fixed/otpimized 😃!

### 4. Compare
1. Open Chrome and go to **http://localhost:5000/index-accessible.html**
1. Try to discover the visual and technical differences with the testing tools and manually by yourself 
1. Open the best practice example **index-accessible.html** in your preferred editor and compare it with the fixes you made


