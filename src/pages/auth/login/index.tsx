import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputText";

import { useForm, Controller } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import api from "../../../config/axios";
import { useMutation } from "@tanstack/react-query";
import { setUserToken } from "../../../stores/user";

interface FieldValues {
  email: string;
  password: string;
}

export default function Login() {
  const methods = useForm<FieldValues>();
  const navigate = useNavigate();

  //fix (any) type issue later
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    mutateAsync(data);
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (data: FieldValues) => {
      const res = await api.post("/login", {
        email: data.email,
        password: data.password,
      });
      return res;
    },
    onSuccess: (res) => {
      console.log(res)
      setUserToken(res.data.access_token);
      localStorage.setItem("token", res.data.access_token);
      navigate("/");
    },
  });

  return (
    <div className="w-screen h-screen flex gap-4 items-center justify-center">
      <Card className="w-2/8">
        <h3 className="text-center mb-8 font-bold text-8">Login</h3>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-8 w-full"
        >
          <div className="flex flex-col gap-2 ">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <Controller
              control={methods.control}
              rules={{
                required: true,
              }}
              render={({ field }) => <InputText {...field} id="email" />}
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="font-bold">Password</label>
            <Controller
              control={methods.control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Password
                  feedback={false}
                  {...field}
                  pt={{
                    input: { className: "w-full" },
                  }}
                  inputId="password"
                />
              )}
              name="password"
            />
          </div>

          <Button label="Login" type="submit" />
        </form>
        
        <div className="flex justify-center w-full pt-4">
            <Button
            label="or register new account"
            link
            onClick={()=>navigate('/auth/register')}

            />
        </div>
      </Card>
    </div>
  );
}
