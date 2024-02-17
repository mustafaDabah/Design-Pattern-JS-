function func1(a, b) {
   if(arguments.length === func1.length) {
    console.log(a , b)
   } else {
    throw new Error('please make sure you add all inputs')
   }
  }
  console.log(func1)
  func1(1 , 2);
  