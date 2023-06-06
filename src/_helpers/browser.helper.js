function openOrDownloadPDFFromPDFUrl(pdfUrl) {
  const linkTag = createLinkTagFromPDFUrl(pdfUrl);
  linkTag.click();
  linkTag.parentNode.removeChild(linkTag);
}

function createLinkTagFromPDFUrl(pdfUrl) {
  const linkTag = document.createElement('a');
  linkTag.target = '_blank';
  linkTag.rel = 'noopener noreferrer';
  linkTag.href = pdfUrl;
  document.body.append(linkTag);

  return linkTag;
}

function openUrlInNewTab(url) {
  window.open(url, '_blank');
}

export default { openUrlInNewTab, openOrDownloadPDFFromPDFUrl };
