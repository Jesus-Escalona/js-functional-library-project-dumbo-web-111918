fi = (function() {
  return {

    each: function(collection, callback) {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                callback(collection[i])
            }
        } else {
            for (let key in collection) {
                callback(collection[key])
            }
        }
        return collection
    },

    map: function(collection, callback) {
        a = []
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                a.push(callback(collection[i]))
            }
        } else {
            for (let key in collection) {
                a.push(callback(collection[key]))
            }
        }
        return a
    },

    reduce: function(collection, callback, acc = 0) {
        for (let i = 0; i < collection.length; i++) {
            acc = callback(acc, collection[i])
        }
        return acc
    },

    find: function(collection, predicate) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) return collection[i]
        }
    },

    filter: function(collection, predicate) {
        a = []
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                a.push(collection[i])
            }
        }
        return a
    },

    size: function(collection) {
        if (Array.isArray(collection)) {
            return collection.length
        } else {
            return Object.keys(collection).length
        }
    },

    first: function(array, n) {
        return n === undefined ? array[0] : array.slice(0,n)
    },

    last: function(array, n) {
        return n === undefined ? array[array.length-1] : array.slice(array.length-n)
    },

    compact: function(array) {
        a = []
        for (let i = 0; i < array.length; i++) {
            if (array[i]){
                a.push(array[i])
            }
        }
        return a
    },

    sortBy: function(array, callback) {
        return [...array].sort((a,b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow) {
        let a = []
        let c = false
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                c = true
                for (let j = 0; j < array[i].length; j++) {
                    a.push(array[i][j])
                }
            } else {
                a.push(array[i])
            }
        }
        if (shallow) return a
        return (c ? this.flatten(a) : a)
    },

    uniq: function(array, isSorted = false, callback =(e) => e) {
        let r = []
        let s = new Set
        for (let i = 0; i < array.length; i++) {
            let x = callback(array[i])
            if(!s.has(x)) {
                r.push(array[i])
                s.add(x)
            }
        }
        return r
    },

    keys: function(object) {
        let a = []
        for (let key in object) {
                a.push(object)
            }
        return a
    },

    values: function(object) {
        let a = []
        for (let key in object) {
                a.push(object[key])
            }
        return a
    },

    functions: function(object) {
        let a = []
        for (let key in object) {
                if (typeof object[key] === "function") {
                    a.push(key)
                }
            }
        return a.sort()
    }
  }
})()
