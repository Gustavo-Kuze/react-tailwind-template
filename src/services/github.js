const BASE_URL = 'https://api.github.com';
const PAGE_SIZE = 100;

const getFileText = async (rawUrl) => {
  const blobResponse = await fetch(rawUrl);
  return blobResponse.text();
};

const getPublicGists = async (page = 1) => {
  let gists = [];

  const response = await fetch(
    `${BASE_URL}/users/Gustavo-Kuze/gists?page=${page}&per_page=${PAGE_SIZE}`,
  );

  if (!response.ok) return gists;

  const data = await response.json();

  gists = await Promise.all(
    data
      .map(({ files, description }) => ({
        ...Object.entries(files)[0][1],
        description,
      }))
      .filter((file) => file.filename.includes('.md'))
      .map(async (file) => {
        const content = await getFileText(file.raw_url);
        return { ...file, content };
      }),
  );

  return gists;
};

export { getPublicGists };
