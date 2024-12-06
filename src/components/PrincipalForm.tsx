import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function PrincipalForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues :{
      email:"",
    password:""
    },
  });

  
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          {...register("email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Incorrect email format.",
            },
            required:true
          })}
        />
        <label>Email address</label>
        {errors.email && <span>This field is required</span>}
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <label >Password</label>
        {errors.password && <span>This field is required</span>}
      </div>
      <button className="btn btn-primary " type="submit">Log In </button>
    </form>
  );
}
