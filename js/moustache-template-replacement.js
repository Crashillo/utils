/**
*  DEPRECATED: It's better to do individual functions
*
*
*  Example template
*  
*  Notice that "name" and "role" are properties present at the data object
*  You might concat valid operations over the property
*
*  const template = `
*    <div>
*     <strong>{{ name }}</strong>
*     <span>{{ role.toUpperCase() }}</span>
*    </div>
*  `;
*/
const getHTMLContent = (data, template, emptyTemplate = "" ) => {
  const moustache = new RegExp(/\{\{ (\w+)\.*?(.*?) \}\}/, 'g') // regex to find the moustache expressions

  let list = "";
  if (data.length) {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];

      const matchedText = []; // search for the string to be replaced
      const matchedKey = []; // get the matching group, i.e, the data element key, to replace the content
      const matchedOperations = []; // if there are chained properties (operators) over the key

      // get all replaceable elements
      let match = moustache.exec(template)
      while (match !== null) {
        matchedText.push(match[0])
        matchedKey.push(match[1])
        matchedOperations.push(match[2])
        match = moustache.exec(template)
      }

      // replace the previous found element with the proper values
      let tpl = template;
      for (let j = 0; j < matchedKey.length; j++) {
        const key = matchedKey[j];
        const operation = matchedOperations[j];

        let replacement = element[key]
        if (operation) {
          replacement = eval(`element[key]${operation}`)
        }
        
        tpl = tpl.replace(matchedText[j], replacement)
      }

      list += tpl
    }
  } else {
    list = emptyTemplate
  }

  return list
}
