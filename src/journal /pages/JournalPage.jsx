
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layou/JournalLayout";
import { NoteView, NothingSelecteView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
    

    <NothingSelecteView /> 
      {/* <NoteView /> */}

      <IconButton
      size="large"

      sx={{
         color: "white",
         backgroundColor: 'error.main',
         ':hover': { backgroundColor: 'error.main', opacity: 0.7 },
         position: 'fixed',
         right: 50,
         bottom: 50

      }}
      >
      <AddOutlined sx={{ fonrSize: 30 }}/>

      </IconButton>

      
    </JournalLayout>
  );
};
