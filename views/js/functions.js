var list = ['Limpeza da Casa', 'Estudos', 'Tarefas com as Crianças', 'Trabalho']

const selectBox = () =>{
    const loadList = () => list.map(item=>{
        return `<option>${item}</option>`
    })
    document.querySelector('#select-box').innerHTML += loadList()
}
selectBox()

//Precisa fazer o foreach aqui
document.querySelector('#btn-add-item').addEventListener('click', e=>{
    
})
