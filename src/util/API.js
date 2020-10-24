/**
 * Class containing API methods and helpers
 */
class API {
  static BASE_API_URL = "https://meijerdigital.azurewebsites.net/api";

  /** Object containing common API endpoints */
  static ROUTES = {
    GET_PRODUCTS: "/interview",
  };

  /**
   * GET fetch wrapper
   * @param {string} route API endpoint (commonly from API.ROUTES)
   */
  static async get(route) {
    return await this.jsonMethod("get", this.BASE_API_URL + route, null);
  }

  /**
   * POST fetch wrapper
   * @param {string} route API endpoint (commonly from API.ROUTES)
   * @param {object} data JSON data to be posted to the API endpoint
   */
  static async post(route, data) {
    return await this.jsonMethod("post", this.BASE_API_URL + route, data);
  }

  /**
   * Common fetch wrapper for GET | POST REST methods
   * @param {string} method HTTP verb
   * @param {string} path URL in the request
   * @param {object} data JSON data to be added to the request
   */
  static async jsonMethod(method, path, data) {
    let request = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (method === "post") {
      request.body = JSON.stringify(data);
    }

    const response = await fetch(path, request);
    const json = await response.json();

    return json;
  }
}

export default API;
