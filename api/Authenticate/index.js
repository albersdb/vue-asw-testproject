module.exports = async function (context, req) {
  context.log("Processing Authenticate Function");

  const name = req.query.name || (req.body && req.body.name);
  const responseMessage = name
    ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    : "I need to figure out logging in.";

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};
