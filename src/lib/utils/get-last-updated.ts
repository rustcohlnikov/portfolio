export async function getLastUpdated(): Promise<string> {
  let lastUpdated = "";
  const res = await fetch(
    'https://api.github.com/repos/rustcohlnikov/portfolio/commits?per_page=1'
  );
  const data = await res.json();
  const date = new Date(data[0].commit.author.date);
  lastUpdated = date.toLocaleDateString('en-GB');

  return lastUpdated;
}