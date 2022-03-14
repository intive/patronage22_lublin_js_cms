import React from 'react';
import CategoryForm from '../components/CategoryForm/index';
import addCategory from '../components/lib/addCategory';

const AddCategoryForm: React.FC = () => {
 
  return (
    <section>
      <CategoryForm addCategory={addCategory}/>
    </section>
  );
};

export default AddCategoryForm;
