const peticion = async () => {
  setTimeout(() => {
    const datos = {
      id: 3,
      name: "Armando Calderon",
      username: "Monica",
      email: "saul@gmail.com",
    };

    console.log(datos);
  }, 1000);
};

peticion().then(console.log);
