export function paginateData<T>(data: T[], page: number, pageSize: number) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const totalPages = Math.ceil(data.length / pageSize);
  
  return {
    data: data.slice(startIndex, endIndex),
    totalPages,
    currentPage: page,
    hasNextPage: endIndex < data.length,
    hasPrevPage: page > 1
  };
}