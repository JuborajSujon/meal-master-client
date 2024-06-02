import PropTypes from "prop-types";

export default function SectionTitle({ title, subTitle }) {
  return (
    <div className="px-4 space-y-3">
      <div className="flex">
        <h3 className="text-lg font-medium text-orange-600 bg-orange-200 px-6 py-1.5 rounded-full">
          {title}
        </h3>
      </div>
      <h3 className="text-2xl font-medium text-slate-900 dark:text-slate-300 ">
        {subTitle}
      </h3>
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
