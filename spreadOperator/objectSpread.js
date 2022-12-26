const STUDENT = {
    age : 18, 
    name : 'Jahid'
}

const STUDENT2 = {
    age : 28, 
    name : 'Ayub'
}


console.log({
    ...STUDENT,
    ...STUDENT2
})