type GenericArray<T> = Array<T>
const genericArray:GenericArray<string> = ['coder', 'rayhan']
console.log(genericArray);


interface ResponseType1<T, T1> {
    data: T
    error: T1
}
type RespnoseDataType = {
    name: string
    age: number
    email: string
}
type ErrorType = {
    code: number
    error: string
}
const response:ResponseType1<RespnoseDataType, ErrorType> = {
    data: {
        name: 'coder',
        age: 26,
        email: 'coder@gmail.com'
    },
    error: {
        code: 203,
        error: 'Invalid user',
    }
}
console.log(response);
function GenericFunc<T>(a: T): T{
    return a
}
const res = GenericFunc<string[]>(['test', 'test1'])
console.log(res);
