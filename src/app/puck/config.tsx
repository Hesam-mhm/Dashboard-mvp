import React from 'react';
import { Config } from '@measured/puck';
import { Grid, Paper, Typography } from '@mui/material';

type GridItem = { title: string; content: string };

export const puckConfig: Config = {
  components: {
    SortableGrid: {
      fields: {
        items: {
          type: 'array',
          arrayFields: {
            title: { type: 'text' },
            content: { type: 'text' },
          },
        },
        ascending: { type: 'checkbox', label: 'Ascending' },
      },
      defaultProps: {
        ascending: true,
        items: [
          { title: 'آیتم ۱', content: 'محتوای آیتم ۱' },
          { title: 'آیتم ۲', content: 'محتوای آیتم ۲' },
          { title: 'آیتم ۳', content: 'محتوای آیتم ۳' },
        ] as GridItem[],
      },
      render: (api: any) => {
        const items: GridItem[] = Array.isArray(api?.props?.items) ? api.props.items : [];
        const ascending: boolean = !!api?.props?.ascending;
        const sorted = [...items].sort((a, b) => a.title.localeCompare(b.title, 'fa'));
        const finalItems = ascending ? sorted : sorted.reverse();
        return (
          <Grid container spacing={2}>
            {finalItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography>{item.content}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        );
      },
    },
  },
};

export default puckConfig;


