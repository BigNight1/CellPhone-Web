import React from "react";

const Servicios = () => {
  const Reparaciones = [
    {
      id: 1,
      reparacion: "reparación de pantalla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iurelaboriosam temporibus consequuntur animi ut, accusantium aliquidvoluptas cupiditate suscipit? Quam vero perferendis quisquam magniquis dicta, temporibus illo ducimus sapiente.",
    },
    {
      id: 2,
      reparacion: "reparación de pantalla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iurelaboriosam temporibus consequuntur animi ut, accusantium aliquidvoluptas cupiditate suscipit? Quam vero perferendis quisquam magniquis dicta, temporibus illo ducimus sapiente.",
    },
    {
      id: 3,
      reparacion: "reparación de pantalla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iurelaboriosam temporibus consequuntur animi ut, accusantium aliquidvoluptas cupiditate suscipit? Quam vero perferendis quisquam magniquis dicta, temporibus illo ducimus sapiente.",
    },
    {
      id: 4,
      reparacion: "reparación de pantalla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iurelaboriosam temporibus consequuntur animi ut, accusantium aliquidvoluptas cupiditate suscipit? Quam vero perferendis quisquam magniquis dicta, temporibus illo ducimus sapiente.",
    },
    {
      id: 5,
      reparacion: "reparación de pantalla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iurelaboriosam temporibus consequuntur animi ut, accusantium aliquidvoluptas cupiditate suscipit? Quam vero perferendis quisquam magniquis dicta, temporibus illo ducimus sapiente.",
    },
    {
      id: 6,
      reparacion: "reparación de pantalla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iurelaboriosam temporibus consequuntur animi ut, accusantium aliquidvoluptas cupiditate suscipit? Quam vero perferendis quisquam magniquis dicta, temporibus illo ducimus sapiente.",
    },
    {
      id: 7,
      reparacion: "reparación de pantalla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iurelaboriosam temporibus consequuntur animi ut, accusantium aliquidvoluptas cupiditate suscipit? Quam vero perferendis quisquam magniquis dicta, temporibus illo ducimus sapiente.",
    },
    {
      id: 8,
      reparacion: "reparación de pantalla",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iurelaboriosam temporibus consequuntur animi ut, accusantium aliquidvoluptas cupiditate suscipit? Quam vero perferendis quisquam magniquis dicta, temporibus illo ducimus sapiente.",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 justify-items-center	lg:grid-cols-3 lg:max-w-[1500px] lg:mx-auto">
      {Reparaciones.map((rep) => (
        <div key={rep.id} className="max-w-[330px] p-3 mx-4 border-[5px] rounded">
          <h1 className="font-semibold text-3xl uppercase">
            {rep.reparacion}
          </h1>
          <p className="text-lg">
            {rep.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Servicios;

