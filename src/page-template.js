const generatePage = (teamData) => {
  const { manager, engineers, interns } = teamData;

  return `
    ${manager[0].getRole()}
    ${engineers[0].getRole()}
    ${interns[0].getRole()}
  `;
};

module.exports = generatePage;
