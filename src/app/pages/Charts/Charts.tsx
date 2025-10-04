import { Box, useTheme } from '@mui/system';
import { createColumns } from '../../components/molecule/ColumnTemplate';
import { useNavigate } from 'react-router-dom';
import DataGridComponent from '../../components/organize/DataGridComponent';
import { DataGridIdConstants } from '../../constants/DataGridIdFactory';
import { SolarAddCircleLineDuotone } from '../../Iconify/SolarAddCircleLineDuotone';
import { Avatar, Stack, Typography } from '@mui/material';
import StatusBox from '../../components/molecule/StatusBox';
import { StatusBoxType } from '../../../types/GeneralTypes/StatusBox.type';
import { useEffect, useState } from 'react';
import { usePagination } from '../../context/PaginationContext';
import CustomLoading from '../../components/atome/CustomLoading';
import {ChartTypeMapper} from '../../constants/ChartTypeMapper';
import DataGridOperationIconButton from '../../components/atome/DataGridOperationIconButton';
import { RouteMapper } from '../../routing/RouteMapper/RouteMapper';
import { useGetAllCharts } from '../../services/ApiRequests/Charts/query';
import { AllChartsQueryParamsType, AllChartsResponseType, ChartListItemType } from '../../../types/Charts/Charts.type';
import { user_id } from '../../constants/userid';


const chartTypeGenerator = (status: string): StatusBoxType => {
  switch (status) {
    case 'bar_chart':
      return {
        statusText: ChartTypeMapper.bar_chart,
        statusColor: 'primary',
      };
    case 'pie_chart':
      return {
        statusText: ChartTypeMapper.pie_chart,
        statusColor: 'primary',
      };
    case 'line_chart':
      return {
        statusText: ChartTypeMapper.line_chart,
        statusColor: 'primary',
      };

      default:
      return {
        statusText: '',
        statusColor: 'error',
      };
  }
};



const Charts = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Omit<AllChartsQueryParamsType, 'page' | 'page_size'>>({});
  const { getPaginationState } = usePagination();
  const gridState = getPaginationState(DataGridIdConstants.Chart.Charts(JSON.stringify(filter)));

  const {data: chartsList,isLoading: chartsListLoading,error: chartsListError,refetch} = useGetAllCharts({ user_id:user_id, limit: gridState.pageSize, offset: gridState.page });

  useEffect(() => {
    refetch();
  }, [gridState]);

  const columns = createColumns<ChartListItemType>([
    {
      field: 'Chart title',
      headerName: 'نام نمودار',
      align: 'left',
      renderCell: (params) => {
        return (
          <Stack direction={'row'} spacing={2} alignItems={'start'} justifyContent={'start'}>
             <Typography >
                {params?.row?.title}
             </Typography>
          </Stack>
        );
      },
    },
    {
      field: 'chart type',
      headerName: 'نوع نمودار',
      renderCell: (params) => {
        return <StatusBox status={chartTypeGenerator(params.row?.chart_type)} />;
      },
    },
    {
      field: 'operation',
      headerName: 'عملیات',
      renderCell: (params) => {
        return <DataGridOperationIconButton icon={ <></>}
        onClick={() => navigate(RouteMapper.EditChart.path.replace(':id', params.row?.id.toString()))} />
      },
    },
  ]);


  const theme = useTheme();
  return chartsListLoading ? (
    <CustomLoading />
  ) : chartsListError ? (
    <Typography variant="h6" color={theme.palette.error.main}>
      خطایی رخ داده است
    </Typography>
  ) : (
    <Box sx={{ height: '100%' }}>
        <DataGridComponent
          columns={columns}
          gridId={DataGridIdConstants.Chart.Charts(JSON.stringify(filter))}
          tableVarient={chartsList|| []}
          rowIdKey="id"
          headerMainTitle="لیست نمودارها "
          dataTotalNumber={chartsList.length || 0}
          withCustomButton={true}
          customButtonTitle='افزودن نمودار'
          withFilterButton={false}
          handleFilterClick={() => {}}
          customButtonIcon={<SolarAddCircleLineDuotone />}
          onPageModelChange={() => {
            refetch();
          }}
          showPagination={true}
        />
    {/* <AddFormulaToDashletDialog
        formula_Id={formulaIdToAddDashlet}
        isOpenDialog={openAddFormulaToDashletDialog}
        setShowDialog={setOpenAddFormulaToDashletDialog}
      /> */}
    </Box>
  );
};

export default Charts;
