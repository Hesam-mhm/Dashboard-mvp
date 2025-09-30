export const queryKeys = {

  dashboards: {
    allDashboards: ['allDashboards'],
    dashboardDetail: 'dashboardDetail',

  },
  charts: {
    getAllCharts: 'getAllCharts',
   
  },
};

export const mutationKeys = {
  charts: {
    generateChart: 'generateChart',
    confirmChart: 'confirmChart',
    updateChart: 'updateChart',
    deleteChart: 'deleteChart',
    confirmAndAddChartToDashboard: 'confirmAndAddChartToDashboard',
  },
  dashboards: {
    addChartsToDashboards: 'addChartsToDashboards',
    dashboardCreate: 'dashboardCreate',
    dashboardUpdate:  'dashboardUpdate',
    dashboardDelete: 'dashboardDelete',
  },
};
