export const generateHTML = (system: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Repair Service</title>
    </head>
    <body>
      <div class="anchor-point">${system}</div>
    </body>
    </html>
    `;
};
