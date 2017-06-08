arr = [1,2,3,4]

function each(list, iteratee, context) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      const element = list[i]
      if(context != undefined) {
        iteratee.call(context, element)
      } else {
        iteratee (element, i, list)
      }
    }
  } else if (typeof list === 'object') {
    for (var key in list) {
      const value = list[key]
      if(context != undefined) {
        iteratee.call(context, value)
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
      returnList.push(iteratee (element, i, list))
    }
  } else if (typeof list === 'object') {
    for (var key in list) {
      const value = list[key]
      returnList.push(iteratee (value, key, list))
    }
  }
  return returnList
}
