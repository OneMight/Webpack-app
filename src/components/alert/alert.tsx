import { IAlert } from "../../types/intefaces";
import { Alert, Box, IconButton, Collapse } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import { useState } from "react";
export const AlertMui = ({children} : IAlert) =>{
    const [open, setOpen] = useState<boolean>(true)
    return (
        <Box sx={{position: "absolute", top:'80px'}}>
            <Collapse in={open}>
                <Alert variant='filled'
                severity="error"
                action={<IconButton aria-label="close" onClick={() => {setOpen(false)}}><CloseIcon/></IconButton>}
                >
                {children}
                </Alert>
            </Collapse>
                    
        </Box>
        
    )

}