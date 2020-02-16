module.exports = function countCats(backyard) {
    if (!Array.isArray(backyard)) {
      return 0;
    }
    var sum = 0;
    backyard.forEach(arr=> {
      arr.forEach(mayBeCat => {
        if (mayBeCat == "^^") {
          sum ++;
        };  
      });
    });
    return sum;
};
