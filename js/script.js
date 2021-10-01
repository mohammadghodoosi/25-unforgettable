//getting data from UI
class Data{
  constructor(task,start,end){
    this.task=task;
    this.start=start;
    this.end=end;
  }
}
//showing data in UI
class UI{
  constructor(data){
    this.data=data
  }
  showInField(data){
    const result=document.getElementById('result')
    result.innerHTML+=`<div class='card mx-auto' style='width: 18rem'><div class='card-body'><h5 class='card-title'>${data.task}</h5><p class='card-text'>start time:  ${data.start} <br> ending time:  ${data.end}</p><a href='#' class='card-link'>Done</a><a href='#' class='card-link'>edit</a></div></div>`
  }
}
//Iterating data

//resisting data

//editing data

//code pool
const btnSubmit=document.getElementById('btnSubmit')
const text=document.getElementById('text');
    text.innerHTML="<h1 class='col d-flex justify-content-center text-center'>no tasks yet...<br>please insert your daily tasks</h1>"
btnSubmit.addEventListener('click',()=>{
  const task=document.getElementById('task').value
  const start=document.getElementById('start').value
  const end=document.getElementById('end').value
  if(task!=''&start!=''&end!=''){
    const data=new Data(task,start,end)
    text.innerHTML=''
    const ui=new UI
    ui.showInField(data)
  }else{
    alert('fill all the field please...')
  }
})