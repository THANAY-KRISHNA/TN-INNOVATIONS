const fetchOpenRouter = async (messages, model, jsonMode) => {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": window.location.origin,
        },
        body: JSON.stringify({
            model: model || "meta-llama/llama-3.3-70b-instruct",
            messages,
            response_format: jsonMode ? { type: "json_object" } : undefined
        })
    });
    const data = await response.json();
    return data.choices[0].message.content;
};

const fetchGroq = async (messages, model, jsonMode) => {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-specdec",
            messages,
            response_format: jsonMode ? { type: "json_object" } : undefined
        })
    });
    const data = await response.json();
    return data.choices[0].message.content;
};

export const getAICompletion = async (messages, options = {}) => {
    try {
        // Default to Groq for speed
        return await fetchGroq(messages, options.model, options.jsonMode);
    } catch (error) {
        console.warn("Groq failed, falling back to OpenRouter...", error);
        return await fetchOpenRouter(messages, options.model, options.jsonMode);
    }
};
