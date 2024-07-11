import { PaperProps } from "@mui/material";
import { StyledPaper } from "./styles";

interface ISectionProps extends PaperProps {
  rest?: PaperProps;
}

function CustomPaper({ children, ...rest }: ISectionProps) {
  return (
    <StyledPaper component="section" elevation={6} {...rest}>
      {children}
    </StyledPaper>
  );
}

export default CustomPaper;
