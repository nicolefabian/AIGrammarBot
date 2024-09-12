import "dotenv/config"; //for API

import express from "express"; //handles HTTP requests
import fetch from "node-fetch"; //making HTTP requests


const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
//renders the homepage
app.get("/", (req, res) => {
  res.render("index", {
    corrected: "",
    originalText: "",
  });
});

// Main logic route
app.post("/correct", async (req, res) => {
  const text = req.body.text.trim();
  if (!text) {
    return res.render("index", {
      corrected: "Please enter some text to correct",
      originalText: text,
    });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", 
        messages: [
          { role: "system", content: "You are a helpful assistant" },
          {
            role: "user",
            content: `Correct the following text: ${text}`,
          },
        ],
        max_tokens: 100,
        n: 1,
        stop: null,
        temperature: 0.7, //creativity level
      }),
    });

    if (!response.ok) {
      const errorData = await response.text(); 
      console.error('API Error:', response.status, errorData);
      return res.render("index", {
        corrected: "Error. Please try again.",
        originalText: text,
      });
    }

    //displays the data
    const data = await response.json();
    const correctedText = data.choices[0].message.content;
    res.render("index", {
      corrected: correctedText,
      originalText: text,
    });

  } catch (error) {
    console.error('Unexpected Error:', error);
    res.render("index", {
      corrected: "Error. Please try again.",
      originalText: text,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
