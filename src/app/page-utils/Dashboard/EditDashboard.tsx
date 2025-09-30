import { Button, Dialog, Divider, Stack, Typography, } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUpdateDashboard } from "../../services/ApiRequests/Dashboards/query";
import { useEffect } from "react";
import { UpdateDashboardRequestType } from "../../../types/Dashboard/CreateDashboard.type";
import TextfieldComponent from "../../components/molecule/FormComponents/TextfieldComponent";
import { user_id } from "../../constants/userid";


type EditDashboardProps = {
  isOpenDialog: boolean
  dialogContentText: string
  dialogTitle: string
  DashboardTitle: string
  DashboardId: string
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>

}

const EditDashboard = ({
  isOpenDialog, DashboardId, DashboardTitle, setShowDialog, dialogContentText, dialogTitle
}: EditDashboardProps) => {
  const { mutate: editDashboardName, isPending: loadingOnEditDashboard } = useUpdateDashboard()
console.log(DashboardId, DashboardTitle)

  const schema = yup.object().shape({
    name: yup.string().required("وارد کردن نام داشبورد اجباری است")
  })

  const defaultValue = {
    name: ""
  }

  const { control, formState: { errors, isValid }, handleSubmit, setValue, reset } = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(schema),
  }
  )
  useEffect(() => {
    setValue("name", DashboardTitle)

  }, [DashboardTitle])

  const onSubmit = (data: any) => {
  
    const editDashboardNameData : UpdateDashboardRequestType = {
      dashboard_id: DashboardId,
      data:{
        name: data.name,
        user_id: user_id
      } 
    }

    editDashboardName(editDashboardNameData,{
      onSuccess:()=>{
        reset()
        setShowDialog(false)

      },
      onError:(error)=>{
        console.log(error)
      }
    })


  }

  return (
    <Dialog
      open={isOpenDialog}
      maxWidth={"lg"}
      onClose={() => {
        setShowDialog(false);
        reset()
      }}
    >
      <Stack p={2} width={357}>
        <form onSubmit={handleSubmit(onSubmit as any)}>
          <Typography mb={2}>
            {dialogTitle}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography mb={3}>{dialogContentText}</Typography>
          <TextfieldComponent
            control={control}
            controllerName="name"
            label="نام داشبورد"
            errors={errors}
          />

          <Divider sx={{ mb: 2 }} />
          <Stack direction={"row"} height={56} spacing={2}>
            <Button fullWidth variant='outlined' onClick={() => { setShowDialog(false) }}>انصراف</Button>
            <LoadingButton fullWidth variant='contained' loading={loadingOnEditDashboard} type="submit" disabled={!isValid}>ثبت</LoadingButton>
          </Stack>
        </form>
      </Stack>
    </Dialog>
  );
};

export default EditDashboard;