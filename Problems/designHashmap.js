// var MyHashMap = function () {
//   this.innerMap = [];
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// MyHashMap.prototype.put = function (key, value) {
//     const keyIsValid = key != undefined && key != null;
//     const valueIsValid = value != undefined;


//   if (keyIsValid && valueIsValid) {
//     for (let i = 0; i < this.innerMap.length; i++) {
//       var kvp = this.innerMap[i];
//       if (kvp[0] === key) {
//         kvp[1] = value;
//         return;
//       }
//     }
//     this.innerMap.push([key, value]);
//   }
// };

// /**
//  * @param {number} key
//  * @return {number}
//  */
// MyHashMap.prototype.get = function (key) {
//   for (let i = 0; i < this.innerMap.length; i++) {
//     var kvp = this.innerMap[i];
//     if (kvp[0] === key) return kvp[1];
//   }
//   return -1;
// };

// /**
//  * @param {number} key
//  * @return {void}
//  */
// MyHashMap.prototype.remove = function (key) {
//   for (let i = 0; i < this.innerMap.length; i++) {
//     var kvp = this.innerMap[i];
//     if (kvp[0] === key) {
//       this.innerMap.splice(i, 1);
//       break;
//     }
//   }
// };

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

var MyHashMap = function () {
    let innerMap = [];
  
    function put(key, value) {
      const keyIsValid = key != undefined && key != null;
      const valueIsValid = value != undefined;
  
      if (keyIsValid && valueIsValid) {
        for (let i = 0; i < innerMap.length; i++) {
          var kvp = innerMap[i];
          if (kvp[0] === key) {
            kvp[1] = value;
            return;
          }
        }
        innerMap.push([key, value]);
      }
    }
  
    function get(key) {
      for (let i = 0; i < innerMap.length; i++) {
        var kvp = innerMap[i];
        if (kvp[0] === key) return kvp[1];
      }
      return -1;
    }
  
    function remove(key) {
      for (let i = 0; i < innerMap.length; i++) {
        var kvp = innerMap[i];
        if (kvp[0] === key) {
          innerMap.splice(i, 1);
          break;
        }
      }
    }
  
    return { put, get, remove };
  };