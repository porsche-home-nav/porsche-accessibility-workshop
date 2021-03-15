# Accessibility Workshop for Developers

Demo application for an accessibility workshop.
See also the [deployed project](https://porscheui.github.io/porsche-accessibility-workshop).

## Build status
[![Actions Status](https://github.com/porscheui/porsche-accessibility-workshop/workflows/Porsche%20Accessibility%20Workshop/badge.svg)](https://github.com/porscheui/porsche-accessibility-workshop/actions)

## Prerequisites
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [Chrome Browser](https://www.google.com/intl/de_de/chrome/)  
- [AXE DevTools Chrome Extension](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)
- **Google Lighthouse** - included in Google Chrome Developer Tools

## Quick start

### Install
Run `yarn`

### Start
Run `yarn start`

### Start in watch mode (rebuilds app on change for easier development)
Run `yarn start:watch`

--- 

## Workshop

### Introduction
This workshop is for **developers**, and those who have slightly understanding of **HTML/CSS** and want to learn how to find and fix the most common accessibility issues. 
It is based both, on findings from recent accessibility audits and best practices in general. 
But it doesn't claim to cover a complete list of possible accessibility issues. 

Let's get started and have fun!

### 1. Setup
1. Be sure you have installed the dependencies with `yarn`
1. Create new branch `workshop/your-name` from `master` and be sure that the new branch is your **HEAD branch**

### 2. Automatic testing
Automatic testing can give you fast results of possible accessibility issues. 
Be aware that the results has to be checked manually and do **only cover up to 20% of possible issues**.

#### Get 1st impressions
**Hint:** The application is a "dump" one pager with no linked subpages. It focuses on HTML/CSS and some JS issues only.

1. Start application in dev mode with `yarn start:watch`.
1. Open Chrome and go to **http://localhost:5000/**.
1. Open Chrome Dev Tools (CMD + OPTION + i) and go to the **Lighthouse** tab.
1. Choose only **"Accessibility"** and **"Device: Desktop"** from list and **generate report**.
1. Inspect **Accessibility Score**.
1. Switch to **"axe DevTools"** tab in Chrome Dev Tools (be sure you have installed the extension!).
1. Click **"Scan all of my page"**.
1. Inspect all the issues, try to understand what's the meaning and become familiar with the testing tool.

#### Start fixing issues found by axe DevTools
1. Be sure your local server is running. If not, start application with `yarn start:watch`.
1. Open up following HTML file in your preferred editor: `./public/index.html`.
1. Start fixing issues found by the DevTools in following order: critical, serious, moderate, minor.
1. Retest again, and you should end up with only 3 issues which must be tested/reviewed manual.

### 3. Manual testing
As already mentioned, an automatic accessibility test can only cover up to 20% of possible issues. 
So we have to make our hands dirty and dive into the HTML file to fix and optimize our code base.

#### The Accessibility Checklist
1. Open up the accessibility guidelines on [Porsche Design System Accessibility Workflow](https://designsystem.porsche.com/latest/#/accessibility/workflow) and go to section **"Audit"** where you find an accessibility checklist which you can use to find basic issues.
1. Some of the "top 5" potential issues should have been already fixed (like alt-text and color contrast issues), so we will skip the other ones (for now) and head over to the next section.
1. Go through the other sections of the checklist and fix/optimize as many issues as possible.
1. Last but not least, fix all issues regarding keyboard accessibility (mostly focus state and order).
1. Little help: There are around **50 issues** in total which can be fixed/optimized 💪!

### 4. Compare
1. If you think that you've found and fixed all possible errors, open up Chrome and go to **http://localhost:5000/index-accessible.html**.
1. Try to discover the visual and technical differences with the testing tools and manually by yourself.
1. Open the best practice example **index-accessible.html** in your preferred editor and compare the code with the fixes you made.
1. Your fixes and improvements should result in a **Lighthouse Score of 100** and with only **3 issues left in axe DevTools** which couldn't assessed automatically and do require manually review.

### 5. Learn and discuss
Due to the fact that there are many possible solutions how to fix accessibility issues, it might be worth to push your state to Github and discuss it afterwards with others. 
If you have followed the naming convention while creating a new branch, your application will also be deployed to Github Pages and can be accessed with the following url:  
- https://porscheui.github.io/porsche-accessibility-workshop/workshop/your-name/
- https://porscheui.github.io/porsche-accessibility-workshop/workshop/your-name/index-accessible.html
