import { Typography, TypographyProps } from "@mui/material";

interface ITypographyElement extends TypographyProps {
  rest?: TypographyProps;
}

function TypographyElement({
  children,
  ...rest
}: ITypographyElement): React.ReactElement {
  return (
    <Typography
      sx={{ display: "flex", alignItems: "center", pb: 2 }}
      component="p"
      variant="body2"
      {...rest}
    >
      {children}
    </Typography>
  );
}

export default TypographyElement;
