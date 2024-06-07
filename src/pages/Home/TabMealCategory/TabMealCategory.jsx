import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

function TabMealCategory() {
  const [menu, loading, refetch] = useMenu();

  return (
    <div className="py-16">
      <div>
        <SectionTitle title="Menu" subTitle="Special Meals for you" />
      </div>
    </div>
  );
}

export default TabMealCategory;
