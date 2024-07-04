import { Box, Paper } from "@mui/material";
import { IChildren } from "../../types";

function PageLayout({ children }: IChildren) {
  return (
    <Box component="main" sx={{ flexGrow: 1, height: "100%" }}>
      <Paper
        component="section"
        elevation={6}
        sx={{
          p: { xs: 3, md: 8 },
          px: { xs: 3, sm: 5, md: 8 },
          my: { xs: 3, md: 4 },
          borderRadius: "50px",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}

export default PageLayout;
