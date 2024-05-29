import mongoose from "mongoose";

export const connectionDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
    });
};
