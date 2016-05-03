// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    var type = typeof(obj);
    if(type === "boolean" || type === "number")
        return '' + obj;
    else if(type === "string")
        return '"' + obj + '"';
    if(type === "undefined" || type === "symbol" || type === "function") {
        return null;
    }
    else if(obj === null) {
        return 'null';
    }
    else if(Array.isArray(obj)) {
        /*var result = _.map(obj, stringifyJSON);
        return '[' + result.join() + ']';*/

        if(obj.length === 0)
            return "[]";
        var str = '';
        for(var i = 0; i < obj.length; i++) {
            var item = stringifyJSON(obj[i]);
            if(item === null)
                str = str + 'null';
            else
                str = str + item + ',';
        }
        str = str.substring(0, str.length - 1);
        str = '[' + str + ']';
        return str;
    }
    else if (type === "object") {
        var str = '';
        for(var x in obj) {
            var item = stringifyJSON(obj[x]);
            if(item !== null) {
                str = str + stringifyJSON(x) + ':' + item + ",";
            }
        }
        if(str.length > 0)
            str = str.substring(0, str.length - 1);
        str = '{' + str + '}';
        return str;
    }
};
