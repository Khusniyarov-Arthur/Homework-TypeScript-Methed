"use strict";
{
    class HttpResponse {
        success;
        data;
        code;
        constructor(success, data, error) {
            this.success = success;
            if (data) {
                this.data = data;
            }
            if (error) {
                this.code = error;
            }
        }
    }
    const responseToken = new HttpResponse(true, 8618646);
    const responseUser = new HttpResponse(true, 'Gena Ivaniv');
    console.log(responseToken);
    console.log(responseUser);
}
