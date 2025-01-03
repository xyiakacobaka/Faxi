const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");

const email = "xyiakacobaka@gmail.com"; // Замените на ваш email
const apiKey = "mbzVebfzs0nkxsbSe7QzSFFxqOip"; // Замените на ваш API-ключ

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authHeader = `Basic ${Buffer.from(`${email}:${apiKey}`).toString(
  "base64"
)}`;

app.get("/auntefication", async function (_, res) {
  try {
    const response = await axios.get("https://gate.smsaero.ru/v2/auth", {
      headers: {
        Authorization: authHeader,
      },
    });
    if (response.status === 200) {
      res.json(response.data);
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post("/send", async (req, res) => {
  try {
    if (!req.body.number) {
      return res.status(400).json({ error: "Номер телефона обязателен" });
    }
    const code = generateCode();
    console.log("Номер телефона:", req.body.number);
    const requestData = {
      number: req.body.number,
      sign: "SMS Aero",
      text: `Ваш код авторизации: ${code}`,
    };
    const response = await axios.post(
      "https://gate.smsaero.ru/v2/sms/testsend",
      requestData,
      {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      res.json(response.data);
    } else {
      throw new Error(`Запрос не был выполнен с статусом: ${response.status}`);
    }
  } catch (error) {
    console.error("Ошибка:", error.message);
    if (error.response) {
      console.error("Данные ошибки:", error.response.data);
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

const generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000); // Генерация числа от 100000 до 999999
};
app.listen(3000);
