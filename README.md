# AI Grammar Corrector

## Overview

The **AI Grammar Corrector** is a web application that uses OpenAI's GPT model to correct grammar. It allows users to input text, submit it for correction, and view the corrected version provided by the AI.

## Features

- **Text Input:** Users can type or paste text into a text area.
- **AI Correction:** The app sends the text to OpenAI's API to receive grammatical corrections.
- **Display Output:** Corrected text is displayed in a read-only text area.

## Technologies Used

- **Node.js:** Runtime for server-side JavaScript.
- **Express:** Web framework for Node.js.
- **EJS:** Embedded JavaScript templating engine for rendering HTML views.
- **Node-Fetch:** Module for making HTTP requests.
- **OpenAI API:** Provides AI-driven text correction.

## Setup

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- An OpenAI API key. [Sign up for an API key here](https://beta.openai.com/signup/).

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/nicolefabian/AI-Grammar-Bot.git

2. **Install Dependencies**
    ```bash
   npm install

3. **Configure Environment Variables**

   Create a `.env` file in the root directory of the project with the following content:

   ```env
   OPENAI_KEY=your_openai_api_key
   PORT=your_port_number

  Replace `your_openai_api_key` and `your_port_number` with your actual OpenAI API key and desired port number.

4. **Start the application**
   ```bash
   node app.js

## Usage

1. **Open Your Browser:**

   Navigate to `http://localhost:5000` (or the port specified in your `.env` file).

2. **Enter Text:**

   Type or paste the text you want to correct in the provided text area.

3. **Submit for Correction:**

   Click the "Enhance with AI" button to submit the text for correction.

4. **View Corrected Text:**

   The corrected text will be displayed in the output area below the input text area.

## Screenshots

### Home Page

![image](https://github.com/user-attachments/assets/a7eccb94-a874-4fd3-b49d-9c8baa44619c)

### Corrected Output

![image](https://github.com/user-attachments/assets/f0a92369-7098-4076-8311-f7a055e59a17)


