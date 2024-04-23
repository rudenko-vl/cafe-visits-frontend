import { useState } from "react";
import { Switch, TextField, Button } from "@mui/material";
import { Item, Form, AdminLabel } from "./UserItem.styled";
import { updateUser } from "../../redux/auth/auth-operations";
import { Toaster, toast } from "react-hot-toast";

export const UserItem = (user) => {
  const [admin, setAdmin] = useState(user.user.admin);
  const [userName, setUserName] = useState(user.user.name);

  const handleCheckboxChange = (event) => {
    setAdmin(event.target.checked);
  };

  const handleSubmit = () => {
    const updatedUser = { ...user.user, admin, name: userName };
    const myPromise = updateUser(user.user._id, updatedUser);

    toast.promise(
      myPromise,
      {
        loading: "Обновление...",
        success: "Успешно!",
        error: "Error",
      },
      {
        style: {
          minWidth: "250px",
        },
        success: {
          duration: 2000,
          icon: "✅",
        },
      }
    );
  };

  const nameInputChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <Item>
      <Toaster />
      <Form>
        <TextField
          type="text"
          value={userName}
          onChange={nameInputChange}
          label="Имя"
        />
        <TextField
          type="email"
          value={user.user.email}
          readOnly
          label="Email"
          disabled={true}
        />
        <AdminLabel>Admin</AdminLabel>
        <Switch
          checked={admin}
          onChange={handleCheckboxChange}
          label="Admin"
          inputProps={{ "aria-label": "controlled" }}
        />
        <Button type="button" onClick={handleSubmit} variant="outlined">
          save
        </Button>
      </Form>
    </Item>
  );
};
