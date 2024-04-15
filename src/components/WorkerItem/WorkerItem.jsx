import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const WorkerItem = ({ index, name, code, id }) => {
  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{code}</td>
      <td>{name}</td>
      <td>
        {
          <Link to={`${id}`}>
            <Button
              color="success"
              variant="contained"
              sx={{ fontWeight: "700" }}
            >
              Открыть
            </Button>
          </Link>
        }
      </td>
    </tr>
  );
};

WorkerItem.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
};
