import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import getProduct from "../../apis/product/getProduct";
import usePagination from "../../custom-hooks/usePagination";

const ProductList = () => {
  const [productsData, setProductsData] = useState([]);
  const { currentPage, handlePageChange, PaginatedList } = usePagination(10);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const fetchData = async () => {
        const res = await getProduct();
        console.log(res);
        if (res?.status) {
          setProductsData(res?.data);
        }
      };
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
      {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4"> */}
        {/* <ProductItem products={productsData} /> */}
        {productsData.length > 0 && <PaginatedList items={productsData} />}
      {/* </div> */}
    </div>
  );
};

export default ProductList;
