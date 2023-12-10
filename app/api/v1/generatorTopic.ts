// pages/api/weekly-idea.ts

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface IdeaResponse {
    choices: {
        text: string;
    }[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const currentDate = new Date();
        const prompt = `Generate a creative topic idea for the week of ${currentDate.toLocaleDateString(
            "en-US",
            { month: "long", day: "numeric", year: "numeric" },
        )}:`;

        const response = await axios.post<IdeaResponse>(
            "https://api.openai.com/v1/engines/text-davinci-003/completions",
            {
                prompt,
                max_tokens: 100,
                n: 1,
                stop: null,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            },
        );

        const idea =
            response.data.choices[0]?.text.trim() || "Failed to generate idea";
        res.status(200).json({ idea });
    } catch (error: any) {
        console.error("Error generating weekly idea:", error.message);
        res.status(500).json({ error: "Failed to generate idea" });
    }
}
