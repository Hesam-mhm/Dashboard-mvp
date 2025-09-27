import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { user_id } from '../../constants/userid';
import { useRequestChart } from '../../services/ApiRequests/Charts/query';
import { RequestChartType } from '../../../types/RequestChart/RequestChart';
import { useState } from 'react';
import AppBarButtonCard from '../../components/organize/AppbarButtonCard';
import { SortIcon } from '../../Iconify/SortIcon';
import ChartRequestDialog from '../../components/organize/ChartRequestDialog';
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy, arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import SortableGridChartItem from '../../components/organize/SortableGridChartItem';
import { SolarCloseCircleLineDuotone } from '../../Iconify/SolarCloseCircleLineDuotone';
import { SolarAddCircleLineDuotone } from '../../Iconify/SolarAddCircleLineDuotone';
import { SolarCheckCircleBoldDuotone } from '../../Iconify/SolarCheckCircleBoldDuotone';
import SortGridDialog from '../../components/organize/SortGridDialog';

// Dialog content moved to reusable component ChartRequestDialog
// const props: Partial<SortableContextProps> = {
//   adjustScale: true,
//   Container: (props: any) => <GridContainer {...props} columns={5} />,
//   strategy: rectSortingStrategy,
//   wrapperStyle: () => ({
//     width: 140,
//     height: 140,
//   }),
// };

type GridItem = { id: string; title: string; content: any };


