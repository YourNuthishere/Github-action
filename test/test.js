import { assert } from 'chai';
import app from '../app.js';  // Ensure app.js also uses ES module export if needed

describe('Simple test', function () {
  it('should return hello message', function () {
    assert.equal('Hello, GitHub Actions!', 'Hello, GitHub Actions!');
  });
});

