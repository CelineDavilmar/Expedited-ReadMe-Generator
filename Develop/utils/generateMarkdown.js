// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let lincense = '';

  if (license != "N/A") {
    license = "![License Badge](https://shields.io/badge/license-" + license + "-blue)";
  }

  return license;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    license = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'GPL') {
    license = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else if (license === 'GPLv3') {
    license = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else {
    license = " "
  }
  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None") {
    licenseSection += "## License\n"
    licenseSection += "" + renderLicenseLink(license) + " provides detailed information for this license\n";
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Instructions](#instructions)
  - [License](#license)
  - [Guidlines](#guidlines)
  - [Test](#test)
  - [Questions](#questions)
  

  ##Installation
  ${data.installation}

  ## Usage
  ${data.instructions}

  ${renderLicenseSection(data.license)}

  ## Contributions
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  ### GitHub Profile
  ${data.username}

  ### Please feel free to email me for any further questions or concerns
  ${data.email}

`;
}

module.exports = generateMarkdown;


