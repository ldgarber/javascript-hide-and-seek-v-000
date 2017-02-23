var getFirstSelector = (selector) =>  {
  return document.querySelector(selector); 
}

var nestedTarget = () => {
  var nested = document.getElementById('nested'); 
  return nested.getElementsByClassName('target')[0]; 
}

var deepestChild = () => {
  var parentNode = document.getElementById('grand-node'); 
  while (parentNode.getElementsByTagName("div").length > 0) {
    parentNode = parentNode.getElementsByTagName("div")[0];
  }
  return parentNode; 
}

var increaseRankBy = (n) => {
  var rankedLists = document.getElementsByClassName('ranked-list'); 
  for (var i = 0; i < rankedLists.length; i++) {
    var lis = rankedLists[i].querySelectorAll('li'); 
    for (var j = 0; j < lis.length; j++) {
      lis[j].innerHTML = parseInt(lis[j].innerHTML) + n; 
    } 
  }
  return; 
}
