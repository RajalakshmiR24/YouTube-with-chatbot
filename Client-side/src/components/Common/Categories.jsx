import PropTypes from 'prop-types';
import { categories, tailwindStyles } from '../../utils/constants';

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex overflow-x-auto gap-1">
      {categories.map(category => (
        <button
          key={category.name}
          className={`flex items-center justify-center px-4 rounded-md border border-gray-400 
            ${category.name === selectedCategory ? 
              'bg-red-200 text-red-700 border-red-700' : 
              'bg-white text-gray-400 hover:bg-red-200 hover:text-red-700 hover:border-red-700'
            } ${tailwindStyles[category.style]}`}
          onClick={() => setSelectedCategory(category.name)}
        >
          <i className={`${category.icon} text-xl`} />
          <span className={`text-sm font-medium ${category.name === selectedCategory ? 'text-red-700' : 'text-gray-400'}`}>
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

Categories.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default Categories;
