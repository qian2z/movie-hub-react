const getImageUrl = (url: string) => {
  if (!url)
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return baseURL + url;
};

export default getImageUrl;
