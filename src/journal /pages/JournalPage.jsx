import { Typography } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layou/JournalLayout";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <Typography>
        {" "}
        A journal is a detailed account that records all the financial transactions of a business, to be used for the future reconciling of accounts and the transfer of information to other official accounting records, such as the general ledger. A journal states the date of a transaction, which accounts were affected, and the amounts, usually in a double-entry bookkeeping method.
      </Typography>
    </JournalLayout>
  );
};
