export async function fetchCatalog() {
  const res = await fetch('/api/browse');
  if (!res.ok) {
    throw new Error(`fetch Error ${res.status}`);
  }
  return await res.json();
}
