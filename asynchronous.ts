const data = [{ name: 'coder', email: 'coder@gmail.com'},{ name: 'coder', email: 'coder@gmail.com'},{ name: 'coder', email: 'coder@gmail.com'}]
type dataType = {
    name: string,
    email: string
}
const getData = ():Promise<dataType[]> => {
    return new Promise<dataType[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}
async function getUserdata() {
    const d: dataType[] = await getData()
    console.log(d)
}
getUserdata()