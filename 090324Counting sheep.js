function countSheeps(sheep) {
    var sum = 0;
    if (sheep!==""){
      for (var i = 0; i < sheep.length; i++){
        sheep[i] == true ? sum++ : sum += 0;
      }
    }
    return sum;
  }