export const Home = () => {
  const { mutate: requestChart, isPending, error } = useRequestChart();
  const [chartData, setChartData] = useState<any>(null);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isSortable, setIsSortable] = useState(false);
  const [isSortDialogOpen, setIsSortDialogOpen] = useState(false);
  const [items, setItems] = useState<GridItem[]>([
    { id: '1', title: 'آیتم ۱', content:{
      "pending_chart_id": "f1bd2dcb-593c-4cd9-a29d-69e4f6fc214e",
      "chart_type": "line_chart",
      "fields_mapping": {
          "x": {
              "column": "تاریخ",
              "label": "تاریخ"
          },
          "y": {
              "column": "مقدار",
              "label": "مقدار هیدراته داخلی"
          }
      },
      "preview_data": {
          "mainTitle": "از امار مواد مصرفی مقدار هیدراته",
          "xAxisTitle": "تاریخ",
          "yAxisTitle": "مقدار هیدراته داخلی",
          "data": [
              {
                  "name": "Data",
                  "data": [
                      {
                          "x": 14040101000,
                          "y": 31782.0
                      },
                      {
                          "x": 14040102000,
                          "y": 33228.0
                      },
                      {
                          "x": 14040103000,
                          "y": 30680.0
                      },
                      {
                          "x": 14040104000,
                          "y": 15095.0
                      },
                      {
                          "x": 14040105000,
                          "y": 39965.0
                      },
                      {
                          "x": 14040106000,
                          "y": 18294.0
                      },
                      {
                          "x": 14040107000,
                          "y": 33436.0
                      },
                      {
                          "x": 14040108000,
                          "y": 16985.0
                      },
                      {
                          "x": 14040109000,
                          "y": 36009.0
                      },
                      {
                          "x": 14040110000,
                          "y": 15045.0
                      },
                      {
                          "x": 14040111000,
                          "y": 30901.0
                      },
                      {
                          "x": 14040113000,
                          "y": 15118.0
                      },
                      {
                          "x": 14040115000,
                          "y": 33535.0
                      },
                      {
                          "x": 14040116000,
                          "y": 29249.0
                      },
                      {
                          "x": 14040117000,
                          "y": 32247.0
                      },
                      {
                          "x": 14040118000,
                          "y": 20210.0
                      },
                      {
                          "x": 14040119000,
                          "y": 26653.0
                      },
                      {
                          "x": 14040120000,
                          "y": 20425.0
                      },
                      {
                          "x": 14040121000,
                          "y": 22832.0
                      },
                      {
                          "x": 14040122000,
                          "y": 31934.0
                      },
                      {
                          "x": 14040123000,
                          "y": 21501.0
                      },
                      {
                          "x": 14040126000,
                          "y": 22250.0
                      },
                      {
                          "x": 14040127000,
                          "y": 39363.0
                      },
                      {
                          "x": 14040129000,
                          "y": 15771.0
                      },
                      {
                          "x": 14040130000,
                          "y": 18875.0
                      },
                      {
                          "x": 14040131000,
                          "y": 38272.0
                      },
                      {
                          "x": 14040201000,
                          "y": 26656.0
                      },
                      {
                          "x": 14040202000,
                          "y": 35603.0
                      },
                      {
                          "x": 14040204000,
                          "y": 34804.0
                      },
                      {
                          "x": 14040205000,
                          "y": 18537.0
                      },
                      {
                          "x": 14040206000,
                          "y": 33390.0
                      },
                      {
                          "x": 14040207000,
                          "y": 26936.0
                      },
                      {
                          "x": 14040208000,
                          "y": 32777.0
                      },
                      {
                          "x": 14040209000,
                          "y": 25743.0
                      },
                      {
                          "x": 14040210000,
                          "y": 16875.0
                      },
                      {
                          "x": 14040211000,
                          "y": 31704.0
                      },
                      {
                          "x": 14040212000,
                          "y": 19859.0
                      },
                      {
                          "x": 14040213000,
                          "y": 25062.0
                      },
                      {
                          "x": 14040214000,
                          "y": 25896.0
                      },
                      {
                          "x": 14040215000,
                          "y": 24514.0
                      },
                      {
                          "x": 14040216000,
                          "y": 28672.0
                      },
                      {
                          "x": 14040217000,
                          "y": 25270.0
                      },
                      {
                          "x": 14040218000,
                          "y": 15592.0
                      },
                      {
                          "x": 14040219000,
                          "y": 19918.0
                      },
                      {
                          "x": 14040221000,
                          "y": 32404.0
                      },
                      {
                          "x": 14040222000,
                          "y": 28302.0
                      },
                      {
                          "x": 14040223000,
                          "y": 37244.0
                      },
                      {
                          "x": 14040224000,
                          "y": 33411.0
                      },
                      {
                          "x": 14040225000,
                          "y": 24944.0
                      },
                      {
                          "x": 14040227000,
                          "y": 22436.0
                      }
                  ]
              }
          ]
      },
      "iterations_used": 1,
      "empty_result": false
  }},
    { id: '2', title: 'آیتم 2', content:{
      "pending_chart_id": "f1bd2dcb-593c-4cd9-a29d-69e4f6fc214e",
      "chart_type": "line_chart",
      "fields_mapping": {
          "x": {
              "column": "تاریخ",
              "label": "تاریخ"
          },
          "y": {
              "column": "مقدار",
              "label": "مقدار هیدراته داخلی"
          }
      },
      "preview_data": {
          "mainTitle": "از امار مواد مصرفی مقدار هیدراته",
          "xAxisTitle": "تاریخ",
          "yAxisTitle": "مقدار هیدراته داخلی",
          "data": [
              {
                  "name": "Data",
                  "data": [
                      {
                          "x": 14040101000,
                          "y": 31782.0
                      },
                      {
                          "x": 14040102000,
                          "y": 33228.0
                      },
                      {
                          "x": 14040103000,
                          "y": 30680.0
                      },
                      {
                          "x": 14040104000,
                          "y": 15095.0
                      },
                      {
                          "x": 14040105000,
                          "y": 39965.0
                      },
                      {
                          "x": 14040106000,
                          "y": 18294.0
                      },
                      {
                          "x": 14040107000,
                          "y": 33436.0
                      },
                      {
                          "x": 14040108000,
                          "y": 16985.0
                      },
                      {
                          "x": 14040109000,
                          "y": 36009.0
                      },
                      {
                          "x": 14040110000,
                          "y": 15045.0
                      },
                      {
                          "x": 14040111000,
                          "y": 30901.0
                      },
                      {
                          "x": 14040113000,
                          "y": 15118.0
                      },
                      {
                          "x": 14040115000,
                          "y": 33535.0
                      },
                      {
                          "x": 14040116000,
                          "y": 29249.0
                      },
                      {
                          "x": 14040117000,
                          "y": 32247.0
                      },
                      {
                          "x": 14040118000,
                          "y": 20210.0
                      },
                      {
                          "x": 14040119000,
                          "y": 26653.0
                      },
                      {
                          "x": 14040120000,
                          "y": 20425.0
                      },
                      {
                          "x": 14040121000,
                          "y": 22832.0
                      },
                      {
                          "x": 14040122000,
                          "y": 31934.0
                      },
                      {
                          "x": 14040123000,
                          "y": 21501.0
                      },
                      {
                          "x": 14040126000,
                          "y": 22250.0
                      },
                      {
                          "x": 14040127000,
                          "y": 39363.0
                      },
                      {
                          "x": 14040129000,
                          "y": 15771.0
                      },
                      {
                          "x": 14040130000,
                          "y": 18875.0
                      },
                      {
                          "x": 14040131000,
                          "y": 38272.0
                      },
                      {
                          "x": 14040201000,
                          "y": 26656.0
                      },
                      {
                          "x": 14040202000,
                          "y": 35603.0
                      },
                      {
                          "x": 14040204000,
                          "y": 34804.0
                      },
                      {
                          "x": 14040205000,
                          "y": 18537.0
                      },
                      {
                          "x": 14040206000,
                          "y": 33390.0
                      },
                      {
                          "x": 14040207000,
                          "y": 26936.0
                      },
                      {
                          "x": 14040208000,
                          "y": 32777.0
                      },
                      {
                          "x": 14040209000,
                          "y": 25743.0
                      },
                      {
                          "x": 14040210000,
                          "y": 16875.0
                      },
                      {
                          "x": 14040211000,
                          "y": 31704.0
                      },
                      {
                          "x": 14040212000,
                          "y": 19859.0
                      },
                      {
                          "x": 14040213000,
                          "y": 25062.0
                      },
                      {
                          "x": 14040214000,
                          "y": 25896.0
                      },
                      {
                          "x": 14040215000,
                          "y": 24514.0
                      },
                      {
                          "x": 14040216000,
                          "y": 28672.0
                      },
                      {
                          "x": 14040217000,
                          "y": 25270.0
                      },
                      {
                          "x": 14040218000,
                          "y": 15592.0
                      },
                      {
                          "x": 14040219000,
                          "y": 19918.0
                      },
                      {
                          "x": 14040221000,
                          "y": 32404.0
                      },
                      {
                          "x": 14040222000,
                          "y": 28302.0
                      },
                      {
                          "x": 14040223000,
                          "y": 37244.0
                      },
                      {
                          "x": 14040224000,
                          "y": 33411.0
                      },
                      {
                          "x": 14040225000,
                          "y": 24944.0
                      },
                      {
                          "x": 14040227000,
                          "y": 22436.0
                      }
                  ]
              }
          ]
      },
      "iterations_used": 1,
      "empty_result": false
  }},
    { id: '3', title: 'آیتم 3', content:{
      "pending_chart_id": "c1644af7-c71a-4e9c-b33e-98f4abcb7cc9",
      "chart_type": "pie_chart",
      "fields_mapping": {
          "category": {
              "column": "عنوان",
              "label": "عنوان آزمایش"
          },
          "value": {
              "column": "مجموع_مقادیر",
              "label": "مجموع مقادیر"
          }
      },
      "preview_data": {
          "mainTitle": "مجموع مقادیر را به ازای هر",
          "labels": [
              "Temp(in)",
              "Temp(out)",
              "Zn(out)",
              "Acide",
              "Co",
              "Mn"
          ],
          "data": [
              85660.0,
              92709.0,
              76206.46,
              305334.56,
              4642.1,
              362133.21
          ]
      },
      "iterations_used": 1,
      "empty_result": false
  }},

    { id: '4', title: 'آیتم 4', content:{
      "pending_chart_id": "c1644af7-c71a-4e9c-b33e-98f4abcb7cc9",
      "chart_type": "pie_chart",
      "fields_mapping": {
          "category": {
              "column": "عنوان",
              "label": "عنوان آزمایش"
          },
          "value": {
              "column": "مجموع_مقادیر",
              "label": "مجموع مقادیر"
          }
      },
      "preview_data": {
          "mainTitle": "مجموع مقادیر را به ازای هر",
          "labels": [
              "Temp(in)",
              "Temp(out)",
              "Zn(out)",
              "Acide",
              "Co",
              "Mn"
          ],
          "data": [
              85660.0,
              92709.0,
              76206.46,
              305334.56,
              4642.1,
              362133.21
          ]
      },
      "iterations_used": 1,
      "empty_result": false
  }},

  ]);

  const [activeId, setActiveId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );
  const methods = useForm({
    defaultValues: {
      subject: '',
    },
  });


  const requestToCreateChart = (data: any) => {

    const dataToSend: RequestChartType = {
      user_id: user_id,
      natural_query: data.subject,
      external_db_id: 6,
    };

    requestChart(dataToSend, {
      onSuccess: (data) => {
        setChartData(data);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  const handleDragStart = (event: any) => {
    setActiveId(String(event.active?.id ?? ''));
  };

  const handleDragOver = (event: any) => {
    setOverId(event.over ? String(event.over.id) : null);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = items.findIndex((i) => i.id === String(active.id));
    const newIndex = items.findIndex((i) => i.id === String(over.id));
    setItems((prev) => arrayMove(prev, oldIndex, newIndex));
    setActiveId(null);
    setOverId(null);
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  
  return (
    <>
      <FormProvider {...methods}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start' }}>
          <AppBarButtonCard
            elementGroups={[
              {position: 'left', elements: [
                  {gridSize: {xs: 12,sm: 12,md: 12,lg: 12,xl: 12,},
                    element: (
                      <Stack direction="row" alignItems="center" spacing={2} justifyContent="end">
                        <Button   sx={{ mt: 0, justifySelf: 'start' }} variant="outlined" 
                        onClick={() => setIsSortable(!isSortable)}
                        color={isSortable ? 'error' : 'secondary'} startIcon={isSortable ?<SolarCloseCircleLineDuotone   /> :  <SortIcon />}>
                          {isSortable ? 'لغو' : 'مرتب کردن'} </Button>
                          <Button sx={{ mt: 0 }} variant="outlined" color="secondary" onClick={() => setIsSortDialogOpen(true)}>
                           مرتب‌سازی در نمای کلی
                         </Button>
                        <Button  sx={{ mt: 0, justifySelf: 'start' }} variant="contained" color={isSortable ? 'success' : 'primary'} 
                        startIcon={isSortable ? <SolarCheckCircleBoldDuotone /> : <SolarAddCircleLineDuotone />}
                        onClick={() => {
                          if (isSortable) {
                            setIsSortable(false);
                            
                          } else {
                            setIsRequestOpen(true);
                          }
                        }}
                        >{isSortable ? 'تایید' : 'نمودار جدید'} </Button>
                      </Stack>
                    ),
                  },
                ],
              },
            ]}
          />
            <DndContext sensors={sensors} onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
              <SortableContext items={items.map((i) => i.id)} strategy={rectSortingStrategy}>
                <Grid container spacing={2} mt={2}>
                  {items.map((item) => (
                    <>
                      {overId === item.id && activeId && (
                        <Grid item p={4}
                          xs={12} sm={12} 
                          md={item.content.chart_type === 'bar_chart' ? 12 : item.content.chart_type === 'line_chart' ? 12 : 6} 
                          lg={item.content.chart_type === 'bar_chart' ? 12 : item.content.chart_type === 'line_chart' ? 12 : 6} 
                          xl={item.content.chart_type === 'bar_chart' ? 12 : item.content.chart_type === 'line_chart' ? 12 : 6}
                          sx={{
                            border: '2px dashed',
                            borderColor: 'divider',
                            borderRadius: 2,
                            minHeight: 380,
                            bgcolor: 'action.hover' }}>
                        </Grid>
                      )}
                      <SortableGridChartItem key={item.id} item={item} isSortable={isSortable} onRemove={handleRemoveItem} />
                    </>
                  ))}
                </Grid>
              </SortableContext>
            </DndContext>
            
          <ChartRequestDialog
            open={isRequestOpen}
            onClose={() => setIsRequestOpen(false)}
            isPending={isPending}
            chartData={chartData}
            control={methods.control}
            onGenerate={() => requestToCreateChart(methods.getValues())}
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
