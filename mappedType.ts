
type Volume = {
    readonly height: number;
   readonly width: number;
    depth: number
}
type Volume1 = {
    [key in keyof Volume]: string
}

type Area<T> = {
    [key in keyof T]: T[key]
}

const volume1: Volume = {
    height: 200,
    width: 300,
    depth: 100
}
const volume:Area<Volume1> = {
    height: 'test',
    width: 'test',
    depth: 'test'
}
