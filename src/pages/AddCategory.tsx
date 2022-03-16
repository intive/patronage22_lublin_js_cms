import React from 'react';
import CategoryForm from '../components/CategoryForm';
import addCategory from '../components/lib/addCategory';


const AddCategory: React.FC = () => {
 
  return (
    <section>
      <CategoryForm addCategory={addCategory}/>
    </section>
  );
};

export default AddCategory;