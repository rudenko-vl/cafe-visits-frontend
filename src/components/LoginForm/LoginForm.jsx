import { useState } from "react";
import { useForm } from "react-hook-form";
import { Label, Input, Form, Text, RegNav } from "./LoginForm.styled";
import { Button } from "@mui/material";
import { login } from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

export const LogInForm = () => {
  const [visiblePass, setVisiblePass] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const toggleVisiblePass = () => {
    setVisiblePass(!visiblePass);
  };
  const iconStyle = {
    position: "absolute",
    top: 35,
    right: 15,
    width: "25px",
    height: "25px",
  };

  function myHandleSubmit({ email, password }) {
    const data = dispatch(login({ email, password }));
    console.log(data);
    // if (!data.payload) {
    //   alert("Не удалось авторизоваться");
    // }
    reset();
  }
  return (
    <Form autoComplete="on" onSubmit={handleSubmit(myHandleSubmit)}>
      <Label>
        Email:
        <Input
          {...register("email", {
            required: "Поле обязательно к заполнению!",
          })}
          title="test@gmail.com"
        />
      </Label>
      <div style={{ height: 40 }}>
        {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
      </div>
      <Label style={{ position: "relative" }}>
        Password:
        <Input
          type={visiblePass ? "text" : "password"}
          {...register("password", {
            required: "Поле обязательно к заполнению!",
          })}
        />
        {visiblePass ? (
          <MdOutlineVisibility
            style={iconStyle}
            onClick={() => {
              toggleVisiblePass();
            }}
          />
        ) : (
          <MdOutlineVisibilityOff
            style={iconStyle}
            onClick={() => {
              toggleVisiblePass();
            }}
          />
        )}
      </Label>
      <div style={{ height: 40 }}>
        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
      </div>
      <Button type="submit" variant="contained" color="success">
        Войти
      </Button>
      <Text>
        Нет аккаунта? <RegNav to="/auth/register">Зарегистрируйтесь!</RegNav>
      </Text>
    </Form>
  );
};
