import React from "react";
import StarRating from "./StarRating";

const ProductItem = ({ products }) => {
  return (
    <>
      {/* {products?.map((product) => ( */}
        <div
          key={products.id}
          className="group relative bg-red border-2 border-gray-100 border-solid rounded-xl p-2 overflow-hidden"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 group-hover:scale-125 duration-300 lg:h-80">
            <img
              src={products.image}
              alt={products.title}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <hr class="flex mx-auto mt-8 mb-2 h-px w-[90%] bg-gray-200 border-0 dark:bg-gray-200" />
          <div className="text-sm capitalize text-gray-500 mb-1">{products?.category}</div>
          <div className="mt-1 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={products?.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {products.title}
                </a>
              </h3>
            </div>
            <p className="text-base font-bold text-gray-900">{products.price}</p>
          </div>
          <div class="flex justify-between items-center pt-2 pb-1">
            <StarRating rating={products.rating.rate} />
            <div className="flex justify-center items-center">
              <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                {products.rating.rate}
              </p>
              <p class="ms-1 mx-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                out of
              </p>
              <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                5
              </p>
            </div>
          </div>
        </div>
      {/* ))} */}
    </>
  );
};

export default ProductItem;
