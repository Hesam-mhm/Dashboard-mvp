/**
 * AppBarButtonCard Component
   <AppBarButtonCard
        elementGroups={[
          {
            position: 'right',
            elements: [
              {

                element: <Stack direction="row" alignItems="center" spacing={2}>
                <RouteButton arrowRight />
                <Typography variant="h6" fontWeight={800} > بازگشت</Typography>
              </Stack>
              }
            ],
      
            
          },
          {
            position : 'left',
            elements :[
              {
                element: <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
             <Typography variant="h6" fontWeight={800} > بازگشت</Typography>
              <RouteButton arrowRight />
              
            </Stack>
              }
            ]
          }
        ]}
      />
 * ```
 */

import { Button, Card, CardContent, Grid, Box, CircularProgress, useTheme, SxProps, Theme, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

type ElementConfig = {
  element: ReactNode;
  gridSize?: {
    xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  };
};

type ElementGroup = {
  elements: ElementConfig[];
  position: 'left' | 'right';
};

type AppBarButtonCardProp = {
  elementGroups?: ElementGroup[];
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  sx?: SxProps<Theme>;
};

const AppBarButtonCard = ({ elementGroups, justifyContent: propJustifyContent = 'space-between', sx = {} }: AppBarButtonCardProp) => {
  const mappedElementGroups =
    elementGroups?.map((group) => ({
      ...group,
      position: group.position === 'left' ? 'right' : 'left',
    })) || [];

  const leftElements = mappedElementGroups.filter((group) => group.position === 'left');
  const rightElements = mappedElementGroups.filter((group) => group.position === 'right');

  const justifyContent = rightElements.length === 0 ? 'start' : leftElements.length === 0 ? 'end' : propJustifyContent;
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: '100%',
        bgcolor: (theme) => theme.palette.background.paper,
        borderRadius: '12px',
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 104,
        boxSizing: 'border-box',
        ...sx,
        p: 2,
      }}
    >
      <Grid
        width={'100%'}
        container
        sx={{
          justifyContent,
          alignItems: 'center',
        }}
      >
        {/* Right Elements */}
        {leftElements.length > 0 && (
          <Grid
            item
            container
            spacing={2}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            order={{ xs: 2, sm: 2, md: 2, lg: 1, xl: 1 }}
            justifyContent={'flex-start'}
          >
            {leftElements.flatMap((group) =>
              group.elements.map((element, elementIndex) => (
                <Grid
                  item
                  xs={element.gridSize?.xs || 12}
                  sm={element.gridSize?.sm || element.gridSize?.xs || 4}
                  md={element.gridSize?.md || element.gridSize?.sm || element.gridSize?.xs || 4}
                  lg={element.gridSize?.lg || element.gridSize?.md || element.gridSize?.sm || element.gridSize?.xs || 4}
                  xl={element.gridSize?.xl || element.gridSize?.lg || element.gridSize?.md || element.gridSize?.sm || element.gridSize?.xs || 3}
                  key={`left-element-${elementIndex}`}
                >
                  {element.element}
                </Grid>
              )),
            )}
          </Grid>
        )}

        {/* Left Elements */}
        {rightElements.length > 0 && (
          <Grid
            item
            container
            spacing={2}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            order={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
            // flexDirection={'row-reverse'}

            justifyContent={'end'}
          >
            {rightElements.flatMap((group) =>
              group.elements.map((element, elementIndex) => (
                <Grid
                  item
                  xs={element.gridSize?.xs || 12}
                  sm={element.gridSize?.sm || element.gridSize?.xs || 4}
                  md={element.gridSize?.md || element.gridSize?.sm || element.gridSize?.xs || 4}
                  lg={element.gridSize?.lg || element.gridSize?.md || element.gridSize?.sm || element.gridSize?.xs || 4}
                  xl={element.gridSize?.xl || element.gridSize?.lg || element.gridSize?.md || element.gridSize?.sm || element.gridSize?.xs || 3}
                  key={`right-element-${elementIndex}`}
                >
                  {element.element}
                </Grid>
              )),
            )}
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

export default AppBarButtonCard;
