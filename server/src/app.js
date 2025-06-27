const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

//security imports
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const router = require("./routes/router");
const { UPLOADS_PATH } = require("./config/config");

const app = express();

app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  handler: function (req, res) {
    return res.status(429).json({
      s: "RATELIMIT",
      m: "Too many requests from this IP, please try again after 15 minutes",
      p: null,
    });
  },
  headers: true,
});

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: function (origin, callback) {
        const allowedOrigins = ["http://localhost:8080", "http://localhost"];
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
    })
  );
}

app.use(limiter);
app.use(cookieParser());
app.use(express.json());

app.use("/uploads", express.static(UPLOADS_PATH));

const indexPath = path.join(__dirname, "..", "dist", "index.html");

app.use(express.static(path.join(__dirname, "..", "dist")));
app.get(/.*/, (req, res) => {
  res.sendFile(indexPath);
});

app.use(
  "/api",
  (req, res, next) => {
    console.log("Incoming req at: " + req.url);
    req.context = {};
    next();
  },
  router
);

module.exports = { app };
