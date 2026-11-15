# First decode step reuses the prompt cache

On 2026-11-15, after reading lesson 1, Gerd correctly explained that predicting the second generated token processes the first generated token using cached results from the 20-token prompt. This demonstrates the basic prefill-to-decode transition and cache reuse in the lesson's example; cache internals and transfer to unfamiliar examples remain unassessed. Next, build on this understanding to explain attention and what the cache stores, rather than repeat the introductory generation loop.
