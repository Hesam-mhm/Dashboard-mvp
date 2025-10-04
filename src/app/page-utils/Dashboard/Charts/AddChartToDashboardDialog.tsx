import {Box, Button,Checkbox,Dialog,Divider,Stack,Typography,useTheme, } from "@mui/material";
  import { Controller, useForm } from "react-hook-form";
  import { useEffect, useState } from "react";
  
  // Example of API hooks to fetch all dashboards and selected dashlet IDs
  // import { useGetDashboardsList } from "../../services/Requests/Reports/DashboardManaging/query";
// import { useAddDashboardsThatRelatedFormula, useGetDashboardsThatRelatetToFormula } from "../../services/Requests/commandHandler/query";
import LoadingButton from "@mui/lab/LoadingButton";
// import { DashboardListItemType } from "../../types/Reports/DashboardManaging";
import useGetAllDashboards from "../../../services/ApiRequests/Dashboards/query";
import { user_id } from "../../../constants/userid";
  
  
  
  interface FormData {
    selectedDashboards: string[];  // Storing only the dashlet IDs of selected items
  }
  
type AddChartToDashboardDialogProps= 
{isOpenDialog: boolean ; 
setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
formula_Id : string
}

  const AddChartToDashboardDialog = ({ isOpenDialog, setShowDialog,formula_Id}:AddChartToDashboardDialogProps) => {
    const [formulaId,setFormulaId] = useState(formula_Id)
    const { data: dashboardsListData } = useGetAllDashboards({user_id:user_id,limit:100,offset:0});
    const { data: selectedDashboardsData } = useGetDashboardsThatRelatetToFormula(formula_Id);
    const { mutate: addDashboards,isLoading:loadingOnAddDashboards} = useAddDashboardsThatRelatedFormula(formula_Id);
    


    const { control, handleSubmit, setValue } = useForm<FormData>({
      defaultValues: {
        selectedDashboards: [],
      },
    });
  
    const theme = useTheme();
  
useEffect(()=>{
    setFormulaId(formula_Id)
},[formula_Id])


    // UseEffect to preselect the dashboards that match the selected dashlet IDs
    useEffect(() => {

      if (dashboardsListData && selectedDashboardsData) {
        // Set pre-checked dashlet IDs
        setValue("selectedDashboards", selectedDashboardsData);
      }
    }, [dashboardsListData, selectedDashboardsData, setValue]);
  
    // Handle form submit
    const onSubmit = (data: FormData) => {
      const checkedDashboards = data.selectedDashboards.map((id) => ({
        dashlet_id: id,
      }));
      const dataToSend = {
        formula_id : formulaId ,
        dashboards: checkedDashboards
      }
      addDashboards(dataToSend)
      if (!loadingOnAddDashboards ) {
        setShowDialog(false)
      }
    };
  
    return (
      <Dialog open={isOpenDialog} onClose={() => setShowDialog(false)}>
          <Typography padding={2} fontSize={14} fontWeight={600} color={theme.palette.primary.contrastText}>
          محاسبه مقدار
          </Typography>
  
          <Divider />
        <form onSubmit={handleSubmit(onSubmit)}>
  
          <Stack p={2} width={357} height={400} alignItems={"center"} >
            
            {dashboardsListData &&
              dashboardsListData?.dashboards?.map((dashlet: DashboardListItemType) => (
                <Stack width={"100%"} m={0} key={dashlet.dashlet_id}>
                  <Controller
                    name="selectedDashboards"
                    control={control}
                    render={({ field }) => (
                      
                            <Box display="flex"
                            p={0} 
                            flexDirection={"row-reverse"}
                            justifyContent="space-between" alignItems="center" width="100%">
                            <Checkbox
                              sx={{p:0}}
                              value={dashlet.dashlet_id}
                              checked={field.value.includes(dashlet.dashlet_id)}
                              onChange={(e) => {
                                const isChecked = e.target.checked;
                                field.onChange(
                                  isChecked
                                    ? [...field.value, dashlet.dashlet_id]
                                    : field.value.filter((id) => id !== dashlet.dashlet_id)
                                );
                              }}
                            />
                            <Typography>{dashlet.dashlet_title}</Typography>
                          </Box>
                        
                     
                    )}
                  />
                  <Divider sx={{ m: 1 }} />
                </Stack>
              ))}
  
            <Stack
              sx={{
                width:"100%",
                justifyContent: "center",
                alignItems: "center",
                position: "sticky",
                bottom: 1,
                right: 0,
                left: 0,
                borderRadius: 1,
                p:2,
                boxShadow: "0 -3px 15px rgba(141,141,141,0.05)",
                backgroundColor: theme.palette.background.paper,
              }}
              direction={"row"}
              justifyContent={"center"}
              spacing={2}
              m={2}
            >
              <Button sx={{ height: 45 }} fullWidth variant="outlined" onClick={() => setShowDialog(false)}>
                انصراف
              </Button>
              <LoadingButton loading={loadingOnAddDashboards} sx={{ height: 45 }} fullWidth type="submit" variant="contained">
                ثبت
              </LoadingButton>
            </Stack>

          </Stack>

        </form>
      </Dialog>
    );
  };
  
  export default AddChartToDashboardDialog;
  