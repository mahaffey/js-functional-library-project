// Collection Functions
arr = [1,2,3,4]

function each(list, iteratee, context) {
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
}


function map(list, iteratee, context) {
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
}

function reduce(list, iteratee, memo, context) {
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
}

function find(list, predicate, context) {
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
}

function filter(list, predicate, context) {
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
}

// function sortBy(list, iteree, context) {
//   // the array of new, manipulated values
//   let itereed = []
//   // the original values sorted list based on their itereed ascended value order
//   let sorted = list
//   // the itereed order index of the
//   let indexed = []
//   if (Array.isArray(list)) {
//     for (let i = 0; i < list.length; i++) {
//       const element = list[i]
//       if (context != undefined) {
//         itereed.push(iteree.call(context, element))
//       } else {
//         itereed.push(iteree(element))
//       }
//     }
//
//   } else if (typeof list === 'object') {
//
//   }
// }

function size(list) {
  let i = 0
  while (list[i] != undefined) {
    i++
  }
  return i
}

// Array Functions

function first(array, n) {
  if (n) {
    return array.slice(0, n)
  } else {
    return array.slice(0, 1)
  }
}

function last(array, n) {
  if (n) {
    return array.slice(-n)
  } else {
    return array.slice(-1)
  }
}

function compact(array) {
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
}

// function flatten(array, [shallow]){
//
// }

function uniq(array, isSorted, iteratee) {
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
}

// Functions

// function bind(function, object, *arguments){
//
// }

// Object Functions

function keys(object) {
  let keys = []
  if (typeof object === 'object') {
    for (var key in object) {
      keys.push(key)
    }
  }
  return keys
}

function values(object) {
  let values = []
  if (typeof object === 'object') {
    for (var key in object) {
      keys.push(object[key])
    }
  }
  return values
}


function functions(object) {
  let propertyArray = Object.getOwnPropertyNames(object)
  let functionArray = []
  for (let i = 0; i < propertyArray.length; i++) {
    let element = propertyArray[i]
    if (typeof element === 'function') {
      functionArray.push(element)
    }
  }
  return functionArray
}
