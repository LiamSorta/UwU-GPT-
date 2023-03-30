chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'translateToUwu') {
    const openaiApiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that translates text to uwu-style.',
          },
          {
            role: 'user',
            content: `Translate the following text to uwu-style: ${request.text}`,
          },
        ],
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        const translatedText = data.choices[0].message.content.trim();
        sendResponse({ text: translatedText });
      })
      .catch((error) => {
        console.error('Error:', error);
        sendResponse({ error: error.message });
      });

    return true;
  }
});
