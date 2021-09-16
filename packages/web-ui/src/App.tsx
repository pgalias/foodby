import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Searcher } from './views';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Searcher />
    </QueryClientProvider>
  );
}

export default App;
