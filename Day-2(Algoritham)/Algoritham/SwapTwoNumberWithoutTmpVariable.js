function swapNumb(a, b){
  console.log('before swap: ','a: ', a, 'b: ', b);
  b = b -a;
  a = a+ b;
  b = a-b;
  console.log('after swap: ','a: ', a, 'b: ', b);  
}

swapNumb(2, 3);
  //  before swap:  a:  2 b:  3
  //  after swap:  a:  3 b:  2 