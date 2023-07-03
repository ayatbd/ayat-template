import { useForm } from "react-hook-form";

const Email = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <input
        {...register("name", { required: true, maxLength: 20 })}
        className="w-full px-4 py-2 mb-4 border rounded-lg"
        placeholder="Name"
      />
      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
        className="w-full px-4 py-2 mb-4 border rounded-lg"
        placeholder="Email"
      />
      <input
        {...register("subject")}
        className="w-full px-4 py-2 mb-4 border rounded-lg"
        placeholder="Subject"
      />
      <textarea
        {...register("message")}
        className="w-full px-4 py-2 mb-4 border rounded-lg"
        placeholder="Message"
        rows={4}
      />

      <input
        type="submit"
        className="w-full btn px-4 py-2 mt-4 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border border-transparent rounded-lg hover:bg-blue-600"
        value="Submit"
      />
    </form>
  );
};

export default Email;
