import { useSortable } from "@dnd-kit/sortable";
import { Box, Grid, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { CSS } from "@dnd-kit/utilities";
import { BarChart, PieChart, SimpleLineChart } from ".";
import { DeleteIcon } from "../../Iconify/DeleteIcon";
import { SortIcon } from "../../Iconify/SortIcon";

type SortableGridChartItemProps ={
  item: any;
  isSortable: boolean;
  onRemove?: (id: string) => void;
}

const RenderContent = (chartType: string, data: any, height: number): React.ReactNode => {
    switch (chartType) {
      case 'bar_chart':
        return (
          <BarChart
            xAxisTitle={data.preview_data.xAxisTitle}
            yAxisTitle={data.preview_data.yAxisTitle}
            categories={data.preview_data.categories}
            data={data.preview_data.data}
            height={height}
          />
        );
      case 'line_chart':
        return (
          <SimpleLineChart
            xAxisTitle={data.preview_data.xAxisTitle}
            yAxisTitle={data.preview_data.yAxisTitle}
            data={data.preview_data.data}
            height={height}
          />
        );
      case 'pie_chart':
        return (
          <PieChart
            data={[{ data: data.preview_data.data }]}
            labels={data.preview_data.labels}
            height={height}
          />
        );
    }
    return <Box />;
  };


const SortableGridChartItem = ({ item, isSortable, onRemove }: SortableGridChartItemProps) => {

  const theme = useTheme();
    const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition } = useSortable({ id: item.id });
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    } as React.CSSProperties;
    const isLarge = item?.size === 'large';
    const mdCols = isLarge ? 12 : (item.content.chart_type === 'bar_chart' ? 12 : item.content.chart_type === 'line_chart' ? 12 : 6);
    const lgCols = mdCols;
    const xlCols = mdCols;
    const contentHeight = isLarge ? 560 : 400;
  
    return (
      <Grid 
      item 
      xs={12} 
      sm={12}  
      md={mdCols}  
      lg={lgCols}  
      xl={xlCols} 
      ref={setNodeRef}
      style={style}
      >
        <Box sx={{ p: 2 , display: 'flex', flexDirection: 'column', gap: 2 ,backgroundColor: theme.palette.background.paper, borderRadius: 2, boxShadow: 1 }}>
         <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{item.title}</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            {
              isSortable && (
                <>
                  <IconButton aria-label="remove" color="error" onClick={() => onRemove && onRemove(String(item.id))}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton ref={setActivatorNodeRef} {...listeners} {...attributes} sx={{ cursor: 'grab' }} aria-label="drag">
                    <SortIcon />
                  </IconButton>
                </>
              )
            }
          </Stack>
         </Stack>
         {RenderContent(item.content.chart_type, item.content, contentHeight)}
        </Box>
      
      </Grid>
    );
  };

export default SortableGridChartItem;