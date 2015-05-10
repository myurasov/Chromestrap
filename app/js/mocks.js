/**
 * Mocks
 */

if (ENVIRONMENT === 'dev-browser' /* running dev copy in browser, not as a chrome app */) {

  // mock Chrome APIs
  window.chrome = {};
  window.chrome.identity = {};
  window.chrome.identity.getAuthToken = function (options, cb) {
    cb('-mocked-token-');
  };

}