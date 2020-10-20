class API {
  static BASE_API_URL = "https://meijerdigital.azurewebsites.net/api";

  static ROUTES = {
    // AUTH: "/auth",
    GET_PRODUCTS: "/interview",
  };

  static async get(route) {
    return await this.jsonMethod("get", this.BASE_API_URL + route, null);
  }

  static async post(route, data) {
    return await this.jsonMethod("post", this.BASE_API_URL + route, data);
  }

  static async jsonMethod(method, path, data) {
    let request = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
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
