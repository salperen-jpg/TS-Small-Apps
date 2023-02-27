const paginate = (followers: any) => {
  const itemsPerPage = 10;
  const page = Math.ceil(followers.length / itemsPerPage);
  const newPeople = Array.from({ length: page }, (_, index) => {
    const start: number = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newPeople;
};

export default paginate;
