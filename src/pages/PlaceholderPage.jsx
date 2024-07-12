import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PlaceholderPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Placeholder Page</h1>
      <p className="text-xl mb-8">This is a placeholder page. Customize it as you wish.</p>
      <Button onClick={() => navigate("/")}>Back to Home</Button>
    </div>
  );
};

export default PlaceholderPage;