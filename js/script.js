function pow()
{

  //alert('is_pow');
  var num;
  var exp;
  do{
    num = + prompt('Введите число');
  }
  while(isNaN(num));
  do{
    exp = + prompt('Введите степень');
  }
  while(isNaN(exp));

  if(exp==0)
  {
    return 1;
  }
  if(exp==1)
  {
    return num;
  }
  if(exp > 1)
  {
    var result=num;
    for (var i = 1; i < exp; i++) {
      result *= num;
    }
    return result;
  }
   if(exp < 0)
  {
    if(num==0) {
      return "Деление на ноль не возможно";
    }
    var result=num;
    for (var i = 1; i < exp; i++) {
      result *= num;
    }
    result = 1/result;
    return result;
  }
}

function names ()
{
  var arrNames = [];
  var lengthNames = 5;
  var userName = '';
  var flag = false;
  for(var i=0; i<lengthNames; i++)
  {
    arrNames[i] =  prompt('Введите имя '+(i+1));
  }
  do{
    userName =  prompt('Введите имя пользователя');
  }
  while(userName == '');
  for(var i=0; i<lengthNames; i++)
  {
    if( arrNames[i] == userName )  
    {
        flag = true;
        break;
    }
  }
  if (flag)
  {
    alert(userName+', вы успешно вошли');
  }
  else
  {
    alert('Что-то пошло не так(');
  }
}
