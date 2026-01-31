
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

/**
 * Initializes the chat session using the Google GenAI SDK.
 * Uses a singleton pattern to maintain conversation history.
 */
export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  // Initialize with process.env.API_KEY as per coding guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    // Using gemini-3-flash-preview for general text and Q&A tasks.
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `Você é o assistente virtual da FARMÁCIA NOBREZA, LDA. 
      Localização: Avenida Julius Nyerere, Vila Municipal de Mandimba, Província do Niassa, Moçambique.
      Horário: Segunda a Domingo, das 07h30 às 19h00.
      
      Tom: Profissional, acolhedor, humano e confiável. Use Português de Moçambique.
      
      Serviços: Medição de tensão, glicemia, planeamento familiar gratuito, consultas de psicologia e entregas ao domicílio em Mandimba.
      
      Regras de resposta:
      1. Nunca prescreva medicamentos. Sempre recomende a consulta com um médico ou o aconselhamento do nosso farmacêutico no local.
      2. Seja direto sobre horários e localização.
      3. Use emojis de forma moderada (🌿, ⚕️, 🏥).
      4. Mantenha as respostas curtas (máximo 40 palavras).`,
    },
  });

  return chatSession;
};

/**
 * Sends a message to the Gemini model and returns the text response.
 * @param message The user's input message.
 * @returns The model's response text.
 */
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    // sendMessage returns GenerateContentResponse.
    const response: GenerateContentResponse = await chat.sendMessage({ message: message });
    // Directly access the .text property (not a method).
    return response.text || "Desculpe, a conexão falhou. Tente novamente.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lamentamos, mas não conseguimos processar o seu pedido agora.";
  }
};
