import { useForm } from "react-hook-form";

const Email = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset, // Add the reset function from react-hook-form
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset(); // Clear form input values after submission
  };

  console.log(watch("example"));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-y-3"
    >
      <input
        {...register("name", { required: true, maxLength: 20 })}
        className="px-4 py-3 border rounded-lg"
        placeholder="Name"
      />
      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
        className="px-4 py-3 border rounded-lg"
        placeholder="Email"
      />
      <input
        {...register("subject")}
        className="px-4 py-3 border rounded-lg"
        placeholder="Subject"
      />
      <textarea
        {...register("message")}
        className="px-4 py-3 border rounded-lg"
        placeholder="Message"
        rows={4}
      />

      <input
        type="submit"
        className="py-3 cursor-pointer text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-pink-700 border border-transparent rounded-lg hover:from-indigo-600"
        value="Submit"
      />
    </form>
  );
};

export default Email;
