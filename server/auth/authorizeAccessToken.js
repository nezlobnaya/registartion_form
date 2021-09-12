import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";
import dotenv from "dotenv";

dotenv.config();

const jwtCheck = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUDIENCE,
  issuer: `https://${process.env.DOMAIN}/`,
  algorithms: ['RS256']
});

export default jwtCheck;