const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const { auth } = require("express-oauth2-jwt-bearer");
const { errorHandler } = require("./middleware/error-handler");

const PORT = process.env.PORT || 3001;
const app = express();

const checkJWT = auth({
  audience: "https://forums.us.auth0.com/api/v2/",
  issuerBaseURL: `https://forums.us.auth0.com/`,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(checkJWT);
app.use(errorHandler);
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API Server running on port ${PORT}`);
  });
});
