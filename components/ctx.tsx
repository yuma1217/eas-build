import React from "react";

const AuthContext = React.createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string;
}>({
  signIn: () => null,
  signOut: () => null,
  session: undefined,
});

export function useSession() {
  const value = React.useContext(AuthContext);
  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [session, setSession] = React.useState<string | undefined>(undefined);
  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          setSession("AuthorizedUser");
        },
        signOut: () => {
          setSession(undefined);
        },
        session: session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
