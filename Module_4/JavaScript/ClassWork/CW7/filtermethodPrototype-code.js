Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };
  
  const users = [
    { name: 'Loid Forger', age: 30 },
    { name: 'Yor Forger', age: 27 },
    { name: 'Anya Forger', age: 5 }
  ];
  
//   const adults = users.myFilter(user => user.age >= 18); // Output:- [ { name: 'Loid Forger', age: 30 }, { name: 'Yor Forger', age: 27 } ]
  const adults = users.myFilter(user => user.age != 27);
  console.log(adults); 
  