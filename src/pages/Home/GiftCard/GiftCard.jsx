import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const GiftCard = () => {
  const [activeTab, setActiveTab] = useState("buy");
  return (
    <div className="mb-12">
      <SectionTitle
        title="Gift Card"
        subTitle="Meal Master Gift Card and Redeem Gift Card"
      />
      <div>
        <h2 className="text-3xl lg:text-5xl font-bold leading-loose"></h2>

        <div className="text-slate-800 ">
          <div className="max-w-3xl mx-auto py-12">
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setActiveTab("buy")}
                className={`px-4 py-2 mx-2 rounded-t-lg font-semibold ${
                  activeTab === "buy"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-black"
                }`}>
                Buy Gift Cards
              </button>
              <button
                onClick={() => setActiveTab("redeem")}
                className={`px-4 py-2 mx-2 rounded-t-lg font-semibold ${
                  activeTab === "redeem"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-black"
                }`}>
                Redeem Gift Cards
              </button>
            </div>
            <div className="bg-white p-6 rounded-b-lg shadow-lg">
              {activeTab === "buy" && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Buy Gift Cards
                  </h3>
                  <h4 className="mt-5">Gift card amount $25.00 - $250.00</h4>
                  <p className="mb-4">
                    Purchase a gift card for your loved ones. Choose from
                    various designs and amounts to suit any occasion.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="amount">
                        Amount
                      </label>
                      <input
                        type="number"
                        min="25"
                        max="250"
                        id="amount"
                        className="w-full px-4 py-2 border rounded-lg bg-white"
                        placeholder="Enter amount"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="recipient">
                        Recipient's Email
                      </label>
                      <input
                        type="email"
                        id="recipient"
                        className="w-full px-4 py-2 border rounded-lg bg-white"
                        placeholder="Enter recipient's email"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full px-4 py-2 border rounded-lg bg-white"
                        placeholder="Enter a message"
                        rows="4"></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition duration-200">
                      Buy Now
                    </button>
                  </form>
                </div>
              )}
              {activeTab === "redeem" && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Redeem Gift Cards
                  </h3>

                  <p className="mb-4">
                    Redeem your gift card by entering the code below. Enjoy your
                    gift!
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="code">
                        Gift Card Code
                      </label>
                      <input
                        type="text"
                        id="code"
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="Enter gift card code"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition duration-200">
                      Redeem Now
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="flex gap-3 text-xl text-slate-800 dark:text-slate-300">
          <p>
            SKU: <span className="text-orange-400">N/A</span>
          </p>
          <p>
            Category: <span className="text-orange-400">Uncategorized</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
