import { dataKey } from "../config";
import apiFetch from "./api-fetch";
import { useEffect, useState } from "react";

export async function getProducts() {
  const data = await apiFetch("/products");
  localStorage.setItem(dataKey, JSON.stringify(data));

  console.log(data);
  return data;
}

export async function showProduct(id) {
  const data = await apiFetch(`/products/${id}`);

  console.log(data);
  return data;
}

export async function createProduct(newProduct) {
  const data = await apiFetch("/products", { body: newProduct });
  console.log(data);

  return data;
}

export async function updateProduct(id, body) {
  const data = await apiFetch(`/products/${id}`, { method: "PATCH", body });

  console.log(await data);
}

export async function deleteProduct(id) {
  const data = await apiFetch(`/products/${id}`, { method: "DELETE" });

  console.log(data);

  return data;
}
