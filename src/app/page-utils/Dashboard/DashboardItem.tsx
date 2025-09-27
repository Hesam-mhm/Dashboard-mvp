// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { IconButton, Stack, useTheme } from '@mui/material';
// import { Icon } from '@iconify/react/dist/iconify.js';

// type DashboardItemProp = {
//   dashletTitle: string
//   onClickEdit: () => void
//   onClickDelete: () => void
//   onClick: () => void; // Add onClick prop to make it clickable

// }

// const DashboardItem = ({ dashletTitle, onClickDelete, onClickEdit, onClick }: DashboardItemProp) => {
//   const theme = useTheme()
//   return (
//     <div onClick={onClick} style={{ cursor: 'pointer' }}>

//       <Card elevation={0.75}
//         sx={{ p: 2, backgroundColor: theme.palette.background.paper, borderRadius: 2 }}>
//         <Stack justifyContent={"space-between"} alignItems={"start"} height={213}>
//           <CardMedia
//             component="img"
//             height="171"
//             image="/media/images/DashletPlaceHolder.svg"
//             alt="green iguana"
//           />
//           <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>


//             <Stack direction={"row"}  >
//               <Icon icon={"humbleicons:dashboard"} fontSize={20} color={theme.palette.grey?.[800]} />
//               <Typography fontSize={14} fontWeight={500} color={theme.palette.grey?.[800]} ml={1}>{dashletTitle}</Typography>
//             </Stack>


//             <Stack direction={"row"} >

//               <IconButton onClick={onClickEdit} aria-label="Edit">
//                 <Icon icon={"solar:pen-new-square-broken"} color={theme.palette.primary.main} />
//               </IconButton>

//               <IconButton onClick={onClickDelete} aria-label="Delete">
//                 <Icon icon={"solar:trash-bin-minimalistic-outline"} color={theme.palette.error.main} />
//               </IconButton>


//             </Stack>


//           </Stack>

//         </Stack>
//       </Card>
//     </div>

//   );
// };

// export default DashboardItem; 