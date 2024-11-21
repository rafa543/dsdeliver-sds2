import "./styles.css";
import { toast } from "react-toastify";
import StepsHeader from "./StepsHeader";
import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";
import { OrderLocationdata, Product } from "./types";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
// import { fetchProducts, saveOrder } from "../api";
import Footer from "../Footer";
import { checkIsSelected, formatPrice } from "./helpers";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  useEffect(() => {
    const produtos = [
      {
        id: 6,
        name: "Macarrão Espaguete",
        price: 35.9,
        description:
          "Macarrão fresco espaguete com molho especial e tempero da casa.",
        imageUri:
          "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/macarrao_espaguete.jpg",
      },
      {
        id: 7,
        name: "Macarrão Fusili",
        price: 38.0,
        description: "Macarrão fusili com toque do chef e especiarias.",
        imageUri:
          "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/macarrao_fusili.jpg",
      },
      {
        id: 8,
        name: "Macarrão Penne",
        price: 37.9,
        description: "Macarrão penne fresco ao dente com tempero especial.",
        imageUri:
          "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/macarrao_penne.jpg",
      },
      {
        id: 1,
        name: "Pizza Bacon",
        price: 49.9,
        description:
          "Pizza de bacon com mussarela, orégano, molho especial e tempero da casa.",
        imageUri:
          "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/pizza_bacon.jpg",
      },
      {
        id: 2,
        name: "Pizza Moda da Casa",
        price: 59.9,
        description:
          "Pizza à moda da casa, com molho especial e todos ingredientes básicos, e queijo à sua escolha.",
        imageUri:
          "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/pizza_moda.jpg",
      },
      {
        id: 3,
        name: "Pizza Portuguesa",
        price: 45.0,
        description:
          "Pizza Portuguesa com molho especial, mussarela, presunto, ovos e especiarias.",
        imageUri:
          "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/pizza_portuguesa.jpg",
      },
      {
        id: 4,
        name: "Risoto de Carne",
        price: 52.0,
        description:
          "Risoto de carne com especiarias e um delicioso molho de acompanhamento.",
        imageUri:
          "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/risoto_carne.jpg",
      },
      {
        id: 5,
        name: "Risoto Funghi",
        price: 59.95,
        description:
          "Risoto Funghi feito com ingredientes finos e o toque especial do chef.",
        imageUri:
          "https://raw.githubusercontent.com/devsuperior/sds2/master/assets/risoto_funghi.jpg",
      },
    ];
    setProducts(produtos);
    // fetchProducts()
    //   .then((response) => setProducts(response.data))
    //   .catch((error) => {
    //     toast.error("Error a listar produtos");
    //   });
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  const handleSubmit = () => {
    // const productsIds = selectedProducts.map(({ id }) => ({ id }));
    // const payload = {
    //   ...orderLocation!,
    //   products: productsIds,
    // };

    if (selectedProducts.length <= 0) {
      return toast.warning("Selecione um produto!");
    }

    if (orderLocation?.address === undefined) {
      return toast.warning("Selecione o local de entrega!");
    }

    // saveOrder(payload)
    //   .then((response) => {
    //     toast.success(`Pedido enviado com sucesso! Nº ${response.data.id}`);
    //     setSelectedProducts([]);
    //   })
    //   .catch(() => {
    //     toast.warning("Erro ao enviar pedido");
    //   });
    toast.success(
      `Pedido enviado com sucesso! No valor de ${formatPrice(
        totalPrice
      )} para ${orderLocation?.address}`
    );
    setSelectedProducts([]);
  };

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductsList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          onChangeLocation={(location) => setOrderLocation(location)}
        />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </>
  );
}

export default Orders;
