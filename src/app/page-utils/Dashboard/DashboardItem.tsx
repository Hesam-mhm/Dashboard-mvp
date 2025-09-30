import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, Stack, useTheme } from '@mui/material';
import { SolarAddCircleLineDuotone } from '../../Iconify/SolarAddCircleLineDuotone';
import { SolarTrashBinTrashOutline } from '../../Iconify/SolarTrashBinTrashOutline';
import { SolarPenNewSquareLineDuotone } from '../../Iconify/SolarPenNewSquareLineDuotone';
import { SolarEyeOutline } from '../../Iconify/SolarEyeOutline';

type DashboardItemProp = {
  DashboardTitle: string
  onClickEdit: () => void
  onClickDelete: () => void
  onClick: () => void; // Add onClick prop to make it clickable

}

const DashboardItem = ({ DashboardTitle, onClickDelete, onClickEdit, onClick }: DashboardItemProp) => {
  const theme = useTheme()
  return (
    // <div onClick={onClick} style={{ cursor: 'pointer' }}>

      <Card elevation={0.75}
        sx={{ p: 2, backgroundColor: theme.palette.background.paper, borderRadius: 2 }}>
        <Stack justifyContent={"space-between"} alignItems={"start"} height={213}>
          <CardMedia
            component="img"
            height="171"
            image="/media/images/DashboardPlaceHolder.svg"
            alt="green iguana"
          />
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>


            <Stack direction={"row"}  >
              <Typography fontSize={14} fontWeight={500} color={theme.palette.grey?.[800]} ml={1}>{DashboardTitle}</Typography>
            </Stack>


            <Stack direction={"row"} >

              <IconButton onClick={onClickEdit} aria-label="Edit">
              <SolarPenNewSquareLineDuotone />              
              </IconButton>

              <IconButton onClick={onClickDelete} aria-label="Delete">
              <SolarTrashBinTrashOutline />
                            </IconButton>

              <IconButton onClick={onClick} aria-label="Delete">
              <SolarEyeOutline />
              </IconButton>


            </Stack>


          </Stack>

        </Stack>
      </Card>
    // </div>

  );
};

export default DashboardItem; 