import { AllProducts } from "../../components/component/organisms/ListProduct";

const Categories = () => {
  return (
    <>
      <div className="container mx-auto pb-10">
        <AllProducts category={true} />
      </div>
    </>
  );
};
export default Categories;
