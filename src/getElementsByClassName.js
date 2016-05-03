// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    //var classes = className.split(" ");
    var result = [];
    
    var searchTree = function(node) {
        if(node === undefined)
            return;
        
        /*var hasClass = true;
        for(var i = 0; i < classes.length; i++) {
            if(!(node.classList.contains(classes[i])))
                hasClass = false;
        }
        if(hasClass)
            result.push(node);*/

        if(node.classList.contains(className))
            result.push(node);
        
        var children = node.childNodes;
        for(var j = 0; j < children.length; j++) {
            searchTree(node.children[j]);
        }

        return;
    }

    searchTree(document.body);
    return result;
};
