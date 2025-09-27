import { useMutation, useQuery } from '@tanstack/react-query';
import { requestChart } from '.';
import { RequestChartType } from '../../../../types/RequestChart/RequestChart';

const useRequestChart = () => {
  return useMutation({
    mutationKey: ['requestChart'],
    mutationFn: (data: RequestChartType) => requestChart(data),
  });
};

export { useRequestChart };
