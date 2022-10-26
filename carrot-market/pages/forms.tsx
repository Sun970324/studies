import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    setValue,
    reset,
    resetField,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  const onValid = (data: LoginForm) => {};
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "이름을 입력해주세요",
          minLength: {
            message: "The username should be longer then 5 chars",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "이메일을 입력해주세요",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") ? "" : "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${
          Boolean(errors.email) ? "border-red-500 focus:border-red-500" : ""
        }`}
      />
      <input
        {...register("password", {
          required: "비밀번호를 입력해주세요",
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
      {errors.errors?.message}
    </form>
  );
}
