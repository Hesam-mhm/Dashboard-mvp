// import { Button,Grid, useTheme } from '@mui/material';
// import { useState } from 'react';
// import DashletsManagingListItem from '../../../pages-util/Reports/DashletsManaging/DashletsListItem';
// import { Icon } from '@iconify/react/dist/iconify.js';
// import AddDashletDialog from '../../../pages-util/Reports/DashletsManaging/AddDashletDialog';
// import { useDeleteDashlet, useGetDashletsList } from '../../../services/Requests/Reports/DashletManaging/query';
// import CustomLoading from '../../../components/CustomLoading';
// import ConfirmOperationDialog from '../../../components/ConfirmOperationDialog';
// import EditDashletNameDialog from '../../../pages-util/Reports/DashletsManaging/EditDashletNameDialog';
// import { useNavigate } from 'react-router-dom';



// const Dashboards = () => {
//    const [showAddDashletDialog,setShowAddDashletDialog] = useState<boolean>(false)
//    const [showEditDashletDialog,setShowEditDashletDialog] = useState<boolean>(false)
//    const [showDeleteDashletDialog,setShowDeleteDashletDialog] = useState<boolean>(false)
//    const [dashletToDelete,setDashletToDelete] = useState<string>()
//    const [dashletToEditId,setDashletToEditId] = useState<string>()
//    const [dashletToEditTitle,setDashletToEditTitle] = useState<string>()
//    const {data:dashletsListData , isLoading : loadingOnGetDashletsListData} = useGetDashletsList()
//    const {mutate:deleteDashlet , isLoading : loadingOnDeleteDashlet} = useDeleteDashlet(dashletToDelete!,setShowDeleteDashletDialog)
//    const theme = useTheme()



// const handleConfirmDeleteDashlete = ()=>{
  
//  deleteDashlet(dashletToDelete!)
// }
   
// const handleClickOnDelete = (id:string)=>{
//   setDashletToDelete(id)
//  setShowDeleteDashletDialog(true)
// }  

// const handleClickOnEdit = (id:string,title:string)=>{
//   setDashletToEditId(id)
//   setDashletToEditTitle(title)  
//  setShowEditDashletDialog(true)
// }
// const navigate = useNavigate()

//     return (
//         <Grid container p={1}>

 
//             {/*Submit Card*/}
//            <Grid item container xs={12}
//             sx={{
//                 justifyContent:"start",
//                 alignItems:"center",
//                 p:2,
//                 height : "88px",
//                 backgroundColor : theme.palette.background.paper , 
//                 mb:2,
//                 mx:1,
//                 boxShadow: "0 -3px 15px rgba(141,141,141,0.05)",
//             }}
//            >
//             <Grid item xs={12} lg={1.5}>
//             <Button fullWidth variant='contained' sx={{height:56 , borderRadius:2}} 
//            startIcon = {<Icon icon={"gala:add"} />}
//            onClick={()=>{setShowAddDashletDialog(true)}}
//            >
//             ثبت دشلت جدید
//            </Button>
//             </Grid>
  
//            </Grid>
           
//            {
//             loadingOnGetDashletsListData ? <CustomLoading /> :

//             dashletsListData?.map((dashlet)=>{
//               return (
//               <Grid item xs={12} sm={6} lg={4} p={1}>
//                 <DashletsManagingListItem 
//                 onClick={()=>{navigate(`/Reports/DashletsManaging/DashletDetail/${dashlet.dashlet_id}`)}}
//                 dashletTitle={dashlet.dashlet_title}
//                 onClickDelete={()=>{handleClickOnDelete(dashlet.dashlet_id)}}
//                 onClickEdit={()=>{handleClickOnEdit(dashlet.dashlet_id,dashlet.dashlet_title)}}
//                 />
//               </Grid>)
//             })

//            }
     
//          <EditDashletNameDialog 
//           dashletId={dashletToEditId!}
//          dashletTitle={dashletToEditTitle!}
//          dialogContentText='ثبت ویرایش نام دشلت'
//          dialogTitle='ویرایش نام دشلت'
//          isOpenDialog ={showEditDashletDialog}
//          setShowDialog={setShowEditDashletDialog} 
//          />

//          <ConfirmOperationDialog 
//          dialogContentText='آیا از حذف دشلت اطمینان دارید ؟'
//          dialogTitle='حذف دشلت'
//          handleAccept={handleConfirmDeleteDashlete}
//          handleIgnore={()=>{setShowDeleteDashletDialog(false)}}
//          isOpenDialog = {showDeleteDashletDialog}
//          loadingButton = {loadingOnDeleteDashlet}
//          />

//           <AddDashletDialog 
//           dialogContentText='ثبت  جدید'
//           dialogTitle='نام دشلت را وارد کنید'
//           isOpenDialog={showAddDashletDialog}
//           setShowDialog={setShowAddDashletDialog}
//              />


//         </Grid>
//     );
// };

// export default Dashboards;