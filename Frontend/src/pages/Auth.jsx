import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center items-center">
          <AuthContainer />
        </div>
      </div>
    </div>
  );
}

export default Auth;
