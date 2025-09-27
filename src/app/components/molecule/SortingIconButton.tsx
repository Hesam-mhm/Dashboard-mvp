import { useSortable } from '@dnd-kit/sortable';
import React from 'react'
import { CSS } from '@dnd-kit/utilities';
import { IconButton } from '@mui/material';
import { SortIcon } from '../../Iconify/SortIcon';

type SortingIconButtonProps = {
    id: string;
}
const SortingIconButton = ({ id }: SortingIconButtonProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      cursor: 'grab',
    } as React.CSSProperties;
    
  return (
    <IconButton ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <SortIcon />        
    </IconButton>
  )
}

export default SortingIconButton
