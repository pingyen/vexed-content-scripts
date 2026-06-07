(() => {
  const url = new URL(document.URL);
  const searchParams = url.searchParams;

  if (searchParams.has('ref')) {
    searchParams.delete('ref');
    const search = searchParams.toString();
    history.replaceState(null, '', `${url.pathname}${search !== '' ? `?${search}` : ''}${url.hash}`);
  }
})();
