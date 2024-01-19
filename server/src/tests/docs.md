# TESTS

## openai.test.js

BadRequestError: 400 'messages' is a required property

```json
  error: {
      message: "'messages' is a required property",
      type: 'invalid_request_error',
      param: null,
      code: null
    },
    code: null,
    param: null,
    type: 'invalid_request_error'
```

## openai2.test.js

Teste ok.
content: "hello world em python".

```json
  {
    index: 0,
    message: { role: 'assistant', content: 'print("Hello World!")' },
    logprobs: null,
    finish_reason: 'stop'
  }
```
