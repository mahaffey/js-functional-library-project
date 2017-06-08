toneloke = (function(){
  return {
    libraryMethod: function() {return 'Cache $, Raiders, JS, MongoDB and tacos rule!'},

    // Collection Functions

    each: function(list, iteratee, context) {
      if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
          const element = list[i]
          if(context != undefined) {
            iteratee.call(context, element, i, list)
          } else {
            iteratee (element, i, list)
          }
        }
      } else if (typeof list === 'object') {
        for (var key in list) {
          const value = list[key]
          if(context != undefined) {
            iteratee.call(context, value, key, list)
          } else {
            iteratee (value, key, list)
          }
        }
      }
      return list
    },

    map: function(list, iteratee, context) {
      let returnList = []
      if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
          const element = list[i]
          if (context != undefined) {
            returnList.push(iteratee.call(context, element, i, list))
          } else {
            returnList.push(iteratee (element, i, list))
          }
        }
      } else if (typeof list === 'object') {
        for (var key in list) {
          const value = list[key]
          if (context != undefined) {
            returnList.push(iteratee.call(context, value, key, list))
          } else {
            returnList.push(iteratee (value, key, list))
          }
        }
      }
      return returnList
    },

    reduce: function(list, iteratee, memo, context) {
      if (Array.isArray(list)) {
        if (!memo) {
          memo = list[0]
          for (var i = 0; i < list.length; i++) {
            const element = list[i]
            if (context != undefined) {
              iteratee.call(context, memo, element, i, list)
            } else {
              iteratee(memo, element, i, list)
            }
          }
        } else {
          for (let i = 0; i < list.length; i++) {
            const element = list[i]
            if (context != undefined) {
              iteratee.call(context, memo, element, i, list)
            } else {
              iteratee(memo, element, i, list)
            }
          }
        }
      } else if (typeof list === 'object') {
        if (!memo) {
          memo = list[0]
          for (var key in list) {
            const value = list[key]
            if (context != undefined) {
              iteratee.call(context, memo, value, key, list)
            } else {
              iteratee(memo, value, key, list)
            }
          }
        } else {
          for (var key in list) {
            const value = list[key]
            if (context != undefined) {
              iteratee.call(context, memo, value, key, list)
            } else {
              iteratee(memo, value, key, list)
            }
          }
        }
      }
    },

    find: function(list, predicate, context) {
      if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
          const element = list[i]
          if (context != undefined) {
            if (predicate.call(context, element, i, list)) {
              return element
            }
          } else {
            if (predicate(element, i, list)) {
              return element
            }
          }
        }
      } else if (typeof list === 'object') {
        for (var key in list) {
          const value = list[key]
          if (context != undefined) {
            if (predicate.call(context, value, key, list)) {
              return value
            }
          } else {
            if (predicate(value, key, list)) {
              return value
            }
          }
        }
      }
    },

    filter: function(list, predicate, context) {
      let filtered = []
      if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
          const element = list[i]
          if (context != undefined) {
            if (predicate.call(context, element, i, list)) {
              filtered.push(element)
            }
          } else {
            if (predicate(element, i, list)) {
              filtered.push(element)
            }
          }
        }
      } else if (typeof list === 'object') {
        for (var key in list) {
          const value = list[key]
          if (context != undefined) {
            if (predicate.call(context, value, key, list)) {
              filtered.push(value)
            }
          } else {
            if (predicate(value, key, list)) {
              filtered.push(value)
            }
          }
        }
      }
      return filtered
    },

    sortBy: function(list, iteratee) {
      let sortable = {}
      if (typeof list[0] != 'object') {
        for (let i = 0; i < list.length; i++){
          const key = list[i]
          const value = iteratee(key)
          sortable[key] = value
        }

        let sorted = Object.keys(sortable).sort(function(a,b){return sortable[a]-sortable[b]})

        if (typeof list[0] === 'number') {
          for (let i = 0; i < sorted.length; i++) {
            sorted[i] = parseInt(sorted[i], 10)
          }
        }
      return sorted
    } else {
         return list.sort((a,b)=>{
            if (a[iteratee] < b[iteratee]) return -1;
            if (a[iteratee] > b[iteratee]) return 1;
            return 0;
          })
      }
    },

    size: function(list) {
      let i = 0
      while (list[i] != undefined) {
        i++
      }
      return i
    },

    // Array Functions

    first: function(array, n) {
      if (n) {
        return array.slice(0, n)
      } else {
        return array.slice(0, 1)
      }
    },

    last: function(array, n) {
      if (n) {
        return array.slice(-n)
      } else {
        return array.slice(-1)
      }
    },

    compact: function(array) {
      let falsy = [false, null, 0, "", NaN, undefined]
      let compacted = array
      for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0 ; j < falsy.length; j++) {
          if (array[i] === falsy[j]) {
            compacted.splice(i, 1)
          }
        }
      }
      return compacted
    },

    // flatten: function(array, shallow){
    //
    // }

    uniq: function(array, isSorted, iteratee) {
      if (iteratee) {
        let uniqued = iteratee(array)
      } else {
        let uniqed = array
      }

      if (isSorted) {
        for (let i = array.length; i >= 0; i--) {
          if (array[i] === array[i-1]) {
            uniqed.splice(i, 1)
          }
        }
      } else {
        for (let i = array.length - 1; i >= 0; i--) {
          for (let j = array.length - 2; j >= 0; i--) {
            if (array[i] === array[j]) {
              uniqed.splice(i, 1)
            }
          }
        }
      }
      return uniqed
    },

    // Functions

    // function bind(function, object, *arguments){
    //
    // }

    // Object Functions

    keys: function(object) {
      let keys = []
      if (typeof object === 'object') {
        for (var key in object) {
          keys.push(key)
        }
      }
      return keys
    },

    values: function(object) {
      let values = []
      if (typeof object === 'object') {
        for (var key in object) {
          keys.push(object[key])
        }
      }
      return values
    },

    functions: function(object) {
      let propertyArray = Object.getOwnPropertyNames(object)
      let functionArray = []
      for (let i = 0; i < propertyArray.length; i++) {
        let element = propertyArray[i]
        if (typeof element === 'function') {
          functionArray.push(element)
        }
      }
      return functionArray
    },

  }
})()

toneloke.libraryMethod()
