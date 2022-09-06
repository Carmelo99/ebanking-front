import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Input } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Colors from "../../../constants/Colors";
import PasswordService, { PasswordServiceType } from "./PasswordService";

interface PasswordProps {
  label: string;
  name: string;
  statePassword: any;
  handleChange: any;
  handleBlur: any;
  touchedPassword: any;
  errorsPassword: any;
  required?: boolean;
}

function Password(props: PasswordProps) {
  const { label, name, statePassword, handleChange, handleBlur, touchedPassword, errorsPassword, required = false } = props;
  const { showText, changeTypeInput, onKeyDown, capsLockError }: PasswordServiceType = PasswordService();

  return (
    <>
      <FormControl fullWidth variant="outlined">
        <InputLabel
          htmlFor={name}
          style={{
            color: touchedPassword && errorsPassword ? Colors.ERROR_RED : "",
            marginLeft: "-15px",
          }}
          required={required}
        >
          {label}
        </InputLabel>
        <Input
          style={{ paddingLeft: 0 }}
          type={showText ? "text" : "password"}
          name={name}
          id={name}
          autoComplete="current-password"
          value={statePassword}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          onBlur={handleBlur}
          error={touchedPassword && Boolean(errorsPassword)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton name="showPassword" aria-label="toggle password visibility" onClick={changeTypeInput} edge="end" size="small">
                {showText ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          // labelWidth={label.length > 14 ? 130 : 70}
        />
        {touchedPassword && errorsPassword && (
          <FormHelperText error id="errors-password" style={{ marginLeft: 0 }}>
            {touchedPassword && errorsPassword}
          </FormHelperText>
        )}
        {capsLockError && <div>{"Caps Lock On!"}</div>}
      </FormControl>
    </>
  );
}

export default Password;