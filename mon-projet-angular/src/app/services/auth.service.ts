export class AuthService{
  isAuth = false;
  logins = [
    {user:"toto",password:"passtoto"}
  ];

  signIn(userAuthn: string, passAuth: string) {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            for (let login of this.logins) {
              if (login.user == userAuthn && login.password == passAuth){
                this.isAuth = true;
                resolve(true);
              }
              reject('test rejection tt');
            }
          }, 2000
        );
      }
    );
  }


  signOut() {
    this.isAuth = false;
  }

}
