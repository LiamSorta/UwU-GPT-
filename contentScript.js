const maxBatchSize = 5;
const minTextLength = 10;
const requestDelay = 20; // Delay in milliseconds between API calls

function processTextNodes(nodes, index = 0) {
  if (index >= nodes.length) return;

  const batch = nodes.slice(index, index + maxBatchSize);

  const combinedText = batch.map((node) => node.textContent).join('\n');

  uwuTranslate(combinedText)
    .then((translatedText) => {
      const translatedLines = translatedText.split('\n');
      batch.forEach((node, batchIndex) => {
        node.textContent = translatedLines[batchIndex];
      });

      setTimeout(() => {
        processTextNodes(nodes, index + maxBatchSize);
      }, requestDelay);
    })
    .catch((error) => {
      console.error('UwU Translation Error:', error);
    });
}

function collectTextNodes(root) {
  const textNodes = [];
  const nodeIterator = document.createNodeIterator(root, NodeFilter.SHOW_TEXT);

  let currentNode;
  while ((currentNode = nodeIterator.nextNode())) {
    const parentTag = currentNode.parentElement.tagName.toLowerCase();
    const isNotScriptOrStyle = parentTag !== 'script' && parentTag !== 'style';
    const isNotEmpty = currentNode.textContent.trim().length >= minTextLength;
    if (isNotScriptOrStyle && isNotEmpty) {
      textNodes.push(currentNode);
    }
  }

  return textNodes;
}


const textNodes = collectTextNodes(document.body);
processTextNodes(textNodes);

async function uwuTranslate(text) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      {
        action: 'translateToUwu',
        text: text,
      },
      (response) => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(response.text);
        }
      }
    );
  });
}
