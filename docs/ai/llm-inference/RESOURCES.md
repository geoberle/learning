# LLM inference resources

## Knowledge

- [Hugging Face: Tokenizers](https://huggingface.co/learn/llm-course/chapter2/4)
  Maintainer-authored explanation of text, token boundaries, and numerical IDs. Use for the starter vocabulary.
- [Hugging Face: Text generation](https://huggingface.co/docs/transformers/llm_tutorial)
  Maintainer documentation for the prompt-plus-generated-output loop and stopping conditions. Read the introduction first; code is optional.
- [Hugging Face: Generation strategies](https://huggingface.co/docs/transformers/generation_strategies)
  Explains greedy selection and sampling. Use to distinguish prediction probabilities from token selection.

- [AWS: How AI inference works](https://docs.aws.amazon.com/prescriptive-guidance/latest/gen-ai-inference-architecture-and-best-practices-on-aws/how-ai-inference-works.html)
  Provider documentation on prefill, decode, and cache reuse. Use the phase descriptions first; hardware generalizations depend on workload.
- [Hugging Face: PagedAttention](https://huggingface.co/docs/text-generation-inference/conceptual/paged_attention)
  Maintainer description of cached attention keys and values. Use the opening paragraph for the cache’s role; paging is out of scope.
- [vLLM: Metrics](https://docs.vllm.ai/en/latest/design/metrics/)
  Maintainer definitions and measurement boundaries for first-token and inter-token latency.

## Gaps

Find and read primary sources explaining attention and the meaning of keys and values before teaching cache internals. Community resources have not yet been evaluated.
