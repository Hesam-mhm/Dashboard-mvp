import { Button,Grid, useTheme } from '@mui/material';
import { useState } from 'react';
import { useDeleteDashboard, useGetAllDashboards } from '../../services/ApiRequests/Dashboards/query';
import { useNavigate } from 'react-router-dom';
import AddDashboard from '../../page-utils/Dashboard/AddDashboard';
import DashboardItem from '../../page-utils/Dashboard/DashboardItem';
import EditDashboard from '../../page-utils/Dashboard/EditDashboard';
import CustomLoading from '../../components/atome/CustomLoading';
import { SolarAddCircleLineDuotone } from '../../Iconify/SolarAddCircleLineDuotone';
import { user_id } from '../../constants/userid';
import { GetDashboardsQueryParamType } from '../../../types/Dashboard/CreateDashboard.type';
import SimpleDialog from '../../components/organize/SimpleDialog';
import { RouteMapper } from '../../routing/RouteMapper/RouteMapper';



const Dashboards = () => {
   const [showAddDashboardDialog,setShowAddDashboardDialog] = useState<boolean>(false)
   const [showEditDashboardDialog,setShowEditDashboardDialog] = useState<boolean>(false)
   const [showDeleteDashboardDialog,setShowDeleteDashboardDialog] = useState<boolean>(false)
   const [DashboardToDelete,setDashboardToDelete] = useState<string>()
   const [DashboardToEditId,setDashboardToEditId] = useState<string>()
   const [DashboardToEditTitle,setDashboardToEditTitle] = useState<string>()
   const [filter, setFilter] = useState<Omit<GetDashboardsQueryParamType, 'limit' | 'offset'>>({user_id:user_id});
   const {data:DashboardsListData , isLoading : loadingOnGetDashboardsListData} = useGetAllDashboards({...filter,limit:5,offset:0})
    const {mutate:deleteDashboard , isPending : loadingOnDeleteDashboard} = useDeleteDashboard()
   const theme = useTheme()



const handleConfirmDeleteDashboarde = ()=>{
  
 deleteDashboard({dashboard_id:DashboardToDelete!,user_id:user_id},{
  onSuccess:()=>{
    setShowDeleteDashboardDialog(false)
    setDashboardToDelete(undefined)
  },
  onError:(error)=>{
    setShowDeleteDashboardDialog(false)
  }
 }  )
}
   
const handleClickOnDelete = (id:string)=>{
  setDashboardToDelete(id)
 setShowDeleteDashboardDialog(true)
}  

const handleClickOnEdit = (id:string,title:string)=>{
  setDashboardToEditId(id)
  setDashboardToEditTitle(title)  
 setShowEditDashboardDialog(true)
}
const navigate = useNavigate()

    return (
        <Grid container p={1}>

 
            {/*Submit Card*/}
           <Grid item container xs={12}
            sx={{
                justifyContent:"start",
                alignItems:"center",
                p:2,
                height : "88px",
                backgroundColor : theme.palette.background.paper , 
                mb:2,
                mx:1,
                boxShadow: "0 -3px 15px rgba(141,141,141,0.05)",
            }}
           >
            <Grid item xs={12} lg={1.5}>
            <Button fullWidth variant='contained' sx={{height:56 , borderRadius:2}} 
           startIcon = {<SolarAddCircleLineDuotone />}
           onClick={()=>{setShowAddDashboardDialog(true)}}
           >
            ثبت داشبورد جدید
           </Button>
            </Grid>
  
           </Grid>
           
           {
            loadingOnGetDashboardsListData ? <CustomLoading /> :

            DashboardsListData?.dashboards.map((Dashboard)=>{
              return (
              <Grid item xs={12} sm={6} lg={4} p={1}>
                <DashboardItem 
                onClick={()=>{navigate(RouteMapper.dashboardDetail.path.replace(":id",Dashboard.id))}}
                DashboardTitle={Dashboard.name}
                onClickDelete={()=>{handleClickOnDelete(Dashboard.id)}}
                onClickEdit={()=>{handleClickOnEdit(Dashboard.id,Dashboard.name)}}
                />
              </Grid>)
            })

           }
     
         <EditDashboard 
          DashboardId={DashboardToEditId!}
         DashboardTitle={DashboardToEditTitle!}
         dialogContentText='ثبت ویرایش نام داشبورد'
         dialogTitle='ویرایش نام داشبورد'
         isOpenDialog ={showEditDashboardDialog}
         setShowDialog={setShowEditDashboardDialog} 
         />


           <SimpleDialog 
           showDialog={showDeleteDashboardDialog}
           setShowDialog={setShowDeleteDashboardDialog}
           buttonOnclick={handleConfirmDeleteDashboarde}
           buttonLoading={loadingOnDeleteDashboard}
           dialogContentText='آیا از حذف داشبورد اطمینان دارید ؟'
           dialogTitle='حذف داشبورد'
           mainButtonTitle='حذف'
           />
        

          <AddDashboard 
          dialogContentText='ثبت  جدید'
          dialogTitle='نام داشبورد را وارد کنید'
          isOpenDialog={showAddDashboardDialog}
          setShowDialog={setShowAddDashboardDialog}
             />


        </Grid>
    );
};

export default Dashboards;