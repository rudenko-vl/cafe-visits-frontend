import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { Tooltip } from "../../components";

export const WorkerItem = ({ index, name, code, id }) => {
  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{code}</td>
      <td>{name}</td>
      <td>
        {
          <Tooltip text="Открыть">
            <Link to={`${id}`}>
              <FaUserEdit />
            </Link>
          </Tooltip>
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
