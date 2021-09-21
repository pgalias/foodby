import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearcherView } from './views';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <SearcherView />
    </QueryClientProvider>
  );
}

export default App;
