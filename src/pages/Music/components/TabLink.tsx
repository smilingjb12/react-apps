import { Button } from "@mui/material";
import { FC, ReactElement } from "react";
import { NavLink, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  border: none;
  color: black;
`;

interface Props {
  to: string;
  label: string;
}

const TabLink: FC<Props> = ({ to, label }: Props): ReactElement => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const navigate = useNavigate();

  const navigateTo = (path: string): void => {
    navigate(path);
  };

  return (
    <Button
      variant={match ? 'contained' : 'outlined'}
      onClick={() => navigateTo(to)}>
      {label}
    </Button>
  );
};

export default TabLink;
