import {Button,Dialog,Divider,Stack,TextField,Typography,} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateDashboard } from "../../services/ApiRequests/Dashboards/query";
import { CreateDashboardRequestType } from "../../../types/Dashboard/CreateDashboard.type";
import TextfieldComponent from "../../components/molecule/FormComponents/TextfieldComponent";
import { user_id } from "../../constants/userid";


type AddDashboardProps={
    isOpenDialog:boolean
    dialogContentText:string
    dialogTitle:string
    setShowDialog:React.Dispatch<React.SetStateAction<boolean>>
  }

const AddDashboard = ({ isOpenDialog,setShowDialog, dialogContentText,dialogTitle,}:AddDashboardProps) => {
  const {mutate:addDashboard,isPending:loadingOnAddDashboard,isSuccess} = useCreateDashboard()


const schema =   yup.object().shape({
  name : yup.string().required("وارد کردن نام داشبورد اجباری است") 
})

const defaultValue = {
  name : ""
}


const {control ,formState:{errors}, handleSubmit,reset} = useForm({
  defaultValues:defaultValue,
  resolver: yupResolver(schema),
}
)

const onSubmit = (data)=>{
  const addDashboardData : CreateDashboardRequestType = {
    name: data.name,
    user_id: user_id
  }
 addDashboard(addDashboardData,{
  onSuccess:()=>{
    reset()
    setShowDialog(false)
  },
  onError:(error)=>{
    setShowDialog(false)
  }
 })
 

}


    return (
        <Dialog
        open={isOpenDialog}
        maxWidth={"lg"}
        onClose={()=>{
          setShowDialog(false)
          reset()
        }}
      >
        <Stack p={2}  width={357}> 
        <form onSubmit={handleSubmit(onSubmit)}>
         <Typography mb={2}>
            {dialogTitle}
         </Typography>
         <Divider sx={{mb:2}}/>
         <Typography mb={3}>{dialogContentText}</Typography>
            <TextfieldComponent
              control={control}
              controllerName="name"
              label="نام داشبورد"
              errors={errors}
            />
         <Divider sx={{mb:2}}/>
         <Stack direction={"row"} height={56} spacing={2}>
            <Button fullWidth variant='outlined' onClick={()=>{setShowDialog(false)}}>انصراف</Button>
            <LoadingButton fullWidth variant='contained' loading={loadingOnAddDashboard} type="submit">ثبت</LoadingButton>
         </Stack>
         </form>
        </Stack>
      </Dialog>
    );
};

export default AddDashboard;