//getting data from UI
class Data{
  constructor(task,start,end){
    this.task=task;
    this.start=start;
    this.end=end;
  }
}
//showing data in UI

//Iterating data

//resisting data

//editing data

//code pool
const btnSubmit=document.getElementById('btnSubmit')
btnSubmit.addEventListener('click',(e)=>{
  const task=document.getElementById('task').value
  const start=document.getElementById('start').value
  const end=document.getElementById('end').value
  if(task!=''&start!=''&end!=''){
    const data=new Data(task,start,end)
  }else{
    alert('fill all the field please...')
  }
})