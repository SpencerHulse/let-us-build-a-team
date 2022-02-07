const generatePage = (teamData) => {
  const { manager, engineers, interns } = teamData;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Let's Build a Team!</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <h1 class="bg-danger p-5 text-center text-white">My Team</h1>
    <div class="row row-cols-3 py-5 p-5 d-flex justify-content-center">
      ${managerCard(manager)}
    </div>
  </body>
</html>`;
};

const managerCard = (manager) => {
  return `
      <div class="col">
        <div class="team-manager card m-auto" style="width: 18rem">
          <div class="card-body bg-primary text-white">
            <h2 class="card-title">${manager[0].name}</h2>
            <p class="card-text">
              <i class="fa fa-coffee" aria-hidden="true"></i> 
              ${manager[0].getRole()}
            </p>
          </div>
          <div class="bg-light py-4 px-3" style="height: 14rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager[0].id}</li>
              <li class="list-group-item">
                Email: 
                <a href="mailto:${manager[0].email}">
                ${manager[0].email}
                </a>
              </li>
              <li class="list-group-item">Office Number: 
              ${manager[0].officeNumber}
              </li>
            </ul>
          </div>
        </div>
      </div>`;
};

module.exports = generatePage;
