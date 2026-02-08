import { Spinner } from "@/components/internal/spinner";

const loading = () => {
  return (
    <div className="min-h-[80vh] w-full flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default loading;
