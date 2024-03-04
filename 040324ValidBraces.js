function validBraces(braces){
    while(braces.indexOf/*если находит мэтч(и { и })*/("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
       braces = braces.replace/*заменяет и { и } на ничего*/("{}", "").replace("()", "").replace("[]", "");/*ет.е. если есть мэтчи, то удаляет их и в конце выходит пустота*/
     }
     return braces.length == 0;/*т.к мэтчи заменяются на ничего, в случае их отстутствия будет !=0, в случае наличия 0*/
   }
 