
import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";
// import { HfInference } from '@huggingface/inference'



const pinecone = new Pinecone({
    environment: process.env.PINECONE_ENVIRONMENT,
    apiKey: process.env.PINECONE_API_KEY,
});

export default pinecone


export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// export const hf = new HfInference(process.env.HUGGINGFACE_API_KEY)