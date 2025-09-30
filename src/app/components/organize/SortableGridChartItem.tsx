import { Box, Grid, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { BarChart, PieChart, SimpleLineChart } from ".";
import { DeleteIcon } from "../../Iconify/DeleteIcon";
import { ChartPosition } from "../../../types/GeneralTypes/Common.type";

type SortableGridChartItemProps ={
  item: ChartPosition;
  isEditable: boolean;
  handleRemove?: (id: string) => void;
}

const RenderContent = ( data: any): React.ReactNode => {
  // console.log("data",data);
  
    switch (data.chart_type) {
      case 'bar_chart':
        console.log("bar_chart",data.data.data);
        return (
          <BarChart
            xAxisTitle={data.data.xAxisTitle}
            yAxisTitle={data.data.yAxisTitle}
            categories={data.data.categories}
            data={data.data.data}
            // height={400}
          />
        );
      case 'line_chart':
        console.log("line_chart",data.data.data);
        return (
          <SimpleLineChart
            xAxisTitle={data.data.xAxisTitle}
            yAxisTitle={data.data.yAxisTitle}
            data={data.data.data}
            // height={400}
          />
        );
      case 'pie_chart':
        console.log("pie_chart",data.data.data);
        return (
          <PieChart
            data={[{ data: [10, 20, 30, 40, 50] }]}
            labels={data.data.labels}
            // height={1000}
          />
        );
    }
    return <Box />;
  };


const SortableGridChartItem = ({ item, isEditable, handleRemove }: SortableGridChartItemProps) => {

  const theme = useTheme();
 
    const mdCols =  (item.chart_object?.chart_type === 'bar_chart' ? 12 : item.chart_object?.chart_type === 'line_chart' ? 12 : 6);
    const lgCols = mdCols;
    const xlCols = mdCols;
   
  
    return   (
      <Grid  item  xs={12} sm={12}  md={mdCols}  lg={lgCols}  xl={xlCols}>
        <Box sx={{ p: 2 , display: 'flex', flexDirection: 'column', gap: 2 ,backgroundColor: theme.palette.background.paper, borderRadius: 2, boxShadow: 1 }}>
         <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{item.chart_object?.title}</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            {isEditable && (
                <>
                  <IconButton aria-label="remove" color="error" onClick={()=>{handleRemove?.(item.chart_id)}}>
                    <DeleteIcon />
                  </IconButton>
                </>
              )
            }
          </Stack>
         </Stack>
         {RenderContent(item.chart_object)}
        </Box>
      </Grid>
    );
  };

export default SortableGridChartItem;