# Mission: Explain LLM inference: from prompt to generated tokens

[Mission issue #8](https://github.com/geoberle/learning/issues/8) · [Topic: LLM inference cost and performance #4](https://github.com/geoberle/learning/issues/4)

## Why

Follow engineering discussions and inference-serving documentation with a clear mental model of what the server is doing.

## Success looks like

- Trace a small example from prompt tokens through prefill and several decode steps.
- Explain attention’s role and what the keys and values in a KV cache represent.
- Explain what gets reused, what still gets computed, and why the cache grows as generation continues.
- Distinguish waiting for the first token from waiting for subsequent tokens, connecting each to the execution phases.

## Constraints

- Assume no prior knowledge of tokens, attention, or next-token generation.
- Use short lessons, diagrams, and small worked examples, introducing only the math needed.
- Check understanding through explanations in my own words and unfamiliar examples.

## Out of scope

- Training and implementing a transformer.
- Deploying an inference server.
- Advanced serving optimizations.
