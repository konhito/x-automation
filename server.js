import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const GEMINI_API_KEY = "AIzaSyBr_41k6M7BThI3aeOruBE2kCCBjh24doU";

const getChillReply = async (content) => {
  if (!content) {
    return { text: "No content provided" };
  }

  const apiUrl =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=" +
    GEMINI_API_KEY;

  const requestPayload = {
    contents: [
      {
        parts: [
          {
            text:
              content +
              " Based on this tweet and its replies, create a response that's tells you are a humbel down to earth supportive person:" +
              "\n- make it sound like a 22 years old" +
              "\n- Casual and short" +
              "\n- Max 1 line or 7 words" +
              "\n- polite and respectful" +
              "\n- Sounds like a real person" +
              "\n- make it casual" +
              "\n- no pointers make some grammer mistakes and but not spelling errors" +
              "\n- no need to be perfect" +
              "\n- use little hinglish if tweet is in hinglish" +
              "\n- rant and savage" +
              "\n- Has a touch of humor" +
              "\n- Avoids emojis and hashtags" +
              "\n- Uses simple, everyday language" +
              "\n- dont use word object object and chai and ** in words" +
              "\nMake it sound like you're chatting with a friend, not writing a formal response.",
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(apiUrl, requestPayload, {
      headers: { "Content-Type": "application/json" },
    });

    const generatedText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error("Invalid API response format");
    }

    console.log(generatedText);
    return generatedText;
  } catch (error) {
    console.error("Error:", error.message);
    return {
      text: "I'm sorry, I'm having trouble generating a reply right now.",
    };
  }
};

app.post("/processTweet", async (req, res) => {
  try {
    const { tweetId, x_handle, x_username, tweets, replies } = req.body;
    console.log(tweetId, x_handle);

    if (!tweets || !replies) {
      return res.status(400).json({ error: "Missing tweets or replies data" });
    }

    const tweetText = tweets[0]?.text || "";

    const tweet = tweetText + replies + x_username;

    const chillReply = await getChillReply(tweet);

    const responsePayload = {
      text: chillReply,
    };

    res.status(200).json(responsePayload);
  } catch (error) {
    console.error("Error processing tweet:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
