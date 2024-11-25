import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useMemo, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab";
import Loading from "../../../components/Loading/Loading";

function TabMealCategory() {
  const [tabIndex, setTabIndex] = useState(0);

  let borderColor = "";

  if (tabIndex === 0) {
    borderColor = "border-red-500 ";
  } else if (tabIndex === 1) {
    borderColor = "border-red-500 ";
  } else if (tabIndex === 2) {
    borderColor = "border-red-500 ";
  } else if (tabIndex === 3) {
    borderColor = "border-red-500 ";
  }

  const [menu, loading] = useMenu();

  // Filter by category
  const breakfastMeals = useMemo(
    () => menu.filter((meal) => meal.meal_category === "Breakfast").slice(0, 6),
    [menu]
  );
  const lunchMeals = useMemo(
    () => menu.filter((meal) => meal.meal_category === "Lunch").slice(0, 6),
    [menu]
  );
  const dinnerMeals = useMemo(
    () => menu.filter((meal) => meal.meal_category === "Dinner").slice(0, 6),
    [menu]
  );
  const allMeals = useMemo(() => menu, [menu]);

  return (
    <div className="py-16">
      <div>
        <SectionTitle title="Menu" subTitle="Special Meals for you" />
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div>
          <Tabs
            className={`max-w-full mx-auto`}
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}>
            <TabList className="text-xs sm:text-lg font-semibold flex justify-center items-center gap-1 sm:gap-4 pt-6 pb-16">
              <Tab
                className={`border-b-[6px] text-slate-800 dark:text-slate-400 rounded-b-lg px-1 sm:px-2 py-1.5 focus-visible:outline-none ${borderColor}`}>
                Breakfast
              </Tab>
              <Tab
                className={`border-b-[6px] text-slate-800 dark:text-slate-400 rounded-b-lg px-1 sm:px-2 py-1.5 focus-visible:outline-none ${borderColor}`}>
                Lunch
              </Tab>
              <Tab
                className={`border-b-[6px] text-slate-800 dark:text-slate-400 rounded-b-lg px-1 sm:px-2 py-1.5 focus-visible:outline-none ${borderColor}`}>
                Dinner
              </Tab>
              <Tab
                className={`border-b-[6px] text-slate-800 dark:text-slate-400 rounded-b-lg px-1 sm:px-2 py-1.5 focus-visible:outline-none ${borderColor}`}>
                All Meals
              </Tab>
            </TabList>
            <TabPanel>
              <OrderTab menuItems={breakfastMeals} />
            </TabPanel>
            <TabPanel>
              <OrderTab menuItems={lunchMeals} />
            </TabPanel>
            <TabPanel>
              <OrderTab menuItems={dinnerMeals} />
            </TabPanel>
            <TabPanel>
              <OrderTab menuItems={allMeals} />
            </TabPanel>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default TabMealCategory;
