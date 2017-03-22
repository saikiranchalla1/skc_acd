function outerFunc(param){
  function innerFunc(inputParam){
    return inputParam * 10;
  }
  return innerFunc(param);
}

outerFunc(10);
