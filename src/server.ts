import app from "./app";

const PORT: Number = 3010;
app.listen(PORT, (): void =>
  console.log(
    `Running on port ${PORT} inside ${
      process.env.NODE_ENV || "development"
    } mode.`
  )
);
