class UserStore {
  public isLoggedIn: boolean = false;

  public token: string = '';

  /**
   * Log in user
   * @param token user login token
   */
  public login(token: string): void {
    this.token = token;
    this.isLoggedIn = true;
  }

  /**
   * Log out user
   */
  public logout(): void {
    this.token = '';
    this.isLoggedIn = false;
  }
}

export default new UserStore();
