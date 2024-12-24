const Card = ({ title, total }) => {
  return (
    <div
      className="w-full h-28 rounded-lg bg-cover bg-center hidden lg:block content-center px-10 text-left mx-3"
      style={{
        backgroundImage: "url('/images/background/background-card.jpg')",
      }}
    >
      <h2 className="text-sm font-thin">{title}</h2>
      <p className="text-xl">{total}</p>
    </div>
  );
};

export default Card;
