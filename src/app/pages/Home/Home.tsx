import { Box, Button, Grid, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { user_id } from '../../constants/userid';
import {  useConfirmAndAddChartToDashboard, useConfirmPendingChart, useDeleteChart, useGetAllCharts, useRequestChart } from '../../services/ApiRequests/Charts/query';
import { ConfirmAndAddChartToDashboardRequestType, DeleteChartRequestType, RequestChartType } from '../../../types/Charts/Charts.type';
import { useEffect, useState } from 'react';
import AppBarButtonCard from '../../components/organize/AppbarButtonCard';
import ChartRequestDialog from '../../components/organize/ChartRequestDialog';
import SortableGridChartItem from '../../components/organize/SortableGridChartItem';
import { SolarAddCircleLineDuotone } from '../../Iconify/SolarAddCircleLineDuotone';
import { SolarCheckCircleBoldDuotone } from '../../Iconify/SolarCheckCircleBoldDuotone';
import SortGridDialog from '../../components/organize/SortGridDialog';
import { useParams } from 'react-router-dom';
import SimpleDialog from '../../components/organize/SimpleDialog';
import { useGetDashboardById } from '../../services/ApiRequests/Dashboards/query';
import toast from 'react-hot-toast';

type GridItem = { id: string; title: string; content: any };

const Home = () => {
  const { id } = useParams();
  const { mutate: requestChart, isPending:isPendingRequestChart } = useRequestChart();
  const { mutate: confirmAndAddChartToDashboard, isPending: isAddingChartToDashboard } = useConfirmAndAddChartToDashboard();
  const { mutate: deleteChart, isPending: isDeletingChart } = useDeleteChart();
  const { data: DashboardDetailData, isLoading: isLoadingDashboardDetailData } = useGetDashboardById({ user_id: user_id, dashboard_id: id });
  const [chartData, setChartData] = useState<any>(null);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isEditable, setisEditable] = useState(false);
  const [isSortDialogOpen, setIsSortDialogOpen] = useState(false);
  const [currentPendingChartId, setCurrentPendingChartId] = useState<string | null>(null);
  const [showDeleteChartDialog, setShowDeleteChartDialog] = useState(false);
  const [deleteChartId, setDeleteChartId] = useState<string | null>(null);
  const [items, setItems] = useState<GridItem[]>([
    {
      id: '1',
      title: 'آیتم ۱',
      content: {
        pending_chart_id: 'f1bd2dcb-593c-4cd9-a29d-69e4f6fc214e',
        chart_type: 'line_chart',
        fields_mapping: {
          x: {
            column: 'تاریخ',
            label: 'تاریخ',
          },
          y: {
            column: 'مقدار',
            label: 'مقدار هیدراته داخلی',
          },
        },
        preview_data: {
          mainTitle: 'از امار مواد مصرفی مقدار هیدراته',
          xAxisTitle: 'تاریخ',
          yAxisTitle: 'مقدار هیدراته داخلی',
          data: [
            {
              name: 'Data',
              data: [
                {
                  x: 14040101000,
                  y: 31782.0,
                },
                {
                  x: 14040102000,
                  y: 33228.0,
                },
                {
                  x: 14040103000,
                  y: 30680.0,
                },
                {
                  x: 14040104000,
                  y: 15095.0,
                },
                {
                  x: 14040105000,
                  y: 39965.0,
                },
                {
                  x: 14040106000,
                  y: 18294.0,
                },
                {
                  x: 14040107000,
                  y: 33436.0,
                },
                {
                  x: 14040108000,
                  y: 16985.0,
                },
                {
                  x: 14040109000,
                  y: 36009.0,
                },
                {
                  x: 14040110000,
                  y: 15045.0,
                },
                {
                  x: 14040111000,
                  y: 30901.0,
                },
                {
                  x: 14040113000,
                  y: 15118.0,
                },
                {
                  x: 14040115000,
                  y: 33535.0,
                },
                {
                  x: 14040116000,
                  y: 29249.0,
                },
                {
                  x: 14040117000,
                  y: 32247.0,
                },
                {
                  x: 14040118000,
                  y: 20210.0,
                },
                {
                  x: 14040119000,
                  y: 26653.0,
                },
                {
                  x: 14040120000,
                  y: 20425.0,
                },
                {
                  x: 14040121000,
                  y: 22832.0,
                },
                {
                  x: 14040122000,
                  y: 31934.0,
                },
                {
                  x: 14040123000,
                  y: 21501.0,
                },
                {
                  x: 14040126000,
                  y: 22250.0,
                },
                {
                  x: 14040127000,
                  y: 39363.0,
                },
                {
                  x: 14040129000,
                  y: 15771.0,
                },
                {
                  x: 14040130000,
                  y: 18875.0,
                },
                {
                  x: 14040131000,
                  y: 38272.0,
                },
                {
                  x: 14040201000,
                  y: 26656.0,
                },
                {
                  x: 14040202000,
                  y: 35603.0,
                },
                {
                  x: 14040204000,
                  y: 34804.0,
                },
                {
                  x: 14040205000,
                  y: 18537.0,
                },
                {
                  x: 14040206000,
                  y: 33390.0,
                },
                {
                  x: 14040207000,
                  y: 26936.0,
                },
                {
                  x: 14040208000,
                  y: 32777.0,
                },
                {
                  x: 14040209000,
                  y: 25743.0,
                },
                {
                  x: 14040210000,
                  y: 16875.0,
                },
                {
                  x: 14040211000,
                  y: 31704.0,
                },
                {
                  x: 14040212000,
                  y: 19859.0,
                },
                {
                  x: 14040213000,
                  y: 25062.0,
                },
                {
                  x: 14040214000,
                  y: 25896.0,
                },
                {
                  x: 14040215000,
                  y: 24514.0,
                },
                {
                  x: 14040216000,
                  y: 28672.0,
                },
                {
                  x: 14040217000,
                  y: 25270.0,
                },
                {
                  x: 14040218000,
                  y: 15592.0,
                },
                {
                  x: 14040219000,
                  y: 19918.0,
                },
                {
                  x: 14040221000,
                  y: 32404.0,
                },
                {
                  x: 14040222000,
                  y: 28302.0,
                },
                {
                  x: 14040223000,
                  y: 37244.0,
                },
                {
                  x: 14040224000,
                  y: 33411.0,
                },
                {
                  x: 14040225000,
                  y: 24944.0,
                },
                {
                  x: 14040227000,
                  y: 22436.0,
                },
              ],
            },
          ],
        },
        iterations_used: 1,
        empty_result: false,
      },
    },
    {
      id: '3',
      title: 'آیتم 3',
      content: {
        pending_chart_id: 'c1644af7-c71a-4e9c-b33e-98f4abcb7cc9',
        chart_type: 'pie_chart',
        fields_mapping: {
          category: {
            column: 'عنوان',
            label: 'عنوان آزمایش',
          },
          value: {
            column: 'مجموع_مقادیر',
            label: 'مجموع مقادیر',
          },
        },
        preview_data: {
          mainTitle: 'مجموع مقادیر را به ازای هر',
          labels: ['Temp(in)', 'Temp(out)', 'Zn(out)', 'Acide', 'Co', 'Mn'],
          data: [85660.0, 92709.0, 76206.46, 305334.56, 4642.1, 362133.21],
        },
        iterations_used: 1,
        empty_result: false,
      },
    },
  ]);

  const methods = useForm({
    defaultValues: {
      subject: '',
    },
  });

  useEffect(() => {
    if (DashboardDetailData) {
      console.log(DashboardDetailData);
    }
  }, [DashboardDetailData]);

  const requestToCreateChart = () => {
    const dataToSend: RequestChartType = {
      user_id: user_id,
      natural_query: methods.getValues().subject,
      external_db_id: 6,
    };

    requestChart(dataToSend, {
      onSuccess: (data) => {
        setCurrentPendingChartId(data.pending_chart_id);
        setChartData(data);
      },
      onError: () => {
        toast.error('درخواست ایجاد نمودار با خطا مواجه شد');
      },
    });
  };

  const handleAddToDashboard = () => {
    const dataToSend: ConfirmAndAddChartToDashboardRequestType = {
      user_id: user_id,
      chart_id: currentPendingChartId,
      dashboard_id: id,
    };
    confirmAndAddChartToDashboard(dataToSend, {
      onSuccess: () => {
        toast.success('نمودار با موفقیت به داشبورد اضافه شد');
       setIsRequestOpen(false);
       setCurrentPendingChartId(null);
       setChartData(null);
      },
      onError: () => {
        toast.error('اضافه کردن نمودار به داشبورد با خطا مواجه شد');
        setIsRequestOpen(false);
      },
    });
  };
  
  const handleOpenDeleteChartDialog = (id: string) => {
    setShowDeleteChartDialog(true);
    setDeleteChartId(id);
  };

  const handleDeleteChart = (id: string) => {
    const deleteData : DeleteChartRequestType = {
      chart_id: id,
      user_id: user_id,
    };
    deleteChart(deleteData, {
      onSuccess: () => {
        toast.success('نمودار با موفقیت حذف شد');
      },
      onError: (error) => {
        toast.error('حذف نمودار با خطا مواجه شد');
      },
    });
  }

  return (
    <>
      <FormProvider {...methods}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start' }}>
          <AppBarButtonCard
            elementGroups={[
              {
                position: 'left',
                elements: [
                  {
                    gridSize: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 },
                    element: (
                      <Stack direction="row" alignItems="center" spacing={2} justifyContent="end">
                        <Button sx={{ mt: 0, flex: 1,justifySelf: 'start' }} variant="outlined" onClick={() => setisEditable(!isEditable)} color={isEditable ? 'error' : 'secondary'}>
                          {isEditable ? 'لغو' : 'ویرایش'}{' '}
                        </Button>
                        <Button sx={{ mt: 0, flex: 1.5 }} variant="outlined" color="secondary" disabled={items.length === 0|| isEditable} onClick={() => setIsSortDialogOpen(true)}>
                          مرتب‌سازی در نمای کلی
                        </Button>
                        <Button sx={{ mt: 0, flex: 1.5, justifySelf: 'start' }} variant="contained" color={isEditable ? 'success' : 'primary'}
                          startIcon={isEditable ? <SolarCheckCircleBoldDuotone /> : <SolarAddCircleLineDuotone />}
                          onClick={() => {
                            if (isEditable) {
                              setisEditable(false);
                            } else {
                              setIsRequestOpen(true);
                            }
                          }}
                        >
                          {isEditable ? 'تایید' : 'نمودار جدید'}{' '}
                        </Button>
                      </Stack>
                    ),
                  },
                ],
              },
            ]}
          />
              <Grid container spacing={2} mt={2}>
                {DashboardDetailData.chart_positions.map((item) => (
                    <SortableGridChartItem key={item.position} item={item} isEditable={isEditable} handleRemove={handleOpenDeleteChartDialog} />
                ))}
              </Grid>


          <ChartRequestDialog
            onAddToDashboard={handleAddToDashboard}
            isAddingChartToDashboard={isAddingChartToDashboard}
            open={isRequestOpen}
            onClose={() => setIsRequestOpen(false)}
            isPending={isPendingRequestChart || isAddingChartToDashboard}
            chartData={chartData}
            control={methods.control}
            onGenerate={() => requestToCreateChart()}
          />
          <SimpleDialog
          showDialog={showDeleteChartDialog}
          setShowDialog={setShowDeleteChartDialog}
          buttonOnclick={() => handleDeleteChart(deleteChartId)}
          buttonLoading={isDeletingChart}
          dialogContentText='آیا از حذف نمودار اطمینان دارید ؟'
          dialogTitle='حذف نمودار'
          mainButtonTitle='حذف'
          />
          <SortGridDialog
            open={isSortDialogOpen}
            items={items.map(({ id, title, content }) => ({ id, title, chart_type: content?.chart_type, preview: content?.preview_data }))}
            onClose={() => setIsSortDialogOpen(false)}
            onApply={(orderedIds) => {
              setItems((prev) => {
                const map = new Map(prev.map((it) => [it.id, it] as const));
                const next = orderedIds.map((id) => map.get(id)!).filter(Boolean);
                // Keep any items not present (safety)
                const remaining = prev.filter((it) => !orderedIds.includes(it.id));
                return [...next, ...remaining];
              });
              setIsSortDialogOpen(false);
            }}
          />
        </Box>
      </FormProvider>
    </>
  );
};

export default Home;
