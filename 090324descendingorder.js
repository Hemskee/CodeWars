function descendingOrder(n){
    let arr = (""+n).split("").map(Number);//разделение на элементы
    if(arr.length!==1){//еслине то 
    return Number(arr.sort().reverse().join("").toString());//преобразование в число(сортировка по возрастанию - реверсия - преобразование в массив без запятых - преобразование в строку)
      }
    else return n;
  }