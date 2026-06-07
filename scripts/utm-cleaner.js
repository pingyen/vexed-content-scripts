(() => {
  const url = new URL(document.URL);
  const searchParams = url.searchParams;

  let changed = false;

  for (const key of [...searchParams.keys()]) {
    if (key.startsWith('utm_')) {
      searchParams.delete(key);
      changed = true;
    }
  }

  if (changed) {
    const search = searchParams.toString();
    history.replaceState(null, '', `${url.pathname}${search !== '' ? `?${search}` : ''}${url.hash}`);
  }
})();
