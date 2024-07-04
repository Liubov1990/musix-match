import { Button, ButtonProps } from "@mui/material";

interface IButtonProps extends ButtonProps {
  rest?: ButtonProps;
}

function ButtonComponent({
  children,
  ...rest
}: IButtonProps): React.ReactElement {
  return (
    <Button
      variant="contained"
      sx={{
        width: "100%",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
export default ButtonComponent;
