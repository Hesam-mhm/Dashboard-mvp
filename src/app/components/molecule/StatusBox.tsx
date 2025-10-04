import React from 'react';
import { Box, Stack, Tooltip } from '@mui/material';
import { StatusBoxType } from '../../../types/GeneralTypes/StatusBox.type';

type StatusBoxProps = {
  status: StatusBoxType;
  height?: string;
  minWidth?: string;
};

const StatusBox: React.FC<StatusBoxProps> = ({ status, height = '32px' }) => {
  return (
    <Tooltip title={status.statusText}>
      <Box
        sx={{
          m: 1,
          px: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: height,
          py: '8px',
          lineHeight: '100%',
          fontSize: '12px',
          fontWeight: '600',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: (theme) => `${theme.palette[status.statusColor].main}15`,
          color: (theme) => theme.palette[status.statusColor].main,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          mx: '8px',
          textAlign: 'center',
          direction: 'ltr',
          // Responsive adjustments
          // '@media (max-width: 600px)': {
          //   minWidth: '100px',
          //   px: '8px',
          //   fontSize: '11px',
          // },
          // '@media (max-width: 400px)': {
          //   minWidth: '80px',
          //   px: '6px',
          //   fontSize: '10px',
          // },
        }}
      >
        <span
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%',
            textAlign: 'center',
          }}
        >
          {status.statusText}
        </span>
      </Box>
    </Tooltip>
  );
};

export default StatusBox;
