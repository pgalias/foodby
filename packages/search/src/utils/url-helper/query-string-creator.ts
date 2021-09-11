export const queryStringCreator = (params: Record<string, string>): string => {
  const queryString = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    queryString.append(key, value);
  });

  return `?${queryString.toString()}`;
};
