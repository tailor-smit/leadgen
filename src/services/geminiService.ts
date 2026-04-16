import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getAIDemoResponse(userMessage: string, businessType: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are an AI assistant for a local business of type: ${businessType}. 
              Your goal is to show the user how an automated AI chat system can help their business. 
              Be professional, helpful, and efficient. 
              The user is testing your capabilities. 
              User message: ${userMessage}`
            }
          ]
        }
      ],
      config: {
        systemInstruction: "You are a highly efficient AI business assistant. Your goal is to convert inquiries into leads by being helpful and professional.",
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I'm having trouble connecting to my brain right now. Please try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Unable to get AI response. Please check your API key.";
  }
}
