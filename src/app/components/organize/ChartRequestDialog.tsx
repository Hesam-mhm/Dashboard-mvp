import { Box, Button, Dialog, Divider, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import TextfieldComponent from '../molecule/FormComponents/TextfieldComponent';
import CustomLoading from '../atome/CustomLoading';
import { AddCircleIcon } from '../..//Iconify/AddCircleIcon';
import { BarChart, PieChart, RadialBarChart, SimpleLineChart } from '.';
import React from 'react';

type ChartRequestDialogProps = {
  open: boolean;
  onClose: () => void;
  isPending: boolean;
  chartData: any | null;
  control: any;
  onGenerate: () => void;
};

const RenderContent = (chartType: string, data: any): React.ReactNode => {
  switch (chartType) {
    case 'bar_chart':
      return (
        <BarChart
          xAxisTitle={data.preview_data.xAxisTitle}
          yAxisTitle={data.preview_data.yAxisTitle}
          categories={data.preview_data.categories}
          data={data.preview_data.data}
          height={400}
        />
      );
    case 'line_chart':
      return (
        <SimpleLineChart
          xAxisTitle={data.preview_data.xAxisTitle}
          yAxisTitle={data.preview_data.yAxisTitle}
          data={data.preview_data.data}
          height={400}
        />
      );
    case 'pie_chart':
      return (
        <PieChart
          data={[{ data: data.preview_data.data }]}
          labels={data.preview_data.labels}
          height={400}
        />
      );
  }
  return <Box />;
};

const ChartRequestDialog: React.FC<ChartRequestDialogProps> = ({
  open,
  onClose,
  isPending,
  chartData,
  control,
  onGenerate,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl" fullWidth>
      <Stack direction="column" alignItems="start" spacing={2} justifyContent="space-between" p={2}>
        <Typography variant="h6">نمودار جدید</Typography>
        <Divider variant="fullWidth" sx={{ width: '100%', mx: 2 }} />
        <Stack direction="row" alignItems="start" width={'100%'} spacing={2} justifyContent="space-between">
          <TextfieldComponent
            sx={{ width: '100%' }}
            control={control}
            controllerName="subject"
            placeholder="توضیح دهید که چه نموداری می‌خواهید بسازید ..."
            label="توضیح دهید که چه نموداری می‌خواهید بسازید ..."
          />
          <LoadingButton
            variant="contained"
            sx={{ height: 51, width: '20%' }}
            disabled={isPending}
            loading={isPending}
            onClick={onGenerate}
          >
            تولید نمودار
          </LoadingButton>
        </Stack>

        {isPending ? (
          <CustomLoading />
        ) : (
          chartData && (
            <>
              <Divider variant="fullWidth" sx={{ width: '100%', mx: 2 }} />
              <Box sx={{ width: '100%' }}>
                <Typography variant="h6">نمودار</Typography>
                {RenderContent(chartData.chart_type, chartData)}
              </Box>
            </>
          )
        )}

        <Divider variant="fullWidth" sx={{ width: '100%', mx: 2 }} />
        <Stack direction="row" alignItems="center" width={'100%'} spacing={2} justifyContent="end">
          <Button variant="outlined" color="secondary" sx={{ height: 51, width: '17%' }} onClick={onClose}>
            انصراف
          </Button>
          <Button variant="contained" sx={{ height: 51, width: '17%' }} startIcon={<AddCircleIcon />}>
            افزودن به داشبرد
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default ChartRequestDialog;


