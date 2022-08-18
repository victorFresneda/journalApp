
import { JournalLayout } from "../layou/JournalLayout";
import { NoteView, NothingSelecteView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
    

      {/* <NothingSelecteView /> */}
      <NoteView />
    </JournalLayout>
  );
};
