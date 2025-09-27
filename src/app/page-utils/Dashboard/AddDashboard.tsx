// import {Button,Dialog,Divider,Stack,TextField,Typography,} from "@mui/material";
// import LoadingButton from '@mui/lab/LoadingButton';
// import { Controller, useForm } from "react-hook-form";
// import * as yup from "yup"
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useAddDashlet } from "../../../services/Requests/Reports/DashletManaging/query";
// import { AddDashletType } from "../../../types/Reports/DashletManaging";


// type AddDashboardProps={
//     isOpenDialog:boolean
//     dialogContentText:string
//     dialogTitle:string
//     setShowDialog:React.Dispatch<React.SetStateAction<boolean>>
//   }

// const AddDashboard = ({ isOpenDialog,setShowDialog, dialogContentText,dialogTitle,}:AddDashboardProps) => {
//   const {mutate:addDashlet,isLoading:loadingOnAddDashlet,isSuccess} = useAddDashlet(setShowDialog)


// const schema =   yup.object().shape({
//   dashlet_title : yup.string().required("وارد کردن نام دشلت اجباری است") 
// })

// const defaultValue : AddDashletType= {
//   dashlet_title : ""
// }


// const {control ,formState:{errors}, handleSubmit,reset} = useForm<AddDashletType>({
//   defaultValues:defaultValue,
//   resolver: yupResolver(schema),
// }
// )

// const onSubmit = (data : AddDashletType)=>{
//  addDashlet(data)
//  if (isSuccess) {
//    reset()
//  }

// }


//     return (
//         <Dialog
//         open={isOpenDialog}
//         maxWidth={"lg"}
//         onClose={()=>{
//           setShowDialog(false)
//           reset()
//         }}
//       >
//         <Stack p={2}  width={357}> 
//         <form onSubmit={handleSubmit(onSubmit)}>
//          <Typography mb={2}>
//             {dialogTitle}
//          </Typography>
//          <Divider sx={{mb:2}}/>
//          <Typography mb={3}>{dialogContentText}</Typography>
//             <Controller
//               name="dashlet_title"
//               control={control}
//               render={({ field: { value, onChange, onBlur } }) => (
//                 <TextField
//                   dir="rtl"
//                   fullWidth
//                   label="نام دشلت"
//                   value={value}
//                   onChange={onChange}
//                   onBlur={onBlur}
//                   error={Boolean(errors.dashlet_title)}
//                 />
//               )}
//             />
//          <Divider sx={{mb:2}}/>
//          <Stack direction={"row"} height={56} spacing={2}>
//             <Button fullWidth variant='outlined' onClick={()=>{setShowDialog(false)}}>انصراف</Button>
//             <LoadingButton fullWidth variant='contained' loading={loadingOnAddDashlet} type="submit">ثبت</LoadingButton>
//          </Stack>
//          </form>
//         </Stack>
//       </Dialog>
//     );
// };

// export default AddDashboard;