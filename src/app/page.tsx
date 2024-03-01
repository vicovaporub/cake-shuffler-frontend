import { AllCakes } from "@/Components/AllCakes/AllCakes";
import CakeForm from "@/Components/CakeForm/CakeForm";
import RandomCake from "@/Components/RandomCake/RandomCake";

export default function Home() {
  return (
    <div>
      <CakeForm />
      <RandomCake />
      <AllCakes />
    </div>
  );
}
