async function checkLinks() {
  const links = document.getElementsByTagName("a");
  const results = [];

  for (let link of links) {
    try {
      const response = await fetch(link.href);
      results.push({
        url: link.href,
        status: response.status,
        ok: response.ok,
      });
    } catch (error) {
      results.push({
        url: link.href,
        error: error.message,
      });
    }
  }

  console.table(results);
}
