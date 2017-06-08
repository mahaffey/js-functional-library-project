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
        returnList.push(iteratee.call(context, element, i list))
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

}

// Array Functions

function first(array, n) {
  if n {
    return array.slice(0, n)
  } else {
    return array.slice(0, 1)
  }
}
