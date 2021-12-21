import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";

//Material UI's ListItemLink
function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export const mainList = (
  <div>
    <List aria-label="main mailbox folders">
      <ListItemLink to="/recipes" primary="Recipes"  />
      <ListItemLink to="/rother" primary="Customize" />
    </List>
  </div>
);