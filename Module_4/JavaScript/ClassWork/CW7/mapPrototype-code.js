Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  };
  
  const users = [
    { name: 'Loid Forger', age: 30 },
    { name: 'Yor Forger', age: 27 },
    { name: 'Anya Forger', age: 5 }
  ];
  
  const names = users.myMap(user => user.name);
  console.log(names); 
  