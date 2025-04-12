"use client";

import { Product } from "@prisma/client";
import { useMemo, useState } from "react";
import ProductCard from "./product-card";
import { Input } from "./ui/input";

interface ProductListProps {
  data: Product[];
}

export default function ProductList ({
  data,
} : ProductListProps) {

  const [ searchQuery, setSearchQuery ] = useState<string>("");

  const selectedItems = useMemo(() => {
    if (searchQuery.trim() !== "") {
      return data.filter(item => (item.name + " " + item.tagline + " " + item.desc).toLowerCase().includes(searchQuery.toLowerCase()));
    } else {
      return data;
    }
  }, [data, searchQuery]);

  return (
    <section className="container grid items-center gap-6 pb-16">
      <Input 
        value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
        type="text" placeholder="Type to search..." className="w-full" 
      />
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {selectedItems.map(item => (
          <li key={item.id} className="w-full h-full">
            <ProductCard data={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}