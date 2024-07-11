import { Typography } from "@mui/material";
import { IChildren } from "../../types";

function Message({ children }: IChildren): React.ReactElement {
  return (
    <Typography variant="body2" sx={{ margin: "auto" }}>
      {children}
    </Typography>
  );
}
export default Message;
