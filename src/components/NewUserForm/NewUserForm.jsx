import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { regUser } from "../../redux/auth/auth-operations";
import { useState } from "react";
import { Label, Input, Form } from "../LoginForm/LoginForm.styled";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { getIsAuthorizing } from "../../redux/auth/auth-selectors";
import { Link } from "react-router-dom";

export const NewUserForm = () => {
  const auth = useSelector(getIsAuthorizing);
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

  const myHandleSubmit = ({ name, email, admin, password }) => {
    dispatch(regUser({ name, email, admin, password }));
    reset();
  };

  const iconStyle = {
    position: "absolute",
    top: 35,
    right: 15,
    width: "25px",
    height: "25px",
  };

  if (auth) {
    return (
      <p
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "600",
          marginTop: "50px",
        }}
      >
        Аккаунт успешно создан. Теперь Вы можете войти 👉{" "}
        <Link to={"/auth/login"}>Вход</Link>{" "}
      </p>
    );
  }

  return (
    <Form onSubmit={handleSubmit(myHandleSubmit)}>
      <Label>
        Email:
        <Input
          {...register("email", {
            required: "Поле обязательно к заполнению!",
          })}
          title="test@gmail.com"
        />
      </Label>
      <div style={{ height: 30 }}>
        {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
      </div>
      <Label style={{ position: "relative" }}>
        Password:
        <Input
          type={visiblePass ? "text" : "password"}
          {...register("password", {
            required: "Поле обязательно к заполнению!",
            minLength: {
              value: 5,
              message: "Пароль должен содержать минимум 5 символов!",
            },
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
            onClick={() => {
              toggleVisiblePass();
            }}
            style={iconStyle}
          />
        )}
      </Label>
      <div style={{ height: 40 }}>
        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
      </div>
      <Label>
        Name:
        <Input
          {...register("name", {
            required: "Поле обязательно к заполнению!",
            minLength: {
              value: 2,
              message: "Минимум 2 символа",
            },
          })}
        />
      </Label>
      <div style={{ height: 30 }}>
        {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
      </div>
      <Button
        type="submit"
        variant="contained"
        sx={{ fontWeight: "700" }}
        color="success"
      >
        Создать аккаунт
      </Button>
    </Form>
  );
};
