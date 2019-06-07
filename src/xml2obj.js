const services = {};

services.convert = (xml, parser = true) => {
  if (parser) {
    xml = new DOMParser().parseFromString(xml, "text/xml");
  }

  let object = {};

  if (xml.nodeType === 1) {
    if (xml.attributes.length > 0) {
      object["@attr"] = {};
      for (let j = 0; j < xml.attributes.length; j += 1) {
        const attribute = xml.attributes.item(j);
        object["@attr"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) {
    object = xml.nodeValue;
  }

  if (
    xml.hasChildNodes() &&
    xml.childNodes.length === 1 &&
    xml.childNodes[0].nodeType === 3 &&
    !object["@attr"]
  ) {
    object = xml.childNodes[0].nodeValue;
  } else if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i += 1) {
      const item = xml.childNodes.item(i);
      const { nodeName } = item;
      if (nodeName !== "#text") {
        if (typeof object[nodeName] === "undefined") {
          object[nodeName] = services.convert(item, false);
        } else {
          if (typeof object[nodeName].push === "undefined") {
            const old = object[nodeName];
            object[nodeName] = [];
            object[nodeName].services.convert(old);
          }

          object[nodeName].push(services.convert(item, false));
        }
      }
    }
  }

  return object;
};

export { services };
