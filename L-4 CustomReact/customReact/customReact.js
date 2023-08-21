function customRender(reactElement,container)
{
    // domElemement.setAttribute('href',reactElement.props.href)
    // domElemement.setAttribute('targer',reactElement.props.target
    // const domElemement=document.createElement(reactElement.type)
    // domElemement.innerHTML= reactElement.children
    // container.appendChild(domElemement)


    // Module Version code 2 

    const domElement = document.createElement(reactElement.type)
    domElement.innetHTML=reactElement.children
    for (const prop in reactElement.props) {

        if(prop==='children')continue;

        domElement.setAttribute(prop,reactElement.props[prop])
        }

        container.appendChild(domElement)
    
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blanks",
  },
  children: "click me to visit google",
};

const root = document.getElementById("root");


customRender(reactElement,root);