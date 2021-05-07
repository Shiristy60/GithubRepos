const express = require('express')
const app = express()
const { Octokit } = require("@octokit/core");
const asyncHandler = require('express-async-handler')
const octokit = new Octokit({ auth: `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
` });

const result = await request("GET /orgs/{org}/repos", {
    headers: {
      authorization: "token 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",
    },
    org: "octokit",
    type: "private",
  });
  
  console.log(`${result.data.length} repos found.`);

const PORT = 5000

app.listen(PORT, console.log(`Server running`))