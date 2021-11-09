function Helper() {  

    for (let method in Helper) {
        const secure = {
            writable: false,
            configurable: false,
            enumerable: false        
        }

        Object.defineProperty(Helper, method, secure)
    }
    
    

    this.isEmpty = function (obj) {
        if (this.isObject(obj) == false) {return "Нужен объект"};
        if (Object.keys(obj).length === 0) {
            return true;
        }   else {
            return false;
        }
    };

    this.isObject = function (obj) {
        if (typeof obj == 'object') {
            return true;
        }   else {
            return (false);
        }
    };

    this.deepClone = function (obj) {
        if (this.isObject(obj) == false) {return "Нужен объект"};
        const copy = {};
        for (let key in obj) {
            copy[key] = obj[key];
        }
        return copy;
    };

    this.isEqual = function (obj1, obj2) {
        if (this.isObject(obj1) == false) {return "Нужен объект"};
        if (this.isObject(obj2) == false) {return "Нужен объект"};
        const firstKeys = Object.keys(obj1);
        const secondKeys = Object.keys(obj2);

        if (firstKeys.length !== secondKeys.length) {
            return false;
        }

        for (let i = 0; i < firstKeys.length; i++) {
            const key = firstKeys[i];
            
            if ((firstKeys[key] !== secondKeys[key])) {
              return false;
            }
        }
        
        return true;
    }

    this.findValue = function (obj, key) {
        if (this.isObject(obj) == false) {return "Нужен объект"};
        let result = "не найдено"
        
        find(obj, key);

        function find(obj, key) {
            for (let index in obj) {
                if (index == key) {
                    result = obj[index];
                    break;
                }  else if (typeof (obj[index]) === "object") {
                    find((obj[index]), key);
                }
            }
        }

        return result;
    }

    this.hasKey = function (obj, key) {
        if (this.isObject(obj) == false) {return "Нужен объект"};
        let result = false;

        isKey(obj, key);

        function isKey(obj, key) {
            for (let index in obj) {
                if (index == key) {
                    result = true;
                }  else if (typeof (obj[index]) === "object") {
                    isKey((obj[index]), key);
                }
            }
        }

        return result;
    }
}

const obj1 = {property: "value"};
const obj2 = {
  property: "value",
  nextLevel: {
    secondProperty: "secondValue",
    thirdLevel: {
      thirdProperty: "thirdValue"
    }
  }
};

const helper = new Helper();

const isEqual = helper.isEqual(obj1, obj2) // false
const findValue = helper.findValue(obj2, "thirdLevel") // {thirdProperty: "thirdValue"}
const clonedObject = helper.deepClone(obj1); // clonedObject: {property: "value"}

console.log(isEqual);
console.log(findValue);
console.log(clonedObject);
