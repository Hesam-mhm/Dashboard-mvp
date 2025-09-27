// import { Box, Button, CircularProgress, Typography } from '@mui/material';
// import TextfieldComponent from '../../components/molecule/FormComponents/TextfieldComponent';
// import { useForm } from 'react-hook-form';
// import { user_id } from '../../constants/userid';
// import { useRequestChart } from '../../services/ApiRequests/Charts/query';
// import { RequestChartType } from '../../../types/RequestChart/RequestChart';
// import { useState } from 'react';
// import { BarChart, PieChart, RadialBarChart, SimpleLineChart } from '../../components/organize';
// import CustomLoading from '../../components/atome/CustomLoading';

// export const Home = () => {
//   const chartContainerStyle = {
//     marginBottom: '40px',
//     padding: '20px',
//     border: '1px solid #e0e0e0',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//   };

//   const titleStyle = {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//     color: '#333',
//   };
//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       subject: '',
//     },
//   });
//   const { mutate: requestChart, isPending, error } = useRequestChart();
//   const [chartData, setChartData] = useState<any>(null);
//   const onSubmit = (data: any) => {
//     const dataToSend: RequestChartType = {
//       user_id: user_id,
//       natural_query: data.subject,
//       external_db_id: 6,
//     };
//     requestChart(dataToSend, {
//       onSuccess: (data) => {
//         setChartData(data);
//       },
//       onError: (error) => {
//         console.log(error);
//       },
//     });
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start' }}>
//           <Box sx={{ border: '1px solid #000', padding: 2, borderRadius: 2, width: '100%', marginBottom: 2 }}>
//             <Typography variant="h6" mb={2}>
//               درخواست نمودار
//             </Typography>
//             <TextfieldComponent control={control} controllerName="subject" label="لطفا نمودار مورد نظر خود را وارد کنید" />
//             <Button type="submit" sx={{ mt: 2, justifySelf: 'end' }} variant="contained" color="primary">
//               درخواست
//             </Button>
//           </Box>
//           {isPending ? (
//             <CustomLoading />
//           ) : (
//             <>
//               {chartData && (
//                 <Box sx={{ border: '1px solid #000', padding: 2, borderRadius: 2, width: '100%' }}>
//                   <Typography variant="h6" mb={2}>
//                     نمودار
//                   </Typography>
//                   {chartData.chart_type === 'bar_chart' ? (
//                     <div style={chartContainerStyle}>
//                       <h2 style={titleStyle}>Bar Chart - Quarterly Sales Comparison</h2>
//                       <BarChart
//                         xAxisTitle={chartData.preview_data.xAxisTitle}
//                         yAxisTitle={chartData.preview_data.yAxisTitle}
//                         categories={chartData.preview_data.categories}
//                         data={chartData.preview_data.data}
//                         height={400}
//                       />
//                     </div>
//                   ) : chartData.chart_type === 'line_chart' ? (
//                     <div style={chartContainerStyle}>
//                       <h2 style={titleStyle}>Line Chart - Sales & Revenue Trends</h2>
//                       <SimpleLineChart
//                         xAxisTitle={chartData.preview_data.xAxisTitle}
//                         yAxisTitle={chartData.preview_data.yAxisTitle}
//                         data={chartData.preview_data.data}
//                         height={400}
//                       />
//                     </div>
//                   ) : chartData.chart_type === 'pie_chart' ? (
//                     <div style={chartContainerStyle}>
//                       <h2 style={titleStyle}>Pie Chart - Market Share Distribution</h2>
//                       <PieChart data={[{ data: chartData.preview_data.data }]} labels={chartData.preview_data.labels} height={400} />
//                     </div>
//                   ) : (
//                     <></>
//                   )}
//                 </Box>
//               )}
//             </>
//           )}
//         </Box>
//       </form>
//     </>
//   );
// };
