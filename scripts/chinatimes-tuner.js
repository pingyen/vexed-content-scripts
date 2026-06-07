(() => {
  const url = new URL(document.URL);
  const searchParams = url.searchParams;

  let changed = false;

  for (const param of ['chdtv', 'ctrack']) {
    if (searchParams.has(param)) {
      searchParams.delete(param);
      changed = true;
    }
  }

  if (changed) {
    const search = searchParams.toString();
    history.replaceState(null, '', `${url.pathname}${search !== '' ? `?${search}` : ''}${url.hash}`);
  }
})();
