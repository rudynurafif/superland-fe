export interface ResponseWrapper<T> {
    statusCode : number,
    message : string,
    data : T
}

export interface PaymentResponse {
    token : string,
    redirect_url : string
}



