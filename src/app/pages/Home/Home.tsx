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
import { useGetDashboardById, useUpdateDashboard } from '../../services/ApiRequests/Dashboards/query';
import toast from 'react-hot-toast';
import CustomLoading from '../../components/atome/CustomLoading';
import { UpdateDashboardRequestType } from '../../../types/Dashboard/CreateDashboard.type';


const Home = () => {
  const  id  = '1009df35-385f-48ed-ac7d-fbc6311c1929';
  const { mutate: requestChart, isPending:isPendingRequestChart, error } = useRequestChart();
  const { mutate: confirmAndAddChartToDashboard, isPending: isAddingChartToDashboard } = useConfirmAndAddChartToDashboard();
  const { mutate: deleteChart, isPending: isDeletingChart } = useDeleteChart();
  const { mutate: updateDashboard, isPending: isUpdatingDashboard } = useUpdateDashboard();
  const { data: DashboardDetailData, isLoading: isLoadingDashboardDetailData } = useGetDashboardById({ user_id: user_id, dashboard_id: id });
  const [chartData, setChartData] = useState<any>(null);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isEditable, setisEditable] = useState(false);
  const [isSortDialogOpen, setIsSortDialogOpen] = useState(false);
  const [currentPendingChartId, setCurrentPendingChartId] = useState<string | null>(null);
  const [showDeleteChartDialog, setShowDeleteChartDialog] = useState(false);
  const [deleteChartId, setDeleteChartId] = useState<string | null>(null);


  const methods = useForm({
    defaultValues: {
      subject: '',
    },
  });

  const requestToCreateChart = () => {
    const dataToSend: RequestChartType = {
      user_id: user_id,
      natural_query: methods.getValues().subject,
      external_db_id: 5,
    };

    requestChart(dataToSend, {
      onSuccess: (data) => {
        setCurrentPendingChartId(data.pending_chart_id);
        setChartData(data);
        methods.reset();
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
        setShowDeleteChartDialog(false);
        toast.success('نمودار با موفقیت حذف شد');
      },
      onError: (error) => {
        setShowDeleteChartDialog(false);
        toast.error('حذف نمودار با خطا مواجه شد');
      },
    });
  }

  const handleDashboardUpdate = (orderedIds: string[]) => {
   const dataToSend: UpdateDashboardRequestType = {
  
    dashboard_id: id,
    data: {
      user_id: user_id,
      chart_positions: orderedIds.map((id,index) => ({ chart_id: id, position: index })),
    },
   };
    updateDashboard(dataToSend, {
      onSuccess: () => {
        setIsSortDialogOpen(false);
        toast.success('داشبورد با موفقیت به روز شد');
        
      },
      onError: () => {
        toast.error('داشبورد با خطا مواجه شد');
        setIsSortDialogOpen(false);
      },
    });
  }

  return isLoadingDashboardDetailData ? 
  <CustomLoading />
  :(
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
                        <Button sx={{ mt: 0, flex: 1.5 }} variant="outlined" color="secondary" disabled={DashboardDetailData.chart_positions.length === 0|| isEditable} onClick={() => setIsSortDialogOpen(true)}>
                          مرتب‌سازی در نمای کلی
                        </Button>
                        <Button sx={{ mt: 0, flex: 1.5, justifySelf: 'start' }} variant="contained" color={isEditable ? 'success' : 'primary'}
                          startIcon={isEditable ? <SolarCheckCircleBoldDuotone /> : <SolarAddCircleLineDuotone />}
                          onClick={() => { if (isEditable) {  setisEditable(false) } else {  setIsRequestOpen(true) } }}
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
           {DashboardDetailData?.chart_positions?.map((item) => (<SortableGridChartItem key={item.position} item={item} isEditable={isEditable} handleRemove={handleOpenDeleteChartDialog} />))}
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
            items={DashboardDetailData.chart_positions.map(({ chart_id, chart_object }) => ({ id: chart_id, title: chart_object?.title, chart_type: chart_object?.chart_type as 'bar_chart' | 'line_chart' | 'pie_chart', preview: chart_object?.data }))}
            isSorting={isUpdatingDashboard}
            onClose={() => setIsSortDialogOpen(false)}
            onApply={(orderedIds) => {
              handleDashboardUpdate(orderedIds);
            }}
          /> 
        </Box>
      </FormProvider>
    </>
  );
};

export default Home;
