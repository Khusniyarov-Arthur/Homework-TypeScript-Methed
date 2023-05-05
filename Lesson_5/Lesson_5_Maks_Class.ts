{class HttpResponse<D, E> {
  protected success: boolean;
  protected data?: D;
  protected code?: E;
  constructor(success: boolean, data?: D, error?: E) {
    this.success = success;

    if(data) {
      this.data = data;
    }

    if(error) {
      this.code = error;
    }
  }
}

const responseToken = new HttpResponse<number, string>(true, 8618646)
const responseUser = new HttpResponse<string, string>(true, 'Gena Ivaniv') 
console.log(responseToken);
console.log(responseUser);


}
