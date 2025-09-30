const EndPoints = {
    DASHBOARD : {
        CREATE : "/dashboards/",
        getAllDashboards : "/dashboards/",
        getDashboardById : "/dashboards/{dashboard_id}/",
        updateDashboard : "/dashboards/{dashboard_id}/",
        deleteDashboard : "/dashboards/{dashboard_id}/",
        addChartToDashboard : "/dashboards/add-charts",
    },
    CHARTS : {
        getAllCharts : "/charts/",
        updateChart : "/charts/{chart_id}",
        deleteChart : "/charts/{chart_id}",
        generateChart : "/charts/generate-chart",
        confirmChart : "/charts/confirm-chart",
        confirmAndAddChartToDashboard : "/charts/preview-confirm-add-to-dashboard",
    }
    
}

export default EndPoints;