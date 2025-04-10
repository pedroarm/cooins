import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

// Singleton por requisição para isolamento
export const getQueryClient = cache(() => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Configurações padrão para queries
        staleTime: 5 * 60 * 1000, // 5 minutos
        gcTime: 10 * 60 * 1000, // 10 minutos
      },
    },
  });
});