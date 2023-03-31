const prompt = "My dog ate my";
const model = "davinci";
const apiKey = "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";
const url = "https://api.openai.com/v1/completions";
const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
};

const requestBody = {
  prompt: prompt,
  model: model,
  n: 1,
};

fetch(url, {
  method: "POST",
  headers: header,
  body: JSON.stringify(requestBody),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data.choices[0].text);
  })
  .catch((error) => console.log(error));
