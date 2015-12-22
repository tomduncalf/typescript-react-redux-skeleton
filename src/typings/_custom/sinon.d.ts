declare module Sinon {
  interface SinonStub {
    // Support sinon-as-promised additions
    resolves?: any
    rejects?: any
  }
}
