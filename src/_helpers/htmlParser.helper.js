import HTMLReactParser from 'html-react-parser';

function parseHTML(html) {
  return HTMLReactParser(html);
}

export default { parseHTML };
