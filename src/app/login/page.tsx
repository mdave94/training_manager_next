import LoginForm from "@/shared/LoginForm";

LoginForm;

const LoginPage = () => {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LoginForm />
    </main>
  );
};

export default LoginPage;
