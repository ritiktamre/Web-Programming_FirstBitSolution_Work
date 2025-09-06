function usernameValidation()
{
  username=document.getElementById("username").ariaValueMax
  if(username.trim().length==0)
  {
    document.getElementById("unameerr").innerHTML("please enter a valid username")
  }
  else
  {
    
    document.getElementById("unameerr").innerHTML=""
  }
}
function passwordvalidation()
{
  username=document.getElementById("passworderr").value
  if(passwordvalidation.trim().length==0)
  {
    document.getElementById("passworderr").innerHTML="password can not be empty"
    return false;
  }
  else
  {
    document.getElementById("passworderr").innerHTML=""
  }
} 
function gendervalidation()
{
  gender=document.getElementById("gender")
  for(i=0;i<gender.length;i++)
  {
    if(gender[i].checked==true)
    {
      flag==1
      break;
    }
  }
  if(flag==1)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function submitForm()
{
  if(usernameValidation() && passwordvalidation() && gendervalidation())


  document.getElementById("regForm").submit();
}