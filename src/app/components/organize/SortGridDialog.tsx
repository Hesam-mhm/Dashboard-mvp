import React, { useMemo, useState } from 'react';
import { AppBar, Box, Button, Dialog, IconButton, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSortingStrategy, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { BarChart, PieChart, SimpleLineChart } from '.';
import { LoadingButton } from '@mui/lab';

type SortItem = {
  id: string;
  title: string;
  chart_type?: 'bar_chart' | 'line_chart' | 'pie_chart';
  preview?: any;
};

type SortGridDialogProps = {
  open: boolean;
  items: SortItem[];
  isSorting: boolean;
  onClose: () => void;
  onApply: (orderedIds: string[]) => void;
};

export default function SortGridDialog({ open, items, onClose, onApply, isSorting }: SortGridDialogProps) {
  const [localItems, setLocalItems] = useState<SortItem[]>(items);

  React.useEffect(() => {
    setLocalItems(items);
   
  }, [items]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = localItems.findIndex((i) => i.id === String(active.id));
    const newIndex = localItems.findIndex((i) => i.id === String(over.id));
    setLocalItems((prev) => arrayMove(prev, oldIndex, newIndex));
  };

  const orderedIds = useMemo(() => localItems.map((i) => i.id), [localItems]);

  return (
    <Dialog  open={open} onClose={onClose}>
      <AppBar sx={{ position: 'sticky',backgroundColor: 'background.paper' }} color="default" elevation={1}>
        <Toolbar>
          <IconButton edge="start" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            مرتب‌سازی نمودارها (نمای کلی)
          </Typography>
          <LoadingButton loading={isSorting} color="primary" sx={{ height: '40px' }} variant="contained" onClick={() => onApply(orderedIds)}>
            اعمال ترتیب
          </LoadingButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 2 , maxWidth:700}}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          برای جابجایی، آیتم‌ها را بکشید و رها کنید. برای دید بهتر، اندازه کاشی‌ها کوچک شده است.
        </Typography>
        <Box
          sx={{
            width: '100%',
            overflow: 'auto'
            ,height: '700px'
          }}
        >
          <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <SortableContext items={localItems.map((i) => i.id)} strategy={rectSortingStrategy}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
                  gap: 2,
               
                }}
              >
                {localItems.map((item) => (
                  <SortTile key={item.id} id={item.id} title={item.title} chart_type={item.chart_type} preview={item.preview} />
                ))}
              </Box>
            </SortableContext>
          </DndContext>
        </Box>
      </Box>
    </Dialog>
  );
}

import { useSortable } from '@dnd-kit/sortable';

function SortTile({ id, title, chart_type, preview }: { id: string; title: string; chart_type?: 'bar_chart' | 'line_chart' | 'pie_chart'; preview?: any }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  } as React.CSSProperties;
  const spanCols = chart_type === 'pie_chart' ? 6 : 12;
  const miniHeight =  140;

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      sx={{
        userSelect: 'none',
        cursor: 'grab',
        p: 1.5,
        height: miniHeight,
        borderRadius: 2,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'stretch',
        textAlign: 'center',
        fontSize: 14,
        boxShadow: 1,
        gridColumn: `span ${spanCols}`,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Typography variant="body2" sx={{ px: 2, mb: 0.5}} noWrap>
          {title}
        </Typography>
        <Box sx={{ flex: 1 }}>
          {chart_type === 'line_chart' ? (
            <SimpleLineChart
              xAxisTitle={preview?.xAxisTitle}
              yAxisTitle={preview?.yAxisTitle}
              data={preview?.data}
              height={miniHeight -40}
              options={
                {
                tooltip: {
                  enabled: false,
                },
                        
                dataLabels: {
                  enabled: false,
                },
                 xaxis: {
                  labels: {
                    show: false,
                  },
                 },
                 yaxis: {
                  labels: {
                    show: false,
                  },
                 },
                 chart:{
                  toolbar:{
                    show: false,
                  }
                 },
                legend: {
                  show: false,
                },
                title: {
                  style: {
                    fontSize: '0px',
                  },
                },
              }}
            />
          ) : chart_type === 'pie_chart' ? (
            <PieChart
              data={[{ data: preview?.data }]}
              labels={preview?.labels}
              height={miniHeight - 40}
              options={{
                tooltip: {
                  enabled: false,
                },
                dataLabels: {
                  enabled: false,
                },
                 xaxis: {
                  labels: {
                    show: false,
                  },
                 },
                 yaxis: {
                  labels: {
                    show: false,
                  },
                 },
                 chart:{
                  toolbar:{
                    show: false,
                  }
                 },
                legend: {
                  show: false,
                },
              }}
            />
          ) : chart_type === 'bar_chart'  ? (
            <BarChart
              xAxisTitle={preview?.xAxisTitle}
              yAxisTitle={preview?.yAxisTitle}
              categories={preview?.categories}
              data={preview?.data}
              height={miniHeight - 40}
              options={{
                tooltip: {
                  enabled: false,
                },
                dataLabels: {
                  enabled: false,
                },
                 xaxis: {
                  labels: {
                    show: false,
                  },
                 },
                 yaxis: {
                  labels: {
                    show: false,
                  },
                 },
                 chart:{
                  toolbar:{
                    show: false,
                  }
                 },
                legend: {
                  show: false,
                },
              }}
            />
          ) : (
            <Typography variant="caption" color="text.secondary">پیش‌نمایش در دسترس نیست</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}


