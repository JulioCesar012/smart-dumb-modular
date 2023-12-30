import { LayoutFormProps } from "../data";
import * as S from "./styles";

export const Layout = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
}: LayoutFormProps) => {
  return (
    <S.Container>
      <S.LoginFormWrapper>
        <S.LoginFormTitle>Login</S.LoginFormTitle>
        <S.Form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor="username">Username:</S.Label>
            <S.Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="password">Password:</S.Label>
            <S.Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.FormGroup>
          <S.Button type="submit">Login</S.Button>
        </S.Form>
      </S.LoginFormWrapper>
    </S.Container>
  );
};
