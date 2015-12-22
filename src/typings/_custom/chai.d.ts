declare module Chai {
  interface LanguageChains {
    // Add support for chai-as-promised
    eventually: Assertion
    rejected: Assertion
    // Add support for chai-jsx
    jsx: Assertion
  }
}
