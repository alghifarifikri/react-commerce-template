import FormLogin from "../../components/organisms/Login/FormLogin";

export default function Login() {
  return (
    <div className="flex flex-row h-screen">
      <div
        className="w-1/2 bg-cover bg-center hidden lg:block content-center px-20 text-center"
        style={{
          backgroundImage: "url('/images/background/background.png')",
        }}
      >
        <h2 className="text-7xl font-bold mb-8">Vascomm</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="flex bg-blend-primary w-full lg:w-1/2 justify-center items-center px-12">
        <FormLogin />
      </div>
    </div>
  );
}
