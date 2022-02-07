const generatePage = (teamData) => {
  const { members, ...manager } = teamData;

  return `
  ${members}
  Break
  ${manager} 
  `;
};

module.exports = generatePage;
