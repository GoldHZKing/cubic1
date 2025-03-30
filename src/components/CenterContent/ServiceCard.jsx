function ServiceCard(probs) {
  const { name, desc, icon, bgColor, color } = probs.data;

  return (
    <div className="h-72 w-64    rounded-lg p-8 border hover:border-none hover:shadow-2xl cursor-pointer duration-300 ">
      <div
        className={
          " p-2 w-12 h-12 flex justify-center items-center rounded-full " +
          `${bgColor}`
        }
      >
        <div className={" text-3xl " + `${color}`}>{icon}</div>
      </div>

      <p className={"text-2xl font-bold"}>{name}</p>
      <p className={"text-slate-600 py-3"}>{desc}</p>
    </div>
  );
}
export default ServiceCard;
