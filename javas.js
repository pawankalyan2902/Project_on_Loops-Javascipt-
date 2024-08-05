//for loop problem
let input=document.querySelector("#sumofnumber");
let sum=0;
let addition=0;
function add()
{
  for(let i=0;i<=input.value;i++)
  {
    sum=sum+i;
    
  }
  addition=sum;
  console.log(sum);
  sum=0; 
  let line=document.querySelector("#nums");
  line.classList.add("style");
  line.innerHTML=addition;
}
let button=document.querySelector("#btnn");
button.addEventListener("click" ,add);
//end

//for of problem
let anc=document.querySelectorAll("a");
function anchor()
{
  for(const anchorelements of anc)
  {
    anchorelements.classList.add("colorchange")
  }
}
let tag=document.querySelector("#btn");
tag.addEventListener("click",anchor);

//display info for in 
let object={
  name:"pawan_kalyan",
  focus:"devoloping skills", 
};
let datalist= document.createElement("li");
let disaplay_info=document.querySelector("#info");
function infodisplay()
{
  let data = '';
  for(const property in object)
  {
      data+= "<br/>" +property+":"+object[property];
      disaplay_info.classList.add("styles");
      console.log(data);
      datalist.innerHTML=data;
      disaplay_info.append(datalist);
  }

}
let key=document.querySelector("#information");
key.addEventListener("click",infodisplay);
//random number
let number_of_times=document.querySelector("#number_of_times");//i
let input_value=document.querySelector("#input_value");//input value
let randomof_ul=document.querySelector("#randomnumber_ul");//Format to display
let randomnumberinput=document.querySelector("#randomnumber");//to store a random number
let randomnumberbutton=document.querySelector("#btnnn");
function randomnumbertask()
{
  let data="";//make sure that this is empty string
  let i=1;
  let random_number=0;
  let random_number_value= randomnumberinput.value;
  let randomnumberli=document.createElement("li");//Create a list and then append it with ul
  if(random_number_value>6)
  {
     randomof_ul.innerHTML="The input given is not less than 6";
  }
  else
  {
  while(random_number!=random_number_value)
  {
     random_number=Math.floor(Math.random()*6);
     data+="<br/>"+"Roll "+i+": "+random_number;
     randomnumberli.innerHTML=data;
    randomof_ul.append(randomnumberli);
     i++;

  }
  number_of_times.innerHTML=i-1;
  input_value.innerHTML=random_number_value;
}
    
}
randomnumberbutton.addEventListener("click",randomnumbertask);






