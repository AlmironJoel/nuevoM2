var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }


  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  let element = startEl.children;

  if(matchFunc(startEl)){
    resultSet.push(startEl)
  }
for (let i = 0; i < element.length; i++) {
  let result = traverseDomAndCollectElements(matchFunc,element[i])
  resultSet=[...resultSet,...result]
};

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if(selector[0]=== "#") return "id" //si la posicion 0 es igual a #,osea que empieza con # se toma como que es un ID
  if(selector[0]=== ".") return "class"//si la posicion 0 es igual a ".",osea que empieza con "." se toma como que es un class
  if(selector.includes(".")) return "tag.class"//
  return "tag"//si no es ninguno de los anteriores, es tag
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (element) => `#${element.id}` === selector
  } else if (selectorType === "class") {
matchFunction = (element) => {
  for (const clase of element.classList) {
    if(`.${clase}`=== selector){
      return true
    }
  }
  return false
}
  } else if (selectorType === "tag.class") {
    
    const [tag, className] = selector.split(".");
    
    matchFunction = (element) =>
      element.tagName === tag.toUpperCase() &&
      element.classList.contains(className);

  } else if (selectorType === "tag") {
    matchFunction = (element) => element.tagName === selector.toUpperCase();//! document.body.tagName ➡ 'BODY'
                                                                            //! Hay que pasar a mayusculas el selector
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};


