(() => {
  const url = new URL(document.URL);
  const searchParams = url.searchParams;

  if (searchParams.has('e')) {
    searchParams.delete('e');
    const search = searchParams.toString();
    history.replaceState(null, '', `${url.pathname}${search !== '' ? `?${search}` : ''}${url.hash}`);
  }
})();
