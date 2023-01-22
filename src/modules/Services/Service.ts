export default class Service {
  static readonly BASE_ADDRESS: string = 'http://127.0.0.1:5000';

  /**
   * Create request to server
   * @param reqType request type (GET, POST, DELETE, UPDATE)
   * @param endpointRoute Endpoint route/url
   * @param data Data to send with request
   * @returns response from server
   */
  // eslint-disable-next-line max-len
  public static async createRequest(reqType: string, endpointRoute: string, data: object, extraOptions: object = {}): Promise<any> {
    const response = await fetch(Service.BASE_ADDRESS + endpointRoute, {
      method: reqType,
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      ...extraOptions,
    });

    return response.json();
  }
}
